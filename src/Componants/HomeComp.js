import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeComp = () => {
    return (
        <>
            <div className='home'>

                <div className='carousel'>
                    <Carousel>
                        <Carousel.Item interval={4000}>
                            <img id='cimg1'
                                className="d-block w-100"
                                src="https://i.pinimg.com/originals/4b/22/93/4b229396885b90ea126258e5d19370ec.gif"
                                alt="first slide"
                            />
                            <Carousel.Caption>
                                <p>“Patience is not the ability to wait, but the ability to keep a good attitude while waiting.” </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img id='cimg2'
                                className="d-block w-100"
                                src="https://www.releasecounselling.ie/wp-content/uploads/2014/03/bigstock-Beautiful-Little-Doctor-Girl-41303284.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <p>“One minute of patience, ten years of peace.”</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img id='cimg3'
                                className="d-block w-100"
                                src="https://polyiatria.gr/wp-content/uploads/2019/03/photo-02.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <p>“With love and patience, nothing is impossible.”</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
        </>
    )
}

export default HomeComp