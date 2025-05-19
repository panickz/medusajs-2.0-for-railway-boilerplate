import { NextApiRequest, NextApiResponse } from 'next'
import { cookies } from 'next/headers'

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
    cookies().set("_medusa_cart_id", "", { maxAge: -1 })
    res.status(200).json({ message: 'Cart ID removed' })
};