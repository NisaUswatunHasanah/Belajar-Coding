import React, {useState, useEffect} from 'react';
import axios from "axios"

const BookList = () => {
const [book, setBook] =useState([]);

useEffect(()=>{
    getBooks();
},[]);

const getBooks = async () =>{
    const response = await axios.get('http://127.0.0.1:5000/pustaka');
    console.log(response.data);
}
  return (
    <div className="column mt-5 is-center">
        <div className="column is-half">
          <table className='table is-striped is-fullwidth'>
              <thead>
                  <tr>
                      <th>No</th>
                      <th>Judul Buku</th>
                      <th>Penerbit</th>
                      <th>Jenis Buku</th>
                      <th>Harga</th>
                      <th>Aksi</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
              </tbody>
          </table>
        </div>
    </div>
  );
};

export default BookList;