import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Input from './Input';

export default function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setDeletePlacePopupOpen] = React.useState(false);
  const [isFullViewOpen, setFullViewOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={() => {
            setEditProfilePopupOpen(true);
        }}
        onAddPlace={() => {
            setAddPlacePopupOpen(true);
        }}
        onEditAvatar={() => {
            setEditAvatarPopupOpen(true);
        }}
        onDeleteCard={() => {
            setDeletePlacePopupOpen(true);
        }}
        onCardClick={(card) => {
            setSelectedCard(card);
            setFullViewOpen(true);
        }}
      />
      <Footer />
      <PopupWithForm name="update" title="Edit profile" button="Save" isOpen={isEditProfilePopupOpen} onClose={() => {setEditProfilePopupOpen(false)}}>
            <Input type="text" id="username" className="modal__input" placeholder="Name" maxLength= "40" minLength="2"/>
            <Input type="text" id="about" className="modal__input" placeholder="Who are you?" maxLength="200" minLength="2"/>
        </PopupWithForm>
        <PopupWithForm name="create" title="New Place" button="Create" isOpen={isAddPlacePopupOpen} onClose={() => {setAddPlacePopupOpen(false)}}>
            <Input type="text" placeholder="Title" id="name" className="modal__input" required maxLength="30" minLength="1"/>
            <Input type="url" placeholder="Image URL" id="link" className="modal__input" required/>
        </PopupWithForm>
        <PopupWithForm name="avatar" title="Change profile picture" button="Update" isOpen={isEditAvatarPopupOpen} onClose={() => {setEditAvatarPopupOpen(false)}}>
            <Input type="url" placeholder="Image URL" id="avatar" className="modal__input" required/>
        </PopupWithForm>
        <PopupWithForm name="delete" title="Are you sure?" button="Yes" isOpen={isDeletePlacePopupOpen}/>
        <ImagePopup card={selectedCard} isOpen={isFullViewOpen} onClose={() => {setFullViewOpen(false)}}/>
    </div>
  );
}
