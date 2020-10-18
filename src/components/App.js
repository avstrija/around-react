import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

export default function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setDeletePlacePopupOpen] = React.useState(false);
  const [isFullViewOpen, setFullViewOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState({
    name: '', 
    about: '', 
    avatar: ''});

  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => {
        setCurrentUser(res);
    })
    .catch(err => console.log(err))
}, []);

  React.useEffect(() => {
    api.getCardList()
    .then((res) => {
        setCards(res);
    })
    .catch(err => console.log(err))
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch(err => console.log(err));
  }

  function handleCardDelete(e) {
    e.preventDefault();
    api.removeCard(selectedCard._id)
    .then(() => {
      const newCards = cards.filter((c) => c._id !== selectedCard._id);
      setCards(newCards);
      setDeletePlacePopupOpen(false);
    })
    .catch(err => console.log(err));
  }

  const onEditProfile=() => {
    setEditProfilePopupOpen(true);
  }
  const onAddPlace=() => {
    setAddPlacePopupOpen(true);
  }
  const onEditAvatar=() => {
    setEditAvatarPopupOpen(true);
  }
  const onCardDelete=(e) => {
    setSelectedCard(cards[e.target.parentElement.parentElement.id]);
    e.stopPropagation();
    setDeletePlacePopupOpen(true);
  }
  const onCardClick=(card) => {
    setSelectedCard(card);
    setFullViewOpen(true);
  }
  const handleUpdateUser=(newName, newAbout) => {
    api.setUserInfo({name: newName, about: newAbout})
    .then((res) => {
      setCurrentUser({...currentUser, name: res.name, about: res.about});
      setEditProfilePopupOpen(false);
    })
    .catch(err => console.log(err));
  }

  const handleUpdateAvatar=(newAvatar) => {
    api.setUserAvatar({avatar: newAvatar})
    .then((res) => {
      setCurrentUser({...currentUser, avatar: res.avatar});
      setEditAvatarPopupOpen(false);
    })
    .catch(err => console.log(err));
  }

  const handleAddPlace=(cardName, cardLink) => {
    const newCard = {name: cardName, link: cardLink};
    api.addCard(newCard)
    .then((res) => {
      setCards([res, ...cards]); 
      setAddPlacePopupOpen(false);
    })
    .catch(err => console.log(err));
  } 

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile = {onEditProfile}
          onAddPlace = {onAddPlace}
          onEditAvatar = {onEditAvatar}
          onCardClick = {onCardClick}
          cards={cards}
          onCardLike = {handleCardLike}
          onCardDelete = {onCardDelete}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={() => {setEditProfilePopupOpen(false)}} onUpdateUser={handleUpdateUser}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={() => {setEditAvatarPopupOpen(false)}} onUpdateAvatar={handleUpdateAvatar}/> 
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={() => {setAddPlacePopupOpen(false)}} onAddCard={handleAddPlace}/>
        <PopupWithForm name="delete" title="Are you sure?" button="Yes" isOpen={isDeletePlacePopupOpen} onClose={() => {setDeletePlacePopupOpen(false)}} onSubmit={handleCardDelete}/>
        <ImagePopup card={selectedCard} isOpen={isFullViewOpen} onClose={() => {setFullViewOpen(false)}}/>
      </div>
    </CurrentUserContext.Provider>
  );
}
