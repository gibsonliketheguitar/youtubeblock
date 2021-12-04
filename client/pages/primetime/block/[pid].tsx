import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { default as SelectionList } from '@components/BlockSelection/BlockSeletionList';
import Button from '@components/common/Button';

import { PID } from '@ts/types/PID';
import isArrEmpty from '@utils/isArrEmpty';
import useAccessToken from '@utils/hooks/useAccessToken'
import usePID from '@utils/hooks/usePid'
import useGlobalAlertMessage from '@utils/hooks/useGlobalAlertMessage';
import useSetRoute from '@utils/hooks/useSetRoute';

export default function PrimeTimeBlock() {
    const { accessToken } = useAccessToken()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { setMessage } = useGlobalAlertMessage()
    const pid: PID = usePID()
    const [list, setList] = useState<any>([])
    const { routeTo } = useSetRoute()

    const onSubmit = async (data: any) => {
        const { id } = data
        try {
            const res = await fetch(`/api/primetime/block/${id}`, {
                method: 'PUT',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(data)
            })
            const result = await res.json()
            if (res.ok) console.log(result)
            else throw result.message
        }
        catch (error: string | any) {
            setMessage(error)
        }
    }

    async function handleDelete() {
        try {
            const res = await fetch(`/api/primetime/block/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            const result = await res.json()
            if (res.ok) routeTo('/primetime')
            else throw result.message
        }
        catch (error: string | any) {
            setMessage(error)
        }
    }

    useEffect(() => {
        async function getPageData() {
            if (!pid) return
            try {
                const baseUrl = `/api/primetime/block/${pid}?accessToken=${accessToken}`
                const res = await fetch(baseUrl)
                const result: any = await res.json()
                if (res.ok) setList(result.data)
                else throw result.message
            }
            catch (error: string | any) {
                setMessage(error)
            }

        }
        getPageData()
    }, [pid])

    const inputTable = [
        { title: 'title', type: 'text', required: true },
        { title: 'description', type: 'text', required: true },
        { title: 'tags', type: 'text', required: false },
        { title: 'rank', type: 'text', require: true }
    ]

    if (isArrEmpty(list.subscriptions)) return <></>
    return (
        <div className='flex flex-col justify-items items-center'>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <SelectionList data={list.subscriptions} />
                {inputTable.map(({ title, required }: any, indx: number) => {
                    return (
                        <>
                            <div className='flex flex-row justify-center'>
                                <input key={indx} {...register(title, { required })} defaultValue={list[title]} />
                            </div>
                            <br />
                        </>
                    )
                })}
                <input type="submit" />
            </form>
            <Button handleOnClick={handleDelete}> Delete</Button>
        </div>
    )
}