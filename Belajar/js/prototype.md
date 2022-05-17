#Code

            const methodeMahasiswa = {
                makan: function (porsi) {
                    this.energi += porsi;
                    console.log(`halo ${this.nama}, selamat makan!`);
                },

                main: function (jam) {
                    this.energi -= jam;
                    console.log(`halo ${this.nama}, selamat bermain!`);
                },

                tidur: function (jam) {
                    this.energi += jam * 2;
                    console.log(`halo ${this.nama}, selamat tidur`);
                },
            };

            function Mahasiswa(nama, energi) {
                let mahasiswa = Object.create(methodeMahasiswa);
                mahasiswa.nama = nama;
                mahasiswa.energi = energi;

                return mahasiswa;
            }

            let nisa = Mahasiswa('Nisa', 10);
            let ike = Mahasiswa('Ike', 20);

Dengan mengunakan prototype bisa membuat function declarationnya lebih efektif lagi. dengan mengubah function declaration menjadi cunstractor function. Jadi tidak usah menggunakan let dan return, cukup punya propertinya saja.
jika ingin diubah menjadi cunstractor function maka:

            function Mahasiswa(nama, energi) {
                mahasiswa.nama = nama;
                mahasiswa.energi = energi;
            }

akantetapi, karna inisialisasi variabelnya dihilangkan maka kita tidak punya akses ke variabel Mahasiswa maka:

            function Mahasiswa(nama, energi) {
                this.nama = nama;
                this.energi = energi;
            }

            let nisa = new Mahasiswa('Nisa', 10);

untuk mengelola methodenya, kita cukup memanfaatkan prototype dengan menuliskan

            function Mahasiswa(nama, energi) {
                this.nama = nama;
                this.energi = energi;
            }

            Mahasiswa.prototype.makan = function(porsi) {
                this.energi += porsi;
                return `halo ${this.nama}, selamat makan!`;
            }

            let nisa = new Mahasiswa('Nisa', 10);

jika kita menuliskan "nisa" dalam konsol maka hanya kelihatan objectnya, jika ingin melihat methode makannya klik "prototype" maka akan keluar tampilan methodenya "prototype>: Object { makan: makan(porsi)
, … }
​​
constructor: function Mahasiswa(nama, energi)​​
makan: function makan(porsi)​​
<prototype>: Object { … }" karena sudah melekat pada objectnya.
Jika kita panggil"nisa.makan(7)" maka akan otomatis terpanggil methodenya "Object { nama: "Nisa", energi: 17 }"

​*Code


            function Mahasiswa(nama, energi) {
                this.nama = nama;
                this.energi = energi;
            }

            Mahasiswa.prototype.makan = function(porsi) {
                this.energi += porsi;
                return `halo ${this.nama}, selamat makan!`;
            }

            Mahasiswa.prototype.main = function(jam) {
                this.energi -= jam;
                return `halo ${this.nama}, selamat bermain!`;
            }

            Mahasiswa.prototype.tidur = function(jam) {
                this.energi += jam * 2;
                return `halo ${this.nama}, selamat tidur!`;
            }

            let nisa = new Mahasiswa('Nisa', 10);

jika kita melihat protonya dikonsol, maka terdapat 3 proto yang menempel kepada objectnya "<prototype>: Object { makan: makan(porsi), main: main(jam), tidur: tidur(jam), … }"

