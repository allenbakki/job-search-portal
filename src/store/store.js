import { createSlice, configureStore } from "@reduxjs/toolkit";

//createSlice for filters for job search..
const filters = createSlice({
  name: "filter",
  initialState: {
    roles: [],
    mode: [],
    location: "",
    techStack: [],
    experience: undefined,
    minBasePay: "",
    companyName: "",
  },
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setMinBasePay: (state, action) => {
      state.minBasePay = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    setTechStack: (state, action) => {
      state.techStack = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const {
  setRoles,
  setMinBasePay,
  setMode,
  setCompanyName,
  setLocation,
  setExperience,
  setTechStack,
} = filters.actions;

//store to fetch states and dispatch the actions
export const store = configureStore({
  reducer: filters.reducer,
});

export const filterActions = filters.actions;
