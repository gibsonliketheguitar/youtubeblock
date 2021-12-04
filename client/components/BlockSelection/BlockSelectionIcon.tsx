import Image from 'next/image'

export default function BlockSelectionIcon({ channelId, description, url, title }: any) {
    return (
        <div className="relative h-28 w-28 m-1 rounded-md overflow-hidden">
            <Image
                src={url}
                alt={title + `youtube channel id: ${channelId} + description: ${description}`}
                objectFit="cover"
                layout="fill"
            />
        </div>
    )
}

