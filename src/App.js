import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React, {useEffect} from 'react';

function App() {
  function Log() {
    var parent = document.querySelector("div");
    var child = document.createElement("span");
    child.innerHTML= '❤';
    child.classList.add('heart')
    child.style.left = Math.random() * 100 + 'vw'
    child.style.transform = `rotateZ(${Math.floor(Math.random() * 360)}deg)`
    child.style.fontSize = Math.random() * 25 + 'px'
    child.style.animationDuration = Math.random() * 2 + 3 + 's'
    parent.appendChild(child);

    // console.log(parent.childElementCount)

    if(parent.childElementCount > 250) {
      parent.childNodes[2].remove()
    }
  }
  setInterval(Log, 75)

  useEffect(() => {
    document.querySelectorAll('button')[0].addEventListener('click', () => {
      document.querySelector('h1').innerText = "ESSA FOI SUA MELHOR ESCOLHA!";
      document.querySelector('.gif').setAttribute("style","display: flex")
    })

    let noButton = document.querySelectorAll('button')[1]
    noButton.addEventListener('mouseover', () => {
          noButton.style.position = 'absolute';
          noButton.style.left = Math.round(Math.random() * 80) + '%' 
          noButton.style.top = Math.round(Math.random() * 80) + '%' 
    })
  
    noButton.addEventListener('click', () => {
          noButton.style.position = 'absolute';
          noButton.style.left = Math.round(Math.random() * 80) + '%' 
          noButton.style.top = Math.round(Math.random() * 80) + '%' 
    })
  })
  

  return (
    <section>
      <div className="sky"></div>

      <div className="container">
        <h1 className="h1" style={{fontSize: '4rem', color: '#fff'}}>
          Quer namorar comigo?
          <div className='btns'>
              <button id="yes" type="button" className="btn btn-dark" style={{width: '80px', height: '50px'}}>Sim!</button>
              <button id="no" type="button" className="btn btn-dark" style={{width: '80px', height: '50px'}}>Não.</button>
          </div>
          <br/>
        </h1>
          <div className='gif'>
            <iframe title='gif' src="https://giphy.com/embed/mmPgxbuPiwCQg" width="500px" height="380px" className="giphy-embed" allowFullScreen>
            </iframe>
          </div>
      </div>

      
    </section>
  );
}

export default App;
