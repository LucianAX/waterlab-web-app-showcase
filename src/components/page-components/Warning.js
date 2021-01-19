import React from 'react';
// import { useTable } from 'react-table';

// Importing components
import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/';
import ContainerTable from '../table-components/ContainerTable';

// importing utilitaries
// import { warnings } from '../../utils/global_state.js';

function Warning(props) {

  // const { measurement, warningType, unitName } = props.warning; 
  // const { measurement, warningType, unitName } = warnings[0];          

  // const dataArray = [
    // {
    //   col1: measurement.Unit_Id,
    //   col2: unitName,
    //   col3: warningType,
    //   col4: measurement.Ph.toString(),
    //   col5: 'N/A',
    //   col6: measurement.TimeCreated
    // },
  // ];
  
  // const columnsArray = [
  //     {
  //         Header: 'Device ID', //Unit.Id
  //         accessor: 'col1', // accessor is the "key" in the data
  //     },
  //     {
  //         Header: 'Device Name', //Unit.Name 
  //         accessor: 'col2',
  //     },
  //     {
  //         Header: 'Measurement Type', //Measurement.[type? TempC or Ph or Conductivity]
  //         accessor: 'col3',
  //     },
  //     {
  //         Header: 'Measurement Value', //Measurement.[TempC or Ph or Conductivity]
  //         accessor: 'col4',
  //     },
  //     {
  //         Header: 'S.I. Unit', //SI unit
  //         accessor: 'col5',
  //     },
  //     {
  //         Header: 'Time created', //Measurement.TimeCreated
  //         accessor: 'col6',
  //     }
  // ];

  const dataArray = [
    {
        col1: '0007',
    }
  ]

  const columnsArray = [
    {
        Header: 'Device ID',
        accessor: 'col1', // accessor is the "key" in the data
    },
  ]
  
  return (<>
    {/* Warning #1 */}
    <div className="col-xl-12 col-lg-12" style={{ width: "100%" }}>
        <div className="card border-left-danger shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-danger">Warning #{1}</h6>
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
                <div className="">
                    <ContainerTable dataArray={dataArray} columnsArray={columnsArray} />
                </div>
                <div className="">
                    <VerticalBar options={{ maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    </div>
  </>);
}

export default Warning;