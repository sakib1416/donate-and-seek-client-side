import React from 'react';

const Review = () => {
    return (
        <div>
            <div class="reviews-section">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-12 col-md-12 ">
                            <h2>DONATOR REVIEWS</h2>
                            <div id="reviews" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#reviews" data-slide-to="0" class=""></li>
                                    <li data-target="#reviews" data-slide-to="1" class=""></li>
                                    <li data-target="#reviews" data-slide-to="2" class="active"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="item">
                                        <div class="container center">
                                            <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 slide-custom">

                                                <h4><i class="fa fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit onec molestie non sem vel condimentum. <i class="fa fa-quote-right"></i></h4>

                                                <h5 class="pull-right"><strong class="c-black">Lorem Dolor</strong></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="container center">
                                            <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 slide-custom">
                                                <h4><i class="fa fa-quote-left"></i>Aenean faucibus luctus enim. Duis quis sem risu suspend lacinia elementum nunc. <i class="fa fa-quote-right"></i></h4>

                                                <h5 class="pull-right"><strong class="c-black">Faucibus luctus</strong></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item active">
                                        <div class="container center">
                                            <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 slide-custom">
                                                <h4><i class="fa fa-quote-left"></i>Sed ultricies, libero ut  fringilla, ante elit luctus lorem, a egestas dui metus a arcu condimentum. <i class="fa fa-quote-right"></i></h4>

                                                <h5 class="pull-right"><strong class="c-black">Sed ultricies</strong></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;