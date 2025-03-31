"use client"
import { Fade } from "react-awesome-reveal"
import Image from "next/image"
import { FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { useState, useRef } from "react"

export default function Book(){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form:any = useRef(null)
    const [loading,set_loading] = useState<boolean>(false)

    const send_application = (e: FormEvent) => {
        e.preventDefault()
        set_loading(true)
        emailjs.sendForm("service_xwf6fms", "template_c4pjfnx", form.current, {
            publicKey: "CLt7ZGjfiSQEopImB"
        }).then(() => {
            alert("✅ We received your enquiry, expect a call or an email soon!")
            form.current.reset()
        }).catch(() => {
            alert("⚠️ Message not sent, please try again or send us a message on our email support@aurorasystems.co.zw!")
        }).finally(()=>{
            set_loading(false)
        })
    }
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
                    <form onSubmit={send_application} ref={form}>
                        <div className="row">
                            <div className="col-sm mb-2"> 
                                <span>Full Name</span>
                                <input type="text" name="full_name" className="form-control" />
                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Email</span>
                                <input type="text" name="email" className="form-control" />
                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Contact Number</span>
                                <input type="text" name="contact_number" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm mb-2"> 
                                <span>For Business</span>
                                <select className="form-control" name="for_business">
                                    <option></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>

                                </select>
                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Number of Adults</span>
                                <input type="number" name="number_of_adults" className="form-control" />
                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Number of Kids</span>
                                <input type="number" name="number_of_kids" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm mb-2"> 
                                <span>Duration - From</span>
                                <input type="number" name="start_date" className="form-control" />

                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Duration - To</span>
                                <input type="number" name="end_date" className="form-control" />
                            </div>
                            <div className="col-sm mb-2"> 
                                <span>Budget</span>
                                <input type="number" name="budget" className="form-control" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <span>Additional Information</span>
                            <textarea className="form-control" name="additional_information"/>
                        </div>
                        <div className="mb-2">
                            <span>Where Are you located</span>
                            <select className="form-control">
                                <option value="Zimbabwe">Zimbabwe</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Other country">Other Country</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <button className="p-btn btn rounded-pill" type="submit" disabled={loading}>{loading?"Sending":"Send"}</button>
                        </div>

                    </form>
                </div>
                </Fade>
            </div> 
        </div>
    )
}