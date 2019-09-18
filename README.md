# react-bb-poppop

> This is a modulable component to render poppop with some nice features !

[![NPM](https://img.shields.io/npm/v/react-bb-poppop.svg)](https://www.npmjs.com/package/react-bb-poppop) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-bb-poppop
```

## Usage

```jsx
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
              Testing
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
              Testing
            </BbPopop>
          </div>
          : null
        }
      </div>
    )
  }
}
```

## License

MIT © [BananaBb](https://github.com/BananaBb)
