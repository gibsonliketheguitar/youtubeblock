
export default function Input(props: any) {
    const title = props.name
    console.log(props)
    return (
        <div>
            <label htmlFor={title} className="block text-sm font-medium text-gray-700">{title}</label>
            <div className="mt-1">
                <input
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder={props.placeholder}
                    {...props}
                />
            </div>
        </div>
    )
}