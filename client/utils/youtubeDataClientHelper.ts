export default async function initYoutubeClient() {
    const gapi = window.gapi
    gapi.load("client:auth2", {
        callback: function () {
            gapi.auth2.init({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_ID
            });
            console.log('gapi.client loaded!')
            loadClient()
            authenticate()
        },
        onerror: function () {
            console.log('gapi.client failed to load!')
        },
        timeout: 5000,
        ontimeout: function () {
            console.log('gapi.client could not load in a timely manner')
        }
    });
}

async function loadClient() {
    const client = gapi.client
    try {
        await client.setApiKey(process.env.NEXT_PUBLIC_YOUTUBE_DATA_KEY);
        await client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        console.log("GAPI client loaded for API");

    }
    catch (error) {
        console.error("Error loading GAPI client for API", error);
    }
}

async function authenticate() {
    try {
        await gapi.auth2.getAuthInstance().signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
        console.log("Sign-in successful");
    }
    catch (error) {
        console.error("Error signing in", error)
    }
}