"use client";
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css';



const MainContainer = () => {

  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHovered3, setIsHovered3] = useState(false)
  const [isHovered4, setIsHovered4] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };


  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  const sideIntrostyle = {
    float: "left",
    marginTop: "200px", marginLeft: "100px"
  }
  const sideUpperstyle = {
    fontSize: "2.0rem",
    fontColor: "black",
    fontStyle: "italian"
  }
  const sideLowerStyle = {
    height: "300px",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem"
  }
  const RightloginStyle = {
    height: "300px",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    float: "right",
    marginLeft: "170px",
    marginRight: "400px",
    marginTop: "200px"
  }
  const button1Style = {
    borderColor: "purple", /* Customize the border color */
    minWidth: "450px", /* Set the minimum width */
    maxWidth: "300px",/* Set the maximum width */
    color: "black"
  }
  const submitbuttonStyle = {
    backgroundColor: "purple", /* Customize the border color */
    minWidth: "450px", /* Set the minimum width */
    maxWidth: "300px",/* Set the maximum width */
  }


  return (

    <div>
      <>
        <head>
          <meta name="viewport" content="width device-width, initial-scale=1.0"></meta>
        </head>


        <div className='mainbody ' style={{ backgroundColor: "#E5E1DA", height: "1000px", width: "100%", display: "flex" }}>

          <div className='sideIntro ' style={sideIntrostyle}>
            <div className="sideUpper  " style={sideUpperstyle}></div>
            <div className='sideLower col-4' style={sideLowerStyle} >

              <img src="Group.png"></img>

            </div>
          </div>


          <div className='Login' style={RightloginStyle}>
            <h1>Sign In</h1>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" class={`btn btn-outline-light`} style={button1Style}><img src="Google.png"></img>Continue with Google</button>
            </div>
            <div class="btn-group" style={{ marginTop: "40px" }} role="group" aria-label="Basic outlined example">
              <button type="button" class={`btn btn-outline-light`} style={button1Style}><img src="Facebook.png"></img>Continue with Facebook</button>
            </div>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <hr style={{ color: "purple", width: "30%", height: "20px" }}></hr><b>Or connect with</b><hr style={{ color: "purple", width: "30%" }}></hr>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <p style={{ fontSize: "0.8rem", color: "purple" }}>Password Strength!</p>
            <p style={{ fontSize: "1.2rem", color: "purple" }}>By continuing you agree to our <b>Terms or Services</b>and <b>Privacy Policy</b> </p>
            <button type="button" class="btn btn-primary" style={submitbuttonStyle}>Primary</button>


          </div>



        </div>








        <div className="Secondpart" style={{ height: "500px", width: "100%", display: "flex", marginBottom: "30px" }}>

          <div className='midBox' style={{ height: "1440px", width: "542", marginTop: "104px", marginLeft: "300px", marginBottom: "30px" }}>



            <div style={{ display: "flex" }}>

              <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} class="cards1" style={{ height: "175px", width: "360px", marginLeft: "70px", marginRight: "20px", border: "1px solid purple", alignContent: "center", borderRadius: "3%", backgroundColor: isHovered ? "#8064A2" : "white", color: isHovered ? "white" : "#8064A2" }}>
                <div class="cardsUpper1" style={{ display: "flex" }}>
                  <div style={{ height: "60px", marginTop: "30px", marginLeft: "40px", gap: "20px 20px" }}>

                  </div>
                  <div style={{ height: "60px", marginTop: "30px", gap: "20px 20px", fontSize: "1.2rem" }} ><img src="Group349.png"></img></div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "purple", display: "flex", justifyContent: "center", textAlign: "center" }}>Find a teacher, coach pr expert for your Hobby interest in  your locality. Find a partner, teammates, accompanist for collaborator</p>

              </div>

              <div onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2} class="cards2 hover:bg-sky-700" style={{ height: "175px", width: "360px", alignContent: "center", marginRight: "20px", border: "1px solid purple", border: "1px solid green", borderRadius: "3%", backgroundColor: isHovered2 ? "#77933C" : "white" }}>
                <div class="cardsUpper2" style={{ display: "flex" }}>
                  <div style={{ height: "60px", marginTop: "30px", marginLeft: "40px", gap: "20px 20px" }}>
                    <img layout="responsive" src="Group164.png"></img>
                  </div>
                  <div style={{ height: "60px", marginTop: "30px", marginLeft: "40px", gap: "20px 20px", fontSize: "1.2rem" }} ></div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "purple", textAlign: "center" }}>Find a class, school program auditorium, studioshop or an event venue. Book a slot at venues that allow booking through hobbyque.</p>

              </div>

            </div>



            <div style={{ display: "flex" }}>

              <div onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3} class="cards3" style={{ height: "175px", width: "360px", marginLeft: "70px", marginTop: "30px", border: "1px solid red", borderRadius: "3%", backgroundColor: isHovered3 ? "#C0504D" : "white" }}>
                <div class="cardsUpper2" style={{ display: "flex" }}>
                  <div style={{ height: "60px", marginTop: "10px", marginLeft: "40px" }}>
                    <img src="GroupProduct.png"></img>
                  </div>
                  <div style={{ height: "60px", marginTop: "30px", marginLeft: "40px", gap: "20px 20px", fontSize: "1.2rem" }} ></div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "purple", textAlign: "center" }}>Find equipment or supplies requires ypour hobby. Buy rent or borrow form shops, online assests, online stores or community members.</p>
              </div>


              <div onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4} class="cards2" style={{ height: "175px", width: "360px", marginTop: "30px", marginLeft: "20px", marginRight: "20px", border: "1px solid blue", borderRadius: "3%", backgroundColor: isHovered4 ? "#0096C8" : "white" }}>
                <div class="cardsUpper2" style={{ display: "flex" }}>
                  <div style={{ height: "60px", marginTop: "10px", marginLeft: "40px", gap: "20px 20px" }}>
                    <img src="Groupprogram.png"></img>
                  </div>
                  <div style={{ height: "60px", marginTop: "10px", marginLeft: "40px", gap: "20px 20px", fontSize: "1.2rem" }} ></div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "purple", textAlign: "center" }}>Find events, ,meetups, and workshops related to your hobby. Register or buy tickets online. </p>
              </div>

            </div>
          </div>


        </div>








      </>
    </div>
  )
}

export default MainContainer