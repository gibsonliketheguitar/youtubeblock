export default function Button({ children, handleOnClick }: any) {
    return (
        <span onClick={() => handleOnClick()}>
            <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {children}
            </button>
        </span>
    )
}