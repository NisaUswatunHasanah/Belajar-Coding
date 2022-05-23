DOM (Document Object Model)
DOM adalah antarmuka pemograman untuk HTML yang merepresentasikan halaman web, sehingga program dapat mengubah dan memanipulasi strukturnya. (Representasi elemen HTML pada dokumen menjadi sebuah object).

1. DOM selection
Cara memilih sebuah elemen yang ada didalam document menggunakan Javascript. DOM selection ini merupakan tahap awal jika ingin memanipulasi DOM. untuk memilih beberapa element ada beberapa method atau fungsi yang bisa digunakan diantaranya adalah:

=> getElementById()
* hasil = element

yaitu kita memilih element dalam DOM kita berdasarkan Id nya. Ketika kita belajar HTML bahwa dalam satu document itu hanya boleh ada satu element yang memiliki Id tertentu. Jadi kita hanya boleh memiliki Id yang spesifik untuk satu Element.
Misalnya ketika kita punya <h1> yang berisi judul, kalian tidak boleh lagi mempunyai element lain apapun elemenya yang Id nya sama2 judul.

=> getElementsByTagName()
* hasil = HTML Collection

yaitu mencari element2 yang mempunyai tag nama tertentu.

=> getElementsByClassName()
* hasil = HTML Collection

yaitu mencari element yang mempunyai class2 tertentu. Bedanya class dan element Id, element class boleh dimiliki oleh lebih dari satu element. sehingga penulisannya pun jamak/ pakai "s"

=> querySelector()
* hasil = elemen

=> querySelectorAll()
* hasil = nodelist

2 element diatas adalah untuk mencari selectornya/ bisa mencari sebuah elementnya seperti sebuah css


2. DOM Manipulation Methode
manipulasi element HTML menggunakan DOM

==> Manipulasi Element
==> Manipulasi Node

3. DOM Traversal
menulusuri element HTML menngunakan element HTML yang lain

4. Event Handling
Dimana kita akan melakukan perubahan pada DOM nya, atau menulusuri DOM nya karena ada trigger.
