import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import {rhythm} from '../utils/typography'

class LifeKanban extends React.Component {
    render() {

        return (
            <section>
                <Helmet title="Life Kanban - Ferrucc.io"/>
                <div className="container">
                    <h4>Here's my past, my present and my future.</h4>
                </div>
                <section className="container">
                        <div className="row-fluid">
                                <div className="col-md-4">
                                        <h2>Things I want to do:</h2>
                                        <ul>
                                                <li>Build a computer</li>
                                                <li>Learn how to speak fluently in 5 languages</li>
                                                <li>Figure out how to make cool 3D videos</li>
                                                <li>Design and manifacture a fashion line, sourcing high quality products</li>
                                        </ul>
                                </div>

                                <div className="col-md-4 today">
                                        <h2>Things I'm doing:</h2>
                                        <ul>
                                                <li>Get a degree in Control Engineering</li>
                                                <li>Get at an HSK4 level in Chinese</li>
                                                <li>Building high quality cryptocurrency financial data APIs</li>
                                                <li>Writing a little bit of code everyday</li>
                                                <li><a href="https://cryptopals.com">The Cryptopals Challenge</a></li>
                                        </ul>
                                </div>
                                <div className="col-md-4">
                                        <h2>Things I've done:</h2>
                                        <ul>
                                                <li>Started a music website at 16 and worked with major labels (UMG, Sony...) and festivals (Ultra,
                                Tomorrowland etc..) to interview and promote their artists.</li>
                                                <li>Learned French</li>
                                                <li>Became an influencer on Instagram reaching 18.000 followers.</li>
                                                <li>Became a "professional" UI/UX and graphic designer. (sold some logos and mockups)</li>
                                                <li>Reached 365.000 people in a year on Quora (it took three months).</li>
                                                <li>Quit Social Media</li>
                                                <li>Learned Django Development and React</li>
                                                <li>Created <a href="https://wodstreak.com">WodStreak</a></li>
                                        </ul>
                                </div>
                        </div>
                </section>
            </section>
                )
                }
                }

                export default LifeKanban

