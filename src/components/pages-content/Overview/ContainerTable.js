import React from 'react';
import Table from './Table';
// importing utilitaries
import { Units, Sensors, Measurements } from '../../utils/global_state.js';

let arrayForData
function ContainerTable(props) {
  const data = React.useMemo(
        () => [
            {
                col1: Units[0].Id,
                col2: Units[0].Name,
                col3: 'PH',
                col4: Measurements[0].Ph.toString(),
                col5: Measurements[0].Unit_Id,
                col6: Measurements[0].TimeCreated
            },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
        {
            Header: 'Device ID', //Unit.Id
            accessor: 'col1', // accessor is the "key" in the data
        },
        {
            Header: 'Device Name', //Unit.Name 
            accessor: 'col2',
        },
        {
            Header: 'Measurement Type', //Measurement.[type? TempC or Ph or Conductivity]
            accessor: 'col3',
        },
        {
            Header: 'Measurement Value', //Measurement.[TempC or Ph or Conductivity]
            accessor: 'col4',
        },
        {
            Header: 'Measurement Unit', //Measuremnt.Unit_Id 
            accessor: 'col5',
        },
        {
            Header: 'Time created', //Measurement.TimeCreated
            accessor: 'col6',
        }
        ],
        []
    );

    const tableColumnsData = { columns, data };

  return (<>
    <div className="">
        <Table tableColumnsData={ tableColumnsData } />
    </div>
  </>)
}

export default ContainerTable;