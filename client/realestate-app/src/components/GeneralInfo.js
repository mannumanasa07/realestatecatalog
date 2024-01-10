import React from 'react';
import "../styles/GeneralInfo.css"
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';



  function GeneralInfo(props) {

    const [name, setName] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [featuredPackage, setFeaturedPackage] = useState('');
  const [mobile, setMobile] = useState('');
  const [saleType, setSaleType] = useState('');
  const [ppdPackage, setPpdPackage] = useState('');

  const history = useHistory();

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangePostedBy = (e) => setPostedBy(e.target.value);
  const handleChangeFeaturedPackage = (e) => setFeaturedPackage(e.target.value);
  const handleChangeMobile = (e) => setMobile(e.target.value);
  const handleChangeSaleType = (e) => setSaleType(e.target.value);
  const handleChangePpdPackage = (e) => setPpdPackage(e.target.value);

  const handleSubmit = () => {
    const generalInfoData = {
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
      name,
      postedBy,
      featuredPackage,
      mobile,
      saleType,
      ppdPackage,
    };

    axios.post("http://localhost:4000/createProperty", generalInfoData)
      .then(res => {
        history.push({
          pathname: '/locationinfo',
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
      name,
      postedBy,
      featuredPackage,
      mobile,
      saleType,
      ppdPackage,
          }
        });
      })
      .catch(error => console.error("Error during general info:", error.response));
  };

  const handleCancel = () => {
    console.log('props.location.state:', props.location.state);
    history.push({
      pathname: '/propertydetails',
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
                <li className='list7a'>General Info</li>
                <li className='list7'>Location Info</li>
              </ul>
            </div>
          </div>
          <div className='table'>
          <div className='div1'>
        <label className='label1'>Name</label>
        <select onChange={handleChangeName} value={name}>
          <option value="owner">Owner</option>
          <option value="thirdparty">thirdparty</option>
        </select><br />
        <label className='label1'>postedby</label>
        <select onChange={handleChangePostedBy} value={postedBy}>
          <option value="recent">recent</option>
          <option value="old">old</option>
        </select><br />
        <label className='label1'>Featured Package</label>
        <select onChange={handleChangeFeaturedPackage} value={featuredPackage}>
          <option value=" with Package">with package</option>
          <option value=" no Package">no package</option>
        </select><br />
      </div>
      <div className='div2'>
        <label className='label1'>Mobile</label>
        <input type="text" onChange={handleChangeMobile} value={mobile} /><br />
        <label className='label1'>sale Type</label>
        <select onChange={handleChangeSaleType} value={saleType}>
          <option value="loan">Loan</option>
          <option value="payment">Payment</option>
        </select><br />
        <label className='label1'>PPD Package</label>
        <select onChange={handleChangePpdPackage} value={ppdPackage}>
          <option value="yes">yes</option>
          <option value="no">no</option>
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

export default GeneralInfo;
