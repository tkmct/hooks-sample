import React, { useContext } from 'react'
import { NetworkContext } from '../contexts/NetworkContext'

const NetworkStatusBar = () => {
  const network = useContext(NetworkContext)

  return <div style={{ 
    position: 'fixed', 
    top: 5, 
    right: 5, 
    padding: 8,
    border: 'solid 1px #ddd',
    borderRadius: 4
  }}>
    <p>Network is now {network.online ? 'ONLINE' : 'OFFLINE'}</p>
    <p>Status: {network.status.effectiveType.toUpperCase()}</p>
  </div>
}

export default NetworkStatusBar