import { typesEmployees } from "../types/types"
import {dataBase} from '../../firebase/firebase'
import { addDoc,collection } from "@firebase/firestore"
// fileStore base de datos addDocs
export const createEmployeAsync = (newEmployees)=>{
    return(dispatch)=>{

        addDoc(collection(dataBase,'employees'),newEmployees)
        .then(response =>{
            dispatch(createEmploye(newEmployees))

        }).catch(error=>{
            console.log(error)
        })

    }
    
    }


export const createEmploye = (employees)=>{
return{
    type: typesEmployees.registro,
    payload: employees,

}

}
