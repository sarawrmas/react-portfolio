import React, { useEffect, useState } from 'react';
// import Footer from './Footer';

function Navigation() {
  const pages = ['About', 'Projects', 'Blog', 'Contact']

  const [currentPage, setCurrentPage] = useState("About");

  const getPageName = (e) => {
    setCurrentPage(e.target.innerHTML)
  }

  useEffect(() => {
    document.title = `Sara Adamski | ${currentPage}`
  })

  return (
    <div className="header-div">
      <ul className="nav-list">
        <li className="nav-link nav-li" id="nav-brand"><a href="/">Sara Adamski</a></li>
        {/* <li classname="nav-li"><Socials /></li> */}
        <ul className="nav-group">
        {pages.map(page => (
          <li className="nav-li" key={page.toLowerCase()}>
            <a
              href={'#' + page.toLowerCase()}
              onClick={getPageName}
              className={
                currentPage === page ? 'nav-link-active' : 'nav-link'
              }
            >
              {page}
            </a>{" "}
          </li>
        ))}
        </ul>
      </ul>
    </div>
  );
}

export default Navigation;

// import React, { useEffect, useState } from 'react';
// import { Navbar, Nav, Container, } from 'react-bootstrap';
// import Footer from './Footer';

// function Navigation() {

//   const [currentPage, setCurrentPage] = useState("About");

//   const getPageName = (e) => {
//     setCurrentPage(e.target.innerHTML)
//     console.log(currentPage)
//   }

//   useEffect(() => {
//     document.title = `Sara Adamski | ${currentPage}`
//   })

//   const pages = ["About", "Projects", "Resume", "Blog", "Contact"]

//   return (
//     <div className="nav-div">
//       <Navbar collapseOnSelect expand="md" bg="secondary" variant="dark">
//         <Container fluid>
//         {/* <Navbar.Brand href="/" className="name-header">Sara Adamski</Navbar.Brand> */}
//         <Navbar.Toggle aria-controls='navbar' />
//         <Navbar.Collapse id='navbar'>
//         <Nav>
//           <Nav.Link href="/">
//             Sara Adamski
//           </Nav.Link>
//           <Nav.Link>
//             <Footer />
//           </Nav.Link>
//           {pages.map(page => (
//             <Nav.Link
//               href={`#${page.toLowerCase()}`}
//               key={page.toLowerCase()}
//               onClick={getPageName}
//               className="link-in-nav"
//               // className={page.toLowerCase() === ""}
//             >
//               {page}
//             </Nav.Link>
//           ))}
//         </Nav>
//         </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Navigation;