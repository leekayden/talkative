import requests
import json

API_KEY = "Talkative_default_secret"
# Talkative_URL = "http://localhost:3000/api/v1/meeting"
# Talkative_URL = "https://Talkative.herokuapp.com/api/v1/meeting"
Talkative_URL = "https://Talkative.up.railway.app/api/v1/meeting"

headers = {
    "authorization": API_KEY,
    "Content-Type": "application/json",
}

response = requests.post(
    Talkative_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])
