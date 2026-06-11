import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
  filename: string;
  filecontent: string | undefined;
}

interface IInitialState {
  activeTabId: string | null;
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  activeTabId: null,
  openedFiles: [],
  clickedFile: {
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
    setActiveTabId: (state, action: PayloadAction<string>) => {
      state.activeTabId = action.payload;
    },
  },
});

export const { setOpenedFiles, setClickedFile, setActiveTabId } =
  fileTreeSlice.actions;

export default fileTreeSlice.reducer;
