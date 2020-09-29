import React from 'react';

export default class PopupWithForm extends React.Component {
    render() {
        const isActive = this.props.isOpen ? "modal__container_active" : "";
        return (
            <div className={`modal__container ${isActive} modal__container_type_${this.props.name}`}>
                <button className="button modal__close-btn" type="reset" onClick={this.props.onClose}></button>
                <form className={`modal modal_type_form modal_goal_${this.props.name}`}>
                <h2 className="modal__title">{this.props.title}</h2>
                <fieldset className="modal__fieldset">
                    {this.props.children}
                </fieldset>
                <button type="submit" className="button modal__save-btn modal__save-btn_disabled" disabled>{this.props.button}</button>
                </form>
            </div>
        )
    }
}