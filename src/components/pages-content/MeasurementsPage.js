import React from 'react';
import { Link } from 'react-router-dom';

import MultiAxisLine from '../chart-components/MultiAxisLine';
// import [chart] from '../chart-components/VerticalBar';

function MeasurementsPage(props) {
  // const warningDevices = mapping function for iterating through warnings for all devices
  //    <Warning Device Entry Component></Device>

  //   LOGIC CODE GOES HERE !!

  
  return (<>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Measurements</h1>

    {/* Warnings section */}
    <div>
        {/* {warningDevices} */}
        Big fat warning list
    </div>


    {/* Measurements Section */}
    <div>
        <div class="text-xs font-weight-bold text-uppercase mb-1">
            <h2>Measurements - All Devices</h2>
        </div>
        

        <div class="row">

            {/* pH Levels */}
            <div class="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                <div class="card border-left-warning shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">pH Levels</h6>
                        <div class="dropdown no-arrow">
                            <a class="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
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
                            <MultiAxisLine options={{ maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Conductivity Levels */}
            <div class="col-xl-12 col-lg-12">
                <div class="card border-left-warning shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Conductivity Levels</h6>
                        <div class="dropdown no-arrow">
                            <a class="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
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
                            <MultiAxisLine options={{ maintainAspectRatio: false }}/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Temperature */}
            <div class="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                <div class="card border-left-warning shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Temperature</h6>
                        <div class="dropdown no-arrow">
                            <a class="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
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
                            <MultiAxisLine options={{ maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>)
};

export default MeasurementsPage;