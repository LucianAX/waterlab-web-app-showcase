import React from 'react';
import { Link } from 'react-router-dom';

// import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';

function ContactPage(props) {
//   LOGIC CODE GOES HERE !!
  return (<>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Contact</h1>

    {/* Contact details of WaterCare Guard */}
    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            User details</div>
                        <div class="mb-0 font-weight-bold text-gray-800"><font size ="3"><br />User:<font size ="2"> Region Syddanmark<br /></font>
                        CVR:<font size ="2"> 1111111<br /></font>
                        Registered:<font size ="2"> 05-11-2020<br /></font>
                        Status:<font size ="2" color="green"> Active</font>
                        </font>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>)
};

export default ContactPage;