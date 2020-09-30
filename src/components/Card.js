import React from 'react';

export default function Card({card, i, onCardClick}) {
    const handleClick = (e) => {
        onCardClick(card);
    };

    return(
        <li className="post" onClick={handleClick}>
            <div className="post__image" style={{ backgroundImage: `url(${card.link})` }}>
                <button className="button post__remove post__remove_disabled"></button>
            </div>
            <div className="post__info">
                <p className="post__caption">{card.name}</p>
                <div className="post__likes">
                    <button className="button post__like"></button>
                    <p className="post__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
} 