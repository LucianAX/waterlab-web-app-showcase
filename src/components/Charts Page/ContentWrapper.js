import React from 'react';
import 'react-chartjs-2';

import Footer from '../layout/Footer';
import Header from '../layout/Header';
import VerticalBar from '../chart-components/VerticalBar';

class ContentWrapper extends React.Component {
  render() {
    return (
      <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Content Wrapper --> */}

          {/* <!-- Main Content --> */}
          <div id="content">

              <Header />    

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">

                  {/* <!-- Page Heading --> */}
                  <h1 className="h3 mb-2 text-gray-800">Overall overview</h1>

                  {/* <!-- Content Row --> */}
                  <div className="row">

                      <div className="col-xl-8 col-lg-7">

                          {/* <!-- Area Chart --> */}
                          <div className="card shadow mb-4">
                              <div className="card-header py-3">
                                  <h6 className="m-0 font-weight-bold text-primary">Pollution level</h6>
                              </div>
                              <div className="card-body">
                                  <div className="chart-area">
                                      <canvas id="myAreaChart"></canvas>
                                  </div>
                              </div>
                          </div>

                          {/* <!-- Bar Chart --> */}
                          <div className="card shadow mb-4">
                              <div className="card-header py-3">
                                  <h6 className="m-0 font-weight-bold text-primary">pH level</h6>
                              </div>
                              <div className="card-body">
                                  <div className="chart-bar">
                                      <canvas id="myBarChart"></canvas>
                                  </div>
                              </div>
                          </div>

                          <VerticalBar />

                      </div>

                  </div>

              </div>
              {/* <!-- /.container-fluid --> */}

          </div>
          {/* <!-- End of Main Content --> */}

          <Footer />
      
      {/* <!-- End of Content Wrapper --> */}
      </div>
    )
  }
}

export default ContentWrapper;