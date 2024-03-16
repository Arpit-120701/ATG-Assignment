"use client";
import React from 'react'
import script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>




const Navbar = () => {
    const Navbar = {
        display: 'flex',
        backgrundColor: '#ecf0f1',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        height: "80px",
        width: "100%"
    }
    const Widgets = {
        display: 'flex'

    }


    return (

        <div>

            <div className='Navbar' style={Navbar}>
                <div className='leftlogo' style={{ marginLeft: "97px", marginTop: "10px", height: "60px", width: "293.26px" }}><img src="hobbycue.jpg" /> </div>
                <div className='centerSearch'>
                    <div class="input-group mb-3" style={{ marginLeft: "50px", marginTop: "15px" }}>
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span class="input-group-text bg-purple" id="basic-addon2" style={{ backgroundColor: "#8064A2" }}  ><i style={{ color: "white" }} class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
                <div className='widgets' style={{ marginLeft: "470px", display: "flex", gap: "20px 20px", marginTop: "20px" }} >


                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" style={{ background: "white", color: "#8064A2" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true"> <img src="Explore.png"></img>Explore</button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">People Community</a></li>
                            <li><a class="dropdown-item" href="#">Places-Venues </a></li>
                            <li><a class="dropdown-item" href="#">Program-Events</a></li>
                        </ul>

                    </div>

                    <a href='/'>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" style={{ background: "white", color: "#8064A2" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <img src="Hobbies.png"></img>Hobbies</button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>

                        </div>
                    </a>
                    <a href='/'><img src="bookmark_black_24dp 1.png"></img></a>
                    <a href='/'><img src="Vector (2).png"></img></a>
                    <a href='/'><img src="Product 3.png"></img></a>
                    <a href='/'>
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" class={`btn btn-outline-light`} style={{ borderColor: "#8064A2", minWidth: "40px", maxWidth: "112px", color: "black", color: "#8064A2" }} >Sign In</button>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Navbar
