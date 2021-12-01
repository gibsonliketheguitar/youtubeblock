import Image from 'next/image'
import { default as IconInterface } from "@ts/interface/ytSelectIcon";
import { LG, MD, SM } from '@utils/constants';
import useMySelection from '@utils/hooks/useMySelection';
import isArrNotEmpty from '@utils/isArrNotEmpty';
import MySelection from '@ts/interface/mySelection';
import { channel } from 'diagnostics_channel';

export default function YoutuberSelectIcon({
    description,
    handleOnClick,
    isSelected,
    resourceId,
    title,
    thumbnails,
    thumbnailSize,


}: IconInterface) {
    const { mySelectionList } = useMySelection()
    const initStyle = "opacity-0"
    const hoverStyle = "hover:opacity-100 hover:bg-gray-400 hover:bg-opacity-50"
    const normalStyle = `${initStyle} ${hoverStyle}`
    const selectedStyle = "opacity-100 bg-gray-400 bg-opacity-70"

    const urlTable: any = {
        [SM]: thumbnails.default.url,
        [MD]: thumbnails.medium.url,
        [LG]: thumbnails.high.url,
    }

    const data: MySelection = {
        channelId: resourceId.channelId,
        description,
        title,
        url: urlTable[SM],
        selected: true
    }

    const ytChannelId = resourceId.channelId

    return (
        <div className="relative w-24 h-24 bg-gray-200" onClick={() => handleOnClick(ytChannelId, data)}>
            <Image
                src={urlTable[thumbnailSize]}
                alt={title + `youtube channel id: ${ytChannelId} + description: ${description}`}
                width={100}
                height={100}
            />
            <div className={`absolute inset-0 ${isSelected(ytChannelId, mySelectionList) ? selectedStyle : normalStyle}`}>
                <div className="flex items-center justify-center h-full text-sm text-bold text-center">
                    {title}
                </div>
            </div>
        </div>
    )
}