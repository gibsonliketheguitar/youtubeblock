import Button from "@components/common/Button";
import MySelectionList from "@components/MySelectionList";
import { default as YtClient } from "@components/YoutubeDataClient";
import { default as YtSelectList } from "@components/YoutuberSelectList";
import getSubscriptions from "@utils/youtubeSubscriptionHelpers";
import useSubscriptionList from "@utils/hooks/useSubscriptionList";
import useMySelection from "@utils/hooks/useMySelection";
import useSetRoute from "@utils/hooks/useSetRoute";
import useGlobalAlertMessage from "@utils/hooks/useGlobalAlertMessage";
import useAccessToken from "@utils/hooks/useAccessToken";

export default function Block() {
    const { accessToken } = useAccessToken()
    const { mySelectionList } = useMySelection()
    const { routeTo } = useSetRoute()
    const { setCurrYtList } = useSubscriptionList()
    const { setMessage } = useGlobalAlertMessage()

    async function handleLoad() {
        const data = await getSubscriptions()
        setCurrYtList(data)
    }

    async function handleSave() {
        const payload = {
            accessToken,
            subscriptions: mySelectionList
        }
        try {
            const res = await fetch('api/primetime', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            if (res.ok) {
                console.log('hi')
            }
            else throw (await res.json().then(data => data.message))
        }
        catch (error: any) {
            setMessage(error)
        }
    }

    return (
        <div className='flex-grow flex flex-col items-center justify-center'>
            <MySelectionList />
            <YtClient />
            <YtSelectList />
            <Button handleOnClick={handleLoad}>Load Subsriptions</Button>
            <Button handleOnClick={handleSave}>Save</Button>
        </div>
    )
}