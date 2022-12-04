import working from './images/illustration-working.svg'
import './styles/Main.css'
import recognition from './images/icon-brand-recognition.svg'
import records from './images/icon-detailed-records.svg'
import customizable from './images/icon-fully-customizable.svg'

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

      <section className="beneficies--container">

        <div className="advanced--statistics--box">
          <h1>Advanced Statistics</h1>
          <p>Track How Your links are performing across the web with our advanced statistics dashboard.</p>

        </div>

        <div className="container--box--beneficies">
          <div className='box--beneficies'>
            <img src={recognition} alt="brand recognition" />
            <h2>Brand Recognition</h2>
            <p>Bost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</p>

          </div>
            
          <div className='box--beneficies'>
            <img src={records} alt="brand recognition" />
            <h2>Brand Recognition</h2>
            <p>Bost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</p>

          </div>

          <div className='box--beneficies'>
            <img src={customizable} alt="brand recognition" />
            <h2>Brand Recognition</h2>
            <p>Bost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Main;