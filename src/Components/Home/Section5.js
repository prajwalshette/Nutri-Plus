import React from 'react'
import '../CSS/Section5.css'
import prajwal from "../images/prajwal.jpg"

export default function Section5() {
    return (
        <>
            <div className='Section5'>
                <h3>know about the creator</h3>
                <div>
                    <div className='row '>
                        <div className='col-md-6 mx-1 sec5bx1'>
                            <p>I'm a self-taught programmer having a keen interest in Web Development and Computer Science, who wants to learn new things and gain more knowledge about upcoming technology. <a href="https://www.linkedin.com/in/prajwal-shette-19649a205/" target='_blank'>visit my linkedin profile</a> for more info.</p>
                            <a href=""></a>
                        </div>
                        <div className='col-md-3 mx-1 img1 sec5bx2'>
                            <img className="img-fluid" src={prajwal} alt="" />

                        </div>


                    </div>
                </div>
            </div>
            <hr />

        </>
    )
}
