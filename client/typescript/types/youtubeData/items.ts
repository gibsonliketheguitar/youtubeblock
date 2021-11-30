import { ContentDetail } from "./contentDetails";
import { Snippet } from "./snippet";

export type Items = {
    contentDetails: ContentDetail,
    etag: string,
    kind: string,
    snippet: Array<Snippet>
}