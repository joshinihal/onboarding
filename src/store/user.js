import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    userDetails:{
        fullName: "",
        displayName: "",
        workSpaceName: "",
        workSpaceUrl: "",
        plan: "",
    }
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    addFullName: (state, action) => {
      state.fullName = action.payload;
    },
    addDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    addWorkSpaceName: (state, action) => {
      state.workspaceName = action.payload;
    },
    addWorkSpaceUrl: (state, action) => {
      state.workspaceUrl = action.payload;
    },
    addPlan: (state, action) => {
      state.plan = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
