import React, { Component } from 'react'

export default class Totals extends Component {
  render() {
    return (
      <ul>
        <li className="totalRow">
        SUBTOTAL: $
        </li>
        <li className="totalRow">
        TAX: $
        </li>
        <li className="totalRow final">
        TOTAL: $
        </li>
      </ul>
    )
  }
}

