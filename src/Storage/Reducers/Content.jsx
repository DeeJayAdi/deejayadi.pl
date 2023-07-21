import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    aboutme: {
      label: {
        pl: "O mnie",
        en: "About Me",
      },
    },
    contact: {
      label: {
        pl: "Kontakt",
        en: "Contact",
      },
    },
    myworks: {
      label: {
        pl: "Moje prace",
        en: "My works",
      },
    },
    socialmedia: {
      label: {
        pl: "Media społecznościowe",
        en: "Social media",
      },
    },
  },
});

export default contentSlice.reducer;
