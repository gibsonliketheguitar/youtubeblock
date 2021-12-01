import Input from '@components/common/Input'
import useMySelection from '@utils/hooks/useMySelection'
import { useForm } from 'react-hook-form'

export default function Save() {
    const { mySelectionList } = useMySelection()
    const { register, handleSubmit } = useForm()

    const onSubmit = (formData: any) => {

    }

    const InputTable = [
        { title: 'title', type: 'text', placeholder: 'Enter Primetime Title', value: '' },
        { title: 'description', type: 'text', placeholder: 'Describe Your Primetime', value: '' },
        { title: 'tags', type: 'text', placeholder: 'tags are sepearted by ,', value: '' },
        { title: 'rank', type: 'number', placeholder: 'Rank Your Primetime', value: '' }
    ]
    return (
        <div className='flex-grow flex flex-col items-center justify-center'>
            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
                {InputTable.map((input: any, indx: number) => {
                    return (
                        <div>
                            <label htmlFor={input.title} className="block text-sm font-medium text-gray-700">{input.title}</label>
                            <div className="mt-1">
                                <input
                                    key={indx}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder={input.placeholder}
                                    {...register(input.title)}
                                />
                            </div>
                        </div>
                    )
                })}
                <input type="submit" />
            </form>
        </div>
    )
}