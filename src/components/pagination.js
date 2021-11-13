import React from 'react'

const pagination = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <div>
      <button onClick={gotoPrevPage} disabled={!gotoPrevPage}>
        Prev
      </button>
      <button onClick={gotoNextPage} disabled={!gotoNextPage}>
        Next
      </button>
    </div>
  )
}

export default pagination
