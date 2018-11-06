import React, { useState, useCallback } from 'react'
import useOnline from './useOnline'

const POST_STATE = {
  INITIAL: 'INITIAL',
  POSTING: 'POSTING',
  POSTED: 'POSTED',
  ERROR: 'ERROR'
}

const Form = () => {
  const [name, setName] = useState('')
  const [postState, setPostState] = useState(POST_STATE.INITIAL)
  const [online] = useOnline()

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
      <button type="submit" disabled={!online}>Submit</button>
    </form>
    {postState === POST_STATE.POSTING  && <p>Posting form ...</p>}
  </div>
}

export default Form