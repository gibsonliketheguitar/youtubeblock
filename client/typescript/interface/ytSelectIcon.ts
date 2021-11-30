import { Snippet } from "@ts/types/youtubeData/snippet";
export default interface YoutubeSelectIcon extends Snippet {
    handleDeselect?: () => {},
}