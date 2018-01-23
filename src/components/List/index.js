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
      keepKeys: true,
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
    const id = uuid()

    this.setState(prev => ({
      email: '',
      url: '',
      urls: prev.urls.concat([
        {
          key: id,
          url: prev.url,
          email: prev.email,
          end: moment()
            .add(7, 'days')
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
                <th>Expire</th>
                <th>Unique Link</th>
                <th>Candidate</th>
                <th>Original</th>
              </tr>
            </thead>
            <tbody>
              {this.state.urls.sort((a, b) => moment(a.end) < moment(b.end)).map(item => <Item key={item.key} item={item} />)}
            </tbody>
          </table>
        )}
      </div>
    )
  }
}

export default List
