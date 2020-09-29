import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setDeletePlacePopupOpen] = React.useState(false);

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

      />
      <Footer />
      <PopupWithForm name="update" title="Edit profile" button="Save" isOpen={isEditProfilePopupOpen} onClose={() => {setEditProfilePopupOpen(false)}}>
            <input type="text" id="username" className="modal__input" placeholder="Name" required maxLength="40" minLength="2"/>
            <span id="error-username" className="modal__error"></span>
            <input type="text" id="about" className="modal__input" placeholder="Who are you?" required maxLength="200" minLength="2"/>
            <span id="error-about" className="modal__error"></span>
        </PopupWithForm>
        <PopupWithForm name="create" title="New Place" button="Create" isOpen={isAddPlacePopupOpen} onClose={() => {setAddPlacePopupOpen(false)}}>
            <input type="text" placeholder="Title" id="name" className="modal__input" required maxLength="30" img="1"/>
            <span id="error-name" className="modal__error modal__error_type_name"></span>
            <input type="url" placeholder="Image URL" id="link" className="modal__input" required/>
            <span id="error-link" className="modal__error modal__error_type_link"></span>"
        </PopupWithForm>
        <PopupWithForm name="avatar" title="Change profile picture" button="Update" isOpen={isEditAvatarPopupOpen} onClose={() => {setEditAvatarPopupOpen(false)}}>
            <input type="url" placeholder="Image URL" id="avatar" className="modal__input" required/>
            <span id="error-avatar" className="modal__error modal__error_type_link"></span>
        </PopupWithForm>
        <PopupWithForm name="delete" title="Are you sure?" button="Yes" isOpen={isDeletePlacePopupOpen}/>
        <ImagePopup />
    <template className="post-template">
        <li className="post">
            <div className="post__image">
                <button className="button post__remove post__remove_disabled" onClick={setDeletePlacePopupOpen}></button>
            </div>
            <div className="post__info">
                <p className="post__caption"></p>
                <div className="post__likes">
                    <button className="button post__like"></button>
                    <p className="post__like-count">6</p>
                </div>
            </div>
        </li>
    </template>
    </div>
  );
}

export default App;
