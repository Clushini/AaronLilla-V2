import React, { Component } from 'react';
import TopBar from './components/topbar';
import BottomBar from './components/bottombar';
import Content from './components/content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: "background1",
      transition: false,
      page: "Portfolio",
      color: "red"
    }

    this.myRef = React.createRef();
    this.handleBackground = this.handleBackground.bind(this);
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
    
  }

  render() {
    return (
        <frosted-glass-container class="height">
          <div className={"App " + "cursor_" + this.state.color}>
            <frosted-glass blur-amount="3px" overlay-color="#00000010" class="topbar">
                <TopBar lastpage={this.test} activepage={this.handleBackground}/>
            </frosted-glass>
            <div id="frosthandle" className={`wrap ${this.state.background}`} ref={this.myRef}>
              <div className="content">
              <Content page={this.state.page}/>
              </div>
            </div>
            <frosted-glass blur-amount="3px" overlay-color="#00000010" class="bottombar">
                <BottomBar backclick={this.handleBackClick} lastpage={this.test} background={this.state.background} color={this.state.color}/>
            </frosted-glass>
          </div>
        </frosted-glass-container>
    );
  }
}

export default App;