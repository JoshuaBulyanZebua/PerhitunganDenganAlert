//Soal 1
var angka1 = parseInt(prompt('Angka 1?'));
var angka2 = Number(prompt('Angka 2?'));
document.getElementById('x').innerHTML = angka1 + angka2;

//Soal 2
var name = prompt(' Masukkan Nama Anda?');
alert(`Terima kasih ${name} telah mengunjungi website ini`);

//Soal 3
var jumlah = parseInt(prompt('Perhitungan jumlah angka dari 1 sampai dengan?'));
var angka = 0;
for (var i = 1; i <= jumlah; i++) {
  angka += i;
}
alert(`Hasil penjumlahan dari 1 s.d ${jumlah} adalah ${angka}`);
