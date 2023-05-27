import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import './Search.css';
import './SearchBar.js';
import { useState } from "react";
import SearchBar from "./SearchBar.js";
 
//npm install react-use-cart
//npm i mdb-react-ui-kit 
 
function App() {
 
  return (
    <MDBContainer fluid className="my-5">
       <SearchBar />
      
      
       
          
        
      
      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3"></div>

            <MDBCardImage src="https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw7ca7be26/original/120356/120356-013-l-ghost-14-womens-cushion-running-shoe.png?sw=1388&sh=868&sm=cut" />

            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Running Shoes
                  </a>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Brooke Ghost 14</h5>
                <h5 className="text-dark mb-0">$999</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">Road running</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <MDBCardImage src="https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/w_1650/v1664361484/catalog/images/transparent/1110519-BWHT_1.png?_s=RAABAB0" />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Running Shoes
                  </a>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0"> Hoka Bondi 7</h5>
                <h5 className="text-dark mb-0">$150</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">Best for Comfort</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <MDBCardImage
              src="https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1666346677/catalog/images/transparent/1110520-WWH_1.png?_s=RAABAB0"
              className="w-100 hover-shadow"
              alt=""
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Running Shoes
                  </a>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Bondi SR</h5>
                <h5 className="text-dark mb-0">$1299</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">Best for Comfort </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3"></div>

            <MDBCardImage src="https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw7ca7be26/original/120356/120356-013-l-ghost-14-womens-cushion-running-shoe.png?sw=1388&sh=868&sm=cut" />

            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Running Shoes
                  </a>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Brooke Ghost 14</h5>
                <h5 className="text-dark mb-0">$999</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">Road running</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <MDBCardImage src="https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/w_1650/v1664361484/catalog/images/transparent/1110519-BWHT_1.png?_s=RAABAB0" />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Running Shoes
                  </a>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0"> Hoka Bondi 7</h5>
                <h5 className="text-dark mb-0">$150</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">Best for Comfort</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <MDBCardImage
              src="https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/b_rgb:f7f7f9/w_1110/v1666346677/catalog/images/transparent/1110520-WWH_1.png?_s=RAABAB0"
              className="w-100 hover-shadow"
              alt=""
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Running Shoes
                  </a>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Bondi SR</h5>
                <h5 className="text-dark mb-0">$1299</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">Best for Comfort </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
