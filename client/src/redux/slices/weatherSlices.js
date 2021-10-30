import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios"


export const getWeatherAsync = createAsyncThunk("weather/getWeather", async () => {
    try {
        const { data } = await axios.get("http://localhost:4000/weather")
        return data;
    } catch (error) {
        if (!error?.response) {
            throw error
        }
        return rejectwithValue(error?.response?.data)
    }
});

const weatherSlice = createSlice({
    name: "weatherData",
    initialState: [],
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
