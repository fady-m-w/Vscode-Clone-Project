import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
  activeTabId: string | null;
  filename: string;
  filecontent: string | undefined;
}

interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId:null,
    filename: "",
    filecontent: "",
  },
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
  },
});

export const { setOpenedFiles, setClickedFile } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
