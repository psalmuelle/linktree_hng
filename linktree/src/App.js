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
      <div id='profile_id--container'>
        <img id='profile_id' src={images["me.jpeg"]} alt="Erinle Samuel"/>
      </div>
      <h1>Erinle Samuel</h1>

      <div>
        <img src={images["share_Icon.svg"]} alt="Share"/>{/* Share icons changes to 3dots on smaller screen */}
      </div>
      
      </header>


      <main>
    <div className='link_container'>
      <a id='twitter' href='#' target="_blank">Twitter Link</a>
    </div>

    <div className='link_container' hidden >
      <a id='slack' href='#' target="_blank">Slack Link</a>
    </div>   

    <button id='btn_zuri' className='link_btn'>
      <a href='https://training.zuri.team/' target="_blank">Zuri Team</a>
    </button>

    <button id='books' className='link_btn'>
      <a href='http://books.zuri.team/' target="_blank">Zuri Books</a>
    </button>

    <button id='book_python' className='link_btn'>
      <a href='https://books.zuri.team/python-for-beginners?ref_id=erinle_sam' target="_blank">Python Books</a>
    </button>

    <button id='pitch' className='link_btn'>
      <a href='https://background.zuri.team/' target="_blank">Checkout Top-notch Coders</a>
    </button>

    <button id='book_design' className='link_btn'>
      <a href='https://books.zuri.team/design-rules' target="_blank">Design Books</a>
    </button>

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
