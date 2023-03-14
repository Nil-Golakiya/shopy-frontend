import React, { useEffect } from 'react'

const Contactus = () => {

    useEffect(() => {
        const scriptTag = document.createElement('script')
        scriptTag.src = "/js/app-html.js"
        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag)
        }
    }, [])

    return (
        <div className="page-content" style={{ minHeight: '7px' }}>
            <div className="holder bg-cover fade-up-fast lazyloaded" data-bgset="images/pages/contact-bg.webp">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="page-title-bg">
                                <h1>CONTACT US</h1>
                                <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally</p>
                                <p>Have a great question, comment or concern? Simply fill out the form below and click Submit. We will respond to all inquiries within 48 business hours.Check out our <a href="faq.html">Frequently Asked Questions</a>.</p>
                                <blockquote className="d-none d-md-block mt-3 mt-lg-6">
                                    <div>You can never take too much care over the choice of your shoes. Too many women think that they are unimportant, but the real proof of an elegant woman is what is on her feet.</div>
                                    <div className="blockquote-author"><a href="#">– Christian Dior</a></div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="holder">
                <div className="container">
                    <div className="title-wrap text-center">
                        <h2 className="h1-style">Our Information</h2>
                        <p className="h-sub maxW-825">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally  in which toil and pain</p>
                    </div>
                    <div className="text-icn-blocks-row">
                        <div className="text-icn-block-hor">
                            <div className="icn">
                                <i className="icon-location" />
                            </div>
                            <div className="text">
                                <h4>Address:</h4>
                                <p>Level 3 178 Clarence St,
                                    Sydney NSW00 2005</p>
                            </div>
                        </div>
                        <div className="text-icn-block-hor">
                            <div className="icn">
                                <i className="icon-phone" />
                            </div>
                            <div className="text">
                                <h4>Phone:</h4>
                                <p>+91 7874270477<br />+91 7874270477</p>
                            </div>
                        </div>
                        <div className="text-icn-block-hor">
                            <div className="icn">
                                <i className="icon-call-center" />
                            </div>
                            <div className="text">
                                <h4>Quick Help:</h4>
                                <p>+91 800 555 35 35<br />+91 800 555 35 35</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="holder">
                <div className="container">
                    <div className="row vert-margin">
                        <div className="col-sm-9"><div className="title-wrap"><h2 className="h1-style">Get In Touch With Us</h2>
                            <div>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally in which toil and pain</div>
                        </div>
                            <form data-toggle="validator" className="contact-form" id="contactForm" noValidate="novalidate">
                                <div className="form-confirm">
                                    <div className="success-confirm">
                                        Thanks! Your message has been sent. We will get back to you soon!
                                    </div>
                                    <div className="error-confirm">
                                        Oops! There was an error submitting form. Refresh and send again.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row vert-margin-middle">
                                        <div className="col-lg">
                                            <input type="text" name="name" className="form-control form-control--sm" placeholder="Name" required />
                                        </div>
                                        <div className="col-lg">
                                            <input type="text" name="lastName" className="form-control form-control--sm" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row vert-margin-middle">
                                        <div className="col-lg">
                                            <input type="text" name="email" className="form-control form-control--sm" placeholder="Email" required />
                                        </div>
                                        <div className="col-lg">
                                            <input type="text" name="phone" className="form-control form-control--sm" placeholder="Phone" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control--sm textarea--height-200" name="message" placeholder="Message" required defaultValue={""} />
                                </div>
                                <button className="btn" type="submit">Send Message</button>
                            </form></div>
                        <div className="col-sm-9"><div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2201.3258493677126!2d-74.01291322172017!3d40.70657451080482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1492962272380" />
                        </div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
