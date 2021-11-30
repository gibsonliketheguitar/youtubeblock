import { default as SelectIcon } from "@components/YoutuberSelectIcon"
import { default as FloatingButton } from '@components/YoutuberSelectFloatingButton'
import { YoutubeSelectList } from "@ts/interface/ytSelectList"
import { NEXT, PREV } from "@utils/constants"
import isArrEmpty from "@utils/isArrEmpty"
import isStrEmpty from "@utils/isStringEmpty"

export default function YoutuberSelectList({ items, prevPageToken, nextPageToken }: YoutubeSelectList) {
    if (isArrEmpty(items)) return <></>
    return (
        <div className="flex flex-row flex-wrap justify-start">
            <FloatingButton type={PREV} disable={isStrEmpty(prevPageToken)} pageToken={prevPageToken} />
            <FloatingButton type={NEXT} disable={false} pageToken={nextPageToken} />
            <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10">
                {items.map((item: any, indx: number) => {
                    return <SelectIcon key={indx} {...item.snippet} />
                })}
            </div>
        </div>
    )
}