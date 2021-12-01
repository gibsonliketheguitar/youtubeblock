import { default as YtClient } from "@components/YoutubeDataClient";
import { default as YtSelectList } from "@components/YoutuberSelectList";

import MySelectionList from "@components/MySelectionList";

export default function Block() {
    return (
        <div className='flex-grow flex flex-col items-center justify-center'>
            <MySelectionList />
            <YtClient />
            <YtSelectList />
        </div>
    )
}