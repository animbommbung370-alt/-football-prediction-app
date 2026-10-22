exports.handler = async function () {
const apiKey = process.env.API_FOOTBALL_KEY;

if (!apiKey) {
return {
statusCode: 500,
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ error: "API key is missing" })
};
}

try {
const response = await fetch(
"https://v3.football.api-sports.io/fixtures?date=2026-10-22", 
{
headers: {
"x-apisports-key": apiKey
}
}
);

const data = await response.json();
return {
  statusCode: response.ok ? 200 : response.status,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
  body: JSON.stringify(data)
};

} catch (error) {
return {
statusCode: 500,
headers: { "Content-Type": "application/json"  },
body: JSON.stringify({ error: "Could not load matches" })
};
}
};
