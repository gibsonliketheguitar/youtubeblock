export default function isArrNotEmpty(arr: any): Boolean {
    if (Array.isArray(arr)) {
        return Boolean(arr.length > 0)
    }
    return false
}