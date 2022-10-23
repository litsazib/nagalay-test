import Swal from "sweetalert2";
// import {RetrieveAll,DeleteLocalStorage} from "../../APIServices/CRUDServices";

// const DeleteItem=(id)=> {
//     DeleteLocalStorage(id)
//     if(true){
//         SuccessToast("Delete Success")
//         props.history.push("/")
//     }
//     else{
//         ErrorToast("Something wrong!");
//     }
// }
export function Delete(id){
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
          
            
        }
    })

}