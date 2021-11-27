import { atom } from "jotai";

export const globalAlertAtom = atom<String>('');
export const subscriptionAtom = atom([]);
export const darkModeAtom = atom<Boolean>(true);
export const isMobileAtom = atom<Boolean>(true);
