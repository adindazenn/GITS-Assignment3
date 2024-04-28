async function fetchUserData(username, callback) {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
  
    if (response.status === 200) {
      const userData = await response.json();
      callback(userData);
    } else {
      console.error(`Gagal mengambil data pengguna: ${response.status}`);
    }
}

function handleUserData(userData) {
    console.log(`Nama pengguna: ${userData.login}`);
    console.log(`Nama lengkap: ${userData.name}`);
}
  
const username = "adindazenn";
fetchUserData(username, handleUserData);
  