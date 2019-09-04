import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
        <div className='uk-navbar-container  vle_navbar'>
          <nav className="uk-container uk-light" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav vle_menu">
                <li><a href="#">courses</a></li>
                <li><a href="#">about us</a></li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav vle_menu">
                <li><a href="#">login</a></li>
                <li><a href="#">register</a></li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}

export default Nav;
