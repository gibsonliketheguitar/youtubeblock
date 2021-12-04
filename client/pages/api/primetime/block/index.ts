import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { DELETE, GET, PUT } from "@utils/constants";

const baseURL = 'http://localhost:3001'
export default async (req: NextApiRequest, res: NextApiResponse) => {

    const session = await getSession({ req })
    const { accessToken, subscriptions } = req.body
    const method = req?.method || 'none'

    const createBlock = async () => {
        console.log('create block')
        const payload = {
            title: 'None',
            description: 'None',
            tags: [],
            shared: [],
            rank: 99,
            subscriptions
        }
        try {
            if (!session) throw 'Invalid Credentials'
            let response = await fetch('http://localhost:3001/primetime', {
                method: 'POST',
                headers: {
                    //'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            })
            const result = await response.json()
            console.log('what is result', result)
            if (response.ok) res.status(201).send({ blockId: result.blockId })
            else throw result.message
        }
        catch (error: string | any) {
            res.status(401).send({ message: error, error: 'Unauthorized' })
        }
        finally {
            res.end()
        }
    }

    async function deleteBlock() {
        console.log('delete block')
    }
    async function updateBlock() {
        console.log('update block')
    }

    if (req.method === 'POST') {
        createBlock()
    }
    else if (req.method === PUT) {
        updateBlock()
    }
    else if (req.method === DELETE) {
        deleteBlock()
    }
    else {
        res.end()
    }
}
