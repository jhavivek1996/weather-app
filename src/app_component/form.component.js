import React from 'react';

const Form = props =>{
    return(
        
            <div className="container">
                
                <br/>
        <form onSubmit={props.loadweather}>
        <div className="row">
        <div className="col-md-4">
          <div className="form-group">   
             <input type="text" className="form-control" id="city" placeholder="Enter city" name="city"/>
          </div></div>

          <div className="col-md-4">
          
          <div className="form-group">   
          <input type="text" className="form-control" id="country" placeholder="Enter State or Country" name="country"/>
          </div></div>
          <div className="col-md-4">
          <button type="submit" className="btn btn-info">Weather Info</button>
          </div> 
          </div>
      
        </form>
       
      </div>
      
    );
};

export default Form;