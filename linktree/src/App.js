import React, {useEffect} from 'react'
import './App.css';

function importAll(r){
const images = {};
r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
return images
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));



function App() {
  useEffect(()=>{

  })
  return (
    <div className="App">

      <header>
      <div>
        <img src={images["me.jpeg"]} alt="Erinle Samuel"/>
      </div>
      <h1>Erinle Samuel</h1>

      <div>
        <img src={images["share_icon"]} alt="Share"/>{/* Share icons changes to 3dots on smaller screen */}
      </div>
      
      </header>


      <main>
    <div>
      <a href='#' target="_blank">Slack Link</a>
    </div>   

    <div>
      <a href='#' target="_blank">Twitter Link</a>
    </div>

    <div>
      <a href='#' target="_blank">Zuri Team</a>
    </div>

    <div>
      <a href='#' target="_blank">Zuri Books</a>
    </div>

    <div>
      <a href='#' target="_blank">Python Books</a>
    </div>

    <div>
      <a href='#' target="_blank">Background Check for Coders</a>
    </div>

    <div>
      <a href='#' target="_blank">Design Books</a>
    </div>

    <figure>
      <img src={images["slack_icon.svg"]} alt="slack"/>
      <img src={images["github_icon.svg"]} alt="github"/>
    </figure>


      </main>


      <footer>
     <div>
      <img src={images["zuri_logo.svg"]} alt="zuri logo"/>
      <p>HNG Internship 9 Frontend Task</p>
      <img src={images["I4G_logo.svg"]} alt="I4G logo"/>
     </div>
      </footer>
      
    </div>
  );
}

export default App;
