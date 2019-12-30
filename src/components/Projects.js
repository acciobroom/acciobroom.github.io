import React, { Component } from 'react';
import '../assets/sass/Projects.scss';
// import '../assets/sass/bootstrap/bootstrap-grid.css';
import lang1Logo from '../assets/images/Rlogo.svg';
import lang2Logo from '../assets/images/Python-logo.svg';
import lang3Logo from '../assets/images/mysql-logo.png';
import lang4Logo from '../assets/images/SAS_logo.svg';



function Highlight(props) {
    let highLogo;
    if (props.value == 1) {
        highLogo = lang1Logo;
    } else  if (props.value == 2) { 
        highLogo = lang2Logo;
    } else if (props.value == 3) {
        highLogo = lang3Logo;
    } else {
        highLogo = lang4Logo;
    }
    return(
        <div>
          <img class="langLogo" src={highLogo} alt="Language Logo"></img>
        </div>
    );
}

function Listing(props) {
    const rLang = [
        {
            link: 'https://www.google.com',
            desc: "Goomba"
        },
        {
            link: 'https://www.github.com',
            desc: "Kool-aid"
        }
    ];
    const sasLang = [
        {
            link: 'saslink',
            desc: 'sas description'
        }
    ];
    const pythonLang = [
        {
            link: 'python link',
            desc: 'python desc'
        },
        {
            link: 'python link 2',
            desc: 'python desc 2'
        }
    ];
    const mysqlLang = [
        {
            link: 'sql link 1',
            desc: 'sql link2'
        }
    ]
    let lang;
    if (props.value == 1) {
        lang = rLang;
    } else  if (props.value == 2) {
        lang = pythonLang;
    } else if (props.value == 3) {
        lang = mysqlLang;
    } else {
        lang = sasLang;
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
                  </div>
              </div>
            </div>
        )
    }

}


export default Projects;
