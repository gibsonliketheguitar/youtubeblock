import { YoutubeSelectList } from "@ts/interface/ytSelectList";
import { atom } from "jotai";

//TODO fix types
export const currYtListAtom = atom<any>({});
export const globalAlertAtom = atom<String>('');
export const mySelectionAtom = atom<any>([]);
export const darkModeAtom = atom<Boolean>(true);
export const isMobileAtom = atom<Boolean>(true);
