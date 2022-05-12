Membuat Object pada Javascript
1. object Literal
    isi dari object adalah (properti + method)
       *propreti

            let mahasiswa = {
            nama: 'Nisa',
            energy: 10
                }
            // jika kita mengetik 'mahasiswa' dalam konsole, maka akan keluar objectnya ada 2 buah properti nama dan energy "Object { nama: "Nisa", energy: 10 }".

       *methode
    methode merupakan function yang ada didalam object.

            let mahasiswa = {
                nama: 'Nisa',
                energi: 10,
                makan: function (porsi) {
                    this.energi = this.energi + porsi;
                    console.log(`Halo ${this.nama}, selamat makan!`);
                }
            }

            //jika kita mengetik "mahasiswa.makan(2)" maka akan keluar "Halo Nisa, selamat makan!". Jika kita mengetik "mahasiswa" maka otomatis energi akan bertambah 2 "Object { nama: "Nisa", energi: 12, makan: makan(porsi) }"
jika ingin membuat instansiasi project berikutnya, maka harus menulis lagi.

            let mahasiswa1 = {
                nama: 'Nisa',
                energi: 10,
                makan: function (porsi) {
                    this.energi = this.energi + porsi;
                    console.log(`Halo ${this.nama}, selamat makan!`);
                }
            }
            let mahasiswa2 = {
                nama: 'Ike',
                energi: 10,
                makan: function (porsi) {
                    this.energi = this.energi + porsi;
                    console.log(`Halo ${this.nama}, selamat makan!`);
                }
            }
            

#NB : Dengan menggunakan object literal memang paling simpel. jika mau membuat objectnya cuma satu dan tidak terlalu besar objectnya maka kita bisa menggunakan object literal. 

#Problem : Tapi ketika objectnya banyak maka akan memakan banyak resource, karena melakukan sesuatu yang sama secara berulang-ulang (mendeklarasikan properti dan methode secara berulang-ulang)

2. Function Declaration

    Dengan menggunakan function declaration tidak perlu membuat duplikat dari objectnya. cukup dengan membuat template 1, jika ingin membuat objectnya dua atau berapa tinggal memanggilnya.

            function Mahasiswa(nama, energi) {
                let mahasiswa = {};
                
            }
objectnya kosong, kemudian buat propertinya diisi dengan apapun yang ada didalam parameter.

            mahasiswa.nama = nama;
            mahasiswa.energi = energi;

jika ingin membuat methode maka:

            mahasiswa.makan = function(porsi) {
            this.energi += porsi;
            console.log('halo $(this.nama), selamat makan!')

*full code:

            function Mahasiswa(nama, energi) {
                let mahasiswa = {};
                mahasiswa.nama = nama;
                mahasiswa.energi = energi;

                mahasiswa.makan = function(porsi) {
                    this.energi += porsi;
                    console.log('halo $(this.nama), selamat makan!')
                }
            }

jika dirun dikonsol dan menuliskan kata "mahasiswa" maka yang muncul adalah functionnya "function Mahasiswa(nama, energi)" bukan objectnya.
 dan jika ingin membuat objectnya maka kita harus instansiasi:

            function Mahasiswa(nama, energi) {
                let mahasiswa = {};
                mahasiswa.nama = nama;
                mahasiswa.energi = energi;

                mahasiswa.makan = function (porsi) {
                    this.energi += porsi;
                    console.log(`halo ${this.nama}, selamat makan!`);
                }

                return mahasiswa;
            }

            let nisa = Mahasiswa('Nisa', 10);

jika kita menulis "nisa" maka yang keluar adalah "Object { nama: "Nisa,10", energi: undefined, makan: makan(porsi) }".
jika kita menulis "nisa.makan(10)" maka yang keluar adalah "halo Nisa, selamat makan!"
jika kita menulis "nisa" maka energi akan bertambah "
Object { nama: "Nisa", energi: 20, makan: makan(porsi) }"

#jika ingin menambah mahasiswa tinggal menambahkan instansiasi(jadi tidak usah menambahkan template lagi)

            let ike = Mahasiswa('Ike', 20);

jika kita menambahkan satu method lagi untuk mengurangi energinya. Tanda "-=" akan otomatis mengurangi 1.

            function Mahasiswa(nama, energi) {
                let mahasiswa = {};
                mahasiswa.nama = nama;
                mahasiswa.energi = energi;

                mahasiswa.makan = function (porsi) {
                    this.energi += porsi;
                    console.log(`halo ${this.nama}, selamat makan!`);
                }

                mahasiswa.main = function(jam) {
                    this.energi -= jam;
                    console.log(`halo ${this.nama}, selamat bermain!`)
                }

                return mahasiswa;
            }

            let nisa = Mahasiswa('Nisa', 10);
            let ike = Mahasiswa('Ike', 20);

jika kita menuliskan "ike.main(4)" maka akan keluar "halo Ike, selamat bermain!".
dan jika kita cek energi "ike.energi" maka energinya berkurang menjadi "16".

#NB : jika kita menggunakan function declaration, kita bisa mengeliminasi problem yang tadi. karena, kita hanya membuat templatenya sekali.

#Problem : Akantetapi, menggunakan cara ini ketika kita melakukan instansiasi objectnya, ternyata dibelakang layar 2 methodenya tetap dibuat (mau dipake atau tidak) dan disimpan kedalam memori.

==> Penyelesaian ada di file object.create()

3. Cunstructor Function (keyword new)

Cunstructor Function sebetulnya mirip dengan Function Declaration. Bedanya adalah kita tidak perlu menuliskan deklarasi variabel dan returnnya.

            function Mahasiswa(nama, energi) {
                this.nama = nama;
                this.energi = energi;

                this.makan = function (porsi) {
                    this.energi += porsi;
                    console.log(`halo ${this.nama}, selamat makan!`);
                }

                this.main = function(jam) {
                    this.energi -= jam;
                    console.log(`halo ${this.nama}, selamat bermain!`)
                }

            }

cara manggilnya adalah dengan membuat variabel dengan menggunakan new.


            function Mahasiswa(nama, energi) {
                this.nama = nama;
                this.energi = energi;

                this.makan = function (porsi) {
                    this.energi += porsi;
                    console.log(`halo ${this.nama}, selamat makan!`);
                }

                this.main = function(jam) {
                    this.energi -= jam;
                    console.log(`halo ${this.nama}, selamat bermain!`)
                }

            }

            let nisa = new Mahasiswa('Nisa', 10)

cek di konsol "nisa" maka akan keluar "Object { nama: "Nisa", energi: 10, makan: makan(porsi), main: main(jam) }"

4. object.create()




