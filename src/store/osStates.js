import {create as add} from 'zustand';
import Vscode from '../components/os/programs/Vscode';

const useOsStore = add((set) => ({
  bgSrc: "",
  setBgSrc: (bgSrc) => set({bgSrc}),
  startMenu: false,
  setStartMenu: () => set((state)=> ({startMenu: !state.startMenu})),
  openedPrograms: [{content:Vscode,name:"VScode",minimized:false},{content:Vscode,name:"VScode 2",minimized:false}],
  setOpenedPrograms: (openedPrograms) => set({openedPrograms}),
  programActiveIndex: 0,
  setProgramActiveIndex: (index) => set({programActiveIndex:index})
}));

export {
  useOsStore,
};