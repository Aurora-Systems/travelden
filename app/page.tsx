import { Fade } from "react-awesome-reveal";
import { white_btn } from "./components/reusable_css";
import Image from "next/image"

export default function Home() {
  return (
    <div >
      <main>
        <div className="vh-100 primary d-flex align-items-center justify-content-center">
          <div className="row container d-flex align-items-center">

            <div className="col-sm text-md-start text-center">
              <Fade cascade={true}>
                <h1 className="display-1 text-white fw-bold">Travel Den</h1>
                <h3 className="text-white">Your Trusted Travel Partner</h3>
                <p className="text-white">
                </p>
                <button className={`${white_btn}`}>Book Your Trip</button>
                </Fade>
            </div>
            <div className="col-sm">
              <Fade>
                <Image src="https://ngratesc.sirv.com/Travel%20Den/1.png" className="img-fluid" width="700" height="500" alt="Picture of Zanzibar"/>
              </Fade>
            </div>
          </div>

        </div>
        <div className="vh-100 secondary d-flex align-items-center justify-content-center">
          <div className="row container d-flex align-items-center">

            <div className="col-sm text-md-start text-center order-md-2">
              <Fade cascade={true}>
                <h5>About us</h5>
                <h1 className="display-1 text-white fw-bold">About<br/><span className="tp">Travel Den</span></h1>
                <p className="text-white">We are committed to providing exceptional travel experiences tailored to your needs. Whether you&apos;re planning an adventurous getaway, a corporate trip, or a relaxing holiday, we ensure a seamless journey from start to finish.
                </p>
                <button className={`${white_btn}`}>Book Your Trip</button>
                </Fade>
            </div>
            <div className="col-sm order-md-1">
              <Fade>
                <Image src="https://ngratesc.sirv.com/Travel%20Den/2.png" className="img-fluid" width="700" height="500" alt="Picture of Zanzibar"/>
              </Fade>
            </div>
          </div>

        </div>
        <Fade direction="up" cascade={true}>
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
        <div className="vh-100 primary text-white">
            <div className="container text-center">
              <h1 className="display-1 fw-bold">Meet The <span className="span">A-Team</span></h1>
            </div>
        </div>
      </main>
    </div>
  );
}
