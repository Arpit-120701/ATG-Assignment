import React from 'react'

const Footer = () => {
    return (
        <div>
            <>
                <div style={{ height: "500px", marginTop: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src="Testimonials.png"></img>
                </div>
                <div style={{ width: "100%", height: "500px", marginTop: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src="End.png"></img>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", height: "500px", marginTop: "100px", display: "flex" }}>
                    <div style={{ color: "black", marginLeft: "40px", gap: "20px 20px", marginTop: "40px", fontSize: "1.2rem" }}>
                        <h2><b>HobbyCue</b></h2>
                        <ul>
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>FAQ's</li>
                            <li>Work With Us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div style={{ color: "black", marginLeft: "200px", gap: "20px 20px", marginTop: "40px", fontSize: "1.2rem" }} >
                        <h2><b>How Do?</b></h2>
                        <ul>
                            <li>Sign Up</li>
                            <li>Add Listening</li>
                            <li>Claim Listening</li>
                            <li>post A query</li>
                            <li>Add a Blog post</li>
                            <li>Other Queries</li>
                        </ul>
                    </div>
                    <div style={{ color: "black", marginLeft: "200px", gap: "20px 20px", marginTop: "40px", fontSize: "1.2rem" }}>
                        <h2><b>Quick Links </b></h2>
                        <ul>
                            <li>listings</li>
                            <li>Blog Posts</li>
                            <li>Shop / Store</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div style={{ color: "black", marginLeft: "200px", gap: "20px 20px", marginTop: "40px", fontSize: "1.2rem", textDecoration: "none" }}>
                        <h2><b>Social Media</b></h2>
                        <div style={{ display: "flex" }}>
                            <a href='' style={{ marginLeft: "40px", textDecoration: "none" }}><i class="fa-brands fa-square-facebook"></i></a>
                            <a href="" style={{ marginLeft: "40px", textDecoration: "none" }}><i class="fa-brands fa-twitter"></i></a>
                            <a href="" style={{ marginLeft: "40px", textDecoration: "none" }}><i class="fa-brands fa-instagram"></i></a>
                            <a href="" style={{ marginLeft: "40px", textDecoration: "none" }}><i class="fa-brands fa-youtube"></i></a>
                            <a href="" style={{ marginLeft: "40px", textDecoration: "none" }}><i class="fa-brands fa-google-play"></i></a>
                            <a href="" style={{ marginLeft: "40px", textDecoration: "none" }}><i class="fa-brands fa-telegram"></i></a>
                        </div>
                        <div >
                            <h2>Invite Friends</h2>
                            <div class="input-group mb-3">
                                
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height:"78", width:"1440", display:"flex", justifyContent:"center",alignContent:"center", backgroundColor:"#F7F5F9"}}>
                <p> &copy; Purple Cues Private Limited</p>
                </div>
            </>
        </div>
    )
}

export default Footer
