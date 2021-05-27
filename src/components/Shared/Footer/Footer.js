import React from 'react';

const Footer = () => {
    return (
        <div>
            <div id="footer-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4" id="about-ftr">
                            <h3><span>A Small Introduction</span></h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent suscipit sem vel ipsum elementum venenatis. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent suscipit sem vel ipsum elementum venenatis.
                            Praesent suscipit sem vel ipsum elementum venenatis.
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <h3><span>Latest Donations</span></h3>
                            <div id="blog-footer-div">
                                <div class="media">
                                    <div class="pull-left">
                                        <img src="assets/img/user2.png" class="img-thumbnail" alt=""/>
                                    </div>
                                    <div class="media-body">
                                        <span class="media-heading">JHON DEO TEAMA</span>
                                        <small class="muted">$ 5000 in Cash</small>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="pull-left">
                                        <img src="assets/img/user.gif" class="img-thumbnail" alt=""/>
                                    </div>
                                    <div class="media-body">
                                        <span class="media-heading">JUSTIN DECOSTA</span>
                                        <small class="muted">$ 4000 by Cheque</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <h3><span>Quick Donation</span></h3>
                            <div>
                                45478, Mülheim an der Ruhr , Germany
                            <br />
                                Call: +61-123-456-789
                                <br />
                                E-mail: support@donateandseek.com
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-style-2 ">DONATE FOR A CHILD</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="footser-end">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            Developed |  by Sakib and Nishad

                        </div>
                    </div>
                </div>
            </div>
            <div class="move-me">
                <a href="#home" class="scrollup"><i class="fa fa-chevron-up"></i></a>
            </div>
        </div>
    );
};

export default Footer;