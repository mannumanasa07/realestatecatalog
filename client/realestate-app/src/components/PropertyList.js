import React from 'react'
import '../styles/PropertyList.css'

function PropertyList(props) {
  return (
    <div className='main-container'>
        <div className='header'>
            <div className='logo'><h2>Logo</h2></div>
            <div className='userdetails'><p1>USERID:{props.location.state.userId}</p1><p1>{props.location.state.username}</p1></div>
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
                  <input type="text" placeholder='search'className='srh'/>
                  <button className='addbtn'>+Add Property</button>
                  </div>
                <div className='table'>
  {/* <table>
  <tr>
    <th>PPD ID</th>
    <th>Image</th>
    <th>Property</th>
    <th>Contact</th>
    <th>Area</th>
    <th>Views</th>
    <th>Status</th>
    <th>Days Left</th>
    <th>Action</th>
  </tr>
</table> */}

                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyList