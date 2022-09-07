import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const APIKey = "k_2gbajiv1";

export const fetchMovieById = createAsyncThunk(
    "movies/fetchMovieById",
    async (id) => {
        const data = await fetch(
            `https://imdb-api.com/en/API/Title/${APIKey}/${id}/Images,Trailer`
        ).then((res) => res.json());

        return data;
    }
);

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movie: {},
        loading: true,
    },
    reducers: {},
    extraReducers: {
        [fetchMovieById.pending](state) {
            state.loading = true;
        },
        [fetchMovieById.fulfilled](state, {payload}) {
            state.loading = false;
            state.movie = payload;
        },
    },
});

export const getMovie = (state) => state.movie.movie;
export const getLoading = (state) => state.movie.loading;
export const {setMovie} = movieSlice.actions;
export default movieSlice.reducer;
