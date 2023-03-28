import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () => await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tid) => {
        await service.deleteTuit(tid)
        return tid;
})

export const  createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
            const newTuit = await service.createTuit(tuit)
            return newTuit;
    }
)

export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit',
    async(tuit) => {
        const response = await service.updateTuit(tuit);
        return response;

    }
)