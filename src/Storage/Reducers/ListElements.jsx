import { createSlice } from "@reduxjs/toolkit";

export const listElements = createSlice({
  name: "listElements",
  initialState: [
    { label: { pl: "O mnie", en: "About Me" }, href: "aboutme" },
    { label: { pl: "Moje prace", en: "My works" }, href: "myworks" },
    { label: { pl: "Media społecznościowe", en: "Social media" }, href: "socialmedia" },
    { label: { pl: "Kontakt", en: "Contact" }, href: "contact" },
  ],
});

export default listElements.reducer;
