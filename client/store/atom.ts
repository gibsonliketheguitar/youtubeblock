import { atom } from "jotai";

//TODO fix types
export const accessTokenAtom = atom<String>('')
export const currYtListAtom = atom<any>({});
export const globalAlertAtom = atom<String>('');
export const mySelectionAtom = atom<any>([]);
export const darkModeAtom = atom<Boolean>(true);
