function fetchUserData(username) {
    return new Promise((resolve, reject) => {
      const url = `https://api.github.com/users/${username}`;
      fetch(url, { timeout: 1000 })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Gagal mengambil data pengguna: ${response.status}`);
          }
        })
        .then(userData => {
          resolve(userData);
        })
        .catch(error => {
          reject(error);
        });
    });
}
  
function handleUserData(userData) {
    console.log(`Nama pengguna: ${userData.login}`);
    console.log(`Nama lengkap: ${userData.name}`);
}
  
const username = "adindazenn";
fetchUserData(username)
    .then(handleUserData)
    .catch(error => console.error(error));
  