import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

interface Course {
id :number,
modules: Array<{
  id: number,
  title: string,
  lessons: Array<{
    id: string,
    title: string,
    duration: string,
  }>
}>
}

export interface PlayerState {
  course: Course | null
  currentModuleIndex: number,
  currentLessonIndex: number,
}

const initialState : PlayerState ={
  
    course: null,
    currentModuleIndex: 0,
    currentLessonIndex : 0,
  
}
export const playerSLice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state, action :  PayloadAction<[number, number]>) => {
        state.currentModuleIndex = action.payload[0]
        state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
          const NextLessonindex  = state.currentLessonIndex + 1
          const nextLesson = state.course?.modules[state.currentModuleIndex].lessons[NextLessonindex]

          if(nextLesson){
            state.currentLessonIndex = NextLessonindex
          } 
          else{
            const NextModuleindex  = state.currentModuleIndex + 1
            const nextModule = state.course?.modules[NextModuleindex]

            if(nextModule){
              state.currentModuleIndex = NextModuleindex 
              state.currentLessonIndex = 0
            } 
          }
          
    },
    start: (state, action : PayloadAction<Course>) => {
        state.course = action.payload
    }
  },
});


export const player = playerSLice.reducer

export const {play, next, start} = playerSLice.actions

export const useCurrentLesson = () => {
  return  useAppSelector((state) => {
      const { currentModuleIndex, currentLessonIndex } = state.player;
  
      const currentModule = state.player.course?.modules[currentModuleIndex];
      const currentLesson = currentModule?.lessons[currentLessonIndex];
  
      return { currentLesson, currentModule };
    });
  
}