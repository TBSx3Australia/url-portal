import React, { Component } from 'react'
import moment from 'moment'
import ContentLoader from 'react-content-loader'

import base from '../../config/rebase'

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      error: false,
      link: undefined,
    }
  }

  componentDidMount() {
    base.fetch(`urls/${this.props.match.params.uid}`, {
      context: this,
      query: {
        orderByChild: 'short',
        equalTo: this.props.match.params.uid,
      },
      then(res) {
        this.setState({ loading: false, link: res.url })
        base.update(`urls/${res.key}`, { data: { count: res.count + 1 } })
        if (moment(res.end).isAfter(moment())) {
          window.location.assign(res.url)
        } else {
          console.error('expired')
          this.setState({ error: true })
        }
      },
      onFailure(e) {
        console.error(e)
        this.setState({ error: true })
      },
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loading && <ContentLoader type="list" />}
        {this.state.error && (
          <div>
            <h1>Link Not Exist or Expired!</h1>
            <h2> Please contact our talent acquisition team.</h2>
          </div>
        )}
        {this.state.link && <a href={this.state.link}>Waiting for redirect or click here!</a>}
      </div>
    )
  }
}

export default Task
