import React, { Component } from 'react';
import TopBar from './components/topbar';
import BottomBar from './components/bottombar';
import Content from './components/content';
import Acrylic from 'react-acrylic';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: "background1",
      transition: false,
      page: "Portfolio",
      color: "red",
      freequote: false,
      size: 70
    }

    this.myRef = React.createRef();
    this.handleBackground = this.handleBackground.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('https://api.github.com');
    const json = await response.json();
    console.log(json.current_user_url);
  }

  componentDidUpdate() {
    let list = document.getElementsByClassName("wrap");
    for (let item of list) {
      if (item.className !== `wrap ${this.state.background}`) {
        item.className = `wrap ${this.state.background}`;
      }
    }
  }

  handleBackground(page) {
    switch(page) {
      case 'About':
        this.setState({background: "background2", page: "About", color: "green"});
      break;
      case 'Portfolio':
        this.setState({background: "background1", page: "Portfolio", color: "red"});
      break;
      case 'Resume':
        this.setState({background: "background3", page: "Resume", color: "purple"});
      break;
      case "Contact":
        this.setState({background: "background4", page: "Contact", color: "blue"});
      break;
      default:
      break;
    }
    this.setState({size: this.state.size + 1});
  }

  render() {
    return (
          <div className={"App " + "cursor_" + this.state.color}>
            {this.state.freequote && <div className="quotewrap">awdawd</div>}
            <Acrylic
              colorOverlay='#555'
              opacity='0.9'
        
              position='fixed'
              top='0px'
              left='0px'
              width='100%'
              height="70px"
        
              blur={70}
              borderRadius='2px'
              borderRadius='2px'
            >
              <TopBar lastpage={this.test} activepage={this.handleBackground} size={this.state.size}/>
            </Acrylic>
            <div id="frosthandle" className={`wrap ${this.state.background}`} ref={this.myRef}>
              <div className="content">
              <Content page={this.state.page}/>
              </div>
            </div>
              <BottomBar backclick={this.handleBackClick} lastpage={this.test} background={this.state.background} color={this.state.color}/>
          </div>
    );
  }
}

export default App;