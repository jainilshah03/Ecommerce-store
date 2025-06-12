import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(URL, {cache: "no-store"});
    console.log("Fetched categories:", res);
    return res.json(); // only parse if it's valid JSON
};

export default getCategories;
