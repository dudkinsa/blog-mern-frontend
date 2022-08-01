import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from "../../axios.js";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const {data} = await axios.get('/posts');
    return data;
});

const initialState = {
    posts: {
        items: [],
        status: 'loading'
    },
    tags: {
        items: [],
        status: 'loading'
    },
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducer: {},
});

export const postsReducer = postSlice.reducer;