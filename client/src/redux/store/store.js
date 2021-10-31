import {configureStore} from '@reduxjs/toolkit';
import weatherReducer from '../slices/weatherSlices'


export default configureStore({
    reducer: weatherReducer,
})
