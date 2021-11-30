import { currYtListAtom } from "@store/atom";
import { useAtom } from "jotai";

export default function useCurrYtList() {
    const [currYtList, setCurrYtList] = useAtom(currYtListAtom)
    return { currYtList, setCurrYtList }
}