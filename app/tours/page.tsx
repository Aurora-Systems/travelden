import { Fade } from "react-awesome-reveal";
import { primary_btn } from "../components/reusable_css";

export default function tours(){
    return(
        <div>
            <div className="min-vh-100 pt-5 pb-5">
                <Fade cascade={true} direction="down">
                <div className="text-center">

                <h1 className="display-1 fw-bold text-center tp">
                    Available <span className="ts">Tours</span>
                </h1>
                <p>
                    A new destination awaits you
                </p>
                </div>
                <div className="container">
                    <div className="row gap-3">
                        <div className="col-sm rounded shadow p-3">
                           {/* eslint-disable-next-line @next/next/no-img-element */}
                           <img src="https://ngratesc.sirv.com/Travel%20Den/1.png" className="rounded mb-2 w-100 img-fluid" style={{height:"50vh", objectFit:"cover"}} alt="cabo"/>
                            <br/>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <h4 className="ts">5 Nights in Cabo</h4>
                                <span className="tp fw-bold">$1300</span>
                            </div>
                            <div>
                                <p>
                                    Spend 5 spectecluar nights in Cabo from 10 August 2025 to the 20th of August 2025
                                </p>
                            </div>
                            <div>
                                <button className={`${primary_btn} w-100`}>Get More Information</button>
                            </div>
                        </div>
                        <div className="col-sm rounded shadow p-3">
                           {/* eslint-disable-next-line @next/next/no-img-element */}
                           <img src="https://ngratesc.sirv.com/Travel%20Den/2.png" className="rounded mb-2 w-100 img-fluid" style={{height:"50vh", objectFit:"cover"}} alt="cabo"/>
                            <br/>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <h4 className="ts">Dubai Tour</h4>
                                <span className="tp fw-bold">$2500</span>
                            </div>
                            <div>
                                <p>
                                    The ultimate shopping spree from 5 December 2025 to the 15th of December 2025
                                </p>
                            </div>
                            <div>
                                <button className={`${primary_btn} w-100`}>Get More Information</button>
                            </div>
                        </div>
                        <div className="col-sm rounded shadow p-3">
                           {/* eslint-disable-next-line @next/next/no-img-element */}
                           <img src="https://ngratesc.sirv.com/Travel%20Den/3.png" className="rounded mb-2 w-100 img-fluid" style={{height:"50vh", objectFit:"cover"}} alt="cabo"/>
                            <br/>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <h4 className="ts">Victoria Falls</h4>
                                <span className="tp fw-bold">$550</span>
                            </div>
                            <div>
                                <p>
                                   The Jewel of Zimbabwe , visit Victoria falls from 10 August 2025 to the 20th of August 2025
                                </p>
                            </div>
                            <div>
                                <button className={`${primary_btn} w-100`}>Get More Information</button>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}