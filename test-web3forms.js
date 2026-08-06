const fs = require('fs');
const dotenv = require('dotenv');
const env = dotenv.parse(fs.readFileSync('.env.local'));
const fetch = require('node-fetch'); // or native fetch if Node >= 18

async function test() {
  const json = JSON.stringify({
    access_key: env.WEB3FORMS_ACCESS_KEY,
    name: 'Test',
    email: 'test@example.com',
    message: 'Test message'
  });

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: json,
  });

  const text = await response.text();
  console.log("Status:", response.status);
  console.log("Body:", text.substring(0, 200));
}

test();
