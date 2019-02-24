import React from 'react'
import Tooltip from './Tooltip'
import './Info.css'

const Info = props => {
  return (
    <React.Fragment>
      {props.hovering === true ? <Tooltip id={props.id} /> : null}
      <p className="content">
        <span>This is a paragraph with Tooltip</span>
        <svg
          className="Icon-svg Icon--hoverable-svg"
          height={props.height}
          viewBox="0 0 16 16"
          width="16"
        >
          <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
      </p>
    </React.Fragment>
  )
}

export default Info
