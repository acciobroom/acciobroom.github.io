import React, { Component } from 'react';
import '../assets/sass/Projects.scss';
// import '../assets/sass/bootstrap/bootstrap-grid.css';
import lang1Logo from '../assets/images/Rlogo.svg';
import lang2Logo from '../assets/images/Python-logo.svg';

function Highlight(props) {
    const r = "I need an icon";
    return(
        <div>
            {props.value}
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
        return (
            <div>
              <div class="container">
                  <div class="row">
                      <div class="col-3"><Highlight value={this.state.value}/></div>
                      <div class="col-6"><Listing value={this.state.value}/></div>
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
                        <button onClick={() => this.setState({value: 3})}>Button 3</button>
                    </div>
                    <div class="col">
                        <button onClick={() => this.setState({value: 4})}>Button 4</button>
                    </div>
                  </div>
              </div>
            </div>
        )
    }

}

function Square(props) {
    return (
        <div>
            Hello gg {props.value}
        </div>
    );
}

export default Projects;
