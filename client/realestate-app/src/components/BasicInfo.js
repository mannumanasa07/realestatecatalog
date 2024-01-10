import React from 'react';
import "../styles/BasicInfo.css"
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';



  function BasicInfo(props) {
    const [propertyType, setPropertyType] = useState('');
    const [price, setPrice] = useState('');
    const [propertyAge, setPropertyAge] = useState('');
    const [propertyDescription, setPropertyDescription] = useState('');
    const [negotiable, setNegotiable] = useState('');
    const [ownership, setOwnership] = useState('');
    const [propertyApproved, setPropertyApproved] = useState('');
    const [bankLoan, setBankLoan] = useState('');
    const [receivedPropertyId,setReceivedPropertyId] = useState('');

    const history = useHistory();

  
    const handlePropertyTypeChange = (e) => {
      setPropertyType(e.target.value);
    };
  
    const handlePriceChange = (e) => {
      console.log(e.target.value)
      setPrice(e.target.value);
    };
  
    const handlePropertyAgeChange = (e) => {
      setPropertyAge(e.target.value);
    };
  
    const handlePropertyDescriptionChange = (e) => {
      setPropertyDescription(e.target.value);
    };
  
    const handleNegotiableChange = (e) => {
      console.log( " negotiable from function",e.target.value);
      setNegotiable(e.target.value);
    };
  
    const handleOwnershipChange = (e) => {
      setOwnership(e.target.value);
    };
  
    const handlePropertyApprovedChange = (e) => {
      setPropertyApproved(e.target.value);
    };
  
    const handleBankLoanChange = (e) => {
      setBankLoan(e.target.value);
    };
  
    const handleSubmit = () => {

      const basicinfo={
        userId:props.location.state.userId,
        propertyType,
        price,
        propertyAge,
        propertyDescription,
        negotiable,
        ownership,
        propertyApproved,
        bankLoan,
      };
      axios.post("http://localhost:4000/createProperty", basicinfo)
    .then(res => {setReceivedPropertyId(res.data.propertyId);
      console.log(res.data.propertyId);
      history.push({
        pathname: '/propertydetails',
        state: {
          userId: props.location.state.userId,
          username: props.location.state.username,
          propertyId: receivedPropertyId,
          propertyType,
          price,
          propertyAge,
          propertyDescription,
          negotiable,
          ownership,
          propertyApproved,
          bankLoan,
        }
      })})
    .catch(error => console.error("Error during basicinfo:", error.response));
    };

    const handleCancel = () => {
      console.log('props.location.state:', props.location.state);
      history.push({
        pathname: '/propertylist',
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
                <li className='list7a'>Basic Info</li>
                <li className='list7'>Property Detail</li>
                <li className='list7'>General Info</li>
                <li className='list7'>Location Info</li>
              </ul>
            </div>
          </div>
          <div className='table'>
            <div className='div1'>
              <label className='label1'>Property Type</label>
              <select   value={propertyType} onChange={handlePropertyTypeChange}>
                <option value="Flat">Flat</option>
                <option value="Plot">Plot</option>
                <option value="House">House</option>
              </select><br/>
              <label className='label1'>Price</label>
              <input type="text" onChange={handlePriceChange} value={price}/><br/>
              <label className='label1'>Property Age</label>
              <select value={propertyAge} onChange={handlePropertyAgeChange}>
                <option value="below 5 years">below 5 years</option>
                <option value="more than 5 years">more than 5 years</option>
                <option value="more than 10 years">more than 10 years</option>
              </select><br/>
              <label className='label1'>Property Description</label>
              <input type="text" onChange={handlePropertyDescriptionChange} value={propertyDescription} /><br/>
            </div>
            <div className='div2'>
              <label className='label1'>Negotiable</label>
              <select value={negotiable} onChange={handleNegotiableChange}>
                <option value="negotiable">Negotiable</option>
                <option value="non negotiable">Non-negotiable</option>
              </select><br/>
              <label className='label1'>Ownership</label>
              <select value={ownership} onChange={handleOwnershipChange}>
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
              </select><br/>
              <label className='label1'>Property Approved</label>
              <select value={propertyApproved} onChange={handlePropertyApprovedChange}>
                <option value="approved">Approved</option>
                <option value="not approved">Not Approved</option>
              </select><br/>
              <label className='label1'>BankLoan</label>
              <select value={bankLoan} onChange={handleBankLoanChange}>
                <option value="loan">Loan</option>
                <option value="cash">Cash</option>
              </select><br/>
              <button className='label1'onClick={handleSubmit}>Save and continue</button>
              <button type="button" className='label1' onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
