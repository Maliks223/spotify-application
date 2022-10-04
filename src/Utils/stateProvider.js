import React, { useState, createContext } from 'react'

export const StateContext = createContext()

export const StateProvider = props => {

  const [input, setInput] = useState("");


  return (
    <StateContext.Provider value={{stateContext: [input, setInput]}}>
      { props.children }
    </StateContext.Provider>
  )
}