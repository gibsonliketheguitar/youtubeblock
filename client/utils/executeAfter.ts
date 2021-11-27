export default function executeAfter(fcn: any, seconds: number) {
    setTimeout(() => {
        (() => fcn)
    }, 1000 * seconds)
}
