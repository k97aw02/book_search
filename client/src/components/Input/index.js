import React from "react";

export function Input(props) {
    return (
        <div className="input-group input-group-md">
            <input className="form-control" type="text" {...props} />
        </div>
    );
}

export function SearchButton({ type = "default", className, children, onClick }) {
    return (
        <button onClick={onClick} className={["search btn btn-lg", `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}