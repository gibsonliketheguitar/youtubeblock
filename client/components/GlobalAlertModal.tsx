import useGlobalAlertMessage from "@utils/hooks/useGlobalAlertMessage";
import { useEffect, useState } from "react";
import { Modal } from "react-native";

export default function GlobalAlertModal() {
    const [showModal, setShowModal] = useState(false)
    const { message, setMessage } = useGlobalAlertMessage()

    const position = "flex flex-col flex-grow justify-center items-center"

    const handleOnClick = async () => {
        setMessage('')
        setShowModal(false)
    }

    useEffect(() => {
        if (message === undefined) return
        const hasMessage = Boolean(message?.length > 0)
        if (hasMessage) setShowModal(true)
    }, [message])

    return (
        <Modal
            animationType={'slide'}
            onRequestClose={() => setShowModal(false)}
            visible={showModal}
        >
            <div className={`${position}`}>
                <div className='mb-32'>{message}</div>
                <button onClick={handleOnClick}>Close</button>
            </div>
        </Modal>
    )
}
