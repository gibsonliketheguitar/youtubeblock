import { useEffect, useState } from "react";
import Button from "@components/common/Button";
import { default as YtClient } from "@components/YoutubeDataClient";
import { default as YtSelectList } from "@components/YoutuberSelectList";
import useSubscriptionList from "@utils/hooks/useSubscriptionList";
import getSubscriptions from "@utils/youtubeSubscriptionHelpers";
import MySelectionList from "@components/MySelectionList";

export default function Block() {
    const { currYtList, setCurrYtList } = useSubscriptionList()

    async function handleLoad() {
        const data = await getSubscriptions()
        setCurrYtList(data)
    }

    useEffect(() => {
        console.log(currYtList)
    }, currYtList)

    return (
        <div className='flex-grow flex flex-col items-center justify-center'>
            <MySelectionList />
            <YtClient />
            <YtSelectList {...currYtList} />
            <Button handleOnClick={handleLoad}>Load Subsriptions</Button>
        </div>
    )
}