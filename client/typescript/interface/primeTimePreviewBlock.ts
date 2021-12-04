import MySelection from '@ts/interface/mySelection'

export default interface PrimeTimePreviewBlock {
    id: string,
    subscriptions: Array<MySelection> | [] | undefined,
}