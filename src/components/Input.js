import React from 'react';

export default function Input({type, id, placeholder, maxLength, minLength}) {
    return (
        <>
        <input type={type} id={id} className="modal__input" placeholder={placeholder} required maxLength={maxLength} minLength ={minLength}/>
        <span id={`error-${id}`} className="modal__error"></span>
        </>
    )
}