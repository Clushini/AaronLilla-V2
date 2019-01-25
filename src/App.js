import React, { Component } from 'react';
import TopBar from './components/topbar';
import BottomBar from './components/bottombar';
import Content from './components/content';
import { Scrollbars } from 'react-custom-scrollbars';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: "background1",
      transition: false,
      page: "Portfolio"
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
          this.setState({background: "background2", page: "About"});
      break;
      case 'Portfolio':
        this.setState({background: "background1", page: "Portfolio"});
      break;
      case 'Resume':
        this.setState({background: "background3", page: "Resume"});
      break;
      case "Contact":
        this.setState({background: "background4", page: "Contact"});
      break;
    }
    
  }

  render() {
    return (
        <frosted-glass-container class="height">
          <div className="App">
            <frosted-glass blur-amount="4px" overlay-color="#00000090" class="topbar">
                <TopBar lastpage={this.test} activepage={this.handleBackground}/>
            </frosted-glass>
            <div id="frosthandle" className={`wrap ${this.state.background}`} ref={this.myRef}>
              <div className="content">
              <Content page={this.state.page}/>
              </div>
            </div>
            <frosted-glass blur-amount="4px" overlay-color="#00000050" class="bottombar">
                <BottomBar backclick={this.handleBackClick} lastpage={this.test} background={this.state.background}/>
            </frosted-glass>
          </div>
        </frosted-glass-container>
    );
  }
}

export default App;