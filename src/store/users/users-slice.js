import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: "",
};

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  try {
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(usersUrl);
    return response.json();
  } catch (err) {
    console.error(err);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.error = "Unable to fetch users.";
      state.isLoading = false;
    });
  },
});

export const userReducer = userSlice.reducer;
