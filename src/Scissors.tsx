import React from 'react';
import './App.css';
import {NavBar} from './NavBar';
import {Footer} from './Footer';
import {RedirectToEula} from './RedirectToEula';
import {PostingBody} from './Posting';
import {ScissorsPostPage} from './Posting';

export class Scissors extends React.Component {
    render() {
      return(
        <div>
          <NavBar firstOptionColor="none" secondOptionColor="none" thirdOptionColor="none" fourthOptionColor="rgb(62,48,211)"></NavBar>
          <div className="forumBody">
            <PostingBody presentStorage={<ScissorsPostPage></ScissorsPostPage>}></PostingBody>
          </div>
          <Footer></Footer>
          <RedirectToEula></RedirectToEula>
        </div>
      );
    } 
}