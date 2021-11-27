import Button from "@components/common/Button";
import YoutubeClient from "@components/YoutubeDataClient";
import useSubscriptionList from "@utils/hooks/useSubscriptionList";
import { useEffect } from "react";

export default function Block() {

    const { subscriptions, setSubscriptions } = useSubscriptionList()
    async function handleLoad() {
        if (window === undefined || !window.gapi) return
        async function loadSubscription(pageToken?: string) {
            let data: any = {}
            let gapi = window.gapi
            try {
                //https://developers.google.com/youtube/v3/docs/subscriptions
                let subscriptions = await gapi.client.youtube.subscriptions
                let { result } = await subscriptions.list({
                    "part": [
                        "contentDetails",
                        "id",
                        "snippet ",
                    ],
                    "maxResults": 50, //youtube allows maximum of 50 per page
                    "mine": true,
                    "order": "relevance",
                    "pageToken": pageToken || "",
                })
                data = {
                    "nextPageToken": result.nextPageToken || "",
                    "prevPageToken": result.prevPageToken || "",
                    "pageInfo": { ...result.pageInfo },
                    "items": result.items,
                }
            }
            catch (error) {
                console.error("Execute error", error);
            }
            return data
        }
        const data = await loadSubscription()
        setSubscriptions(data)
    }

    useEffect(() => {
        console.log(subscriptions)
    }, [subscriptions])

    return (
        <div className='flex-grow flex flex-col items-center justify-center'>
            <YoutubeClient />
            <Button handleOnClick={handleLoad}>Load Subsriptions</Button>
        </div>
    )
}