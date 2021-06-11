import React, { ChangeEvent, FormEvent, FormEventHandler } from 'react';
import './App.css';


interface PostingBodyProps {
  presentStorage: any;
}
export class PostingBody extends React.Component<PostingBodyProps> {
  constructor(props:PostingBodyProps) {
    super(props);
  }
    render() {
      return(
        <div className="postingColumn">
          <div className="postingBoard">
            {this.props.presentStorage}
          </div>
          <div className="communityBoard">
            <div className="communityContent">
                <div className="communityHeaderBox">
                    <h2>About the Community</h2>
                </div>
                <p>To put it simply, this is a sauntuary for Ro-Sham-Bo enthusiasts to share their love for the historic, global pastime known as Rock, Paper, Scissors. Since everyone has got to have played this game once in their lifetime, this is a wonderful community filled with all kinds of demographics: old, young, male, or female. To those not enthusiasts yet, we hope that this forum influences you to become one. Otherwise, just have fun here.</p>
            </div>
          </div>
        </div>
      );
    }
}
  

interface Post {
  imageSource: string;
  content: string;
  votes: number;
}
interface PostPageState {
  imageSrc: string;
  posts: any[];
}

let rockPosts= [{content:"Here is my favorite rock", imageSource:"https://images.news18.com/ibnlive/uploads/2019/08/Sports-61.png", votes: 1256},{content:"Took me freakin hours for this.", imageSource:"https://www.publicdomainpictures.net/pictures/280000/velka/balancing-rocks-1538740106kMQ.jpg", votes: 2487},{content:"Think I hit it rich boys", imageSource:"https://st.depositphotos.com/1465075/5017/i/950/depositphotos_50178199-stock-photo-rough-diamond.jpg", votes: 369}];
export class RockPostPage extends React.Component<{}, PostPageState,Post> {
  reader = new FileReader();
  constructor(props:Post) {
    super(props);
    this.state = {
      posts: rockPosts,
      imageSrc: ""
    };
    this.reader.onload = this.readerOnLoad.bind(this);
  }
  readerOnLoad(event: ProgressEvent<FileReader>) {
    if (event && event.target && event.target.result) {
      this.setState({imageSrc: event.target.result as string});
    }
        
  }
  handlePictureUpload(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files.item(0)!;
      this.reader.readAsDataURL(file);
    }
  }
  submitPost(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submittedContent = event.currentTarget.contentField.value;
    rockPosts.push({content: submittedContent, imageSource: this.state.imageSrc, votes: 0});
    this.setState({
      posts: rockPosts
    });
    event.currentTarget.contentField.value = '';
  }
  addVote(idx:number) {
    let placeHolderPosts = [];
    for (let i = 0; i < rockPosts.length; i++){
      if (i == idx) {
        placeHolderPosts.push({content:rockPosts[i].content, imageSource:rockPosts[i].imageSource, votes:rockPosts[i].votes+1})
      } else {
        placeHolderPosts.push(rockPosts[i]);
      }
    }
    rockPosts = placeHolderPosts
    this.setState({
      posts: rockPosts
    })
  }
  subtractVote(idx:number) {
    let placeHolderPosts = [];
    for (let i = 0; i < rockPosts.length; i++){
      if (i == idx) {
        placeHolderPosts.push({content:rockPosts[i].content, imageSource:rockPosts[i].imageSource, votes:rockPosts[i].votes-1})
      } else {
        placeHolderPosts.push(rockPosts[i]);
      }
    }
    rockPosts = placeHolderPosts
    this.setState({
      posts: rockPosts
    })
  }
  render() {
    return (
      <div className="App">
        <div className="inputerContainer">
          <div>
            <h1>Welcome to the Rock Page:</h1>
          </div>
          <form onSubmit={e => this.submitPost(e)}>
            <input type="file" accept="image/*" onChange={(event) => this.handlePictureUpload(event)} multiple = {false} />
            <div>
              <input name="contentField" type="text" />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
          
        <div className="postingHere">
          {
            this.state.posts.map((post, idx) => {
              if(post.imageSource.length > 0 && post.content != ""){
                return(
                  <div className="post">
                    <div className="upvoteSection">
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" onClick={()=>this.addVote(idx)}/>
                      <h2>{post.votes}</h2>
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Black_Down_Arrow.png" onClick={()=>this.subtractVote(idx)}/>
                    </div>
                    <div className="contentSection">
                      <div>
                        <h2 className="postText">{post.content}</h2>
                      </div>
                      <img className="postImage" src={post.imageSource} />
                    </div>
                  </div> 
                );
              }else if(post.imageSource.length >0){
                return(
                  <div className="post">
                    <div className="upvoteSection">
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" onClick={()=>this.addVote(idx)}/>
                      <h2>{post.votes}</h2>
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Black_Down_Arrow.png" onClick={()=>this.subtractVote(idx)}/>
                    </div>
                    <div className="contentSection">
                      <img className="postImage" src={post.imageSource} />
                    </div>
                  </div> 
                );
              } else if (post.content != "") {
                return(
                  <div className="post">
                    <div className="upvoteSection">
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" onClick={()=>this.addVote(idx)}/>
                      <h2>{post.votes}</h2>
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Black_Down_Arrow.png" onClick={()=>this.subtractVote(idx)}/>
                    </div>
                    <div className="contentSection">
                      <h2 className="postText">{post.content}</h2>
                    </div>
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    );
  }
}


let paperPosts= [{content:"Those gosh darn litterers", imageSource:"https://turnto10.com/resources/media/35cd3e03-a63b-4cf0-82c0-2e0b115da7bd-large16x9_Paper1.jpg?1484695667645", votes: 3897},{content:"Some guy dropped this. Should I return it?", imageSource:"https://www.inquirer.com/resizer/F6Xu58WKONJ8nylhSCzYULl6jjw=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/KV6DYIYUEFC4NJZSSTUM46JKJA.jpg", votes: 9342},{content:"The only use for these is in rock papers scissors.", imageSource:"https://www.pewtrusts.org/-/media/post-launch-images/2020/09/sln_sept8_1/16x9_m.jpg", votes: 678}];
export class PaperPostPage extends React.Component<{}, PostPageState,Post> {
  reader = new FileReader();
  constructor(props:Post) {
    super(props);
    this.state = {
      posts: paperPosts,
      imageSrc: ""
    };
    this.reader.onload = this.readerOnLoad.bind(this);
  }
  readerOnLoad(event: ProgressEvent<FileReader>) {
    if (event && event.target && event.target.result) {
      this.setState({imageSrc: event.target.result as string});
    }
        
  }
  handlePictureUpload(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files.item(0)!;
      this.reader.readAsDataURL(file);
    }
  }
  submitPost(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submittedContent = event.currentTarget.contentField.value;
    paperPosts.push({content: submittedContent, imageSource: this.state.imageSrc, votes: 0});
    this.setState({
      posts: paperPosts
    });
    event.currentTarget.contentField.value = '';
  }
  addVote(idx:number) {
    let placeHolderPosts = [];
    for (let i = 0; i < paperPosts.length; i++){
      if (i == idx) {
        placeHolderPosts.push({content:paperPosts[i].content, imageSource:paperPosts[i].imageSource, votes:paperPosts[i].votes+1})
      } else {
        placeHolderPosts.push(paperPosts[i]);
      }
    }
    paperPosts = placeHolderPosts
    this.setState({
      posts: paperPosts
    })
  }
  subtractVote(idx:number) {
    let placeHolderPosts = [];
    for (let i = 0; i < paperPosts.length; i++){
      if (i == idx) {
        placeHolderPosts.push({content:paperPosts[i].content, imageSource:paperPosts[i].imageSource, votes:paperPosts[i].votes-1})
      } else {
        placeHolderPosts.push(paperPosts[i]);
      }
    }
    paperPosts = placeHolderPosts
    this.setState({
      posts: paperPosts
    })
  }
  render() {
    return (
      <div className="App">
        <div className="inputerContainer">
          <div>
            <h1>Welcome to the Paper Page:</h1>
          </div>
          <form onSubmit={e => this.submitPost(e)}>
            <input type="file" accept="image/*" onChange={(event) => this.handlePictureUpload(event)} multiple = {false} />
            <div>
              <input name="contentField" type="text" />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
          
        <div className="postingHere">
          {
            this.state.posts.map((post, idx) => {
              if(post.imageSource.length > 0 && post.content != ""){
                return(
                  <div className="post">
                    <div className="upvoteSection">
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" onClick={()=>this.addVote(idx)}/>
                      <h2>{post.votes}</h2>
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Black_Down_Arrow.png" onClick={()=>this.subtractVote(idx)}/>
                    </div>
                    <div className="contentSection">
                      <div>
                        <h2 className="postText">{post.content}</h2>
                      </div>
                      <img className="postImage" src={post.imageSource} />
                    </div>
                  </div> 
                );
              }else if(post.imageSource.length >0){
                return(
                  <div className="post">
                    <div className="upvoteSection">
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" onClick={()=>this.addVote(idx)}/>
                      <h2>{post.votes}</h2>
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Black_Down_Arrow.png" onClick={()=>this.subtractVote(idx)}/>
                    </div>
                    <div className="contentSection">
                      <img className="postImage" src={post.imageSource} />
                    </div>
                  </div> 
                );
              } else if (post.content != "") {
                return(
                  <div className="post">
                    <div className="upvoteSection">
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" onClick={()=>this.addVote(idx)}/>
                      <h2>{post.votes}</h2>
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Black_Down_Arrow.png" onClick={()=>this.subtractVote(idx)}/>
                    </div>
                    <div className="contentSection">
                      <h2 className="postText">{post.content}</h2>
                    </div>
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    );
  }
}



let scissorsPosts= [{content:"When I was a youngster, all I had was this.", imageSource:"https://spy.com/wp-content/uploads/2019/12/garden-shears.jpg?w=1000&h=750&crop=1", votes: 2367},{content:"Yo who remember these?", imageSource:"https://images-na.ssl-images-amazon.com/images/I/71hHJujMqRL._AC_SY355_.jpg", votes: 5689},{content:"Me and my husband use these whenever we are cooking to play.", imageSource:"https://spy.com/wp-content/uploads/2020/03/template-04.jpg?w=675", votes: 8934}];
export class ScissorsPostPage extends React.Component<{}, PostPageState,Post> {
  reader = new FileReader();
  constructor(props:Post) {
    super(props);
    this.state = {
      posts: scissorsPosts,
      imageSrc: ""
    };
    this.reader.onload = this.readerOnLoad.bind(this);
  }
  readerOnLoad(event: ProgressEvent<FileReader>) {
    if (event && event.target && event.target.result) {
      this.setState({imageSrc: event.target.result as string});
    }
        
  }
  handlePictureUpload(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files.item(0)!;
      this.reader.readAsDataURL(file);
    }
  }
  submitPost(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submittedContent = event.currentTarget.contentField.value;
    scissorsPosts.push({content: submittedContent, imageSource: this.state.imageSrc, votes: 0});
    this.setState({
      posts: scissorsPosts
    });
    event.currentTarget.contentField.value = '';
  }
  addVote(idx:number) {
    let placeHolderPosts = [];
    for (let i = 0; i < scissorsPosts.length; i++){
      if (i == idx) {
        placeHolderPosts.push({content:scissorsPosts[i].content, imageSource:scissorsPosts[i].imageSource, votes:scissorsPosts[i].votes+1})
      } else {
        placeHolderPosts.push(scissorsPosts[i]);
      }
    }
    scissorsPosts = placeHolderPosts
    this.setState({
      posts: scissorsPosts
    })
  }
  subtractVote(idx:number) {
    let placeHolderPosts = [];
    for (let i = 0; i < scissorsPosts.length; i++){
      if (i == idx) {
        placeHolderPosts.push({content:scissorsPosts[i].content, imageSource:scissorsPosts[i].imageSource, votes:scissorsPosts[i].votes-1})
      } else {
        placeHolderPosts.push(scissorsPosts[i]);
      }
    }
    scissorsPosts = placeHolderPosts
    this.setState({
      posts: scissorsPosts
    })
  }
  render() {
    return (
      <div className="App">
        <div className="inputerContainer">
          <div>
            <h1>Welcome to the Scissors Page:</h1>
          </div>
          <form onSubmit={e => this.submitPost(e)}>
            <input type="file" accept="image/*" onChange={(event) => this.handlePictureUpload(event)} multiple = {false} />
            <div>
              <input name="contentField" type="text" />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
          
        <div className="postingHere">
          {
            this.state.posts.map((post, idx) => {
              if(post.imageSource.length > 0 && post.content != ""){
                return(
                  <div className="post">
                    <div className="upvoteSection">
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" onClick={()=>this.addVote(idx)}/>
                      <h2>{post.votes}</h2>
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Black_Down_Arrow.png" onClick={()=>this.subtractVote(idx)}/>
                    </div>
                    <div className="contentSection">
                      <div>
                        <h2 className="postText">{post.content}</h2>
                      </div>
                      <img className="postImage" src={post.imageSource} />
                    </div>
                  </div> 
                );
              }else if(post.imageSource.length >0){
                return(
                  <div className="post">
                    <div className="upvoteSection">
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" onClick={()=>this.addVote(idx)}/>
                      <h2>{post.votes}</h2>
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Black_Down_Arrow.png" onClick={()=>this.subtractVote(idx)}/>
                    </div>
                    <div className="contentSection">
                      <img className="postImage" src={post.imageSource} />
                    </div>
                  </div> 
                );
              } else if (post.content != "") {
                return(
                  <div className="post">
                    <div className="upvoteSection">
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" onClick={()=>this.addVote(idx)}/>
                      <h2>{post.votes}</h2>
                      <img className="arrow" src="https://upload.wikimedia.org/wikipedia/en/e/e0/Black_Down_Arrow.png" onClick={()=>this.subtractVote(idx)}/>
                    </div>
                    <div className="contentSection">
                      <h2 className="postText">{post.content}</h2>
                    </div>
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    );
  }
}
  





