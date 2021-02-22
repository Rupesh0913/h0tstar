import React from "react";
import "./navbar.css";

function Navbar() {
 
  return (
    <div className="App">

      <div class="container align-content" >
        <section>
        <img class="brand-logo" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar"></img>
          <nav>
            <ul class="navbar">
              <li class="dropdown-link">
                <a href="#">Tv</a>
                <div class="subNavbar">
                <ul>
                  <li><a href="#">Hotstar Special</a></li>
                  <li><a href="#">Star Plus</a></li>
                  <li><a href="#">Life ok</a></li>
                  <li><a href="#">more...</a></li>
                </ul>
                </div>
              </li>
              <li class="dropdown-link">
                <a href="#">Movies</a>
                <div class="subNavbar">
                <ul>
                  <li><a href="#">HIndi</a></li>
                  <li><a href="#">Bangla</a></li>
                  <li><a href="#">Marathi</a></li>
                  <li><a href="#">telgu</a></li>
                  <li><a href="#">Malyalam</a></li>
                  <li><a href="#">kannada</a></li>
                </ul>
                </div>
              </li>
              <li class="dropdown-link">
                <a href="#">Sports</a>
                <div  class="subNavbar">
                <ul>
                  <li><a href="#">Cricket</a></li>
                  <li><a href="#">Football</a></li>
                  <li><a href="#">badminton</a></li>
                  <li><a href="#">Formula 1</a></li>
                  <li><a href="#">eSports</a></li>
                  <li><a href="#">wrestling</a></li>
                  <li><a href="#">Table Tennis</a></li>
                </ul>
                </div>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Premium</a>
              </li>
              <li>
                <a href="#">Disney+</a>
              </li>
              <li>
                <a href="#">kids</a>
              </li>
            </ul>
          </nav>
          <div class="sub">
              <form>
              <input type="search" id="search" class="form-control" placeholder="Search"></input>
              </form>
              <button href="#" id ="button1" >SUBSCRIBE</button>
              <button href="#" id ="button2">Login</button>
          </div>
        </section>
      </div>
     
    </div>
  );
}
export default Navbar;
