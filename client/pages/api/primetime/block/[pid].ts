import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const baseURL = 'http://localhost:3001'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req })
    const { query: { pid } } = req
    console.log(req)
    console.log(pid)
}