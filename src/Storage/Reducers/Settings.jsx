import { createSlice } from "@reduxjs/toolkit";

import germanFlag from "../../Assets/Images/Flags/german.png";
import polandFlag from "../../Assets/Images/Flags/poland.png";
import greatbritainFlag from "../../Assets/Images/Flags/greatbritain.png";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    activeLang: "pl",
    availableLangs: [
      {
        code: "pl",
        flag: polandFlag,
      },
      { code: "en", flag: greatbritainFlag },
    ],
  },
  reducers: {
    setLang: (state, action) => {
      state.activeLang = action.payload.toLocaleLowerCase();
    },
  },
});

export const { setLang } = settingsSlice.actions;
export default settingsSlice.reducer;
