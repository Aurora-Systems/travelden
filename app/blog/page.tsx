import SubstackFeed from "../components/substack";

export default function Blog(){
    return(
        <div className="min-vh-100 pt-5 pb-5">
            <h1 className="fw-bold tp display-1 text-center ">Blog</h1>
            <br/>
            <div className="container" >
                <div>
                    <SubstackFeed/>

                </div>
            </div>
        </div>
    )
}