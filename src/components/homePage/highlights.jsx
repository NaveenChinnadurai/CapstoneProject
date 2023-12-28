import React from 'react'
import '../../styles/homePage/heighlights.css'
import { FaCartShopping as Cart} from "react-icons/fa6";
import Swal from 'sweetalert2';
function Highlights(props) {
  const handleOrderBtn=()=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Confirm Order!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Order Successful!!",
          text: "Your Order has been placed.",
          icon: "success"
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your Order is not placed :)",
          icon: "error"
        });
      }
    });
  }
  return (
    <div className="special-card" key={props.foodName}>
      <img src={props.img} alt="Image" className='card-img' />
      <div className="row-sb special-head">
        <h4>{props.foodName}</h4>
        <span>${props.price}</span>
      </div>
      <p>{props.caption}</p>
      <span onClick={handleOrderBtn}>Order a delivery<Cart/></span>
    </div>
  )
}

export default Highlights