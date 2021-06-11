import React from 'react';
import './App.css';
import {NavBar} from './NavBar';
import {Footer} from './Footer';
import {RedirectToEula} from './RedirectToEula'

export class Landing extends React.Component {
  render() {
    return(
      <div>
        <NavBar firstOptionColor="rgb(62,48,211)" secondOptionColor="none" thirdOptionColor="none" fourthOptionColor="none"></NavBar>
        <div className="forumBody">
          <div className="openingColumn">
            <img className="openingImage" src="https://www.ualberta.ca/science/media-library/news/2020/july/rock-paper-scissors-webinar.jpg" alt="" />
            <div className="openingText">
              <h1>Welcome!</h1>
              <p>To put it simply, this is a sauntuary for Ro-Sham-Bo enthusiasts to share their love for the historic, global pastime known as Rock, Paper, Scissors. Since everyone has got to have played this game once in their lifetime, this is a wonderful community filled with all kinds of demographics: old, young, male, or female. To those not enthusiasts yet, we hope that this forum influences you to become one. Otherwise, just have fun here.</p>
              <p>On the navigation bar you can see options for each respective aspect of the game. In those pages are just forums to discuss or post pictures of that.</p>
              <ul>
                <li>The Rock page will have posts about rocks.</li>
                <li>The Paper page will have posts about paper.</li>
                <li>The Scissors page will have posts about scissors.</li>
              </ul>
              <p>Please keep it that way. Thank you and have fun!</p>
            </div>
            <img className="openingImage" src="https://api.timeforkids.com/wp-content/uploads/2020/11/rockpaperscissors.jpg" alt="" />
            <div className="openingText lastOpeningText">
              <h1>How to Play:</h1>
              <ul>
                <li>You say "Rock Paper Scissors" with a friend at the same time.</li>
                <li>You throw one of these hand gestures. Any would do.</li>
                <li>Remember rock beats scissors, scissors beats paper, and paper beats rock.</li>
                <li>You win, you win. Congrats.</li>
              </ul>
            </div>
          </div>
        </div>
        <RedirectToEula></RedirectToEula>
        <Footer></Footer>
      </div>
    );
  } 
}