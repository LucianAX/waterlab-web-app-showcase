import React from 'react';
// import 'react-chartjs-2';

import Footer from '../Footer';
import Topbar from '../Topbar';


class ContentWrapper extends React.Component {
  render() {
    return (
      <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Content Wrapper --> */}

          {/* <!-- Main Content --> */}
          <div id="content">

              <Topbar />    

              {/* <!-- Begin Page Content --> */}
                  <div className="container-fluid">

                      {/* <!-- Page Heading --> */}
                      <div className="d-sm-flex align-items-center justify-content-between mb-4">
                          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                  className="fas fa-download fa-sm text-white-50"></i> Download Report</a>
                      </div>

                      <div className="row">

                          {/* <!-- Area Chart --> */}
                          <div className="col-xl-8 col-lg-7">
                              <div className="card shadow mb-4">
                                  {/* <!-- Card Header - Dropdown --> */}
                                  <div
                                      className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                      <h6 className="m-0 font-weight-bold text-primary">WaterLab measurings</h6>
                                      <div className="dropdown no-arrow">
                                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
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
                                      <div className="chart-area">
                                          <canvas id="myAreaChart"></canvas>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          {/* <!-- Pie Chart --> */}
                          <div className="col-xl-4 col-lg-5">
                              <div className="card shadow mb-4">
                                  {/* <!-- Card Header - Dropdown --> */}
                                  <div
                                      className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                      <h6 className="m-0 font-weight-bold text-primary">Device performance</h6>
                                      <div className="dropdown no-arrow">
                                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
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
                                      <div className="chart-bar">
                                          <canvas id="myBarChart"></canvas>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* <!-- Content Row --> */}
                      <div className="row">

                          {/* <!-- Earnings (Monthly) Card Example --> */}
                          <div className="col-xl-3 col-md-6 mb-4">
                              <div className="card border-left-primary shadow h-100 py-2">
                                  <div className="card-body">
                                      <div className="row no-gutters align-items-center">
                                          <div className="col mr-2">
                                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                  User details</div>
                                              <div className="mb-0 font-weight-bold text-gray-800">
                                                <font size ="3"><br/>
                                                  User:<font size ="2"> Region Syddanmark</font><br/>
                                                </font>
                                                CVR:<font size ="2"> 1111111<br/></font>
                                                Registered:<font size ="2"> 05-11-2020<br/></font>
                                                Status:<font size ="2" color="green"> Active</font>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          {/* <!-- Earnings (Monthly) Card Example --> */}
                          <div className="col-xl-3 col-md-6 mb-4">
                              <div className="card border-left-success shadow h-100 py-2">
                                  <div className="card-body">
                                      <div className="row no-gutters align-items-center">
                                          <div className="col mr-2">
                                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                  Device list
                                              </div>
                                              <br/>
                                              <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                          <thead>
                                                              <tr>
                                                                  <th>Device</th>
                                                                  <th>Status</th>
                                                                  <th>Information</th>
                                                              </tr>
                                                          </thead>
                                                          <tbody>
                                                              <tr>
                                                                  <td>Device 1</td>
                                                                  <td>Active</td>
                                                                  <td><a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                                      className="fas fa-align-justify fa-sm text-white-100"></i> Click here</a></td>
                                                              </tr>
                                                              <tr>
                                                                  <td>Device 2</td>
                                                                  <td>Active</td>
                                                                  <td><a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                                      className="fas fa-align-justify fa-sm text-white-100"></i> Click here</a></td>
                                                              </tr>
                                                              <tr>
                                                                  <td>Device 3</td>
                                                                  <td>Not-active</td>
                                                                  <td><a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                                      className="fas fa-align-justify fa-sm text-white-100"></i> Click here</a></td>
                                                              </tr>
                                                          </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          {/* <!-- Pending Requests Card Example --> */}
                          <div className="col-xl-3 col-md-6 mb-4">
                              <div className="card border-left-warning shadow h-100 py-2">
                                  <div className="card-body">dcvfrg
                                      <div className="row no-gutters align-items-center">
                                          <div className="col mr-2">
                                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                  Map of devices
                                              </div>
                                              <div className="h5 mb-0"><br />
                                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25940.879716104955!2d9.78649102763798!3d54.92272710118654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b337c2e0ee44ed%3A0x49a0979574e7aeeb!2zNjQwMCBTw7huZGVyYm9yZywgRMOhbnNrbw!5e0!3m2!1ssk!2sus!4v1604918481297!5m2!1ssk!2sus" width="300" height="225" frameborder="0" style="border:1;" allowfullscreen="" aria-hidden="true" tabindex="0"></iframe>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* <!-- Content Row --> */}
                      <div className="row">

                          {/* <!-- Content Column --> */}
                          <div className="col-lg-6 mb-4">

                          </div>

                          <div className="col-lg-6 mb-4">

                          </div>
                      </div>

                  </div>
                  {/* <!-- /.container-fluid --> */}

          </div>
          {/* <!-- End of Main Content --> */}

          <Footer />
      </div>
    )
  }
}

export default ContentWrapper;