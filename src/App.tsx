import { useReducer } from "react"
import { reducer } from "./context/reducer"
import { initialState } from "./context/state"
import { ContactContext } from "./context/context"
import { PhoneBook } from "./components/phone-book"


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <ContactContext.Provider value={{state, dispatch}}>
        <PhoneBook/>
      </ContactContext.Provider>
    </>
  )
}

export default App
