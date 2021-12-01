import { YoutubeSelectList } from "@ts/interface/ytSelectList"
import { PageToken } from "@ts/types/youtubeData/pageToken"

export default async function getSubscriptions(pageToken: PageToken = "") {
    if (window === undefined || !window.gapi) return []
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
            "pageToken": pageToken,
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
