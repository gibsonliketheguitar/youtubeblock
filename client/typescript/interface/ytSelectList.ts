import { Items } from "@ts/types/youtubeData/items";
import { PageInfo } from "@ts/types/youtubeData/pageInfo";
import { PageToken } from "@ts/types/youtubeData/pageToken";

export interface YoutubeSelectList {
    items: Array<Items> | [],
    nextPageToken: PageToken,
    prevPageToken: PageToken,
    pageInfo: PageInfo
}
