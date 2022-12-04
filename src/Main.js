import working from './images/illustration-working.svg'
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
    </main>
  );
}

export default Main;