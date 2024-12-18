import React, { useContext } from "react"
import { IContact, Methods } from "../types"
import { deleteContact } from "../context/api"
import { ContactContext } from "../context/context"

interface ContactProps {
    contact: IContact
}

export const Contact: React.FC<ContactProps> = ({contact}) => {
    const context = useContext(ContactContext)
    if(!context) throw new Error('out of provider')
    const {dispatch} = context

    const handleDelete = async(id:string) =>{
        await deleteContact(id)
        dispatch({type:Methods.DELETE_CONTACTS, payload:id as string})
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{contact.name}</h3>
            <h4 className="text-sm text-gray-600 dark:text-gray-400">{contact.phone}</h4>
            <button onClick={()=>handleDelete(contact.id)} className="mt-2 bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 dark:hover:bg-red-700 transition-colors">
                Delete
            </button>
        </div>
    )
}
