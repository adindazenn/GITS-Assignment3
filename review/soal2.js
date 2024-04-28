let student = {
    nama_depan: 'Adinda',
    nama_belakang: 'Zenniar', 
    hobi: ['membaca','berenang'], 
    angka_favorit: 3, 
    memakai_kacamata: false, 
    umur: 22,
};

console.log('Object student : ', student);
 
console.log('===Cetak nama_lengkap dengan console.log===')
console.log('Nama lengkap : ', student.nama_depan, student.nama_belakang);

console.log('===Ubah angka_favorit jadi 8.===')
student.angka_favorit = 8;
console.log('Angka favorit : ', student.angka_favorit);

console.log('===Tambahkan satu hobi "coding"===')
student.hobi.push('coding');
console.log('Hobi : ', student.hobi);

console.log('===Tambahkan satu property "lulusan" dengan value "Hacktiv8"===')
student.lulusan = 'Hacktiv8';
console.log('Lulusan : ', student.lulusan);

console.log('===Cetak semua hobi satu per satu menggunakan loop.===')
student.hobi.forEach(function(hobi){
    console.log('Hobi : ', hobi);
});

console.log('===Cetak semua key milik objek, dan cetak semua values milik objek===')
for (let key in student) {
    console.log(key);
}

for (let key in student) {
    console.log(student[key]);
}

console.log('===Gunakan loop untuk cetak semua property milik objek dengan format key : values===')
for (let key in student) {
    console.log(key, ' : ', student[key]);
}