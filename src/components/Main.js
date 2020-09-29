import React from 'react';
import api from '../utils/api.js';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    // api.getAppInfo()
    // .then(([userInfoRes]) => {
    //     //PROFILE
    //     //Profile setup
    //     const userInfo = new UserInfo({name: ".profile__username", job: ".profile__bio", avatar: ".profile__pic"});
    //     userInfo.setUserInfo({username: userInfoRes.name, about: userInfoRes.about});
    //     userInfo.setAvatar({avatar: userInfoRes.avatar});
    //     const myId = userInfoRes._id;
    // })

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__main">
                    <div onClick={props.onEditAvatar} className="profile__userpic">
                        <img alt="Userpic" className="profile__pic" src={userAvatar}/>
                    </div>
                    <div className="profile__text">
                        <div className="profile__name">
                        <h1 className="profile__username">{userName}</h1>
                            <button className="button profile__edit-btn" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__bio">{userDescription}</p>
                    </div>
                </div>
                <button className="button profile__add-btn" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo-grid">
                <ul className="photo-grid__posts">
                </ul>
            </section>
        </main>
    );
}

export default Main;