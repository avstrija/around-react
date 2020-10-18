import React from 'react';

export default function ImagePopup({card, isOpen, onClose}) {
    return (
        <div className={`modal__container ${isOpen ? "modal__container_active" : ""} modal__container_type_view`}>
            <div className="modal modal_type_view">
                <button className="button modal__close-btn modal__close-btn_type_view" type="reset" onClick={onClose}></button>
            <img className="modal__fullview" src={card.link} alt={card.name}/>
            <p className="modal__caption">{card.name}</p>
            </div>
        </div>
    )
}