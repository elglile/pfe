import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';

import { Carousel } from './components/Carousel'
import { slides } from "./data/carouselData";

function ServiceDetails(props) {
    const [isCircleCheck, setIsCircleCheck] = useState(true);

    const toggleIcon = () => {
        setIsCircleCheck(!isCircleCheck);
    };

    const dispatch = useDispatch()
    return (
        <>
            <div className="container  mt-5">
                <div >
                    <div className="row g-4 mb-5">
                        <div className="col-lg-8 col-xl-11">
                            <div className="row g-4">
                                <div className="col-lg-7">
                                    <div className="border rounded">
                                        {/* <img src="./assets/images/glovo.png" className="img-fluid rounded" alt="Image" /> */}
                                        <Carousel data={slides} />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <h4 className="fw-bold mb-3">GLovo</h4>
                                    <p className="mb-3">Category: Food</p>
                                    <h5 className="fw-bold mb-3">3,35 Dh</h5>
                                    <div className="d-flex mb-4">
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <p className="mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                                    <p className="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>
                                    <div className='Reactionuser' style={{}}>
                                        {/* <!-- j'aime --> */}
                                        <label className="ui-bookmarkPP" style={{ margin: ' 16px 0px' }}>
                                            <input type="checkbox" />
                                            <div className="bookmarkP">
                                                <svg viewBox="0 0 16 16" style={{}} className="bi bi-heart-fill" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" fill-rule="evenodd" ></path>
                                                </svg>
                                            </div>
                                        </label>
                                        {/* <!-- Add --> */}
                                        <div className='addicon'>
                                            <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add Service</a>
                                        </div>
                                        {/* PLus */}

                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <nav>
                                        <div className="nav nav-tabs mb-3">
                                            <button className="nav-link active border-white border-bottom-0" type="button" role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about" aria-selected="true">Description</button>
                                            <button className="nav-link border-white border-bottom-0" type="button" role="tab" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" aria-controls="nav-mission" aria-selected="false">Reviews</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content mb-5">
                                        <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                            <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                                                Susp endisse ultricies nisi vel quam suscipit </p>
                                            <p>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic
                                                icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>
                                            <div className="px-2 ">
                                                <div className="row ">
                                                    <div className="col">
                                                        <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                                            <div className="col">
                                                                <p className="mb-0">Phone</p>
                                                            </div>
                                                            <div className="col">
                                                                <p className="mb-0">+212670787800</p>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center align-items-center justify-content-center py-2">
                                                            <div className="col">
                                                                <p className="mb-0">Email</p>
                                                            </div>
                                                            <div className="col">
                                                                <p className="mb-0">email@gmail.com</p>
                                                            </div>
                                                        </div>
                                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                            <div className="col">
                                                                <p className="mb-0">Address</p>
                                                            </div>
                                                            <div className="col">
                                                                <p className="mb-0">elkhair,03 mars Settat</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                                            <div className="d-flex">
                                                <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: 100, height: 100 }} alt />
                                                <div className>
                                                    <p className="mb-2" style={{ fontSize: 14 }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Jason Smith</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                    </div>
                                                    <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: 100, height: 100 }} alt />
                                                <div className>
                                                    <p className="mb-2" style={{ fontSize: 14 }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Sam Peters</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                    </div>
                                                    <p className="text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="nav-vision" role="tabpanel">
                                            <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                                amet diam et eos labore. 3</p>
                                            <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                                Clita erat ipsum et lorem et sit</p>
                                        </div>
                                    </div>
                                </div>
                                <form action="#">
                                    <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input type="text" className="form-control border-0 me-4" placeholder="Yur Name *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input type="email" className="form-control border-0" placeholder="Your Email *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="border-bottom rounded my-4">
                                                <textarea name id className="form-control border-0" cols={30} rows={8} placeholder="Your Review *" spellCheck="false" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-flex justify-content-between py-3 mb-5">
                                                <div className="d-flex align-items-center">
                                                    <p className="mb-0 me-3">Please rate:</p>
                                                    <div className="d-flex align-items-center" style={{ fontSize: 12 }}>
                                                        <i className="fa fa-star text-muted" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </div>
                                                <a href="#" className="btn border border-secondary text-primary rounded-pill px-4 py-3"> Post Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}







export default ServiceDetails;
