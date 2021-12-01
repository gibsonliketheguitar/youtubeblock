export default function isArrEmpty(arr: any): Boolean {
    const isNotArray = Boolean(Array.isArray(arr) === false)

    return isNotArray
        ? true
        : Boolean(arr.length <= 0)
}