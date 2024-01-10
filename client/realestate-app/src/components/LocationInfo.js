import React from 'react';
import "../styles/LocationInfo.css"
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';



  function LocationInfo(props) {

    const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandMark] = useState('');
  const [longitude, setLongitude] = useState('');

  const history = useHistory();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeArea = (e) => setArea(e.target.value);
  const handleChangeAddress = (e) => setAddress(e.target.value);
  const handleChangeLatitude = (e) => setLatitude(e.target.value);
  const handleChangeCity = (e) => setCity(e.target.value);
  const handleChangePincode = (e) => setPincode(e.target.value);
  const handleChangeLongitude = (e) => setLongitude(e.target.value);
  const handleChangeLandMark= (e) => setLandMark(e.target.value);
  const handleSubmit = () => {
    const locationInfoData = {
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
  length:props.location.state.length,
  totalArea:props.location.state.totalArea,
  bhk:props.location.state.bhk,
  attached:props.location.state.attached,
  furnished:props.location.state.furnished,
  lift:props.location.state.lift,
  facing:props.location.state.facing,
  breadth:props.location.state.breadth,
  areaUnit:props.location.state.areaUnit,
  floors:props.location.state.floors,
  westernToilet:props.location.state.westernToilet,
  carParking:props.location.state.carParking,
  electricity:props.location.state.electricity,
name:props.location.state.name,
postedBy:props.location.state.postedBy,
featuredPackage:props.location.state.featuredPackage,
mobile:props.location.state.mobile,
saleType:props.location.state.saleType,
ppdPackage:props.location.state.ppdPackage,
      email,
      area,
      address,
      latitude,
      city,
      pincode,
      landmark,
      longitude,
    };

    axios.post("http://localhost:4000/createProperty", locationInfoData)
      .then(res => {
        history.push({
          pathname: '/propertylist',
          state: {
            userId: props.location.state.userId,
            username: props.location.state.username,
            propertyId: props.location.state.propertyId,
          }
        });
      })
      .catch(error => console.error("Error during location info:", error.response));
  };

  const handleCancel = () => {
    console.log('props.location.state:', props.location.state);
    history.push({
      pathname: '/generalinfo',
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
                <li className='list7'>Property Detail</li>
                <li className='list7'>General Info</li>
                <li className='list7a'>Location Info</li>
              </ul>
            </div>
          </div>
          <div className='table'>
          <div className='div1'>
        <label className='label1'>Email</label>
        <input type="text" onChange={handleChangeEmail} value={email} /><br />
        <label className='label1'>Area</label>
        <select onChange={handleChangeArea} value={area}>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
        </select><br />
        <label className='label1'>Address</label>
        <input type="text" onChange={handleChangeAddress} value={address} /><br />
        <label className='label1'>Latitude</label>
        <input type="text" onChange={handleChangeLatitude} value={latitude} /><br />
      </div>
      <div className='div2'>
        <label className='label1'>City</label>
        <select onChange={handleChangeCity} value={city}>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
        </select><br />
        <label className='label1'>Pincode</label>
        <select onChange={handleChangePincode} value={pincode}>
          <option value="500000">500000</option>
          <option value="600000">600000</option>
          <option value="700000">700000</option>
        </select><br />
        <label className='label1'>Landmark</label>
        <select onChange={handleChangeLandMark} value={landmark}>
          <option value="statue">statue</option>
          <option value="arch">arch</option>
        </select><br />
        <label className='label1'>Longitude</label>
        <input type="text" onChange={handleChangeLongitude} value={longitude} /><br />
        <button className='label1' onClick={handleSubmit}>Add property</button>
        <button type="button" className='label1' onClick={handleCancel}>Cancel</button>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationInfo;
