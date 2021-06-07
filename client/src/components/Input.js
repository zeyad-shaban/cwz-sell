import React from 'react';

function Input({ id, type = 'text', value, handleChange, label, ...rest }) {
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={id}>{label}</label>
            <input className="form-control" type={type} name={id} value={value} onChange={handleChange} id={id} {...rest} />
        </div>
    );
}

export default Input;