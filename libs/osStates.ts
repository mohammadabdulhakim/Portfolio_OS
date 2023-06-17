import { create as add } from "zustand";
import { osBgSrcs } from "../constants/index";

interface OpenedProgram {
  soon: boolean;
  icon: string | null;
  content?: JSX.Element;
  minimized: boolean;
  name: string;
}

type osStoreType = {
  bgSrc: string;
  setBgSrc: (bgSrc: string) => void;
  startMenu: boolean;
  setStartMenu: () => void;
  openedPrograms: OpenedProgram[];
  setOpenedPrograms: (openedPrograms: OpenedProgram[]) => void;
  programActiveIndex: number;
  setProgramActiveIndex: (index: number) => void;
  isClicked: string;
  setIsClicked: (clicked: string) => void;
  closeAllClicked: () => void;
  iconSize: number;
  setIconSize: (iconSize: number) => void;
};

const useOsStore = add<osStoreType>()((set) => ({
  bgSrc: osBgSrcs[0],
  setBgSrc: (bgSrc) => set({ bgSrc }),
  startMenu: false,
  setStartMenu: () => set((state) => ({ startMenu: !state.startMenu })),
  openedPrograms: [],
  setOpenedPrograms: (openedPrograms) => set({ openedPrograms }),
  programActiveIndex: 0,
  setProgramActiveIndex: (index) => set({ programActiveIndex: index }),
  isClicked: "",
  setIsClicked: (clicked) => set({ isClicked: clicked }),
  closeAllClicked: () => set({ isClicked: "" }),
  iconSize: 30,
  setIconSize: (iconSize) => set({ iconSize }),
}));

export { useOsStore };
