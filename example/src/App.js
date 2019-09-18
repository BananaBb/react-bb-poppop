import React, { Component } from 'react'
import BbPopop from 'react-bb-poppop'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopop: false,
      showNotice: false
    };

  }

  togglePopop() {
    this.setState({
      showPopop: !this.state.showPopop
    });
  }

  noticePopop() {
    this.setState({
      showNotice: !this.state.showNotice
    });
  }

  render () {
    return (
      <div>
        <button onClick={this.togglePopop.bind(this)}>Message Box</button>
        {this.state.showPopop ? 
          <div>
            <BbPopop 
              styles="message"
              kind="Alert"
              closePopop={this.togglePopop.bind(this)}
            >
              Too Low !!
            </BbPopop>
          </div>
          : null
        }
        <br/>
        <br/>
        <br/>
        <button onClick={this.noticePopop.bind(this)}>Notice Box</button>
        {this.state.showNotice ? 
          <div>
            <BbPopop 
              styles="notice"
              kind="Alert"
              closePopop={this.noticePopop.bind(this)}
            >
              Too Low !!
            </BbPopop>
          </div>
          : null
        }
      </div>
    )
  }
}
