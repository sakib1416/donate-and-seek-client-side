import React from 'react';

const VideoSection = () => {
    return (
        <div>
            <div id="vedio-sec">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-6 col-md-6 col-sm-6 ">
                            <h3>How We Work ? Checkout Vedio.</h3>
                            <p data-scroll-reveal="enter from the left after 0.1s">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla pretium lectus vel<b> justo iaculis </b>blandit. Nulla facilisi. 
                            In hac habitasse platea dictumst. Fusce risus leo, convallis vitae bibendum in, vestibulum a tellus.
                            </p>
                            <ul>
                                <li data-scroll-reveal="enter from the left after 0.5s">
                                    <b>Lorem ipsum </b>dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </li>
                                <li data-scroll-reveal="enter from the left after 0.9s">Lorem ipsum dolor <b>sit amet, consectetur </b>adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </li>
                                <li data-scroll-reveal="enter from the left after 1.3s">
                                    <b>Nulla lorem ipsum </b>sit amet, consectetur adipiscing elit.
                                </li>                 
                            </ul>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 "  data-scroll-reveal="enter from the right after .7s">
                            <iframe src="http://player.vimeo.com/video/18312392" class="vedio-style"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;