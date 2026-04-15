const CLIENT_ID = '1493975600870850600'; 
const REDIRECT_URI = encodeURIComponent('https://discord.com/oauth2/authorize?client_id=1493975600870850600&response_type=code&redirect_uri=localhost%3A%2Findex.html&scope=identify+connections');

function loginDiscord() {
    const scope = 'identify';
    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${scope}`;
    
    window.location.href = authUrl;
}

function logout() {
    // Logout sederhana dengan menghapus hash dan kembali ke login
    window.location.href = 'index.html';
}
