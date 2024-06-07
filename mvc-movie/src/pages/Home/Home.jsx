import React from 'react';
import './Home.css';
import Navbar from '../../components/NavBar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';
import video from '../../assets/video/The Protector   Teaser [HD]   Netflix.mp4'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>

      <div className="hero">{/*dentro desta div esta a configuracao da nossa imagem do fundo*/}
        {/*<img src={hero_banner} alt="hero image" className='banner-img' />imagem do filme*/}
        <video src={video} className='banner-img' autoPlay loop muted></video>

        <div className="hero_caption">
          <img src={hero_title} alt="hero title" className='caption-img'/>{/*imagem que mostra o titulo do filme*/}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, delectus eum odio 
            nam impedit aspernatur exercitationem rem unde nostrum ut.
          </p>

          <div className="hero-btns">
            <button className='btn '><img src={play_icon} alt="btn-img" />play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="btn-img" />more info</button>
          </div>

          <TitleCards/>

        </div>
      </div>

      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"}/>
      <TitleCards title={"Only on MVCmovie"}/>
      <TitleCards title={"Upcoming"}/>
      <TitleCards title={"Top Pics for you"}/>

      </div>

      <Footer/>

    </div>
  )
}

export default Home
