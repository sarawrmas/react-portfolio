import React, { useEffect } from 'react';

function Navigation(props) {
  const pages = ['About', 'Projects', 'Blog', 'Resume', 'Contact']

  const {
    currentPage,
    setCurrentPage
  } = props;

  useEffect(() => {
    document.title = `Sara Adamski | ${currentPage}`
  })

  return (
    <div className="nav-div">
      <ul>
        {pages.map(page => (
          <li className="nav-li" key={page.toLowerCase()}>
            <a
              href={'#' + page.toLowerCase()}
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page ? 'nav-link-active' : 'nav-link'
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

export default Navigation;