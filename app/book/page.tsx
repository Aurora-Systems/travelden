import { Fade } from "react-awesome-reveal"
import Image from "next/image"

export default function Book(){
    return(
        <div>
            <div className="min-vh-100 primary pt-5 pb-5" >
                <Fade cascade={true} direction="down" >
                <h1 className="display-1 fw-bold text-center text-white">Book Your Next Trip With Us</h1>
                <div className="text-center">
                <Image src="https://ngratesc.sirv.com/Travel%20Den/Johns%20Birthday%20Trip%202025%20(2).png" className="img-fluid" width={"450"} height={"300"} alt="header image"/>

                </div>
                <p className="text-center text-white fw-bold">Fill up the form and we will find and plan the best trip for you</p>
                <div className="rounded container bg-white p-3">
                    <form>
                        <div className="row">
                            <div className="col-sm mb-2"> 
                                <span>Full Name</span>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Email</span>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Contact Number</span>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm mb-2"> 
                                <span>For Business</span>
                                <select className="form-control">
                                    <option></option>
                                    <option>Yes</option>
                                    <option>No</option>

                                </select>
                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Number of Adults</span>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Number of Kids</span>
                                <input type="number" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm mb-2"> 
                                <span>Duration - From</span>
                                <input type="number" className="form-control" />

                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Duration - To</span>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Budget</span>
                                <input type="number" className="form-control" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <textarea className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <button className="p-btn btn rounded-pill">Send</button>
                        </div>

                    </form>
                </div>
                </Fade>
            </div> 
        </div>
    )
}