import Image from 'next/image'
import useMySelection from '@utils/hooks/useMySelection'
import MySelection from '@ts/interface/mySelection'

export default function MySelectionIcon({ channelId, description, title, url }: MySelection) {
    const { remove } = useMySelection()

    function handleOnClick() {
        remove(channelId)
    }

    return (
        <div className="relative h-10 w-10 rounded-sm overflow-hidden" onClick={() => handleOnClick()}>
            <Image
                src={url}
                alt={title + `youtube channel id: ${channelId} + description: ${description}`}
                layout="fill"
                objectFit="cover"
            />
        </div>
    )
}