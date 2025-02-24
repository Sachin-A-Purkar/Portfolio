import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import './Acadmeics.css';

export default function Acadmeics() {
  return (
    <div className="ac12">
      <div className="row acrow1">
        <h1 className="qualification-heading">Qualification</h1>
      </div>
      <div className="row acrow2">
        <div className="col card">
          <h1 className="card-title">
            <FaGraduationCap /> B.Sc. Computer Science
          </h1>
          <h3 className="text academic-year">(2021-2024)</h3>
          <h3 className="text institute">
            <span>Institute:</span> K.T.H.M College, Nashik.
          </h3>
          <p className="text description">
            Graduated with Average C.G.P.A of 6.98 (First Class) in the jjt jiee.<br/>
          </p>
          <a href="https://kthmcollege.ac.in/" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary mt-3 w-34">Visit Website</button>
          </a>
        </div>
        <div className="col card">
          <h1 className="card-title">
            <FaGraduationCap /> 12th (science)
          </h1>
          <h3 className="text academic-year">(2019-2021)</h3>
          <h3 className="text institute">
            <span>Institute:</span> BOY’S TOWN JR COLLEGE, Nashik.
          </h3>
          <p className="text description">
            Obtained an impressive score of 72.50% in 12th standard examinations.
          </p>
          <a href="https://boystown.in/app2014/" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary mt-3 w-34">Visit Website</button>
          </a>
        </div>
        <div className="col card">
          <h1 className="card-title">
            <FaGraduationCap /> 10th Boards
          </h1>
          <h3 className="text academic-year">(2018-2019)</h3>
          <h3 className="text institute">
            <span>Institute:</span> SARASWATI VIDYALAYA, Nashik.
          </h3>
          <p className="text description">
            Obtained an impressive score of 76.80% in 10th standard examinations.
          </p>
          <a href="#home">
            <button className="btn btn-primary mt-3 w-34">Visit Website</button>
          </a>
        </div>
      </div>
    </div>
  );
}