import MySelection from "@ts/interface/mySelection";
import isArrNotEmpty from '@utils/isArrNotEmpty';

export default function isSelectedFrom(channelId: string, arr: Array<MySelection>): Boolean {
    const selected = arr.filter((item: MySelection) => {
        return item.channelId === channelId && item.selected === true
    })
    return isArrNotEmpty(selected)
}