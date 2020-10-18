import React from 'react';
import PopupWithForm from './PopupWithForm'; 
import Input from './Input';
import CurrentUserContext from '../contexts/CurrentUserContext.js';


export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [about, setAbout] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
      }
    
    function handleChangeAbout(e) {
        setAbout(e.target.value);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser]); 

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(name, about, currentUser.avatar);
        e.target.reset();
    }

    return (
        <PopupWithForm name="update" title="Edit profile" button="Save" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
              <Input type="text" id="username" className="modal__input" placeholder="Name" maxLength= "40" minLength="2" defaultValue={name} onChange={handleChangeName}/>
              <Input type="text" id="about" className="modal__input" placeholder="Who are you?" maxLength="200" minLength="2" defaultValue={about} onChange={handleChangeAbout}/>
          </PopupWithForm>
    )
}