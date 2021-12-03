import Image from 'next/image'
import { default as PTPreviewBlockIcon } from '@ts/interface/primeTimePreviewBlockIcon'

export default function PrimeTimePreviewBlockIcon({
    channelId,
    description,
    url, title
}: PTPreviewBlockIcon
) {
    return (
        <Image
            src={url}
            alt={title + `youtube channel id: ${channelId} + description: ${description}`}
            width={150}
            height={150}
        />
    )
}