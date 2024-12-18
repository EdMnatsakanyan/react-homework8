import { Dispatch } from "react"

export interface IContact {
    name:string
    phone:string
    id:string
}

export interface InputContact {
    name: string
    phone: string
}

export interface IState {
    contacts:IContact[]
}

export enum Methods {
    SET_CONTACTS,
    DELETE_CONTACTS,
    ADD_CONTACT
}

export interface IAction {
    type:Methods,
    payload:unknown
}

export interface IContext {
    state:IState,
    dispatch:Dispatch<IAction>
}

