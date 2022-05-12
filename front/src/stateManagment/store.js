import { configureStore } from '@reduxjs/toolkit'
import BoardReducer from './BoardReducer'

export default configureStore({
    reducer: {
        board: BoardReducer
    },
})


