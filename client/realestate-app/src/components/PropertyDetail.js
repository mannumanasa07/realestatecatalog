import React from 'react';
import "../styles/PropertyDetail.css"
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';



  function PropertyDetail(props) {

    const [length, setLength] = useState('');
  const [totalArea, setTotalArea] = useState('');
  const [bhk, setBHK] = useState('');
  const [attached, setAttached] = useState('');
  const [furnished, setFurnished] = useState('');
  const [lift, setLift] = useState('');
  const [facing, setFacing] = useState('');
  const [breadth, setBreadth] = useState('');
  const [areaUnit, setAreaUnit] = useState('');
  const [floors, setFloors] = useState('');
  const [westernToilet, setWesternToilet] = useState('');
  const [carParking, setCarParking] = useState('');
  const [electricity, setElectricity] = useState('');

  const history = useHistory();

  const handleChangeLength = (e) => setLength(e.target.value);
  const handleChangeTotalArea = (e) => setTotalArea(e.target.value);
  const handleChangeBHK = (e) => setBHK(e.target.value);
  const handleChangeAttached = (e) => setAttached(e.target.value);
  const handleChangeFurnished = (e) => setFurnished(e.target.value);
  const handleChangeLift = (e) => setLift(e.target.value);
  const handleChangeFacing = (e) => setFacing(e.target.value);
  const handleChangeBreadth = (e) => setBreadth(e.target.value);
  const handleChangeAreaUnit = (e) => setAreaUnit(e.target.value);
  const handleChangeFloors = (e) => setFloors(e.target.value);
  const handleChangeWesternToilet = (e) => setWesternToilet(e.target.value);
  const handleChangeCarParking = (e) => setCarParking(e.target.value);
  const handleChangeElectricity = (e) => setElectricity(e.target.value);

  const handleSubmit = () => {
    const propertyDetail = {
      userId: props.location.state.userId,
      propertyId: props.location.state.propertyId,
          propertyType:props.location.state.propertyType,
          price:props.location.state.price,
          propertyAge:props.location.state.propertyAge,
          propertyDescription:props.location.state.propertyDescription,
          negotiable:props.location.state.negotiable,
          ownership:props.location.state.ownership,
          propertyApproved:props.location.state.propertyApproved,
          bankLoan:props.location.state.bankLoan,
      length,
      totalArea,
      bhk,
      attached,
      furnished,
      lift,
      facing,
      breadth,
      areaUnit,
      floors,
      westernToilet,
      carParking,
      electricity,
    };
    axios.post("http://localhost:4000/createProperty", propertyDetail)
    .then(res => {
      history.push({
        pathname: '/generalinfo',
        state: {
          userId: props.location.state.userId,
          username: props.location.state.username,
          propertyId: props.location.state.propertyId,
          propertyType:props.location.state.propertyType,
          price:props.location.state.price,
          propertyAge:props.location.state.propertyAge,
          propertyDescription:props.location.state.propertyDescription,
          negotiable:props.location.state.negotiable,
          ownership:props.location.state.ownership,
          propertyApproved:props.location.state.propertyApproved,
          bankLoan:props.location.state.bankLoan,
          length,
      totalArea,
      bhk,
      attached,
      furnished,
      lift,
      facing,
      breadth,
      areaUnit,
      floors,
      westernToilet,
      carParking,
      electricity,
        }
      });
    })
    .catch(error => console.error("Error during property detail:", error.response));
};

const handleCancel = () => {
  console.log('props.location.state:', props.location.state);
  history.push({
    pathname: '/basicinfo',
    state: { userId: props.location.state.userId, username: props.location.state.username }
  });
};
   
  return (
    <div className='main-container'>
      <div className='header'>
        <div className='logo'><h2>Logo</h2></div>
        <div className='userdetails'><p>User ID:{props.location.state.userId}</p><p>username:{props.location.state.username}</p></div>
      </div>
      <div className='content'>
        <div className='list'>
          <ul>
            <li className='list1'>Property</li>
            <li className='list2'>Assistance</li>
            <li className='list3'>Received Interest</li>
            <li className='list4'>Sent Interest</li>
            <li className='list5'>Property Views</li>
            <li className='list6'>Tariff Plan</li>
          </ul>
        </div>
        <div className='var-content'>
          <div className='srh-btn'>
            <div><h2>ADD NEW PROPERTY</h2></div>
            <div>
              <ul>
                <li className='list7'>Basic Info</li>
                <li className='list7a'>Property Detail</li>
                <li className='list7'>General Info</li>
                <li className='list7'>Location Info</li>
              </ul>
            </div>
          </div>
          <div className='table'>
            <div className='div1'>
            <label className='label1'>Length</label>
          <input type="text" onChange={handleChangeLength} value={length} /><br />
          <label className='label1'>Total Area</label>
          <input type="text" onChange={handleChangeTotalArea} value={totalArea} /><br />
          <label className='label1'>No of BHK</label>
          <select onChange={handleChangeBHK} value={bhk}>
            <option value="2">2 BHK</option>
            <option value="2.5">2.5 BHK</option>
            <option value="3">3 BHK</option>
          </select><br />
          <label className='label1'>Attached</label>
          <select onChange={handleChangeAttached} value={attached}>
            <option value="attached">Attached</option>
            <option value="not attached">Not Attached</option>
          </select><br />
          <label className='label1'>Furnished</label>
          <select onChange={handleChangeFurnished} value={furnished}>
            <option value="furnished">Furnished</option>
            <option value="semifurnished">Semi-furnished</option>
            <option value="not furnished">not furnished</option>
          </select><br />
          <label className='label1'>Lift</label>
          <select onChange={handleChangeLift} value={lift}>
            <option value="available">Available</option>
            <option value="not available">Not available</option>
          </select><br />
          <label className='label1'>Facing</label>
          <select onChange={handleChangeFacing} value={facing}>
            <option value="east">East</option>
            <option value="west">West</option>
            <option value="north">North</option>
            <option value="south">South</option>
          </select><br />

              </div>
            <div className='div2'>
            <label className='label1'>Breadth</label>
          <input type="text" onChange={handleChangeBreadth} value={breadth} /><br />
          <label className='label1'>Area Unit</label>
          <select onChange={handleChangeAreaUnit} value={areaUnit}>
            <option value="sqft">sqft</option>
            <option value="sqmts">sqmts</option>
          </select><br />
          <label className='label1'>No. of floors</label>
          <select onChange={handleChangeFloors} value={floors}>
            <option value="3 or above">3 or above</option>
            <option value="5 or above">5 or above</option>
            <option value="10 or above">10 or above</option>
          </select><br />
          <label className='label1'>Western Toilet</label>
          <select onChange={handleChangeWesternToilet} value={westernToilet}>
            <option value="western">western</option>
            <option value="indian">indian</option>
          </select><br />
          <label className='label1'>Car Parking</label>
          <select onChange={handleChangeCarParking} value={carParking}>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select><br />
          <label className='label1'>Electricity</label>
          <select onChange={handleChangeElectricity} value={electricity}>
            <option value="Phase 1">1-phase</option>
            <option value="Phase 2">2-phase</option>
            <option value="Phase 3">3-phase</option>
          </select><br />
              <button className='label1' onClick={handleSubmit}>Save and continue</button>
              <button type="button" className='label1' onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
