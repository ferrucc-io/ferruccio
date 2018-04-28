import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { ChatFeed, Message, ChatBubbleProps } from 'react-chat-ui';

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'


class Info extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          messages: [
            new Message({
                id: 0,
                message: "Where are you from?!"
            }),
            new Message({
                id: 1,
                message: "I'm from Milan, Italy 🇮🇹!",
            }), // Gray bubble
            new Message({
                id: 0,
                message: "How would you describe yourself?"
            }), // Blue bubble
            new Message({
                id: 1,
                message: "I like to make things",
            }), // Gray bubble
            new Message({
                id: 1,
                message: "Most of the things I make are useless",
            }), // Gray bubble
            new Message({
                id: 1,
                message: "but I try to learn lessons and new things every time I make something",
            }), // Gray bubble
          ],
      };
  }

  /*componentDidMount(){
      const messagesArr = [
          new Message({
                id: 0,
                message: "Where are you from?!"
            }),
            new Message({
                id: 1,
                message: "I'm from Milan, Italy 🇮🇹!",
            }), // Gray bubble
            new Message({
                id: 0,
                message: "How would you describe yourself?"
            }), // Blue bubble
            new Message({
                id: 1,
                message: "I like to make things",
            }), // Gray bubble
            new Message({
                id: 1,
                message: "Most of the things I make are useless",
            }), // Gray bubble
            new Message({
                id: 1,
                message: "but I try to learn lessons and new things every time I make something",
            }), // Gray bubble
      ];
      for (let i=0; i< messagesArr.length; i++) {
        let start = new Date().getTime();
        for (let e = 0; e < 1e7; e++) {
            if ((new Date().getTime() - start) > 2000){
                break;
            }
        }
        this.setState(prevState => ({
            messages: [prevState.messages, messagesArr[i]]
        }));
      }
  }*/

  render() {

    return (
      <div>
        <Helmet title="About Ferruccio" />
        <div>
            <h2>Things about me:</h2>
            <ChatFeed
                messages={this.state.messages} // Boolean: list of message objects
                isTyping={this.state.is_typing} // Boolean: is the recipient typing
                hasInputField={false} // Boolean: use our input, or use your own
                showSenderName // show the name of the user who sent the message
                bubblesCentered={false}
                bubbleStyles={
                    {
                        text: {
                            fontSize: 30
                        },
                        chatbubble: {
                            borderRadius: 70,
                            padding: 40
                        }
                    }
                }
            />
        </div>
      </div>
    )
  }
}

export default Info