#*FUNCTION DECLARATION

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


#Solusi untuk lebih efektif adalah dengan membuat object terpisah yang berisi methode.

*code

            const methodeMahasiswa = {
                makan: function (porsi) {
                    this.energi += porsi;
                    console.log(`halo ${this.nama}, selamat makan!`);
                },

                main: function (jam) {
                    this.energi -= jam;
                    console.log(`halo ${this.nama}, selamat bermain!`)
                }
            };

            function Mahasiswa(nama, energi) {
                let mahasiswa = {};
                mahasiswa.nama = nama;
                mahasiswa.energi = energi;
                mahasiswa.makan = methodeMahasiswa.makan;
                mahasiswa.main = methodeMahasiswa.main;

                return mahasiswa;
            }

            let nisa = Mahasiswa('Nisa', 10);
            let ike = Mahasiswa('Ike', 20);

bedanya dengan code diatas adalah, ketika kita menjalankan program code ini objectnya akan disimpan satu kali dalam memori. lalu ketika memanggil function mahasiswa dan mengisi methode nya maka, dia hanya mengacu ke object yang sudah ada pada memori tadi dan tidak dibuat ulang.

#Problem : jika kita buat methode baru

            const methodeMahasiswa = {
                makan: function (porsi) {
                    this.energi += porsi;
                    console.log(`halo ${this.nama}, selamat makan!`);
                },

                main: function (jam) {
                    this.energi -= jam;
                    console.log(`halo ${this.nama}, selamat bermain!`)
                },

                tidur: funtion(jam) {
                    this.energi += jam * 2;
                    console.log(`halo ${this.nama}, selamat tidur`);
                }
            };

            function Mahasiswa(nama, energi) {
                let mahasiswa = {};
                mahasiswa.nama = nama;
                mahasiswa.energi = energi;
                mahasiswa.makan = methodeMahasiswa.makan;
                mahasiswa.main = methodeMahasiswa.main;
                mahasiswa.tidur = methodeMahasiswa.tidur;

                return mahasiswa;
            }

            let nisa = Mahasiswa('Nisa', 10);
            let ike = Mahasiswa('Ike', 20);

Artinya kita mengelola dua object yakni object yang dibuat dengan function declaration dan object literal yang berisi function-function yang terhubung (secara manajemen memori memang efektif, tapi juga harus ingat untuk mendafatrkan ketika membuat methode baru dan menghapus juga jika methodenya dihapus supaya tetap terhubung).
Akantetapi, ada cara yang otomatis agar tidak usah mendaftarkan di function declarationnya yakni menggunakan object.create(). Dengan cara waktu kita membuat variabel mahasiswa yang isinya object, kita ganti menjadi Object.create(). Dan kita bisa menyimpan parameter didalamnya dan parameternya itu mengacu pada parent objectnya. jadi bisa sambil memberitahu ketika membuat object baru sambil membawa properti dan methode dari object lain.

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



Dengan menggunakan object.create ini, kita tidak perlu lagi mendefinisikan metode-methode makan, main dan tidur. Dan kita lansung bisa memberitahu parent objectnya (jadi tidak perlu daftarin lagi metode2nya).

#Problem : sebenarnya kita itu hanya butuh mahasiswa, tidak butuh dengan methodeMahasiswa. methodeMahasiswa ini adalah object baru yang kita buat sendiri. meskipun dihubungkan di function declarationnya tetap saja kita kerja dua kali. membuat objet satu untuk mendukung object intinya.

Dan untuk menyelesaikannya kita bisa menggunakan prototype.

