import React from 'react';
import { Link } from 'react-router-dom';
// import { useTable } from 'react-table';

import MultiAxisLine from '../chart-components/MultiAxisLine';
// import [chart] from '../chart-components/VerticalBar';
import ContainerTable from '../table-components/ContainerTable';

function MeasurementsPage(props) {
  // const warningDevices = mapping function for iterating through warnings for all devices
  //    <Warning Device Entry Component></Device>

    const dataArray = [
        {
            col1: '0007',
            col2: 'PoC Device',
            col3: 'PH',
            col4: '9.0',
            col5: '-',
            col6: '18:00'
        },
        {
            col1: '7373',
            col2: 'Test Well Vejen',
            col3: 'Conductivity',
            col4: '40',
            col5: 'S/m',
            col6: '15:00'
        },
        {
            col1: '6400',
            col2: 'Mock Device Sonderbronx',
            col3: 'Temperature',
            col4: '19',
            col5: 'C',
            col6: '20:00'
        },
    ];

    const columnsArray = [
        {
            Header: 'Device ID',
            accessor: 'col1', // accessor is the "key" in the data
        },
        {
            Header: 'Device Name',
            accessor: 'col2',
        },
        {
            Header: 'Measurement Type',
            accessor: 'col3',
        },
        {
            Header: 'Measurement Unit',
            accessor: 'col4',
        },
        {
            Header: 'Measurement Value',
            accessor: 'col5',
        },
        {
            Header: 'Time created',
            accessor: 'col6',
        }
    ];

    return (<>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Measurements</h1>

    {/* Warnings section */}
    <div>
        <div className="text-xs font-weight-bold text-uppercase mb-1">
            <h2>Warnings </h2>
        </div>

        {/* {warningDevices} */} {/* Big fat warning list */}
        <div className="row">
            {/* Warnings */}
            
            <div className="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                <div className="card border-left-warning shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">pH Levels</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Choose an option:</div>
                                <a className="dropdown-item" href="#">Reload data</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Close</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8">
                                <ContainerTable dataArray={ dataArray } columnsArray={ columnsArray } />
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <MultiAxisLine options={{ maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
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