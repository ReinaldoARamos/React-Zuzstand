import {configureStore, createSlice}  from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'Reinaldo',
    initialState : ['fazer café', 'jogar overlixo'],
    reducers: {}
})

export const store = configureStore({
    reducer: {
        todo  : todoSlice.reducer
    }
})