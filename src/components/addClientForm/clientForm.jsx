import React from 'react';
import './clientForm.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
const ClientForm = () => {
    const submitClient=()=>{

    }
  return(
    <>
    <Header/>
      
     <div className="client_container">
            <div className="client_screen">
            
                <div className="client_screen__content">
                    {/* <Link to={'/dashboard'}>
                <HomeIcon/></Link> */}
                      
                    <form className="clientData" onSubmit={submitClient}><h2 style={{textAlign:'center',marginTop:'15px'}}>ADD CLIENT DETAILS</h2>
                    <div className="client__field"> 
                            <label className='client_label'>Company : <input type="text" className="client__input" 
                            placeholder="Enter Company Name"
                            /></label>
                        </div>
                        <div className="client__field"> 
                            <label className='client_label'>Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" className="client__input" 
                            placeholder="Enter Name"
                            /></label>
                        </div>
                        <div className="client__field"> 
                            <label className='client_label'>Mobile : &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" className="client__input" 
                            placeholder="Enter Mobile"
                            /></label>
                        </div>
                        <div className="client__field"> 
                            <label className='client_label'>Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" className="client__input" 
                            placeholder="Enter Email"
                            /></label>
                        </div>
                        <div className="client__field"> 
                            <label className='client_label'>Address : &nbsp;&nbsp; <textarea type="text" className="client__input" 
                            placeholder="Enter Address"
                            /></label>
                        </div>
                        <div className="client__field"> 
                            <label className='client_label'>Website : &nbsp;&nbsp;&nbsp;<input type="text" className="client__input" 
                            placeholder="Enter Website"
                            /></label>
                        </div>
                        <div className="client__field"> 
                            <label className='client_label'>Remark : &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" className="client__input" 
                            placeholder=""
                            /></label>
                        </div>
                        
                        <button type="submit" className="client__submit">
                          <Link to={'/dashboard'}>Add Client</Link>  
                        </button>	
                     </form>
                </div>
          </div>
    </div>
    </>
  );
}

export default ClientForm;