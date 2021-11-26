import { atom } from "jotai";

export const globalAlertAtom = atom<String>('');
export const darkModeAtom = atom<Boolean>(true);
export const isMobileAtom = atom<Boolean>(true);
