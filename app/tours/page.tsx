import { Fade } from "react-awesome-reveal";
import { primary_btn } from "../components/reusable_css";
import { db } from "../api/supabase";
import { ShowImage } from "../components/show_img";
import Link from "next/link";

export default async function tours(){
    const {data} = await db.from("items").select("*").eq("user_id","kp_9e709c599d894404b2de694d9d23f7a3")
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
                <div className="m-5">
                    <div className="row  gap-3 justify-content-center">

                        {
                            data?.map((x,i)=>{
                                return(
                                    <div className="col-md-3 col-sm rounded shadow p-3" key={i}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={ShowImage(x.image_id)} className="rounded mb-2 w-100 img-fluid" style={{height:"50vh", objectFit:"cover"}} alt=""/>
                                     <br/>
                                     <div className="d-flex flex-row align-items-center justify-content-between">
                                         <h5 className="ts">{x.item_name}</h5>
                                         <span className="tp fw-bold">${x.price}</span>
                                     </div>
                                     <div style={{height:"12vh", overflow:"auto"}}>
                                         <p>
                                             {x.description}
                                         </p>
                                     </div>
                                     <div>
                                        <Link target="_blank" href={`https://wa.me/+263719743323?text=Can I get more information about visiting ${x.item_name} for $${x.price}`}><button className={`${primary_btn} w-100`}>Get More Information</button></Link> 
                                     </div>
                                 </div>
                                )
                            })
                        }
                     
                       
                      
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}