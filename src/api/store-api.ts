import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})

export const storeApi ={
    getData() {
    return instanse.get('products')
    }
}

type ResponseData ={
    id:number,
    title:string
    price:string
    category:string
    description: string
    image: string
    rating: {
        count: number
        rate: number
    }
}


