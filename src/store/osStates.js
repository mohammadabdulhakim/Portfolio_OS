import {create as add} from 'zustand';

const useOsStore = add((set) => ({
  bgSrc: "",
  setBgSrc: (bgSrc) => set(() => ({ bgSrc: bgSrc })),
}));

export {
  useOsStore,
};