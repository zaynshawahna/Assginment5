import React from "react";
import Child from "./Child";
import { useState } from "react";
function Parent() {

const [inputValue,setInput]=useState("");
const containerStyle = {
backgroundColor: "#CCFCCB",
height: "100vh",
padding: "20px",
border: "1px solid #ccc",
borderRadius: "5px",
};

function setDataChild(dataValue){
    setinputChildValue(dataValue);

}
const [inputChildValue,setinputChildValue]=useState("");



return (
<div style={containerStyle}>
    <h1></h1>
<h2 style={{ color: "#464E47" }}>I'm the parent page</h2>
<p style={{ color: "#464E47", fontWeight: "bold" }}>
       {inputChildValue}
<br /> <span style={{ color: "#F46036" }}></span>
</p>
<p style={{ color: "#464E47", fontWeight: "bold" }}>
Enter data to pass to child:
</p>
<input  style={{ padding: "5px", border: "1px solid " }} onChange={
    (event)=>{
        
       setInput(event.target.value);
    } }/>
<Child value={inputValue} passFunction={setDataChild} />
</div>
);
}
export default Parent;