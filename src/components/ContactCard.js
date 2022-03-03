import React from "react"
import user from "../images/cafe.jpg";

const ContactCard = (props) =>{
    const { id,email,name } = props.contact;
    return(

        <div className="item">
            <img className="ui avater image" src={user} alt="user" />
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <i style={{ color:"red", marginLeft:"50px",textAlign:"center" }} className="trash alternate outline icon"></i>

        </div>


    );
    
};
 export default ContactCard;

