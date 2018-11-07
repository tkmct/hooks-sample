import React, { createContext } from 'react'
import useOnline from '../hooks/useOnline'
import useNetworkStatus from '../hooks/useNetworkStatus'

export const NetworkContext = createContext({ online: true })
export const NetworkProvider = (props) => {
  const online = useOnline()
  const status = useNetworkStatus()
  
  return <NetworkContext.Provider value={{ online, status }}>
    {props.children}
  </NetworkContext.Provider> 
}