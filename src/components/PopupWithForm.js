import React from 'react';

export default function PopupWithForm({isOpen, name, onClose, title, children, button, onSubmit}) {

    React.useEffect(() => {
        document.querySelector(`.modal_goal_${name}`).reset();
    }, [isOpen]);
    
    const isActive = isOpen ? "modal__container_active" : "";
    return (
        <div className={`modal__container ${isActive} modal__container_type_${name}`}>
            <button className="button modal__close-btn" type="reset" onClick={onClose}></button>
            <form className={`modal modal_type_form modal_goal_${name}`} onSubmit={onSubmit}>
            <h2 className="modal__title">{title}</h2>
            <fieldset className="modal__fieldset">
                {children}
            </fieldset>
            <button type="submit" className="button modal__save-btn">{button}</button>
            </form>
        </div>
    )
}