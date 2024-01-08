import React from "react";
import "../styles/PropertyDetail.css";

function PropertyDetail() {
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
              <label for="dropdown1">Length</label>
              <select id="dropdown1">
                <option value="option1">Exmaple 1000</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Breadth</label>
              <select id="dropdown1">
                <option value="option1">Exmaple 1000</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Total Area</label>
              <select id="dropdown1">
                <option value="option1">Example 7500</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Area Unit</label>
              <select id="dropdown1">
                <option value="option1">Area Unit</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">No of BHK</label>
              <select id="dropdown1">
                <option value="option1">Select No of BHK</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">No of Floors</label>
              <select id="dropdown1">
                <option value="option1">Select No of floor</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Attatched</label>
              <select id="dropdown1">
                <option value="option1">Select Attatched</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Western toilet</label>
              <select id="dropdown1">
                <option value="option1">Select western toilet</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Furnished</label>
              <select id="dropdown1">
                <option value="option1">Select Furnished</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Car parking</label>
              <select id="dropdown1">
                <option value="option1">Select Car parking</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Lift</label>
              <select id="dropdown1">
                <option value="option1">Select Lift</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Electricity</label>
              <select id="dropdown1">
                <option value="option1">Example 3Phase</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label for="dropdown1">Facing</label>
              <select id="dropdown1">
                <option value="option1">Select Facing</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <button>Previous</button>
            <button>Save & Continue</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
