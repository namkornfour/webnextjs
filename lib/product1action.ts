import useSWR from "swr";
import {ProductProps} from '@/types/Product'

// interface ProductProps {
//     productSKU: string;
//     productName:string;
//     price:number;
// }

export function useProductBySKU(sku:string) {
    async function fetcher(url:string):Promise<ProductProps> {
        const res  = await fetch(url, {cache: 'no-cache'});
         if(!res.ok){
            throw new Error("Error cannot get data");
         }
         return res.json();
    }

    const {data, isLoading,mutate, error} = useSWR<ProductProps>(`/api/products1/${sku}`, fetcher);

    return {
        data,
        isLoading: !data && !error,
        mutate,
        error,
    }
}

export function useProducts() {
    async function fetcher(url:string):Promise<ProductProps[]> {
        const res = await fetch(url, {cache: 'no-cache'});

        if(!res.ok) {
            throw new Error('No found data');
        }

        return res.json();
    }

    const {data, isLoading, mutate, error} = useSWR<ProductProps[]>('/api/products1', fetcher);

    return {
        data,
        isLoading: !data && !error,
        mutate,
        error,
    }
}