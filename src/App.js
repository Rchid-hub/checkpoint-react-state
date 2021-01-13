import React from "react"
import './App.css'
class App extends React.Component {
  state={
    fullname:"Rchid Baccouchi",
    bio:"23 years old, developer",
    imgSrc:"https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.0-9/123918274_1583452781852793_5655223741863063741_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=C0C9lfrG5e8AX9wD2Ik&_nc_ht=scontent.fnbe1-1.fna&oh=bf77664487883a6d04d5e5bd97aa8729&oe=601B82D3",
    profession:"Student",
    show: false,
    counter:0
  };

  componentDidMount(){
    setInterval(()=>this.setState({counter: this.state.counter+1}),1000);
  }
  
    updateShow(){
      this.setState({show:true});
    }
render(){
  if (this.state.show)
  return(
      <div>
      <h2>{this.state.counter}</h2>
      <h1>{this.state.fullname}</h1>
      <h2>{this.state.bio}</h2>
      <img width="300" alt ="profilepic"src={this.state.imgSrc}></img>
      <h2>{this.state.profession}</h2>
    </div>
    
   
  );
  else
  return(
    <div>
      <button onClick={this.updateShow.bind(this)} >Show !!</button>
      <h2>{this.state.counter}</h2>
    </div>
  )
   
  
}
}

export default App;
