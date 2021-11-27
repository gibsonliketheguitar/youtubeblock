import initYoutubeClient from '@utils/youtubeDataClientHelper'
import Script from 'next/script'

export default function YoutubeDataClient() {
    return (
        <>
            <Script
                src="https://apis.google.com/js/api.js"
                strategy="afterInteractive"
                onLoad={() => {
                    initYoutubeClient()
                }}
            />
        </>
    )
}