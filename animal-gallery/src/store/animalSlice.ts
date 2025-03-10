import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Liste des apis
const ANIMAL_APIS = {
  DOG: "https://dog.ceo/api/breeds/image/random",
  CAT: "https://api.thecatapi.com/v1/images/search",
  FOX: "https://randomfox.ca/floof/",
  //DUCK: "https://random-d.uk/api/v2/random",
  //BIRD: "https://random-d.uk/api/v2/random"
};

const fetchWithRetry = async (url: string, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url);
      if (url === ANIMAL_APIS.DOG) return response.data.message;
      if (url === ANIMAL_APIS.CAT) return response.data[0].url;
      if (url === ANIMAL_APIS.FOX) return response.data.image;
     // if (url === ANIMAL_APIS.DUCK) return response.data.url;
     // if (url === ANIMAL_APIS.BIRD) return response.data.url;
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
    }
  }
};

export const fetchAnimalImage = createAsyncThunk(
  "animal/fetchImage",
  async (_, { rejectWithValue }) => {
    try {
      // Choisir une API au hasard
      const apis = Object.values(ANIMAL_APIS);
      const randomApi = apis[Math.floor(Math.random() * apis.length)];
      
      const imageUrl = await fetchWithRetry(randomApi);
      
      return {
        url: imageUrl,
        type: randomApi.includes("dog") ? "🐶 Chien" :
              randomApi.includes("cat") ? "🐱 Chat" : "🦊 Renard",
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      return rejectWithValue("Impossible de charger l'image. Veuillez réessayer. ❌");
    }
  }
);

const animalSlice = createSlice({
  name: "animal",
  initialState: { 
    imageUrl: null as string | null,
    animalType: null as string | null,
    timestamp: null as string | null,
    loading: false,
    error: null as string | null,
    history: [] as Array<{url: string, type: string, timestamp: string}>,
  },
  reducers: {
    clearHistory: (state) => {
      state.history = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimalImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimalImage.fulfilled, (state, action) => {
        state.loading = false;
        state.imageUrl = action.payload.url;
        state.animalType = action.payload.type;
        state.timestamp = action.payload.timestamp;
        state.history.unshift(action.payload);
      })
      .addCase(fetchAnimalImage.rejected, (state) => {
        state.loading = false;
        state.error = "Impossible de charger l'image ❌";
      });
  },
});


export const { clearHistory } = animalSlice.actions;
export default animalSlice.reducer;
