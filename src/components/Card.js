import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

export default function Card({card, id, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;

    const cardDeleteButtonClassName = (
  `post__remove ${isOwn ? '' : 'post__remove_disabled'}`
    ); 
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
        `button post__like ${isLiked ? 'post__like_liked' : ''}`
          ); ;
    
    const handleClick = (e) => {
        onCardClick(card);
    };

    const handleLike = (e) => {
        onCardLike(card);
    };

    return(
        <li className="post" id={id}>
            <div className="post__image" onClick={handleClick} style={{ backgroundImage: `url(${card.link})` }}>
                <button className={cardDeleteButtonClassName} onClick={onCardDelete}></button>
            </div>
            <div className="post__info">
                <p className="post__caption">{card.name}</p>
                <div className="post__likes">
                    <button className={cardLikeButtonClassName} onClick={handleLike}></button>
                    <p className="post__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
} 