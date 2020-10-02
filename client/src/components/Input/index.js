import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
export function Input(props) {
    return (
        <div className="input-group input-group-lg">
            <input className="form-control" type="text" {...props} />
        </div>
    );
}

// SearchButton derived from 20-MERN\01-Activities\02-Stu_Recipes\Solved\client\src\components\Button\index.js
// Destructuring the type, className, children and onClick props, applying them to the button element
export function SearchButton({ type = "default", className, children, onClick }) {
    return (
        <button onClick={onClick} className={["search btn btn-lg", `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}