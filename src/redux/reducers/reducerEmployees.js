import { typesEmployees } from "../types/types";


const initialState= {
    employees : [],
}

export const reducerEmployees = (state= initialState, action)=>{
switch (action.type ) {
    case typesEmployees.registro:
        return{
        employees:[action.payload]
    }
    default:
        return{
        state
    }
}


}