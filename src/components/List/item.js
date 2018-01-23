import React from 'react'
import moment from 'moment'

const Item = props => (
  <tr>
    <td>{props.item.count || 0}</td>
    <td>{moment(props.item.end).isAfter(moment()) ? moment(props.item.end).format('MMM Do, HH:mm') : 'expired'}</td>
    <td>
      <a href={`https://talent.tbsx3.com/task/${props.item.key}`}>{`https://talent.tbsx3.com/task/${props.item.key}`}</a>
    </td>
    <td>{`${props.item.email.substring(0, 4)}***` || 'anonymous'}</td>
    <td>{props.item.url}</td>
  </tr>
)

export default Item
