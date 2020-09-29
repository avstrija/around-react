import React from 'react';

export default class ImagePopup extends React.Component {
    render() {
        return (
            <div className="modal__container modal__container_type_view">
                <div className="modal modal_type_view">
                    <button className="button modal__close-btn modal__close-btn_type_view" type="reset"></button>
                <img className="modal__fullview"/>
                <p className="modal__caption"></p>
                </div>
            </div>
        )
    }
}