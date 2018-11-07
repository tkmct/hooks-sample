import React, { createContext } from 'react'
import useOnline from '../hooks/useOnline'

export const NetworkContext = createContext({ online: true })
export const NetworkProvider = (props) => {
  const online = useOnline()
  
  return <NetworkContext.Provider value={{ online }}>
    {props.children}
  </NetworkContext.Provider> 
}