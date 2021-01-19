import React from 'react';
import { Link } from 'react-router-dom';

import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';

function DeviceSinglePage(props) {
  /*
  const warnings = mapping function for iterating through the warnings of this device only
      (remember to filter out other devices)
      <Warning Entry Component></Device>
  */

//   LOGIC CODE GOES HERE !!

  return (<>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Device Single - [Device id/name prop] </h1>

    {/* Warnings section */}
    <div>
        {/* {warnings} */}
    </div>

    {/* Measurements Section - THIS device*/}
    <div>
        {/* pH levels chart */}
        <div>
            <h3>pH Levels</h3>
        </div>

        {/* Conductivity Levels Chart*/}
        <div>
            <h3>Conductivity Levels</h3>
        </div>

        {/* Temperature Levels Chart */}
        <div>
            <h3>Temperature Levels</h3>
        </div>
    </div>
  </>)
};

export default DeviceSinglePage;