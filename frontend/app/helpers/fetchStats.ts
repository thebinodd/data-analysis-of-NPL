import { notifyPending } from "./getToaster"
type Input = {
    id: string,
    head: number,

}

const getData = async ({ id, head }: Input) => {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${id}?head=${head}`)
        const data = await res.json()
        return data

    } catch (error) {

        return {
            "detail" : "Something Went Wrong!"
        }
    }

}

export default getData