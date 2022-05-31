#!/bin/bash

API_KEY="Talkative_default_secret"
# Talkative_URL="http://localhost:3000/api/v1/meeting"
# Talkative_URL=https://Talkative.herokuapp.com/api/v1/meeting
Talkative_URL=https://Talkative.up.railway.app/api/v1/meeting

curl $Talkative_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --request POST