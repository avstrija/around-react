import React from 'react';
import PopupWithForm from './PopupWithForm'; 
import Input from './Input';

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();  
        onUpdateAvatar(avatarRef.current.value);
      } 
    
    return (
        <PopupWithForm name="avatar" title="Change profile picture" button="Update" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
              <Input parentRef={avatarRef} type="url" placeholder="Image URL" id="avatar" className="modal__input" required/>
        </PopupWithForm>
    )
}