import React from "react";

class About extends React.Component {

  render() { 
    return ( //Todo ClassName ABOUT
      <section id="footer" className="sect-pt4 route">
        <div className="container">
      
        <div className="row">
            <div className="col-sm-12">
            <span>
              Made with <i class="icon ion-heart"></i> By 
              <a href="dontforgetme" target="blank"></a>
                Nadja
            </span>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
            <span> © 2021 Copyright </span>
            </div>
        </div>
      
    </div>
      </section>
    );
  }
}

export default About;
