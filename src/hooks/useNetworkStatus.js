import { useState, useEffect } from 'react'

function getConnection() {
  return navigator.connection || navigator.mozConnection || navigator.webkitConnection
}

function useNetworkStatus() {
  let [connection, setNetworkConnection] = useState(getConnection())

  function updateConnectionStatus() {
    setNetworkConnection(getConnection())
  }

  useEffect(() => {
    connection.addEventListener('change', updateConnectionStatus)

    return () => {
      connection.removeEventListener('change', updateConnectionStatus)
    }
  })

  return connection
}

export default useNetworkStatus