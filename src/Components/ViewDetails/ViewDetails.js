import React, {Fragment, useEffect,useState} from 'react';
import { Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ReadByID,RetrieveAll,DeleteLocalStorage} from "../../APIServices/CRUDServices";
import PlusIocn from "../../Assets/img/icons/icon_plus.svg";
import listIcon from "../../Assets/img/icons/icon_list.png";
import {withRouter} from "react-router";
import Edit from "../../Assets/img/icons/icon_edit.png";
const ViewDetails = (props) => {
    const [Data,SetData]=useState({});
    // const [DataList,SetDataList]=useState([]);

    const UpdateItem=(id)=>{
        props.history.push("/update/"+id)
    }

    useEffect(()=>{
        SetData(ReadByID(props.id));
        // SetDataList(RetrieveAll())
    },[]);

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header pb-0">
                                <h4 className="animated fadeInUp">Employee Details</h4>
                                <div className='dFlex'>
                                    <Nav.Link className="btnStyle"><NavLink to="/create"><span><img className="nav-logo" src={PlusIocn} alt="icon"/> </span>Add new employee</NavLink></Nav.Link>
                                    <Nav.Link className="listBnt"><NavLink to="/"><span><img src={listIcon} alt="icon"/> </span>List of employees</NavLink></Nav.Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-9  p-2">
                                        <p className='dtlTitle'>Full Name:</p>
                                        <p className="animated fadeInUp detlasValue"><strong>{Data.FirstName+" "+Data.LastName}</strong></p>
                                    </div>
                                    <div className="col-md-9  p-2">
                                        <p className='dtlTitle'>Email Address:</p>
                                        <p className="animated fadeInUp detlasValue"><strong>{Data.EmailAddress}</strong></p>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-4 p-2">
                                        <button onClick={UpdateItem.bind(this,localStorage.key(Data.id))} className="btn  btn-success "> Edit Employee <span><img className='btnIcon' src={Edit} alt="icon"/></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
    );
};
export default withRouter(ViewDetails);