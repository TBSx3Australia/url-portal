import React from 'react'
import moment from 'moment'

const Item = props => (
  <tr>
    <td>{props.item.count || 0}</td>
    <td>{moment(props.item.end).isAfter(moment()) ? moment(props.item.end).format('MMM Do, HH:mm') : 'expired'}</td>
    <td>
      <a href={`https://${process.env.REACT_APP_DOMAIN}/t/${props.item.key}`}>{`https://${process.env.REACT_APP_DOMAIN}/t/${props.item.key}`}</a>
    </td>
    <td>{`${props.item.email.substring(0, 3)}@@@${props.item.email.substring(props.item.email.length - 3, props.item.email.length)}` || 'anonymous'}</td>
    <td>{props.item.url}</td>
  </tr>
)

export default Item
