import Image from 'next/image'
import { default as IconInterface } from "@ts/interface/ytSelectIcon";

export default function YoutuberSelectIcon({
    channelId,
    description,
    handleDeselect,
    resourceId,
    title,
    thumbnails,
}: IconInterface) {
    const initStyle = "opacity-0"
    const hoverStyle = "hover:opacity-100 hover:bg-gray-400 hover:bg-opacity-50"
    const normalStyle = `${initStyle} ${hoverStyle}`
    const selectedStyle = "opacity-100 bg-gray-400 bg-opacity-70"

    const { high, medium } = thumbnails
    const dft = thumbnails.default
    return (
        <div className="relative w-24 h-24 bg-gray-200">
            <Image
                src={dft.url}
                alt={title + `youtube channel id: ${resourceId.channelId} + description: ${description}`}
                width={100}
                height={100}
            />
            <div className={`absolute inset-0 ${false ? selectedStyle : normalStyle}`}>
                <div className="flex items-center justify-center h-full text-sm text-bold text-center">
                    {title}
                </div>
            </div>
        </div>
    )
}