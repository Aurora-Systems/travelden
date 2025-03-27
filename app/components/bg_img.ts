export const BgImg=(src:string)=>{
    return({
        background: `url(${src})`,
        backgroundPosition:"center",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat" 
    })
}