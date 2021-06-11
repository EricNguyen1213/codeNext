import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React from 'react';
import './App.css';

interface navBarProps {
    firstOptionColor:string;
    secondOptionColor:string;
    thirdOptionColor:string;
    fourthOptionColor:string;
  }
export class NavBar extends React.Component<navBarProps> {
    constructor(props:navBarProps) {
      super(props);
    }
    render() {
      return(
        <div className="top">
          <div className="heading">
            <div>
              <article>
                <h1 className="logoText">The<br/>
                <span className="RPSLogo">Rock Paper Scissors</span>
                <br/><span className="rightText">Forum</span></h1>
              </article>
            </div>
            <div className="logoImages">
              <img src="https://media.discordapp.net/attachments/833934962720899074/852028449363329064/rock.png" className="logo App-logo" alt="logo" />
              <img src="https://media.discordapp.net/attachments/833934962720899074/852028445645865000/paper.png" className="logo App-logo" alt="logo" />
              <img src="https://media.discordapp.net/attachments/833934962720899074/852028443423408158/scissors.png" className="logo App-logo" alt="logo" />
            </div>
          </div>
          <div className="selection">
            <Link to="/feed" className="options" style={{background: this.props.firstOptionColor}}>
                <h2 className="optionText">Home</h2>
            </Link>
            <Link to="/rock" className="options" style={{background: this.props.secondOptionColor}}>
              <h2 className="optionText">Rock</h2>
            </Link>
            <Link to="/paper" className="options" style={{background: this.props.thirdOptionColor}}>
              <h2 className="optionText">Paper</h2>
            </Link>
            <Link to="/scissors" className="options" style={{background: this.props.fourthOptionColor}}>
              <h2 className="optionText">Scissors</h2>
            </Link>
          </div>
        </div>
      );
    }
  }