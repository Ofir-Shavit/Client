import axios, {AxiosResponse} from 'axios';
import {ProfileType} from '../types';

async function fetchProfile(): Promise<ProfileType> {

    const response: AxiosResponse<ProfileType> = await axios.get<ProfileType>('http://localhost:8080/profile');

    return response.data;
}

export {fetchProfile};

