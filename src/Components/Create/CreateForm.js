import React, {Fragment, useRef} from 'react';
import {ErrorToast, isEmpty,IsEmail, SuccessToast,AutoNumber} from "../../Helper/ValidationHelper";
import {InsertLocalStorage} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";
import {withRouter} from "react-router";
const CreateForm = (props) => {
    let IDNumber,FirstName,LastName,EmailAddress,Loader=useRef();
    const SaveData = () => {
      let ID_Number=IDNumber.value;
      let First_Name=FirstName.value;
      let Last_Name=LastName.value;
      let Email_Address=EmailAddress.value;

      if(isEmpty(First_Name)){
        ErrorToast("Title Name Required");
      }
      else if(isEmpty(Last_Name)){
        ErrorToast("Last Name Required");
      }
      else if(isEmpty(Email_Address)){
        ErrorToast("Email Required");
      }
      else if(IsEmail(Email_Address)){
        ErrorToast("Valid Email Required");
      }

      else{
        Loader.classList.remove("d-none")
        InsertLocalStorage(ID_Number,First_Name,Last_Name,Email_Address)
        if(true){
            Loader.classList.add("d-none")
            SuccessToast("Data Save Success");
            props.history.push("/");
        }
        else {
            ErrorToast("Request Fail Try Again");
        }

      }
    }
    return (
        <Fragment>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header pb-0">
                            <h4 className="animated fadeInUp">Add Employee</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8  p-2 d-none">
                                    <input hidden="true" ref={(input)=>IDNumber=input} readOnly="true" value={"ID-"+AutoNumber()} type="text" className="form-control animated fadeInUp"/>
                                </div>
                                <div className="col-md-9  p-2">
                                    <label className="animated fadeInUp">First Name</label>
                                    <input ref={(input)=>FirstName=input} type="text" className="form-control animated fadeInUp"/>
                                </div>
                                <div className="col-md-9  p-2">
                                    <label className="animated fadeInUp">Last Name</label>
                                    <input ref={(input)=>LastName=input} type="text" className="form-control animated fadeInUp"/>
                                </div>
                                <div className="col-md-9  p-2">
                                    <label className="animated fadeInUp">Email Address</label>
                                    <input ref={(input)=>EmailAddress=input} type="text" className="form-control animated fadeInUp"/>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-4 p-2">
                                    <button onClick={SaveData} className="btn btn-primary  animated fadeInUp w-100">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="d-none" ref={(div)=>Loader=div}>
                <FullScreenLoader/>
            </div>
        </Fragment>
    );
};
export default withRouter(CreateForm);