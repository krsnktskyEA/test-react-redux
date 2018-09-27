import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/index'
import styles from '../styles/EntryPage.css'

class CreateRequestForm extends React.Component {
  createRequest(par) {
    const { createRequestStart } = this.props
    createRequestStart(par)
  }

  render() {
    const params = ['a', 'b', 'c']
    return (
      <div className={styles.entrypagebody}>
        <p>create request</p>
        <button type="button" className={styles.counterButton} onClick={this.createRequest.bind(this, params)}>Create Request</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
//    coordsPar: state.Coords,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createRequestStart: par => dispatch(actions.createRequestStart(par)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateRequestForm)
