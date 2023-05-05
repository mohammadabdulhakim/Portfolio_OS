import {create as add} from 'zustand';

type osStoreType = {
bgSrc : string,
setBgSrc:(bgSrc: string)=>void,
startMenu:boolean,
setStartMenu:()=>void,
openedPrograms:[],
setOpenedPrograms: (openedPrograms:[])=>void,
programActiveIndex:number,
setProgramActiveIndex: (index:number)=>void,
isClicked:string,
setIsClicked: (clicked:string)=>void,
closeAllClicked: () => void,
iconSize:string,
setIconSize: (iconSize:string)=>void,
}

const useOsStore = add<osStoreType>()((set) => ({
  bgSrc: "",
  setBgSrc: (bgSrc) => set({bgSrc}),
  startMenu: false,
  setStartMenu: () => set((state)=> ({startMenu: !state.startMenu})),
  openedPrograms: [],
  setOpenedPrograms: (openedPrograms) => set({openedPrograms}),
  programActiveIndex: 0,
  setProgramActiveIndex: (index) => set({programActiveIndex:index}),
  isClicked: "",
  setIsClicked: (clicked) => set({isClicked:clicked}),
  closeAllClicked: () => set({isClicked:""}),
  iconSize: "70px",
  setIconSize: (iconSize)=> set({iconSize})
}));

export {
  useOsStore,
};