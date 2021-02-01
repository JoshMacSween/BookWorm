import React, {createContext, useState} from 'react';
import GOOGLE_API_KEY from '../key';
import {View, Text} from 'react-native';
import axios from 'axios';

export const BooksContext = createContext();

export default function BooksProvider(props) {
  const [books, setBooks] = useState('');

  const fetchBooks = () => {
    const result = axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${GOOGLE_API_KEY}`,
    );
    setBooks(result.data);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        // fetchBooks,
      }}>
      {props.children}
    </BooksContext.Provider>
  );
}
