const CLIENT_ID = 'CLIENT_ID_KAMU'; 
const REDIRECT_URI = encodeURIComponent('https://neronuta.vercel.app/home.html');

function loginDiscord() {
    const scope = 'identify';
    const authUrl = `https://discord.com/oauth2/authorize?client_id=1493975600870850600&response_type=code&redirect_uri=https%3A%2F%2Fneronuta.vercel.app%2F&scope=identify`;
    
    window.location.href = authUrl;
}

function logout() {
    // Logout sederhana dengan menghapus hash dan kembali ke login
    window.location.href = 'index.html';
}
