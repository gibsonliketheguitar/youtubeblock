import { default as SelectIcon } from "@components/YoutuberSelectIcon"
import { default as FloatingButton } from '@components/YoutuberSelectFloatingButton'
import { NEXT, PREV } from "@utils/constants"
import useSubscriptionList from "@utils/hooks/useSubscriptionList"
import useThumbnailSize from "@utils/hooks/useThumbnailSize"
import isArrEmpty from "@utils/isArrEmpty"
import isStrEmpty from "@utils/isStringEmpty"
import useMySelection from "@utils/hooks/useMySelection"
import MySelection from "@ts/interface/mySelection"
import isArrNotEmpty from "@utils/isArrNotEmpty"

export default function YoutuberSelectList() {
    const { mySelectionList, remove, select } = useMySelection()
    const { currYtList } = useSubscriptionList()
    const { items, prevPageToken, nextPageToken } = currYtList
    let { size } = useThumbnailSize()

    function handleOnClick(channelId: string, data: MySelection) {
        if (isSelected(channelId, mySelectionList)) {
            remove(channelId)
        }
        else {
            select(data)
        }
    }

    function isSelected(channelId: string, arr: Array<MySelection>) {
        const selected = arr.filter((item: any) => {
            return item.channelId === channelId && item.selected === true
        })
        return (isArrNotEmpty(selected)) ? true : false
    }

    if (isArrEmpty(items)) return <></>
    return (
        <div className="flex flex-row flex-wrap justify-start">
            <FloatingButton type={PREV} disable={isStrEmpty(prevPageToken)} pageToken={prevPageToken} />
            <FloatingButton type={NEXT} disable={false} pageToken={nextPageToken} />
            <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10">
                {items.map((item: any, indx: number) => {
                    return (
                        <SelectIcon
                            key={indx}
                            handleOnClick={handleOnClick}
                            isSelected={isSelected}
                            thumbnailSize={size}
                            {...item.snippet}
                        />
                    )
                })}
            </div>
        </div>
    )
}