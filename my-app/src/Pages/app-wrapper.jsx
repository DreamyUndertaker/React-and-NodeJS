import React from "react";
import Header from "./header";
import Nav from "./nav"
import Content from "./content"
import "./..//App.css"
const Wrapper = () =>{
    return(
    <div class = 'app-wrapper'>
        <Header />
        <Nav />
        <Content />
    </div>
    )
}

export default Wrapper;