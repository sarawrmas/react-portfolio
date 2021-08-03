import React from 'react';

function Nav(props) {
  const pages = ['About', 'Portfolio', 'Contact', 'Resume']
  return (
    <div className="nav-div">
      <ul>
        {pages.map(page => (
          <li className="nav-list">
            <a
              href={'#' + page.toLowerCase()}
              onClick={() => props.setCurrentPage(page)}
              className={
                props.currentPage === page ? 'nav-link:active' : 'nav-link'
              }
            >
              {page}
            </a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;