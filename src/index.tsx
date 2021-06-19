import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';

import {ProfileType} from './types';
import {fetchProfile} from './APIs/Profile';
import Profile from './Components/Profile/Profile';

const App = () => {

    const [requestFailed, setRequestFailed] = useState(false);
    const [profile, setProfile] = useState<ProfileType | null>();

    useEffect(() => {
        fetchProfile()
            .then((profile) => {
                setProfile(profile);
            })
            .catch(() => setRequestFailed(true));
    }, []);

    return (
        <div>
            {requestFailed ? <h1>The request has failed!</h1> :
                (profile ? <Profile
                        profile={profile}/> :
                    <h1>Loading...</h1>)}
        </div>
    );
};

ReactDom.render(<App/>, document.querySelector('#root'));