import React, {useContext} from 'react'
import BooksContext from '../../BooksContext'

function Researchbox() {
    const {setSearchedBook} = useContext(BooksContext);

    return (
        <div className='research-box'>
            <input className='research' type='text' placeholder='Research...'
                   onChange={(event) => {
                       setSearchedBook(event.target.value)
                   }
            }/>
        </div>
    )
}

export default Researchbox;
