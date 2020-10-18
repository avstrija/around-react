import React from 'react';

const Input = ({type, id, placeholder, maxLength, minLength, onChange, defaultValue, parentRef}) => {
    return (
        <>
        <input ref={parentRef} type={type} id={id} className="modal__input" placeholder={placeholder} required maxLength={maxLength} minLength ={minLength} defaultValue={defaultValue} onChange={onChange}/>
        <span id={`error-${id}`} className="modal__error"></span>
        </>
    )
}


export default Input;