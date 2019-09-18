import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class BbPopop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let styles = (this.props.styles == "message")? "popop_msg" : "popop_notice"
    return (
      <div className={styles}>
          <div className='popop'>
            <p className="popop_header">
              <span>{this.props.kind}</span>
              <button onClick={this.props.closePopop}>X</button>
            </p>
            <div className="popop_content">
              {this.props.children}
            </div>
          </div>
      </div>
    )
  }
}
