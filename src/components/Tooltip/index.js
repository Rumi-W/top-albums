import React, { PureComponent } from 'react'
import './styles.css'

class Tooltip extends PureComponent {
  render() {
    const { children, show } = this.props

    return (
      <div id="tooltip" className=" on bottom tooltip-arrow">
        <div
          className="tooltip-arrow"
          style={{
            opacity: show ? '1' : '0'
          }}
        />
        <div
          className="tooltip-inner"
          style={{
            opacity: show ? '1' : '0'
          }}>
          {children}
        </div>
      </div>
    )
  }
}

export default Tooltip
