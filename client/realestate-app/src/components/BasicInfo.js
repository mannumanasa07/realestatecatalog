import React from "react";
import "../styles/BasicInfo.css";

function BasicInfo() {
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
            <label for="dropdown1">Property Type</label>
            <select id="dropdown1">
              <option value="option1">select Property Type</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Negotable</label>
            <select id="dropdown2">
              <option value="optionA">Select Negotable</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Price</label>
            <select id="dropdown2">
              <option value="optionA">Example: 10000</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Ownership</label>
            <select id="dropdown2">
              <option value="optionA">Select Ownership</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Property Age</label>
            <select id="dropdown2">
              <option value="optionA">Select Property Age</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Property Approved</label>
            <select id="dropdown2">
              <option value="optionA">Select Property Approved</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Property Description</label>
            <select id="dropdown2">
              <option value="optionA">Property Description</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dropdown2">Bank Loan</label>
            <select id="dropdown2">
              <option value="optionA">Bank Loan</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
          </div>
          <div>
          <button className="prevbtn">previous</button>
          <button className="savebtn">save & Continue</button>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
