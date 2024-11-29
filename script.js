console.log("hello dunia");
console.log("\u00A9");

//======= pop up
prompt("saya makan");
confirm("saya haus");
alert("mandi");

//================ deklarasi
var a = 1;
console.log(a);

//===== array
var b = ["fahri", 2 + 3, 6, [7, 3, 4]];
for (var i = 0; i <= b.length - 1; i++) {
  console.log(b[i]);
}

//======= tambah tambahan
console.log(1 + 1);
console.log("1" + "1");

//====== array function
var arr = ["fahri", "hanif", "ayu"];
console.log(arr.length);
var arr1 = ["fahri", "hanif", "ayu"];
console.log(arr1.join("-"));
//arr.push("daddy") nambahin di belakang
//arr.pop() hapus belakang
arr.shift(); // hapus depan
arr.unshift("ppppahri"); //nambahin depan
console.log(arr);
//arr.splice(awal, mau dihapus berapa);
//arr.splice(awal, mau dihapus berapa, tambah, tambah, dst);
//var arr3 = arr.slice(1, 4); ngambil index 1 sampai 4 (INI SLICE);
/*
 var angka = [1, 2 , 3 , 4, 5 , 6,  7 , 8];
 var cetak = function(a) {
    console.log(a);
 }
 angka.forEach(cetak);
atau bisa juga pake 
angka.forEach(function(e, i){
    console.log();
});
i buat ngakses index kalo ga mau dikasi juga gapapa
// jadi ini buat kaya meminimalisir pengunaan for pake OOP
 */

/*
var angka=[1,2,3,4, 5];
var angka2=angka.map(function(e){
    return e*2;
})
console.log(angka2.join(-));
ini buat ngalikan sesuatu
 */

/*
var angka =[1, 2, 3,4, 5];
var angka2 = angka.filter(function(e){
    e==5;
})
console.log(angka2);
gunanya buat nyari ada ngga angka itu di array
 */

/*
var angka=[1, 10, 5];
var angka2=angka.find(function(e){
    e>5;
})
output = 10;
 */

//oprator
var op = "1";
var op1 = "1";
if (op === op1) {
  console.log(1);
}

//OBJECT ORIENTID PROGRAMING
//object
var mhs = {
  nama: "muhammad fahri",
  email: "fahrimuh775@gmail.com",
  jurusan: "informatika",
};

//function declaration
function buatObjectMahasiswa(nama, nrp, jurusan) {
  var mhs1 = {};
  mhs1.nama = nama;
  mhs1.nrp = nrp;
  mhs1.jurusan = jurusan;
  return mhs1;
}

function buatMahasiswa(nama, nrp, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.jurusan = jurusan;
  return this;
}

var oop = new buatMahasiswa("muhammad fahri", "088226534051", "informatika");
console.log(oop);
