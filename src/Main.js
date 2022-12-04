import working from './images/illustration-working.svg'
import backgroundimg from './images/bg-shorten-desktop.svg'
import './styles/Main.css'


function Main() { 
    
    return (
    <main>
      <section className="container--top--main">
          <div className="box--main--text">
            <div className="main--text">
              <h1 className="title">More than just shorter links</h1>
              <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            
            </div>
            <div className="main--button">
              <button>Get Started</button>

            </div> 
          
          </div>

          <div className="main--image">
            <img src={working} alt="working"/>

          </div>
      </section>

      <section>

        <div className="shorten--container">

          <form className="shorten--box" action="">
            <input type="url" name="link--to--shorten" id="link--to--shorten" className='input--link'/>
            <button type="submit" className='input--button'>Shorten it!</button>
          </form>

          <div className="inner--shorten">

          </div>

        </div>

      </section>

    </main>
  );
}

export default Main;