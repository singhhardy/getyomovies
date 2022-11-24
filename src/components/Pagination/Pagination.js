import React from 'react'

export const Pagination = ({ cardsPerPage, totalCards, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <nav>
        <ul className='pagination m-5'>
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a onClick={() => paginate(number)} href='#' className='page-link bg-dark'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}
