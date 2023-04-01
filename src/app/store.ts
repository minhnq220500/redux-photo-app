import { configureStore } from '@reduxjs/toolkit'
import photoReducer from 'features/Photo/photoSlice'

const rootReducer={
    photos:photoReducer
}

const store=configureStore({
    reducer:rootReducer
})

export default store;

//behind the scene: thì nó sẽ tự set up redux thunk và redux dev tool
