import React, { Component } from 'react';
import '../assets/sass/Projects.scss';
// import '../assets/sass/bootstrap/bootstrap-grid.css';
import lang1Logo from '../assets/images/Rlogo.svg';
import lang2Logo from '../assets/images/Python-logo.svg';
import lang3Logo from '../assets/images/mysql-logo.png';
import lang4Logo from '../assets/images/SAS_logo.svg';



function Highlight(props) {
    const r = "I need an icon";
    return(
        <div>
            {props.value}
          {r}
        </div>
    );
}

function Listing(props) {
    const r = "Hello R Listing";
    return (
        <div>
            {props.value}
        </div>
    );
}
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }


    render() {
      let test;
      if (this.state.value == 2) {
        test = "Hello Guys"
      } else {
        test = "Not Numbers 2"
      }
        return (
            <div>
              <div class="container">
                  <div class="row">
                      <div class="col-3"><Highlight value={this.state.value}/></div>
                      <div class="col-6"><Listing value={this.state.value} />{test}</div>
                  </div>
                  <div class="row">
                      <div class="col">
                        <button onClick={() => this.setState({value: 1})}>
                            <img class="langLogo" src={lang1Logo} alt="R Logo"></img>
                        </button>
                      </div>
                      <div class="col">
                        <button onClick={() => this.setState({value: 2})}>
                            <img class="langLogo" src={lang2Logo} alt="Python Logo"></img>
                        </button>
                        </div>
                  </div>
                  <div class="row">
                    <div class="col">
                        <button onClick={() => this.setState({value: 3})}>
                            <img class="langLogo" src={lang3Logo} alt="mySQL Logo"></img>
                        </button>
                    </div>
                    <div class="col">
                        <button onClick={() => this.setState({value: 4})}>
                            <img class="langLogo" src={lang4Logo} alt="SAS Logo"></img>
                        </button>
                    </div>
                  </div>
              </div>
            </div>
        )
    }

}

export default Projects;
