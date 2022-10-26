import React, {useEffect, useState} from 'react'
import './App.css';

function importAll(r){
const images = {};
r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
return images
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));



function App() {
  const [shareIcon, setShareIcon] = useState(images["share_Icon.svg"])
  useEffect(()=>{
document.title = "hng_task"
  })
  return (
    <div className="App">

      <header>
        <div id='profile__img--container'>
        <img id='profile__img' src={images["me.jpeg"]} alt="Erinle Samuel"/>
        <figure id="camera__icon"><img src={images["camera_icon.svg"]} alt="change icon"/></figure>
        </div>
      <h1 id='twitter'>Erinle Samuel</h1>
      <h2 id='slack' hidden >erinle_sam</h2>

      <div id='share__container' title='Share Link' onClick={()=> setShareIcon((prev)=>{
      return  prev === images["share_Icon.svg"]? images["3-dots_icon.svg"]: images["share_Icon.svg"]
      } )}>
        <img src={shareIcon} alt="Share"/>
      </div>
      
      </header>


      <main>
    
    <button id='twitter__link' className='link__btn'>
      <a  href='https://twitter.com/erinle_sam' target="_blank" rel='noreferrer'>Twitter Link</a>
    </button>

    <button id='btn__zuri' className='link__btn'>
      <a href='https://training.zuri.team/' target="_blank" rel='noreferrer'>Zuri Team</a>
    </button>

    <button id='books' className='link__btn'>
      <a href='http://books.zuri.team/' target="_blank" rel='noreferrer'>Zuri Books</a>
    </button>

    <button id='book__python' className='link__btn'>
      <a href='https://books.zuri.team/python-for-beginners?ref_id=erinle_sam' target="_blank" rel='noreferrer'>Python Books</a>
    </button>

    <button id='pitch' className='link__btn'>
      <a href='https://background.zuri.team/' target="_blank" rel='noreferrer'>Checkout Top-notch Coders</a>
    </button>

    <button id='book__design' className='link__btn'>
      <a href='https://books.zuri.team/design-rules' target="_blank" rel='noreferrer'>Design Books</a>
    </button>

    <figure id='social__icons'>
      <img src={images["slack_icon.svg"]} alt="slack"/>
      <img src={images["github_icon.svg"]} alt="github"/>
    </figure>


      </main>


      <footer>
     <div>
      <img src={images["zuri_logo.svg"]} alt="zuri logo"/>
      <div id='hng__task'>HNG Internship 9 Frontend Task</div>
      <img src={images["I4G_logo.svg"]} alt="I4G logo"/>
     </div>
      </footer>
      
    </div>
  );
}

export default App;
