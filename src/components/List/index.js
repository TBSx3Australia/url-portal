import React, { Component } from 'react'
import uuid from 'uuid/v4'
import moment from 'moment'

import Item from './item'
import base from '../../config/rebase'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
      email: '',
      loading: true,
      urls: [],
    }
  }

  componentDidMount() {
    base.syncState('urls', {
      context: this,
      state: 'urls',
      asArray: true,
      then() {
        this.setState({ loading: false })
      },
      onFailure(e) {
        console.err(e)
      },
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState(prev => ({
      email: '',
      url: '',
      urls: prev.urls.concat([
        {
          url: prev.url,
          email: prev.email,
          short: uuid(),
          end: moment()
            .add(90, 'hours')
            .toString(),
          count: 0,
        },
      ]),
    }))
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to TBSx3 Talent Portal</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            URL:
            <input type="url" name="url" value={this.state.url} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br />
        <br />
        <br />
        {this.state.loading ? (
          <span>loading</span>
        ) : (
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Clicks</th>
                <th>Expire Date</th>
                <th>Unique Link</th>
                <th>Candidate Email</th>
                <th>Original Link</th>
              </tr>
            </thead>

            <tbody>{this.state.urls.map(item => <Item key={item.short} item={item} />)}</tbody>
          </table>
        )}
      </div>
    )
  }
}

export default List
