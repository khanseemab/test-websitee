import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar'
import { Table } from 'react-bootstrap';
import './Client.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MyContext from '../../MyContext';
import {Link, useParams} from 'react-router-dom';


const Client = () => {
  const [data,setData]=useState([])
  const {clientName,setClientName}=useContext(MyContext)

   const fetchData=async()=>{
   try {
    const api=await fetch('https://sheet.best/api/sheets/fd7f3aad-fbb1-4d18-9801-a4c50750e615')
    const response=await api.json()
    setData(Object.keys(response).map((key)=>response[key]))

   } catch (error) {
    return(error);}
  } 
  const deleteData =async(rowIndex)=>{
    try {
       const api=await fetch(`https://sheet.best/api/sheets/fd7f3aad-fbb1-4d18-9801-a4c50750e615/${rowIndex}`,{
    method:'DELETE',
  }  );
    } catch (error) {
      return(error);
    } 
    alert("Successfully Deleted")
    window.location.reload();
  }


  useEffect(()=>{
  fetchData()
  },[])
  return (<>  
  <div className='client_detail_main'> 
   <Header/> 
   <Sidebar/>
    <div className='googleSheetData'>
        <Table  hover className='clientTable' >
      <thead className='clientTableHead'>   
        
        <tr>
        
        <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email Address</th>
            <th>Company Name</th>
           <th> Status</th>
          <th>Remark</th> 
          <th>Action</th> 
        </tr>

 <tr >
</tr>
      </thead>
<tbody>
      {data.map((elem,i)=>{
    return(<>    
      <tr key={i} >
        <td className='clientTableData'>{elem['ID']}</td>
        <td className='clientTableData' ><Link to={`/${elem.ID}`}>{elem['Name']}</Link> </td>
        <td className='clientTableData'>{elem['Mobile no.']}</td>  
        <td className='clientTableData'>{elem['Mail ID']}</td>
       <td className='clientTableData'>{elem['Company Name']}</td>  
        <td className='clientTableData'>{elem['Remark']}</td>  
        <td className='clientTableData'>{elem['Status']}</td>   
        <td className='clientTableButton'><DeleteOutlineIcon onClick={()=>{deleteData(i)}}/></td>  
     </tr>  
     </>)
  })}
  </tbody>
</Table>
  </div>


    </div>
    </>
  )
}
export default Client;