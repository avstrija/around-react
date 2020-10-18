import React from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__main">
                    <div onClick={onEditAvatar} className="profile__userpic">
                        <img alt="Userpic" className="profile__pic" src={currentUser.avatar}/>
                    </div>
                    <div className="profile__text">
                        <div className="profile__name">
                        <h1 className="profile__username">{currentUser.name}</h1>
                            <button className="button profile__edit-btn" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__bio">{currentUser.about}</p>
                    </div>
                </div>
                <button className="button profile__add-btn" onClick={onAddPlace}></button>
            </section>
            <section className="photo-grid">
                <ul className="photo-grid__posts">
                    {cards.map((card, i) => {
                        return <Card key = {i} 
                                    id = {i}
                                    card={card} 
                                    onCardLike={onCardLike}
                                    onCardDelete={onCardDelete}
                                    onCardClick={(card) => {
                                        onCardClick(card);
                          }}/>
                    })}
                </ul>
            </section>
        </main>
    );
}

export default Main;