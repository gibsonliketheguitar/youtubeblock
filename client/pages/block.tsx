import { useEffect } from "react";
import Button from "@components/common/Button";
import YoutubeClient from "@components/YoutubeDataClient";
import { default as SelectList } from "@components/YoutuberSelectList";
import useSubscriptionList from "@utils/hooks/useSubscriptionList";
import getSubscriptions from "@utils/youtubeSubscriptionHelpers";

export default function Block() {
    const { currYtList, setCurrYtList } = useSubscriptionList()

    async function handleLoad() {
        const data = await getSubscriptions()
        setCurrYtList(data)
    }
    useEffect(() => {
        console.log(currYtList)
    }, [currYtList])

    return (
        <div className='flex-grow flex flex-col items-center justify-center'>
            <SelectList
                items={currYtList?.items}
                prevPageToken={currYtList?.prevPageToken}
                nextPageToken={currYtList?.nextPageToken}
            />
            <YoutubeClient />
            <Button handleOnClick={handleLoad}>Load Subsriptions</Button>
        </div>
    )
}