import { ResourceId } from "@ts/types/youtubeData/resourceId";
import { Thumbnails } from "@ts/types/youtubeData/thumbnails";

export type Snippet = {
    channelId: string,
    description: string,
    publishedAt: string,
    resourceId: ResourceId,
    thumbnails: Thumbnails,
    title: string,
}