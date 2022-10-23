import React, {useEffect, useState} from 'react';
import { Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Swal from "sweetalert2";
import {RetrieveAll,DeleteLocalStorage} from "../../APIServices/CRUDServices";
import {ErrorToast, SuccessToast} from "../../Helper/ValidationHelper";
import {withRouter} from "react-router";
import PlusIocn from "../../Assets/img/icons/icon_plus.svg";
import Edit from "../../Assets/img/icons/icon_edit.png";
import Details from "../../Assets/img/icons/icon_details.png";
import DeleteIcon from "../../Assets/img/icons/icon_trash.png";

const ListTable = (props) => {

    let [DataList,SetDataList]=useState([]);

    useEffect(()=>{
        SetDataList(RetrieveAll())
    },[])

    const DeleteItem=(id)=> {

        return  Swal.fire({
            title: 'Are you sure?',
            text: "you want to delete this employee?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                DeleteLocalStorage(id)
                if(true){
                    SuccessToast("Delete Success")
                    props.history.push("/")
                }
                else{
                    ErrorToast("Something wrong!");
                }
            }
        })
    }

    const UpdateItem=(id)=>{
        props.history.push("/update/"+id)
    }

    const ViewDetails = (id)=>{
        props.history.push("/view/"+id)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card list-card">
                        <div className="card-header pb-0">
                            <h4>Employee List</h4>
                             <Nav.Link className="btnStyle"><NavLink to="/create"><span><img className="nav-logo" src={PlusIocn} alt="icon"/> </span>Add new employee</NavLink></Nav.Link>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">First Name</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Last Name</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Email</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    DataList.map((item,index)=>{
                                        return (
                                            <tr key={index+2}>
                                                <td>
                                                    <div className="d-flex  animated fadeInUp px-2 py-1">
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <h6 className="mb-0 text-sm">{item.FirstName}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex  animated fadeInUp px-2 py-1">
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <h6 className="mb-0 animated fadeInUp text-sm">{item.LastName}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6 className="mb-0 animated fadeInUp text-sm">{item.EmailAddress}</h6>
                                                </td>
                                                <td>
                                                    <div className="btn-group animated fadeInUp" role="group" aria-label="Basic example">
                                                        <button onClick={UpdateItem.bind(this,localStorage.key(index))} className="btn  btn-success "> Edit <span><img className='btnIcon' src={Edit} alt="icon"/></span></button>
                                                        <button onClick={ViewDetails.bind(this,localStorage.key(index))} className="btn  btn-success ">Details <span><img className='btnIcon' src={Details} alt="icon"/></span></button>
                                                        <button onClick={DeleteItem.bind(this,localStorage.key(index))}  className="btn btn-danger ">Delete <span><img className='btnIcon' src={DeleteIcon} alt="icon"/></span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );




};

export default withRouter(ListTable);