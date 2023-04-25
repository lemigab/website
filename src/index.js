import React from "react";  // Import react libraries
import ReactDOM from "react-dom";

import Website from "./components/Website"; 


const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
    <React.StrictMode>
        <Website />
    </React.StrictMode>
);

