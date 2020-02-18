import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import Projects from '../components/Projects';
import LatexViewer from '../components/latex';



const IndexPage = () => (
  <Layout>
    <Sidebar/>
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            {/* come back to me */}
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                  <i className={`fab ${icon}`}/>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0"/>

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          {/*}
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2013 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
            </div>
          </div>
          {*/}
        </div>
      </section>


      <hr className="m-0"/>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Central Florida</h3>
              <div className="subheading mb-3">Doctor of Philosophy</div>
              <div>Statistics - Big Data Analytics</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2018 - May 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Minnesota - Duluth</h3>
              <div className="subheading mb-3">Master of Science</div>
              <div>Computational and Applied Mathematics</div>
              <div>Minor - Electrical Engineering</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2014 - May 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Michigan State University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computational and Applied Mathematics - Honors College</div>
              <div>Actuarial Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2010 - May 2014</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0"/>


      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <Projects />
          {/*}
          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-mysql-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
          {*/}
        </div>
      </section>

      <hr className="m-0"/>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            {/* come back to me */}
          </p>
          <p className="mb-0">
            {/* come back to me */}
          </p>
        </div>
      </section>

      <hr className="m-0"/>
          <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards">
         <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <h4>ORC Doctoral Fellowship</h4>
               <h5>Aug 2018 {'\u22C5'} University of Central Florida</h5>
              <p>Nominated by the Department of Statistics for this fellowship. Only one awarded per year.</p>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <h4>Duane E. Anderson Graduate Fellowship</h4>
              <h5>May 2015 {'\u22C5'}  Department of Mathematics, University of Minnesota Duluth</h5>
              <p>The award is to recruit women and minority students who have demonstrated academic merit to the study of mathematics and its applications.</p>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <h4>Lynn Briggs Summer Research Award</h4>
              <h5>May 2012 {'\u22C5'} Lyman Briggs College, Michigan State University</h5>
              <p>One of three students to receive the $3000 research award.</p>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <h4>Dr Ronald C. Hamelink Scholarship in Mathematics</h4>
              <h5>Aug 2011 {'\u22C5'} Lyman Briggs College, Michigan State University</h5>
              <p>Recipients are selected on the basis of previous academic achievement and professional goals.</p>
            </li>
          </ul>
        </div> 
      </section>
    </div>
  </Layout>
);

export default IndexPage;
