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

Dengan mengunakan prototype bisa membuat function declarationnya lebih efektif lagi. dengan mengubah function declaration menjadi cunstractor function.


