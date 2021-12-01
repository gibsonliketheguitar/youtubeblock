import Script from 'next/script'
import Button from '@components/common/Button';
import initYoutubeClient from '@utils/youtubeDataClientHelper'

import useSubscriptionList from "@utils/hooks/useSubscriptionList";
import getSubscriptions from "@utils/youtubeSubscriptionHelpers";

export default function YoutubeDataClient() {
    const { setCurrYtList } = useSubscriptionList()

    async function handleLoad() {
        const data = await getSubscriptions()
        setCurrYtList(data)
    }

    return (
        <>
            <Script
                src="https://apis.google.com/js/api.js"
                strategy="afterInteractive"
                onLoad={() => {
                    initYoutubeClient()
                }}
            />
            <Button handleOnClick={handleLoad}>Load Subsriptions</Button>
        </>
    )
}