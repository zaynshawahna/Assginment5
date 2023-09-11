import React from "react";

function Child({value,passFunction}) {
const containerStyle = {
backgroundColor: "#464E47",
padding: "20px",
border: "1px solid #ccc",
borderRadius: "5px",
};
const headerStyle = {
color: "#F46036",
};
const inputStyle = {
padding: "5px",
border: "5px solid #F46036c",



};


return (
<div style={containerStyle}>
<h2 style={headerStyle}>I'm the child page</h2>
<p style={{ color: "#F46036", fontWeight: "bold" }}>
{value} <br />
<span style={{ color: "#CCFCCB" }}>
</span>
</p>
<p style={{ color: "#F46036", fontWeight: "bold" }}>
Enter data to pass to parent:
</p>
<input style={inputStyle} onChange={
    (event)=>{
        
         passFunction(event.target.value) ;

    } } />
    
   
</div>
);
}
export default Child;