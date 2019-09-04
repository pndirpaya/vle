import React, { Component } from 'react';
import Nav from './common/Nav'
import bg from './img/bg.png'
import design from './img/design.png'
import photography from './img/photography.png'
import pc from './img/pc.png'


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="uk-cover-container uk-inline">
          <img src={bg} alt="" />
          <div className='uk-container'>
            <div className='uk-overlay uk-light uk-text-left  uk-position-center-left' style={{ left: 'auto', padding: '0' }}>
              <h1>SheNation   VLE</h1>
              <h4>a virtual learning environment equipping  <br />young womenfor a better career</h4>
              <a className="uk-button uk-button-large vle_btn_pink">JOIN THE VLE</a>
            </div>
          </div>
        </div>
        <section className='uk-section'>
          <div className="uk-container">
            <h2 className='uk-text-center pink uk-padding-large'>Our Courses include</h2>
            <div className="uk-flex uk-flex-center">
              <div className="uk-text-center uk-width-4-5" data-uk-grid>
                <div className="uk-width-1-2@m uk-margin-large-bottom">
                  <div className="uk-flex-middle" data-uk-grid>
                    <div className="uk-width-3-5@m uk-text-left">
                      <h3>Design Thinking</h3>
                      <hr />
                      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                    </div>
                    <div className="uk-width-2-5@m uk-flex-first">
                      <img className='vle_thumb' src={design} alt="Image" />
                      <div className='uk-card uk-card-default uk-width-1-3 vle_thumb_icon'>
                        <span className='blue' style={{ padding: '2px' }} uk-icon="icon: pencil; ratio: 3"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-2@m uk-margin-large-bottom">
                  <div className="uk-flex-middle" data-uk-grid>
                    <div className="uk-width-3-5@m uk-text-left">
                      <h3>Photography</h3>
                      <hr />
                      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                    </div>
                    <div className="uk-width-2-5@m uk-flex-first">
                      <img className='vle_thumb' src={photography} alt="Image" />
                      <div className='uk-card uk-card-default uk-width-1-3 vle_thumb_icon'>
                        <span className='blue' style={{ padding: '2px' }} uk-icon="icon: camera; ratio: 3"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-2@m uk-margin-large-bottom">
                  <div className="uk-flex-middle" data-uk-grid>
                    <div className="uk-width-3-5@m uk-text-left">
                      <h3>Design Thinking</h3>
                      <hr />
                      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                    </div>
                    <div className="uk-width-2-5@m uk-flex-first">
                      <img className='vle_thumb' src={design} alt="Image" />
                      <div className='uk-card uk-card-default uk-width-1-3 vle_thumb_icon'>
                        <span className='blue' style={{ padding: '2px' }} uk-icon="icon: pencil; ratio: 3"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-2@m uk-margin-large-bottom">
                  <div className="uk-flex-middle" data-uk-grid>
                    <div className="uk-width-3-5@m uk-text-left">
                      <h3>Photography</h3>
                      <hr />
                      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                    </div>
                    <div className="uk-width-2-5@m uk-flex-first">
                      <img className='vle_thumb' src={photography} alt="Image" />
                      <div className='uk-card uk-card-default uk-width-1-3 vle_thumb_icon'>
                        <span className='blue' style={{ padding: '2px' }} uk-icon="icon: camera; ratio: 3"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='uk-section'>
          <div className="uk-container">
            <div className="uk-flex-middle" data-uk-grid>
              <div className="uk-width-2-3@m uk-text-left uk-flex-first">
                <h3 className='uk-margin-xlarge-left pink'>a virtual learning environment equipping  <br />young women for a better career</h3>
                <p className='uk-margin-xlarge-left'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,<br /> consectetur, adipisci velit.</p>
              </div>
              <div className="uk-width-1-3@m uk-margin-large">
                <img className='' src={pc} alt="Image" />
              </div>
            </div>
          </div>
        </section>
        <section className='uk-section vle_section_pink uk-light uk-text-center'>
          <h1 className=''>ready to get started?</h1>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          <a className="uk-button uk-button-large vle_btn_peach">Get Started</a>
        </section>
        <section className='uk-section uk-section-small uk-dark uk-text-center'>
          <p className='uk-text-meta'>(C) 2019 All Rights Reserved</p>
          
        </section>
      </div>
    );
  }
}

export default App;
