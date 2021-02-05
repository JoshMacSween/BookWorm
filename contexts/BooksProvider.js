import React, {createContext, useState} from 'react';
import GOOGLE_API_KEY from '../key';
import {View, Text} from 'react-native';
import axios from 'axios';

export const BooksContext = createContext();

export default function BooksProvider(props) {
  const [books, setBooks] = useState('');

  async function fetchBooks(q) {
    const result = await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${GOOGLE_API_KEY}`,
      )
      .then((response) => {
        setBooks(response.data.items);
      });
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
      }}>
      {props.children}
    </BooksContext.Provider>
  );
}
