import { Fade } from "react-awesome-reveal";
import { primary_btn, white_btn } from "./components/reusable_css";
import Image from "next/image"
import { BgImg } from "./components/bg_img";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <main>
        <div style={{...BgImg("https://ngratesc.sirv.com/Travel%20Den/header.jpg"),backgroundAttachment:"fixed"}} className="vh-100 primary d-flex align-items-center justify-content-center">
          <div className=" container d-flex align-items-center justify-content-center">
            
            <div className="text-center header rounded p-5 border_grad s_border">
              <Fade cascade={true}>
                <h1 className="display-1 text-white  fw-bold">Travel Den</h1>
                <h3 className=" ts">Explore • Dream • Discover</h3>
                <p className="text-white">
                  Your Trusted Travel Partner
                </p>
                <Link href="/book"><button className={`${white_btn}`}>Book Your Trip</button></Link>
                </Fade>
            </div>
          
          </div>

        </div>
        <div className="min-vh-100  d-flex align-items-center justify-content-center text-center">
          <Fade cascade={true} >
          <div className="container pt-5 pb-5">
            <h1 className="display-1 fw-bold tp"><span className="ts">Once</span> In A Life Time</h1>
            <p>We make every trip a new experience you wont forget</p>
            <div className="row gap-3 justify-content-center">
              <div className="col-sm">
                  

                  <Image src="https://ngratesc.sirv.com/Travel%20Den/4.png" width={"300"} height={"300"} alt="zanibar"/>
                  <p><span className="fw-bold ts">Explore</span> new destinations and embrace the beauty of the unknown.</p>
              </div>
              <div className="col-sm">
              <Image src="https://ngratesc.sirv.com/Travel%20Den/balli.png" width={"300"} height={"300"} alt="zanibar"/>
              <p><span className="fw-bold ts">Discover</span> unforgettable experiences that leave lasting memories.</p>
              </div>
              <div className="col-sm">
 <Image src="https://ngratesc.sirv.com/Travel%20Den/ship.png" width={"300"} height={"300"} alt="zanibar"/>
                  <p><span className="fw-bold ts">Dream</span> beyond borders and turn your travel fantasies into reality.</p>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-row flex-wrap gap-1">
              <Link href="/tours"><button className="btn rounded-pill p-btn">View Available Tours</button> </Link>

              
              <Link href="/book"><button className="btn rounded-pill p-btn">Plan Your Trip With Us</button></Link>

            </div>
            </div>
            </Fade>
        </div>
        <div className="min-vh-100 secondary d-flex align-items-center justify-content-center" style={{backgroundAttachment:"fixed"}}>
          <div className="row container d-flex align-items-center">

            <div className="col-sm text-md-start text-center order-md-2 pt-5">
              <Fade cascade={true}>
                <h5>About us</h5>
                <h1 className="display-1 text-white fw-bold">About<br/><span className="tp">Travel Den</span></h1>
                <p className="text-white">We are committed to providing exceptional travel experiences tailored to your needs. Whether you&apos;re planning an adventurous getaway, a corporate trip, or a relaxing holiday, we ensure a seamless journey from start to finish.
                </p>
                <Link href="/book"><button className={`${white_btn}`}>Book Your Trip</button></Link>
                </Fade>
            </div>
            <div className="col-sm order-md-1">
              <Fade>
                <Image src="https://ngratesc.sirv.com/Travel%20Den/edr.png" className="img-fluid" width="700" height="500" alt="Picture of Zanzibar"/>
              </Fade>
            </div>
          </div>

        </div>
        <div className="text-center secondary vh-100 d-flex flex-column align-items-center justify-content-center" style={{...BgImg("https://ngratesc.sirv.com/Travel%20Den/pexels-keeganjchecks-9730025.jpg"), backgroundAttachment:"fixed"}}>
          <div className="p-5 rounded header">
          <Fade cascade={true}>
            <h1 className="display-1 ts fw-bold text-white">
              Visit Zanzibar
            </h1>
            <p className="text-white ts">Where Turquoise Waters Meet Timeless Beauty</p>
            <Link target="_blank" href="https://wa.me/263776743323?text=Hi, can i get more information about booking a trip to Zanzibar"> <button className={white_btn}>Get Started</button></Link>
          </Fade>
          </div>

        </div>
        <Fade  cascade={true}>
        <div className="container p-5 text-center">
            <h1 className="display-1 fw-bold text-black"><span className="tp">Our Vision</span> <span className="ts"> & Mission</span></h1>
            <p>We strive to be <i>“Your Most Preferred Travel Agency”</i> by offering outstanding services that exceed expectations and create unforgettable memories. Our goal is to bring people together, fostering shared experiences, dialogue, and growth.</p>
            <h4><span className="tp">Core </span><span className="ts">Values</span></h4>
            <div className="row gap-5">
                <div className="col-sm primary rounded text-white p-1" >
                  <h2><i className="bi bi-people-fill"></i></h2>
                    <h5>Team Work</h5>
                </div>
                <div className="col-sm secondary rounded text-white p-1" >
                  <h2><i className="bi bi-award"></i></h2>
                    <h5>Quality Service</h5>
                </div>
                <div className="col-sm primary rounded text-white p-1" >
                  <h2><i className="bi bi-chat-square-text"></i></h2>
                    <h5>Communication</h5>
                </div>
                
            </div>
        </div>
        </Fade>
        <div className="text-center secondary vh-100 d-flex flex-column align-items-center justify-content-center" style={{...BgImg("https://ngratesc.sirv.com/Travel%20Den/pexels-nextvoyage-1467300.jpg"), backgroundAttachment:"fixed"}}>
          <div className="p-5 rounded header">
          <Fade cascade={true}>
            <h1 className="display-1 ts fw-bold text-white">
              Visit Dubai
            </h1>
            <p className="text-white ts">A Journey Into Luxury, Adventure, and Endless Wonders</p>
            <Link target="_blank" href="https://wa.me/263776743323?text=Hi, can i get more information about booking a trip to Dubai"><button className={white_btn}>Get Started</button></Link>
          </Fade>
          </div>

        </div>
        <div className="min-vh-100 primary text-white d-flex align-items-center justify-content-center">
         
          <div className="pt-5 pb-5">
          <Fade cascade={true} >
            <div className="container text-center ">
              <h1 className="display-1 fw-bold">Meet The <span className="span">A-Team</span></h1>
            </div>
            <div className=" m-5">
            <div className="row gap-5">
              <div className="col-sm bg-white  rounded p-0 team_card container">
                  <div className="rounded" style={{
                    ...BgImg("https://ngratesc.sirv.com/Travel%20Den/opd.jpg"),
                    height:"30vh",
                    width:"100%"
                  }}>

                  </div>
                  <div className="p-2">
                  <h3 className="tp">Sandra Shamhuyarira</h3>
                  <p className="ts">Operations Director</p>
                  <a href="tel:+263776743196"> <button className={`${primary_btn} w-100`}>Get In Touch</button></a>
                  </div>

              </div>
              <div className="col-sm border bg-white team_card rounded p-0">
                  <div style={{
                    ...BgImg("https://ngratesc.sirv.com/Travel%20Den/zoe.jpg"),
                    height:"30vh",
                    width:"100%"
                  }}>

                  </div>
                  <div className="p-2">
                  <h3 className="tp">Zowie Takunda Shamhuyarira</h3>
                  <p className="ts">Senior Travel Consultant</p>
                  <a href="tel:+263719743323"><button className={`${primary_btn} w-100`}>Get In Touch</button></a>
                  </div>

              </div>
              <div className="col-sm bg-white border team_card rounded p-0">
                  <div style={{
                    ...BgImg("https://ngratesc.sirv.com/Travel%20Den/gh.jpg"),
                    height:"30vh",
                    width:"100%"
                  }}>

                  </div>
                  <div className="p-2">
                  <h3 className="tp">Christine Makanaka Pearl Tom</h3>
                  <p className="ts">Travel Consultant</p>
                  <a href="tel:+263783996339"><button className={`${primary_btn} w-100`}>Get In Touch</button></a>
                  </div>

              </div>
              <div className="col-sm border bg-white team_card rounded p-0">
                  <div style={{
                    ...BgImg("https://ngratesc.sirv.com/Travel%20Den/tin.jpg"),
                    height:"30vh",
                    width:"100%"
                  }}>

                  </div>
                  <div className="p-2">
                  <h3 className="tp">Tinodiwa Chikombero</h3>
                  <p className="ts">Travel Consultant</p>
                  <a href="tel:+263719808160"><button className={`${primary_btn} w-100`}>Get In Touch</button></a>
                  </div>

              </div>
           
            </div>
            </div>
            </Fade>
            </div>
        </div>
        <div className="text-center secondary vh-100 d-flex flex-column align-items-center justify-content-center" style={{...BgImg("https://ngratesc.sirv.com/Travel%20Den/pexels-niklas-eichler-2137446-3770287.jpg"), backgroundAttachment:"fixed"}}>
          <div className="p-5 rounded header">
          <Fade cascade={true}>
            <h1 className="display-1 ts fw-bold text-white">
              Visit Cape Town
            </h1>
            <p className="text-white ts">Where Breathtaking Beauty Meets Unforgettable Adventure!</p>
           <Link target="_blank" href="https://wa.me/263776743323?text=Hi, can i get more information about booking a trip to Cape Town"><button className={white_btn}>Get Started</button></Link> 
          </Fade>
          </div>

        </div>
      </main>
    </div>
  );
}
