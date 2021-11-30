import { useWindowDimensions } from "react-native"

export default function setThumbnailSize(): { size: string } {
    const { width } = useWindowDimensions()

    let size = 'sm'
    const isMed = Boolean(width >= 500 && width < 768)
    const isLg = Boolean(width >= 768)

    if (isMed) {
        size = 'md'
    }
    else if (isLg) {
        size = 'lg'
    }
    return { size }
}
