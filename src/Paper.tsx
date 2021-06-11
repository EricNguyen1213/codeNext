import React from 'react';
import './App.css';
import {NavBar} from './NavBar';
import {Footer} from './Footer';
import {RedirectToEula} from './RedirectToEula';
import {PostingBody} from './Posting';
import {PaperPostPage} from './Posting';

export class Paper extends React.Component {
    render() {
      return(
        <div>
          <NavBar firstOptionColor="none" secondOptionColor="none" thirdOptionColor="rgb(62,48,211)" fourthOptionColor="none"></NavBar>
          <div className="forumBody">
            <PostingBody presentStorage={<PaperPostPage></PaperPostPage>}></PostingBody>    
          </div>
          <Footer></Footer>
          <RedirectToEula></RedirectToEula>
        </div>
      );
    } 
}