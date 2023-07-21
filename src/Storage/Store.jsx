import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./Reducers/Content";
import listElements from "./Reducers/ListElements";
import projectsReducer from "./Reducers/Projects";
import settingsSlice from "./Reducers/Settings";

export default configureStore({
  reducer: {
    projects: projectsReducer,
    listElements: listElements,
    settings: settingsSlice,
    content: contentSlice,
  },
});
