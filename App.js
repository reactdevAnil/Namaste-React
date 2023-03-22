import React from 'react'
import ReactDOM  from 'react-dom/client';


const heading1 = React.createElement("h1",{},"This is Heading 1")
const heading2 = React.createElement("h2",{},"This is Heading 2")

const heading = React.createElement("div", {
    id: "headings", xyz: "xyz"
}, [heading1, heading2]);
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);