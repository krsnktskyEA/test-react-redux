import React from 'react'
import { withRouter } from 'react-router-dom'

const ButtonAdd = ({ history }) => {
  return (
    <button type="button" onClick={() => history.push('/createRequest')}>
      Add
    </button>
  )
}

export default withRouter(ButtonAdd)
