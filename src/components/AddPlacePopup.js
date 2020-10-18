import React from 'react';
import PopupWithForm from './PopupWithForm'; 
import Input from './Input';

export default function AddPlacePopup({isOpen, onClose, onAddCard}) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
      }
    
    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handlePlaceSubmit(e) {
        e.preventDefault();
        onAddCard(name, link);
        e.target.reset();
    }
    return (
        <PopupWithForm name="create" title="New Place" button="Create" isOpen={isOpen} onClose={onClose} onSubmit={handlePlaceSubmit}>
            <Input type="text" placeholder="Title" id="name" className="modal__input" required maxLength="30" minLength="1" onChange={handleChangeName}/>
            <Input type="url" placeholder="Image URL" id="link" className="modal__input" required onChange={handleChangeLink}/>
        </PopupWithForm>
    )
}