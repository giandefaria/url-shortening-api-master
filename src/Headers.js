import logo from './images/logo.svg'
import './styles/Header.css'

function test() { 
    return (
        <header className='header--container'>
            <section className="logo--and--nav">
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
            </section>

            <section className="login--box">
                <ul className="login--acess">
                    <li><a href="#">Login</a></li>
                    <li><a href="#" id="sign--up">Sign Up</a></li>
                </ul>

            </section>

        </header>
  );
}

export default test;