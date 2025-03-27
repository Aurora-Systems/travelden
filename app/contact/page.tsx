export default function Contact(){
    return(
        <div className="container  mb-2">
            <div className="text-center">
                <h1 className="display-1 text-center fw-bold tp">
                    Get In Touch
                </h1>
                <p>Plan Your Next Journey With Us</p>

            </div>
            <div className="row">
                <div className="col-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d576.471221353393!2d31.004090992309084!3d-17.82685750114293!2m3!1f12.459499263622943!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x1931a5c920c6e1f3%3A0x87acf3aca622dc36!2sLongcheng%20Plaza!5e1!3m2!1sen!2szw!4v1743077006281!5m2!1sen!2szw" className="rounded" height="100%"  width="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                <div className="col-sm">
                    <form>
                        <div className="mb-2">
                            <span>Name</span>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <span>Contact Number</span>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <span>Email</span>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <span>Message</span>
                            <textarea className="form-control" />
                        </div>
                        <div className="mb-2">
                            <button className="btn rounded-pill p-btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

