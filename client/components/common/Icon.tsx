import { default as IconInterface } from '@ts/interface/icon'

export default function Icon(props: IconInterface) {
    const position = 'flex justify-center items-center'
    const size = "h-10 w-10"
    const style = "bg-gray-200"
    return (
        <span
            role='button'
            className={`${position} ${size} ${style}`}
            onClick={() => props.handleOnClick()}
        >
            {props.icon}
        </span>
    )
}