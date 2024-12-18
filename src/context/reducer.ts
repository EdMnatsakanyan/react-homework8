import { IAction, IContact, IState, Methods } from "../types";

export const reducer = (state:IState, action:IAction) => {
    switch(action.type){
        case Methods.SET_CONTACTS:
            return {
                ...state,
                contacts:action.payload as IContact[]
            }

        case Methods.DELETE_CONTACTS:
            return {
                ...state,
                contacts:state.contacts.filter(contact => 
                    contact.id !== action.payload as string
                )
            }

        case Methods.ADD_CONTACT:
            return {
                ...state,
                contacts:[...state.contacts, action.payload as IContact]
            }
    }
}