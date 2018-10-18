import React, { Component } from 'react';
import Navbar from '../Nav/Nav.js';
import Landing from '../Landing/Landing.js';
import About from '../About/About.js';
import Skills from '../Skills/Skills.js';
import Projects from '../Projects/Projects.js';
import Experience from '../Experience/Experience.js';
import Footer from '../Footer/Footer.js';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Landing/>
                <About/>
                <Skills/>
                <Projects/>
                <Experience/>
                <Footer/>
            </div>
        );
    }
}

export default Home;