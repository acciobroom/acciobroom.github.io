import React, { Component } from 'react';
import '../assets/sass/Projects.scss';
// import '../assets/sass/bootstrap/bootstrap-grid.css';
import lang1Logo from '../assets/images/Rlogo.svg';
import lang2Logo from '../assets/images/Python-logo.svg';
import lang3Logo from '../assets/images/mysql-logo.png';
import lang4Logo from '../assets/images/SAS_logo.svg';
import lang5Logo from '../assets/images/tableau-logo.png';
import {rLang} from './Project-Consts';
import {sasLang} from './Project-Consts';
import {mysqlLang} from './Project-Consts';
import {pythonLang} from './Project-Consts';
import {tableauLang} from './Project-Consts';



function Highlight(props) {
    let highLogo;
    if (props.value == 1) {
        highLogo = lang1Logo;
    } else  if (props.value == 2) { 
        highLogo = lang2Logo;
    } else if (props.value == 3) {
        highLogo = lang3Logo;
    } else if (props.value == 4) {
        highLogo = lang4Logo;
    } else {
        highLogo = lang5Logo;
    }
    return(
        <div>
          <img class="langLogo" src={highLogo} alt="Language Logo"></img>
        </div>
    );
}

function Listing(props) {
    let lang;
    if (props.value == 1) {
        lang = rLang;
    } else  if (props.value == 2) {
        lang = pythonLang;
    } else if (props.value == 3) {
        lang = mysqlLang;
    } else if (props.value == 4) {
        lang = sasLang;
    } else {
        lang = tableauLang;
    }

    return (
        <div>
        <ul>
            {lang.map((value, index) => {
                return <div>
                <li key={index}><a href={value.link} target="_blank">{value.desc}</a></li>
                </div>
            })}
        </ul>
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
                        <button onClick={() => this.setState({value: 3})}>
                            <img class="langLogo" src={lang3Logo} alt="mySQL Logo"></img>
                        </button>
                    </div>
                    <div class="col">
                        <button onClick={() => this.setState({value: 4})}>
                            <img class="langLogo" src={lang4Logo} alt="SAS Logo"></img>
                        </button>
                    </div>
                        <div class="col">
                            <button onClick={() => this.setState({ value: 5 })}>
                                <img class="langLogo" src={lang5Logo} alt="Tableau Logo"></img>
                            </button>
                        </div>
                  </div>
              </div>
            </div>
        )
    }

}


export default Projects;
