import React from 'react';
import Animasi from '../../../Komponen/Animasi';
import Header from '../../../Komponen/Header';


const About= () => {
    return(
        <Animasi>
            <Header></Header>

            <h3 className="text-center">About</h3>
            <figure className="text-center">
            <blockquote clasName="blockquote">
                <p>Taufiq Akbar</p>
            </blockquote>
            <figcaption class="blockquote-footer" id="about_me-details">
                Final Year Statistical Student at 
            </figcaption>
            <a href="https://unhas.ac.id/v2/">
                <i id="about_me-form">Hasanuddin Unversity</i>
            </a>
            </figure>
        </Animasi>
        
    )
}; 




export default About;