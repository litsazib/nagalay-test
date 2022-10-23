import React, {Fragment, useEffect,useRef} from 'react';
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, isEmpty,IsEmail, SuccessToast} from "../../Helper/ValidationHelper";
import {ReadByID, UpdateLocalStorage} from "../../APIServices/CRUDServices";
import {withRouter} from "react-router";
import uuid from "react-uuid";
const UpdateForm = (props) => {
    let FirstName,LastName,EmailAddress=useRef();
    const UpdateData = () => {
        let payload = {
            AutoId:props.id,
            FirstName:FirstName.value,
            LastName:LastName.value,
            EmailAddress:EmailAddress.value,
            SysId:uuid()
        }
        if(isEmpty(payload.FirstName)){
            ErrorToast("First Name Required");
        }
        if(isEmpty(payload.LastName)){
            ErrorToast("Last Name Required");
        }
        if(isEmpty(payload.EmailAddress)){
            ErrorToast("Email Required");
        }
       else if(IsEmail(payload.EmailAddress)){
        ErrorToast("Valid Email Required");
      }else {
            UpdateLocalStorage(props.id,payload)
            if(true){
                SuccessToast("Data Udpate Success")
                props.history.push("/");
            }
            else {
                ErrorToast("Request Fail Try Again");
            }
        }
    }
    useEffect(()=>{
        FirstName.value =  ReadByID(props.id).FirstName
        LastName.value = ReadByID(props.id).LastName
        EmailAddress.value = ReadByID(props.id).EmailAddress
    })
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header pb-0">
                                <h4 className="animated fadeInUp">Edit Employee</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                {/* <div className="col-md-9  p-2">
                                    <input  readOnly="true" value={props.id} type="text" className="form-control animated fadeInUp"/>
                                </div> */}
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
                                    <input ref={(input)=>EmailAddress=input} type="email" className="form-control animated fadeInUp"/>
                                </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-9 p-2">
                                        <button onClick={UpdateData} className="btn btn-primary  animated fadeInUp w-100">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="d-none">
                    <FullScreenLoader/>
                </div>
            </Fragment>
    );
};
export default withRouter(UpdateForm);