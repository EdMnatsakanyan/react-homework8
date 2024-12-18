import { useForm } from "react-hook-form"
import { IContact, InputContact, Methods } from "../types"
import { addContact } from "../context/api"
import { useContext } from "react"
import { ContactContext } from "../context/context"

export const AddContact = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const context = useContext(ContactContext)
    if(!context) throw new Error('out of provider')
    const {dispatch} = context

    const submit = async(data:InputContact ) => {
        const response = await addContact(data)
        dispatch({type:Methods.ADD_CONTACT, payload:response as IContact})
        reset()
    }

     return (
        <div className="dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit(submit)} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold dark:text-gray-300">Name</label>
                    <input 
                        type="text" 
                        id="name"
                        {...register('name', {required: "Name is required"})}
                        className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-semibold dark:text-gray-300">Phone</label>
                    <input 
                        type="text"
                        id="phone"
                        {...register('phone', {required: "Phone number is required"})}
                        className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                <button 
                    type="submit"
                    className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                    Add Contact
                </button>
            </form>
        </div>
    )
}
