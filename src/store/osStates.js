import {create as add} from 'zustand';


const useOsStore = add((set) => ({
  bgSrc: "",
  setBgSrc: (bgSrc) => set({bgSrc}),
  startMenu: false,
  setStartMenu: () => set((state)=> ({startMenu: !state.startMenu})),
  openedPrograms: [],
  setOpenedPrograms: (openedPrograms) => set({openedPrograms}),
  programActiveIndex: 0,
  setProgramActiveIndex: (index) => set({programActiveIndex:index})
}));

export {
  useOsStore,
};