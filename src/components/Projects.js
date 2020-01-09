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
    if (props.value === 1) {
        highLogo = lang1Logo;
    } else  if (props.value === 2) {
        highLogo = lang2Logo;
    } else if (props.value === 3) {
        highLogo = lang3Logo;
    } else if (props.value === 4) {
        highLogo = lang4Logo;
    } else {
        highLogo = lang5Logo;
    }
    return(
        <div>
          <img className="langLogo" src={highLogo} alt="Language Logo"/>
        </div>
    );
}

function Listing(props) {
    let lang;
    if (props.value === 1) {
        lang = rLang;
    } else  if (props.value === 2) {
        lang = pythonLang;
    } else if (props.value === 3) {
        lang = mysqlLang;
    } else if (props.value === 4) {
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
          <section
            className="resume-section p-3 p-lg-5 d-flex justify-content-center"
            id="experience">
            <div className="w-100">
              <h2 className="mb-5">Experience</h2>
                <div className="container d-flex flex-wrap">
                  <div className="row no-gutters">
                      <div className="col px-4 m-2">
                        <button onClick={() => this.setState({value: 1})}>
                            <img className="langLogo" src={lang1Logo} alt="R Logo"/>
                        </button>
                      </div>
                      <div className="col px-4 m-2">
                        <button onClick={() => this.setState({value: 2})}>
                            <img className="langLogo" src={lang2Logo} alt="Python Logo"/>
                        </button>
                        </div>
                    <div className="col px-4 m-2">
                      <button onClick={() => this.setState({value: 3})}>
                        <img className="langLogo" src={lang3Logo} alt="mySQL Logo"/>
                      </button>
                    </div>
                    <div className="col px-4 m-2">
                      <button onClick={() => this.setState({value: 4})}>
                        <img className="langLogo" src={lang4Logo} alt="SAS Logo"/>
                      </button>
                    </div>
                    <div className="col px-4 m-2 ">
                      <button onClick={() => this.setState({ value: 5 })}>
                        <img className="langLogo" src={lang5Logo} alt="Tableau Logo"/>
                      </button>
                    </div>
                  </div>
                  <div className="row no-gutters">

                  </div>
              </div>
              <div className="highlight resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="col-3"><Highlight value={this.state.value}/></div>
                <div className="col-6"><Listing value={this.state.value}/></div>
              </div>
            </div>
          </section>
        )
    }

}


export default Projects;
