import { YoutubeSelectList } from "@ts/interface/ytSelectList";
import { atom } from "jotai";

export const globalAlertAtom = atom<String>('');
export const currYtListAtom = atom<any>({});
export const darkModeAtom = atom<Boolean>(true);
export const isMobileAtom = atom<Boolean>(true);
