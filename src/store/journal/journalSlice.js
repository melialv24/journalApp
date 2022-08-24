import { TramOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    //active: null,
    active: {
      id: "123abc",
      title: "",
      body: "",
      date: 123123,
      imageUrls: [], // htt
    },
  },
  reducers: {
    addNewEmptyNote: (state, action /* action */) => {},
    setActiveNote: (state, action /* action */) => {},
    setNotes: (state, action /* action */) => {},
    setSaving: (state, action /* action */) => {},
    updateNote: (state, action /* action */) => {},
    deleteNoteById: (state, action /* action */) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment } = journalSlice.actions;
