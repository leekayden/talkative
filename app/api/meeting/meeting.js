const fetch = require('node-fetch');

const API_KEY = 'Talkative_default_secret';
// const Talkative_URL = "http://localhost:3000/api/v1/meeting";
// const Talkative_URL = "https://Talkative.herokuapp.com/api/v1/meeting";
const Talkative_URL = 'https://Talkative.up.railway.app/api/v1/meeting';

function getResponse() {
    return fetch(Talkative_URL, {
        method: 'POST',
        headers: {
            authorization: API_KEY,
            'Content-Type': 'application/json',
        },
    });
}

getResponse().then(async (res) => {
    console.log('Status code:', res.status);
    const data = await res.json();
    console.log('meeting:', data.meeting);
});
