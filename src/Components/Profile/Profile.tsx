import React from 'react';
import './Profile.less';
import {ProfileType} from '../../types';

export default function Profile({profile}: { profile: ProfileType }) {
    const {name, imageUrl} = profile;
    return (
        <div className="profile">
            <h1>{name}</h1>
            <img alt="Profile" src={imageUrl}/>
        </div>
    );
}