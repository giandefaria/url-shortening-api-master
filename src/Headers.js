import logo from './images/logo.svg'
import './styles/Header.css'

function test() { 
    return (
        <section className='header--container'>
            <div className="logo--and--nav">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <ul className="nav--links">
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>
            </div>

            <div className="login--box">
                <ul className="login--acess">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>

            </div>

        </section>
  );
}

export default test;