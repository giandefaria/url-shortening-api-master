import logo from '../../images/logo.svg'
import menu from '../../images/icon-menu.svg'
import './Header.css'

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

            <img className='menu--icon' src={menu} alt="menu" onClick={menuOn} />

        </header>
  );

        function menuOn() {
            let navDisplay = document.querySelector('.nav--links');
            let loginDisplay = document.querySelector('.login--acess');
            let loginboxDisplay = document.querySelector('.login--box');

            if (navDisplay.classList.value == 'nav--links') {
                navDisplay.classList.add ('nav--links--display--mobile');
                loginDisplay.classList.add  ('login--acess--display--mobile');
                loginboxDisplay.classList.add ('login--box--display--mobile')
                
            } else {
                navDisplay.classList.remove ('nav--links--display--mobile');
                loginDisplay.classList.remove ('login--acess--display--mobile');
                loginboxDisplay.classList.remove ('login--box--display--mobile')
            }

        }

  
}

export default test;