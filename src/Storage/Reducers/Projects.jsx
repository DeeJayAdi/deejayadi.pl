import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    list: [
      { label: "Anita Style", href: "https://anitastyle.pl" },
      { label: "MODZSŻŚ", href: "http://zegluga1.home.pl/orkiestra/pl/" },
    ],
  },
});

export default projectsSlice.reducer;
