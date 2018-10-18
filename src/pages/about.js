import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'


class Info extends React.Component {
  constructor(props){
      super(props);
  }

  render() {

    return (
      <div>
        <Helmet title="About Ferruccio" />
        <h2>About Me</h2>
        <p>I'm a maker.</p>

        <p>I like to build things in code.</p>

        <p>I like to experiment new things and take risks. I thrive in high pressure environments and always push myself to do the things that will challenge me the most.</p>

        <p>In the last couple of months my biggest challenge has been trying to build a profitable product. I haven't been able to do that yet.</p>

        <p>I'm sharing everything I'm learning on sales, design and development on my <a href="https://twitter.com/0xferruccio">Twitter Profile</a></p>

        <p>On this blog you can find some thoughts I have or had during the years.</p>

      </div>
    )
  }
}

export default Info