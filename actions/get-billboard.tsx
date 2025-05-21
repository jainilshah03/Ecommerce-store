import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getbillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`);


    return res.json(); // only parse if res.ok is true
};

export default getbillboard;
