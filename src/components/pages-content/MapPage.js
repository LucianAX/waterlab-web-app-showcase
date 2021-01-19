import React from 'react';
import { Link } from 'react-router-dom';

// import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';

function MapPage(props) {
//   LOGIC CODE GOES HERE !!

  return (<>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Map</h1>

    {/* Map Section */}
    <div class="row">        

        {/* Map with devices */}
        <div class="col-xl-12 col-lg-12">
            <div class="card border-left-success shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Map of WaterLab devices</h6>
                    <div class="dropdown no-arrow">
                        <a class="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div class="dropdown-header">Choose an option:</div>
                            <a class="dropdown-item" href="#">Reload data</a>
                            <div class="dropdown-divider"></div>np
                            <a class="dropdown-item" href="#">Close</a>
                        </div>
                    </div>
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body">
                    <div class="">

                        {/* ZOLTAN'S TASK */}
                        <iframe title="map" class="col-xl-12 col-lg-12"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25940.879716104955!2d9.78649102763798!3d54.92272710118654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b337c2e0ee44ed%3A0x49a0979574e7aeeb!2zNjQwMCBTw7huZGVyYm9yZywgRMOhbnNrbw!5e0!3m2!1ssk!2sus!4v1604918481297!5m2!1ssk!2sus"
                                width="750" height="400" frameborder="0" style={{ border: 1 }}
                                allowfullscreen="" aria-hidden="true" tabindex="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

        {/* Buttons for devices */}
        <div class="col-xl-12 col-lg-12">
            <div class="card border-left-success shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Devices</h6>
                    <div class="dropdown no-arrow">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div class="dropdown-header">Choose an option:</div>
                            <a class="dropdown-item" href="#">Reload data</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Close</a>
                        </div>
                    </div>
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body">
                    <div class="">
                        {/* Container with buttons */}
                                    {/* <div className="col"> */}
                                        <ul class="row"
                                            style={{height: 290,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center",
                                                    listStyle: "none"}}>

                                            <li class="col-xl-3 col-md-2">
                                              <h5>Device Proof-of-Concept</h5>
                                              <input type="checkbox" />
                                            </li>
                                            <li class="col-xl-3 col-md-2">
                                              <h5>Device Test Well</h5>
                                              <input type="checkbox" />
                                            </li>
                                            <li class="col-xl-3 col-md-2">
                                              <h5>Mock Device #1</h5>
                                              <input type="checkbox" />
                                            </li>
                                            <li class="col-xl-3 col-md-2">
                                              <h5>Mock Device #2</h5>
                                              <input type="checkbox" />
                                            </li>
                                            <li class="col-xl-3 col-md-2">
                                              <h5>Mock Device #3</h5>
                                              <input type="checkbox" />
                                            </li>                                            
                                        </ul>
                                    {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div>
      {/* Mapping function for iterating through the list of devices
          Component: Button with activation checkbox */}
    </div>
  </>)
};

export default MapPage;