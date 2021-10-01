import React from 'react';
import logo from '../assets/images/logo-1.png'
import '../assets/css/nav.css';

function nav() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/#"><img src={logo} alt="logo" width="auto" height="70" class="logo-image d-inline-block align-text-top"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse menu-option-alignement" id="navbarNavAltMarkup">
            <div class="navbar-nav menu-item-option ">
              <a class="nav-link active" aria-current="page" href="/#">INICIO</a>
              <a class="nav-link" href="/#">VER MAS</a>
              <a class="nav-link" href="/#">CONTACTO</a>
            </div>
          </div>
        </div>
      </nav>
    //     <nav class="navbar navbar-light bg-light">
    //     <div class="container-fluid">
    //       <a class="navbar-brand" href="/#">
    //         <img src={logo} alt="logo" width="auto" height="60" class="d-inline-block align-text-top"/>

    //       </a>
          
          
    //       <div class="collapse navbar-collapse" id="navbarNavDropdown">
    //         <ul class="navbar-nav">
    //             <li class="nav-item">
    //             <a class="nav-link active" aria-current="page" href="/#">Home</a>
    //             </li>
    //             <li class="nav-item">
    //             <a class="nav-link" href="/#">Features</a>
    //             </li>
    //             <li class="nav-item">
    //             <a class="nav-link" href="/#">Pricing</a>
    //             </li>
    //             <li class="nav-item dropdown">
    //             <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                 Dropdown link
    //             </a>
    //             <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //                 <li><a class="dropdown-item" href="/#">Action</a></li>
    //                 <li><a class="dropdown-item" href="/#">Another action</a></li>
    //                 <li><a class="dropdown-item" href="/#">Something else here</a></li>
    //             </ul>
    //             </li>
    //         </ul>
    //         </div>
          
    //     </div>
    //   </nav>
    );
}

export default nav;