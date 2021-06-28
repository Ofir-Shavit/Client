const {GOOGLE_CLIENT_ID} = process.env;

export default {
    api: 'localhost:8080',
    googleClientId: GOOGLE_CLIENT_ID || '',
};