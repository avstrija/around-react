import React, { useEffect } from 'react';
import api from '../utils/api.js';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onDeleteCard, onCardClick}) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getAppInfo()
        .then(([userInfoRes, cardInfoRes]) => {
            setUserName(userInfoRes.name);
            setUserDescription(userInfoRes.about);
            setUserAvatar(userInfoRes.avatar);
            setCards(cardInfoRes);
        })
        .catch(err => console.log(err))
    }, []);

    // React.useEffect(() => {
    //     api.getUserInfo()
    //     .then((res) => {
    //         setUserName(res.name);
    //         setUserDescription(res.about);
    //         setUserAvatar(res.avatar);
    //     })
    //     .catch(err => console.log(err))
    // }, []);

    // React.useEffect(() => {
    //     api.getCardList()
    //     .then((res) => {
    //         setCards(res);
    //     })
    //     .catch(err => console.log(err))
    // }, [setCards, cards]);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__main">
                    <div onClick={onEditAvatar} className="profile__userpic">
                        <img alt="Userpic" className="profile__pic" src={userAvatar}/>
                    </div>
                    <div className="profile__text">
                        <div className="profile__name">
                        <h1 className="profile__username">{userName}</h1>
                            <button className="button profile__edit-btn" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__bio">{userDescription}</p>
                    </div>
                </div>
                <button className="button profile__add-btn" onClick={onAddPlace}></button>
            </section>
            <section className="photo-grid">
                <ul className="photo-grid__posts">
                    {cards.map((card, i) => {
                        return <Card key = {i} 
                                    card={card} 
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