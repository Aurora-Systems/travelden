export const BgImg=(src:string)=>{
    return({
        background: `url(${src})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat" 
    })
}