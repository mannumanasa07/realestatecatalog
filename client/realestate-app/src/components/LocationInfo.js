import React from "react";
import "../styles/LocationInfo.css";

function LocationInfo() {
  return (
    <div className="main-container">
      <div className="header">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <div className="userdetails">
          <p1>USERID:</p1>
          <p1>UserName</p1>
        </div>
      </div>
      <div className="content">
        <div className="list">
          <ul>
            <li className="list1">Property</li>
            <li className="list2">Assistance</li>
            <li className="list3">Received Interest</li>
            <li className="list4">Sent Interest</li>
            <li className="list5">Property Views</li>
            <li className="list6">Tariff Plan</li>
          </ul>
        </div>
        <div className="var-content">
          <div className="srh-btn">
            <input type="text" placeholder="search" className="srh" />
            <button className="addbtn">+Add Property</button>
          </div>
          <div class="form-group">
            <label for="dropdown1">Email</label>
            <select id="dropdown1">
              <option value="option1">Email</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div class="form-group">
            <label for="dropdown2">City</label>
            <select id="dropdown2">
              <option value="optionA">City</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Area</label>
            <select id="dropdown2">
              <option value="optionA">Select Area</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Pincode</label>
            <select id="dropdown2">
              <option value="optionA">Select Pincode</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Address</label>
            <select id="dropdown2">
              <option value="optionA">Address</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Landmark</label>
            <select id="dropdown2">
              <option value="optionA">Landmark</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Latitude</label>
            <select id="dropdown2">
              <option value="optionA">Latitude</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Longitude</label>
            <select id="dropdown2">
              <option value="optionA">Longitude</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <button className="prevbtn">previous</button>
          <button className="savebtn">save & Continue</button>

        </div>
      </div>
    </div>
  );
}

export default LocationInfo;
