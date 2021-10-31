import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: false,
    weather: []
}


export const getWeatherAsync = createAsyncThunk(
  "weather/getWeatherAsync",
  async (payload ) => {
    try {
      const { data } = await axios.get(`http://localhost:4000/weather?zip=${payload.zip}`);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return isRejectedWithValue(error?.response?.data);
    }
  }
);

const weatherSlice = createSlice({
    name: "weatherData",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => { 
        builder.addCase(getWeatherAsync.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(getWeatherAsync.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        
        builder.addCase(getWeatherAsync.rejected, (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;
        });
    }
})

export default weatherSlice.reducer;