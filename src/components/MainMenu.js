import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import infoPic from './info.svg'
import mailPic from './mail.svg'
import { rhythm } from '../utils/typography'

class MainMenu extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          float: 'none',
        }}
      >
        <div
            style={{
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
        >
            <a href="./about" className="no-underline">
                <img src={infoPic}
                     style={{
                         maxHeight: '40px',
                     }}
                      className="mainMenuIcon mainMenuIconFlip"
                />
            </a>

        </div>
        
        <div
            style={{
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
        >
            <a href="mailto:hi@ferrucc.io" className="no-underline">
                <img src={mailPic}
                     style={{
                         maxHeight: '40px'
                     }}
                     className="mainMenuIcon"
                />
            </a>
        </div>
      </div>
    )
  }
}

export default MainMenu
