import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/index'
import styles from '../styles/EntryPage.css'

import ButtonAdd from '../components/ButtonAdd'

class EntryPage extends React.Component {
  componentDidMount() {
    const { getRequestsStart } = this.props
    getRequestsStart()
  }

  render() {
    return (
      <div className={styles.entrypagebody}>
        <p>Table gonna be here..</p>
        <ButtonAdd />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
//    BtnsClickedCounter: state.BtnsClickedCounter,
//    Counter: state.Counter,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getRequestsStart: () => dispatch(actions.getRequestsStart()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EntryPage)
