import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import infoPic from './info.svg'
import lifePic from './life.svg'
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
            <img src={infoPic}
                 style={{
                     maxHeight: '40px',
                 }}
                 className="mainMenuIcon"
            />
        </div>
        <div
            style={{
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
        >
            <img src={lifePic}
                 style={{
                     maxHeight: '40px',
                     marginLeft: 'auto',
                     marginRight: 'auto'
                 }}
            />
        </div>
        <div
            style={{
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
        >
            <img src={mailPic}
                 style={{
                     maxHeight: '40px'
                 }}
            />
        </div>
      </div>
    )
  }
}

export default MainMenu
