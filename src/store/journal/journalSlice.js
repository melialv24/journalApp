import { TramOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
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
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action /* action */) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action /* action */) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action /* action */) => {},
    updateNote: (state, action /* action */) => {},
    deleteNoteById: (state, action /* action */) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
