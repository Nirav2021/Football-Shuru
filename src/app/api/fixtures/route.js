const token = process.env.TOKEN_API_SPORTMONKS

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date") || "";
    // const apiUrl = `https://api.sportmonks.com/v3/football/fixtures/date/${date}?api_token=${token}`;
    const apiUrl = `https://api.sportmonks.com/v3/football/fixtures/date/${date}?api_token=${token}&include=sport;league;season;stage;group;aggregate;round;state;venue;participants;participants.country`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
