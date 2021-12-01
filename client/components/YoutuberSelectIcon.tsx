import Image from 'next/image'
import { default as IconInterface } from "@ts/interface/ytSelectIcon";
import { LG, MD, SM } from '@utils/constants';
import useMySelection from '@utils/hooks/useMySelection';
import isArrNotEmpty from '@utils/isArrNotEmpty';
import { channel } from 'diagnostics_channel';
import MySelection from '@ts/interface/mySelection';
import isSelectedFrom from '@utils/isSelectedFrom';

export default function YoutuberSelectIcon({
    description,
    resourceId,
    title,
    thumbnails,
    thumbnailSize,
}: IconInterface) {
    const { mySelectionList, remove, select } = useMySelection() // see if use Memo helps reduce the rendering because right now this is declared on all Icons
    const initStyle = "opacity-0"
    const hoverStyle = "hover:opacity-100 hover:bg-gray-400 hover:bg-opacity-50"
    const normalStyle = `${initStyle} ${hoverStyle}`
    const selectedStyle = "opacity-100 bg-gray-400 bg-opacity-70"

    const urlTable: any = {
        [SM]: thumbnails.default.url,
        [MD]: thumbnails.medium.url,
        [LG]: thumbnails.high.url,
    }

    const channelId = resourceId.channelId
    const isSelected = isSelectedFrom(channelId, mySelectionList)

    function handleOnClick() {
        if (isSelected) {
            remove(channelId)
        }
        else {
            select({
                channelId,
                description,
                title,
                url: urlTable[SM],
                selected: true
            })
        }
    }

    return (
        <div className="relative w-24 h-24 bg-gray-200" onClick={() => handleOnClick()}>
            <Image
                src={urlTable[thumbnailSize]}
                alt={title + `youtube channel id: ${channelId} + description: ${description}`}
                width={100}
                height={100}
            />
            <div className={`absolute inset-0 ${isSelected ? selectedStyle : normalStyle}`}>
                <div className="flex items-center justify-center h-full text-sm text-bold text-center">
                    {title}
                </div>
            </div>
        </div>
    )
}