import React, { useState } from 'react';
import { RxChevronRight, RxChevronLeft, RxDotFilled } from "react-icons/rx";
import "./Project.css"; // Import your converted CSS file
import i1 from '../assects/images/restoran.png';
import i2 from '../assects/images/clik.png'
import i3 from '../assects/images/i3.jpg'

function Project() {
    const slides = [
        {
            url: i1,
            title: "Resturant Website",
            description: "Developed a responsive restaurant website clone using the Restoran Bootstrap 5 template. The project features a modern design, sections for menus, booking, and testimonials, along with responsive layouts optimized for all devices.",
            technologies: ["React", "CSS", "JavaScript"],
            link: "https://youtu.be/fYsrH2mZ7Gw?si=k2zazBv7rjQfPNcs",
        },
        {
            url: i2,
            title: "Clinik Website",
            description: "A user-friendly clinic website with online booking, doctor profiles, and contact details. Fully responsive for easy access on any device",
            technologies: ["Node.js", "Express", "MongoDB"],
            link: "https://youtu.be/fYsrH2mZ7Gw?si=k2zazBv7rjQfPNcs",
        },
        {
            url: i3,
            title: "Project 3",
            description: "This is the description for Project 3. It highlights some of the most innovative solutions.",
            technologies: ["Python", "Django", "PostgreSQL"],
            link: "https://youtu.be/fYsrH2mZ7Gw?si=k2zazBv7rjQfPNcs",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="pr1 container-fluid">
            <div className="row projr">
                <div className="col-6 projc1">
                    <div className="m-auto py-16 px-4 relative group" style={{ width: "700px", height: "500px" }}>
                        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-cover duration-500 box">

                        </div>

                        <div
                            className="nav-button left" //use the class from the normal css
                            onClick={prevSlide}
                        >
                            <RxChevronLeft size={25} />
                        </div>

                        <div
                            className="nav-button right" //use the class from the normal css
                            onClick={nextSlide}
                        >
                            <RxChevronRight size={25} />
                        </div>

                        <div className="dot-container">
                            {slides.map((_, slideIndex) => (
                                <button
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className={`dot ${currentIndex === slideIndex ? 'active' : ''}`} //use dot and active class from the normal css
                                >
                                    <RxDotFilled size={32} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-6 projc2">
                    <div className='row srow'>
                        <div className='col'>
                            <h1 id='heading'>{slides[currentIndex].title}</h1>

                            <p className='par'><span id='desc'>Project Description : </span>{slides[currentIndex].description}</p><br />
                            <span>Technologies Used:</span>
                            <ul>
                                {slides[currentIndex].technologies.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                            <a href={slides[currentIndex].link} className="pbut ">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;