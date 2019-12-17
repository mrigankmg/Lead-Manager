import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads } from '../../actions/leads'

class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired
  }
  render() {
    return (
      <h1> Leads List </h1>
    )
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
})

export default connect(mapStateToProps)(Leads)
