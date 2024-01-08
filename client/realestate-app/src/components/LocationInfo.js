import React from "react";
import "../styles/LocationInfo.css";

function LocationInfo() {
  return (
    <div className="main-container">
      <div className="leftcontainer">
        <div className="logo">LOGO</div>
        <div className="leftbuttons">
          <div className="icons">
          </div>
          <div className="buttoncontent">Property</div>
        </div>
        <div className="leftbuttons">
          <div className="icons"></div>
          <div className="buttoncontent">Assistance</div>
        </div>
        <div className="leftbuttons">
          <div className="icons"></div>
          <div className="buttoncontent">Recieved Interest</div>
        </div>

        <div className="leftbuttons">
          <div className="icons"></div>
          <div className="buttoncontent">Sent Interest</div>
        </div>

        <div className="leftbuttons">
          <div className="icons"></div>
          <div className="buttoncontent">Property views</div>
        </div>
        <div className="leftbuttons">
          <div className="icons"></div>
          <div className="buttoncontent">Tarrif Plan</div>
        </div>
      </div>
      <div className="rightcontainer">
        <div className="rightheader">
        <p1>USERID:</p1><p1>UserName</p1>
        </div>
        <div className="maincontainer">
          <div className="maincontainer-sub1">
            <div className="maincontainer-sub1-partitions">1. Basic info</div>
            <div className="maincontainer-sub1-partitions">2. Property details</div>
            <div className="maincontainer-sub1-partitions">3. Genaral info</div>
            <div className="maincontainer-sub1-partitions">4. Location details</div>
          </div>
          <div className="maincontainer-sub2">
            <div className="form-group">
              <label for="dropdown1">Email</label>
              <select id="dropdown1">
                <option value="option1">Email</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">city</label>
              <select id="dropdown1">
                <option value="option1">Select city</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Area</label>
              <select id="dropdown1">
                <option value="option1">Select Area</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Pincode</label>
              <select id="dropdown1">
                <option value="option1">Select Pincode</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Address</label>
              <select id="dropdown1">
                <option value="option1">Address</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Landmark</label>
              <select id="dropdown1">
                <option value="option1">Landmark</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Latitude</label>
              <select id="dropdown1">
                <option value="option1">Latitude</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Longitude</label>
              <select id="dropdown1">
                <option value="option1">Longitude</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <button>previous</button>
            <button>Save & Continue</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationInfo;
