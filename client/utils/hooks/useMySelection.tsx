import { useAtom } from "jotai"
import { mySelectionAtom } from "@store/atom"
import isArrEmpty from "@utils/isArrEmpty"
import MySelection from "@ts/interface/mySelection"

export default function useMySelection() {
    const [mySelectionList, setMySelectionList] = useAtom(mySelectionAtom)

    function select(data: MySelection) {
        setMySelectionList((items: any) => isArrEmpty(items) ? ([data]) : ([...items, data]))
    }

    function remove(channelId: string) {
        setMySelectionList((items: any) => items.filter((item: any) => item.channelId !== channelId))
    }

    function reset() {
        setMySelectionList([])
    }

    return {
        mySelectionList,
        remove,
        reset,
        select,
    }
}

