import { globalAlertAtom } from "@store/atom";
import { useAtom } from "jotai";

export default function useGlobalAlertMessage() {
    const [message, setMessage] = useAtom(globalAlertAtom)

    return {
        message,
        setMessage
    }
}