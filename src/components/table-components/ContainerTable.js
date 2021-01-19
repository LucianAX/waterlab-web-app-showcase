import React from 'react';
import Table from './Table';
// importing utilitaries
// import { units, sensors, measurements } from '../../utils/global_state.js';

function ContainerTable(props) {
  const { dataArray, columnsArray } = props;
  
  // TROUBLESHOOTING
  // const { dataArray } = props;

  // const dataArray = [
  //     {
  //        col1: 'Hello',
  //        col2: 'World',
  //      },

  //      {
  //        col1: 'react-table',
  //        col2: 'rocks',
  //      },
  // ]
  

  // const { columnsArray } = props;

  // const columnsArray = [
  //     {
  //        Header: 'Column 1',
  //        accessor: 'col1', // accessor is the "key" in the data
  //      },
  //      {
  //        Header: 'Column 2',
  //        accessor: 'col2',
  //      },
  //      {
  //        Header: 'Column 3',
  //        accessor: 'col3',
  //      },
  //      {
  //        Header: 'Column 4',
  //        accessor: 'col4',
  //      },
  //      {
  //        Header: 'Column 5',
  //        accessor: 'col5',
  //      },
  //      {
  //        Header: 'Column 6',
  //        accessor: 'col6',
  //      },
  // ]

  const data = React.useMemo(
      () => dataArray,
      []
    );

    const columns = React.useMemo(
      () => columnsArray,
      []
    );

  return (<>
    <div className="">
        <Table columns={columns} data={data} />
    </div>
  </>)
}

export default ContainerTable;