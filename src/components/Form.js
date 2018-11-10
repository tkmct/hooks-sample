import React, { useState, useCallback, useContext } from 'react'
import useDebounce from '../hooks/useDebounce'
import { NetworkContext } from '../contexts/NetworkContext'

const POST_STATE = {
  INITIAL: 'INITIAL',
  POSTING: 'POSTING',
  POSTED: 'POSTED',
  ERROR: 'ERROR'
}

const Form = () => {
  const [name, setName] = useState('')
  const [postState, setPostState] = useState(POST_STATE.INITIAL)
  const network = useContext(NetworkContext)
  const debouncedName = useDebounce(name, 300)

  const onSubmit = useCallback((e) => {
    e.preventDefault()

    setPostState('POSTING')
    // APIRequest
    setTimeout(() => {
      console.info('POSTED name: ', name)
      setPostState('POSTED')
    }, 3000)
  })

  return <div>
    <form onSubmit={onSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit" disabled={!network.online}>Submit</button>
    </form>
    <p>{debouncedName}</p>
    {postState === POST_STATE.POSTING  && <p>Posting form ...</p>}
  </div>
}

export default Form