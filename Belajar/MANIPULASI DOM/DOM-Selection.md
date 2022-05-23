1. DOM selection
Cara memilih sebuah elemen yang ada didalam document menggunakan Javascript. DOM selection ini merupakan tahap awal jika ingin memanipulasi DOM. 

# Code html

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DOM Selection</title>
            <style>
                * {
                    border: 2px solid #dedede;
                    padding: 15px;
                    margin: 15px;
                }
                html {
                    margin: 0;
                    padding: 0;
                }
                body {
                    max-width: 600px;
                    margin: 30px auto;
                    font-family: sans-serif;
                    color: #333;
                }
            </style>
        </head>

        <body>

            <h1 id="judul">Hello World</h1>
            <div id="container">
                <section id="a">
                    <p class="p1">paragraf 1</p>
                    <a href="http://instagram.com/nisa_uswatun_khasanah">Instagram Nisa</a>
                    <p class="p2">paragraf 2</p>
                    <p class="p3">paragraf 3</p>
                </section id="b">
                <p>paragraf 4</p>
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
                </section>
                <section id="b">
                    <p>Paragraf 1</p>
                    <p>Paragraf 2</p>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>

                </section>
            </div>
            

           <script src="main.js";></script> 
        </body>
        </html>

  
            
untuk memilih beberapa element ada beberapa method atau fungsi yang bisa digunakan diantaranya adalah:

1. document.getElementById()


