import { accessTokenAtom } from "@store/atom"
import { useAtom } from "jotai"

export default function useAccessToken() {
    const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
    return {
        accessToken,
        setAccessToken
    }
}