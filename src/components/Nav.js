import React from 'react';

function Nav(props) {
  const pages = ['About', 'Portfolio', 'Contact', 'Resume']
  return (
    <ul>
      {pages.map(page => (
        <li>
          <a
            href={'#' + page.toLowerCase()}
            onClick={() => props.setCurrentPage(page)}
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;