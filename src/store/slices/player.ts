import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "..";
import { api } from "../../lib/axios";

interface Course {
  id: number;
  modules: Array<{
    id: number;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      duration: string;
    }>;
  }>;
}

export interface PlayerState {
  course: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
  isLoading: boolean;
}

const initialState: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading : true
};


export const loadCourse = createAsyncThunk("player/load", async () => {
  const response = await api.get("courses/1");
  return response.data;
});
export const playerSLice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },
    next: (state) => {
      const NextLessonindex = state.currentLessonIndex + 1;
      const nextLesson =
        state.course?.modules[state.currentModuleIndex].lessons[
          NextLessonindex
        ];

      if (nextLesson) {
        state.currentLessonIndex = NextLessonindex;
      } else {
        const NextModuleindex = state.currentModuleIndex + 1;
        const nextModule = state.course?.modules[NextModuleindex];

        if (nextModule) {
          state.currentModuleIndex = NextModuleindex;
          state.currentLessonIndex = 0;
        }
      }
    },
   
  },
  extraReducers(builder) {
    builder.addCase(loadCourse.pending, (state) => {
      state.isLoading = true
    });
    
    builder.addCase(loadCourse.fulfilled, (state, action) => {
      state.isLoading = false
      state.course = action.payload;
      
    });
   
  },
});

export const player = playerSLice.reducer;

export const { play, next } = playerSLice.actions;

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentModule = state.player.course?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];

    return { currentLesson, currentModule };
  });
};
