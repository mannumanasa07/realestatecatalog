
import React from "react";
import "../styles/PropertyDetail.css";

function PropertyDetail() {
return (
<div className="main-container">
<div className="header">
<div className="logo">
<h2>Logo</h2>
</div>
<div className="userdetails">
<p>USERID:</p>
<p>UserName</p>
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
<label for="dropdown1">Length</label>
<select id="dropdown1">
<option value="option1">Example 1000</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
</div>

<div class="form-group">
<label for="dropdown2">Breadth</label>
<select id="dropdown2">
<option value="optionA">Example 1000</option>
<option value="optionB">Option B</option>
<option value="optionC">Option C</option>
</select>
</div>
<div class="form-group">
<label for="dropdown2">Total Area</label>
<select id="dropdown2">
<option value="optionA">Example 7500</option>
<option value="optionB">Option B</option>
<option value="optionC">Option C</option>
</select>
</div>
<div class="form-group">
<label for="dropdown2">Area Unit</label>
<select id="dropdown2">
<option value="optionA">Area Unit</option>
<option value="optionB">Option B</option>
<option value="optionC">Option C</option>
</select>
</div>
<div class="form-group">
<label for="dropdown2">No of BHK</label>
<select id="dropdown2">
<option value="optionA">Select No of BHK</option>
<option value="optionB">Option B</option>
<option value="optionC">Option C</option>
</select>
</div>
<div class="form-group">
<label for="dropdown2">No of Floors</label>
<select id="dropdown2">
<option value="optionA">Select No of Floors</option>
<option value="optionB">Option B</option>
<option value="optionC">Option C</option>
</select>
</div>
<div class="form-group">
<label for="dropdown2">Attatched</label>
<select id="dropdown2">
<option value="optionA">Select Attatched</option>
<option value="optionB">Option B</option>
<option value="optionC">Option C</option>
</select>
</div>
<div class="form-group">
<label for="dropdown2">Western toilet</label>
<select id="dropdown2">
<option value="optionA">Select Western toilet</option>
<option value="optionB">Option B</option>
<option value="optionC">Option C</option>
</select>
</div>
<div class="form-group">
<label for="dropdown2">Furnished</label>
<select id="dropdown2">
<option value="optionA">Select Furnished</option>
<option value="optionB">Option B</option>
<option value="optionC">Option C</option>
</select>
</div>
<div class="form-group">
<label for="dropdown2">Car parking</label>
<select id="dropdown2">
<option value="optionA">Select Car parking</option>
<option value="optionB">Option B</option>
<option value="optionC">Option C</option>
</select>
</div>
<div class="form-group">
<label for="dropdown2">Lift</label>
<select id="dropdown2">
<option value="optionA">Select Lift</option>
<option value="optionB">Option B</option>
<option value="optionC">Option C</option>
</select>
</div>
<div class="form-group">
<label for="dropdown2">Electricity</label>
<select id="dropdown2">
<option value="optionA">Example 3:phase</option>
<option value="optionB">Option B</option>
<option value="optionC">Option C</option>
</select>
</div>
<div class="form-group">
<label for="dropdown2">Facing</label>
<select id="dropdown2">
<option value="optionA">Select Facing</option>
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

export default PropertyDetail;