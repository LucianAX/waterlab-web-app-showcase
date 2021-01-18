
import React from 'react';
import { Switch, Route } from 'react-router-dom';  
// import 'react-chartjs-2';

// Layout components that appear on all pages
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import LogoutModal from './LogoutModal';

// Pages Content
import LoginPage from '../pages-content/LoginPage';
import OverviewPage from '../pages-content/Overview/OverviewPage';
import MeasurementsPage from '../pages-content/MeasurementsPage';
import DeviceListPage from '../pages-content/DeviceListPage';
import DeviceSinglePage from '../pages-content/DeviceSinglePage';
import MapPage from '../pages-content/MapPage';
import ContactPage from '../pages-content/ContactPage';
import ProfilePage from '../pages-content/ProfilePage';


class Layout extends React.Component {  
  render() {  
    return (  
      <div>
        {/* <!-- Page Wrapper --> */}  
        <div id="wrapper">  
          <Navbar />  

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">  
            
            {/* <!-- Main Content --> */}
            <div id="content">  
              <Header />  

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>

                    <Route path="/overview">
                        <OverviewPage />
                    </Route>
                    
                    <Route path="/measurements">
                        <MeasurementsPage />
                    </Route>

                    <Route path="/device-list">
                        <DeviceListPage />
                    </Route>
                    
                    <Route path="/device-single">
                        <DeviceSinglePage />
                    </Route>
                    
                    <Route path="/map">
                        <MapPage />
                    </Route>
                    
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                    
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                </Switch>
                
              </div>
              {/* <!-- End of Page Content --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            <Footer />  
          </div>
          {/* <!-- End of Content Wrapper --> */}
        </div>
        {/* <!-- End of Page Wrapper --> */}

        <ScrollTop />
        <LogoutModal/>
      </div>  
    )  
  }  
}  
  
export default Layout;