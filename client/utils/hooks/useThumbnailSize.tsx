import { LG, MD, SM } from "@utils/constants"
import { useWindowDimensions } from "react-native"

export default function setThumbnailSize(): { size: string } {
    const { width } = useWindowDimensions()
    let size = SM
    const isMed = Boolean(width >= 500 && width < 768)
    const isLg = Boolean(width >= 768)

    if (isMed) {
        size = MD
    }
    else if (isLg) {
        size = LG
    }
    return { size }
}
