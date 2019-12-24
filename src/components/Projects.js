import React, { Component } from 'react';
import '../assets/sass/Projects.scss';
// import '../assets/sass/bootstrap/bootstrap-grid.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: null,
        };
    }
    render() {
        return (
            <div>
              <div class="container">
                  <div class="row">
                      <div class="col-3">Col 1 of 2</div>
                      <div class="col-6">Col 2 of 2</div>
                  </div>
                  <div class="row">
                      <div class="col">Col 1 of 2</div>
                      <div class="col">Col 2 of 2</div>
                  </div>
                  <div class="row">
                    <div class="col-md">
                        <p>Hello World</p>
                    </div>
                    <div class="col">
                        <p>Col 2 of 2 hello</p>
                    </div>
                  </div>
              </div>
            </div>
        )
    }

}

export default Projects;
