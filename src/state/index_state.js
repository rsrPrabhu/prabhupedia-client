import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    use: null,
    token: null,
    posts: [],
    sideNav: "home",
}

export const authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("user friends non-existent :(");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post_id) {
                    return action.payload.post;
                }
            });
            state.posts = updatedPosts;
        },
        setNavigationData: (state, action) => {
            state.sideNav = action.payload;
        }
    }
});

export const {
    setMode,
    setLogin,
    setLogout,
    setFriends,
    setPosts,
    setPost,
    setNavigationData
} = authslice.actions;

export default authslice.reducer;