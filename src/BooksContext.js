import React, {createContext} from 'react';

const BooksContext = React.createContext({
    searchedBook: '',
    setSearchedBook: () => {},
});

export default BooksContext;
