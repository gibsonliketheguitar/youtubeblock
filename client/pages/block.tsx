import { useEffect, useState } from "react";
import Button from "@components/common/Button";
import { default as YtClient } from "@components/YoutubeDataClient";
import { default as YtSelectList } from "@components/YoutuberSelectList";
import useSubscriptionList from "@utils/hooks/useSubscriptionList";
import getSubscriptions from "@utils/youtubeSubscriptionHelpers";
import MySelectionList from "@components/MySelectionList";

export default function Block() {
    const { setCurrYtList } = useSubscriptionList()

    async function handleLoad() {
        const data = await getSubscriptions()
        setCurrYtList(data)
    }

    return (
        <div className='flex-grow flex flex-col items-center justify-center'>
            <MySelectionList />
            <YtClient />
            <YtSelectList />
            <Button handleOnClick={handleLoad}>Load Subsriptions</Button>
        </div>
    )
}