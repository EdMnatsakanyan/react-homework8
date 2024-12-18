import axios from "axios";
import { IContact, InputContact } from "../types";

const Axios = axios.create({
    baseURL:"http://localhost:3004"
})

export const getAllContacts = async():Promise<IContact[]> => {
    const response =await Axios.get('/contacts')
    return response.data
}

export const deleteContact = async(id:string):Promise<IContact[]> => {
    const response = await Axios.delete('/contacts/' + id)
    return response.data
}

export const addContact = async(contact:InputContact):Promise<IContact> => {
    const response = await Axios.post('/contacts',contact)
    return response.data
}