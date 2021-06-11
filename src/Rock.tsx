import React from 'react';
import './App.css';
import {NavBar} from './NavBar';
import {Footer} from './Footer';
import {RedirectToEula} from './RedirectToEula';
import {RockPostPage} from './Posting';
import {PostingBody} from './Posting';

export class Rock extends React.Component {
    render() {
      return(
        <div>
          <NavBar firstOptionColor="none" secondOptionColor="rgb(62,48,211)" thirdOptionColor="none" fourthOptionColor="none"></NavBar>
          <div className="forumBody">
            <PostingBody presentStorage={<RockPostPage></RockPostPage>}></PostingBody>
            
          </div>
          <Footer></Footer>
          <RedirectToEula></RedirectToEula>
        </div>
      );
    } 
}