import React, { useEffect } from 'react'

const Aboutus = () => {
    return (
        <div className="page-content" style={{ minHeight: '293.219px' }}>
            <div className="holder bg-cover lazyloaded" data-bgset="images/pages/about-bg.webp">
                <div className="container">
                    <div className="row">
                        <div className="col-11 col-md-9 col-xl-9">
                            <div className="page-title-bg">
                                <h1>ABOUT US</h1>
                                <p className="d-none d-md-block">Founded in 2010, Fox shop is the one stop shop for the barbering world.<br />
                                    We provide barbers with the necessary tools to progress their craft and push the industry as far forward as possible.</p>
                                <p>Based in Cardiff, South Wales, Fox shop operates primarily in the UK, but international sales are welcomed and dispatched daily. We have a trade counter with a shop front and we encourage you to come in and see us!</p>
                                <p className="d-none d-md-block"><i><b>Our support is available 10.00 – 18.00 GMT + 2 (Monday – Friday).<br />
                                    We usually get back to you within 24 hours.</b></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="holder">
                <div className="container">
                    <div className="title-wrap text-center">
                        <h2 className="h1-style">Why Shop With Us?</h2>
                    </div>
                    <div className="text-icn-blocks-row">
                        <div className="text-icn-block">
                            <div className="icn">
                                <i className="icon-shopping-1" />
                            </div>
                            <div className="text">
                                Complete buyer supply store
                            </div>
                        </div>
                        <div className="text-icn-block">
                            <div className="icn">
                                <i className="icon-box-1" />
                            </div>
                            <div className="text">
                                Same day dispatch on all orders
                            </div>
                        </div>
                        <div className="text-icn-block">
                            <div className="icn">
                                <i className="icon-delivery-truck" />
                            </div>
                            <div className="text">
                                Free delivery on all orders
                            </div>
                        </div>
                        <div className="text-icn-block">
                            <div className="icn">
                                <i className="icon-call-center" />
                            </div>
                            <div className="text">
                                Professional advice and great support
                            </div>
                        </div>
                        <div className="text-icn-block d-none d-sm-block">
                            <div className="icn">
                                <i className="icon-tag" />
                            </div>
                            <div className="text">
                                Fall savings are in the air
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="holder py-4 py-md-7 bgcolor">
                <div className="container">
                    <div className="row fact-blocks-row lazyloaded">
                        <div className="col-sm-6">
                            <div className="fact-block">
                                <div className="number"><span data-count={90}>90</span>%</div>
                                <div className="title">Of excellent reviews</div>
                                <div className="text">Nor again is there anyone who loves or pursues or desires
                                    to obtain pain of itself, because it is pain, but because occasionally in which toil and pain can procure
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="fact-block">
                                <div className="number js-count-to"><span data-count={1545}>1545</span></div>
                                <div className="title">More sales</div>
                                <div className="text">Nor again is there anyone who loves or pursues or desires
                                    to obtain pain of itself, because it is pain, but because occasionally in which toil and pain can procure
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="fact-block">
                                <div className="number js-count-to"><span data-count={100}>100</span>%</div>
                                <div className="title">Happy customers</div>
                                <div className="text">Nor again is there anyone who loves or pursues or desires
                                    to obtain pain of itself, because it is pain, but because occasionally in which toil and pain can procure
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="holder">
                <div className="container">
                    <div className="title-wrap text-center">
                        <h2 className="h1-style">Our Team</h2>
                    </div>
                    <div className="row person-row">
                        <div className="person-item image-hover-scale-scale">
                            <div className="person-item-image image-container" style={{ paddingBottom: '141.86%' }}>
                                <img className="fade-up lazyloaded" src="images/pages/img-person-01.webp" data-src="images/pages/img-person-01.webp" alt="" />
                            </div>
                            <div className="person-item-info">
                                <div className="person-item-title">
                                    Nil<br />Golakiya
                                </div>
                                <div className="person-item-post">
                                    Developer<br />Team Leader
                                </div>
                            </div>
                        </div>
                        <div className="person-item image-hover-scale-scale">
                            <div className="person-item-image image-container" style={{ paddingBottom: '141.86%' }}>
                                <img className="fade-up lazyloaded" src="images/pages/img-person-02.webp" data-src="images/pages/img-person-02.webp" alt="" />
                            </div>
                            <div className="person-item-info">
                                <div className="person-item-title">
                                    Roshan<br />Borad
                                </div>
                                <div className="person-item-post">
                                    Creative director
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
