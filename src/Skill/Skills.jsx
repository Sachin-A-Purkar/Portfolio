import React from 'react'
import "./Skill.css"

export default function Skills(props) {
  return (
    <div className='container-fluid skill'>


      <div className='row rw3'>
        <h1 className='hea1'> Skills</h1>
      </div>


      <div className='row rw1'>

        <div className='col-3 co1'>
              <div className="skill-item">
                  <a href='#Skills' title="HTML 5"><img src={props.img1} alt='HTML 5'/></a><br/>
                  <h1 className='uhead'>HTML 5</h1>
              </div>
              
              <div className="skill-item">
                <a href='#Skills' title="C Programming"><img src={props.img8} alt='iyk'/></a><br/>
                <h1 className='uhead'>C</h1>
              </div>

              <div className="skill-item">
                  <a href='#Skills' title="React Js"><img src={props.img5} alt='iyx'/></a><br/>
                  <h1 className='uhead'>React js</h1>
              </div> 
        </div>


          <div className='col-3 co1'>
            <div className="skill-item" >
              <a href='#Skills' title="CSS 3"><img src={props.img2} alt='iyu' /></a><br/>
              <h1 className='uhead'>CSS 3</h1>
            </div>

            <div className="skill-item">
            <a href='#Skills' title="C++"><img src={props.img9} alt='iya'/></a><br/>
              <h1 className='uhead'>C++</h1>
              </div>

              <div className="skill-item">
              <a href='#Skills' title="Django"><img src={props.img11} alt='iys'/></a><br/>
              <h1 className='uhead'>Django</h1>
            </div>
          </div>



          <div className='col-3 co1'>
            <div className="skill-item">
              <a href='#Skills' title="Javascript"><img src={props.img3} alt='iyi'/></a><br/>
              <h1 className='uhead'>Javascript </h1>
            </div>

            <div className="skill-item">
              <a href='#Skills' title="Python"><img src={props.img12} alt='iys'/></a><br/>
              <h1 className='uhead'>Python</h1>
            </div>

            <div className="skill-item">
          <a href='#Skills' title="My SQL"><img src={props.img6} alt='iyr'/></a><br/>
              <h1 className='uhead'>MySQl</h1>
            </div>

            
          </div>



          <div className='col-3 co1'>
            <div className="skill-item">
            <a href='#Skills' title="BootStrap"><img src={props.img4} alt='iyr'/></a><br/>
              <h1 className='uhead'>Bootstrap </h1>
            </div>

            <div className="skill-item">
              <a href='#Skills' title="PHP"><img src={props.img7} alt='iys'/></a><br/>
              <h1 className='uhead'>PHP</h1>
            </div>

            <div className="skill-item">
              <a href='#Skills' title="Oracle"><img src={props.img13} alt='iyr'/></a><br/>
              <h1 className='uhead'>Oracle</h1>
            </div>
          </div>
      </div>
    
    </div>
  )
}
