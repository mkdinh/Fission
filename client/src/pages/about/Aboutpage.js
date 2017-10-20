import React from "react";
import Backgroundimage from "../../components/backgroundimage";
import Footer from "../../components/Footer";

const Aboutpage = () =>
  <div>
    <Backgroundimage src={"https://static.skillshare.com/uploads/project/553fecf24f7dccf3168d92d7eca7d200/094d94fa"} />
      <h1>FISSION</h1>
      <h2>Making Your Components, Easier</h2>
       <div className="infobox">
          <p>Welcome to Fission! This application will generate react component based on old-fashion html markups. Insert any html component you like and it will return a React component file and its css file.</p>
      <p>On the Build page insert your html markups. Currently you can give compiling configuration inline style as tag properties. These options are supported:</p>
      <ul className="infolist">
        <li>name (file name)</li>
        <li>component (stateful || stateless)</li>
        <li>group (group component into its own folder)</li>
        <li>style (any css markup)</li>
        <li>expand (shallow || deep)</li>
      </ul>
      <p>Nesting html is supported but this is still a prototype there might be some errors when generating components nesting component</p>
  </div>          

      
          <Footer />
     
  </div>;

export default Aboutpage;
