import React from "react";

class About extends React.Component {

  render() { 
    return ( //Todo ClassName ABOUT
      <section id="footer" className="sect-pt4 footer">
        <div className="container">
      <div>
        <div className="row">
            <div className="col">
            <span>
              Made with <i class="icon ion-heart"></i> By 
              <a href="dontforgetme" target="blank"></a>
                Nadja
            </span>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <span> © 2021 Copyright </span>
            </div>
        </div>
      </div>
    </div>
      </section>
    );
  }
}

export default About;
