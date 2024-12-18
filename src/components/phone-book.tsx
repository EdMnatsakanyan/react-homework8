import { useContext, useEffect } from "react"
import { ContactContext } from "../context/context"
import { Contact } from "./contact"
import { getAllContacts } from "../context/api"
import { Methods } from "../types"
import { AddContact } from "./add-contact"

export const PhoneBook = () => {
    const context = useContext(ContactContext)
    if(!context) throw new Error('out of provider')
    
    const {state, dispatch} = context

    useEffect(() => {
        getAllContacts()
        .then(response => {
            dispatch({type: Methods.SET_CONTACTS, payload: response})
        })
    }, [])

    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen flex justify-center items-center">
            <div className="w-full max-w-md p-4 space-y-4">
                <AddContact/>
                {state.contacts.map(contact => 
                    <Contact key={contact.id} contact={contact}/>
                )}
            </div>
        </div>
    )
}
