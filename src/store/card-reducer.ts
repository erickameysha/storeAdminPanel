import {Dispatch} from "redux";
import {storeApi} from "../api/store-api";


export type CardReducerType ={
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
const initialState:CardReducerType[] =[]

export const CardReducer = (state= initialState, action: ActionType):CardReducerType[] => {
switch (action.type) {
    case "GET-CARD":
        debugger
      return action.datas.map((el)=> ({...el}))
    case "ADD-CARD":{
        return [action.data, ...state, ]
    }
    case "UPDATE-CARD":{
        return [action.data, ...state, ]
    }
    // case "DELETE-CARD": {
    //     return state.map(el => el.id !== action.id)
    // }
    default: return state
}
}



const getCardsAC = (datas: CardReducerType[]) => ({
type: 'GET-CARD', datas
}as const)
const addCardsAC = (data: CardReducerType) => ({
type: 'ADD-CARD', data
}as const)
const updateCardsAC = (data: CardReducerType) => ({
type: 'UPDATE-CARD', data
}as const)
const deleteCardsAC = (id: number) => ({
type: 'DELETE-CARD', id
}as const)



export const getCards = () => (dispath: Dispatch<ActionType>)=>  {
  storeApi.getData()
      .then((res)=> {

          dispath(getCardsAC(res.data))

      })
}

type ActionType =
    ReturnType<typeof getCardsAC>
    |ReturnType<typeof addCardsAC>
    |ReturnType<typeof updateCardsAC>
    |ReturnType<typeof deleteCardsAC>