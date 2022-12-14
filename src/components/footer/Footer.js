import "./Footer.css"
import logo from '../../assets/styles/images/logo.svg'
import facebook from "../../assets/styles/images/icon-facebook.svg"
import twitter from "../../assets/styles/images/icon-twitter.svg"
import pinterest from "../../assets/styles/images/icon-pinterest.svg"
import instagram from "../../assets/styles/images/icon-instagram.svg"


function footer() { 
    
    return (
    <footer>
      <section className="container--footer">
        <div className="footer--logo">
          <img src={logo} alt="logo"/>
          
        </div>

        <div className="container--footer--links"> 
          <div id="features" className="flex">
            <h2>Features</h2>
            <ul>
              <li><a href="#">Link Shortening</a></li>
              <li><a href="#">Branded Links</a></li>
              <li><a href="#">Analytics</a></li>
            </ul>
          </div>

          <div id="resources" className="flex">
            <h2>Resources</h2>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Support</a></li>
            </ul>  
          </div>

          <div id="company" className="flex">
            <h2>Company</h2>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Carrers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="social--logos">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />

          </div>
        </div> 

      </section>
    </footer>
  );
}

export default footer;