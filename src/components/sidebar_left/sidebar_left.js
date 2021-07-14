
import React,{useState} from 'react';
import { connect } from 'react-redux';
import './sidebar_left.css'  
import Title from '../../assets/title.svg'
import Paragraph from '../../assets/paragraph.svg'
import Image from '../../assets/Image.svg'
import Button from '../../assets/button.svg'
import Video from '../../assets/video.svg'
import Spacer from '../../assets/spacer.svg'
import Icon from '../../assets/icon.svg'
import Widget from '../widget/widget'
//import {PermMediaIcon} from '@material-ui/icons/PermMedia';
import Gallery from '../../assets/gallery2.svg'
import Form from '../../assets/form2.svg'
import Html from '../../assets/html2.svg';
import Sharing from '../../assets/sharing.svg'
//import {CodeIcon} from '@material-ui/icons/Code';
import Home from '../../assets/nhm.svg'
import Logo from '../../assets/logo.svg'


function Sidebar_left(props){


    const [btnMore, setbtnMore] = useState(false)
    const seeMore=(e)=>{
       if (!btnMore) {
           setbtnMore(!btnMore)
       } else {   
           setbtnMore(!btnMore)
       }
    

    }
    return(
        <>
        <div style={{height: "5vh",width:"5vw",textAlign:'center',position: 'fixed'}}><img style={{width:'50%',opacity:'0.8',backgroundColor:'transparent',borderRadius:'15px'}} src={Home} alt='home'/> </div>
    
       
        <div id="sidebar_left" style={{paddingTop: "0px" , height: "85vh", width:"5vw", 
        // borderRadius: "10px"
        }}>
    
    <Widget name="Title" img={Title} ></Widget>
    <Widget name="Paragraph" img={Paragraph} ></Widget>
    <Widget name="Image" img={Image} ></Widget>
    <Widget name="Button" img={Button} ></Widget>
    <Widget name="Video" img={Video} ></Widget>
    <Widget name="Spacer" img={Spacer} ></Widget>
    <Widget name="Emoji" img={Icon} ></Widget>
    <span id="text">
        {
            btnMore? <>
            <Widget name="Gallery" img={Gallery} ></Widget>
            <Widget name="Html" img={Html} ></Widget>
            <Widget name="Sharing" img={Sharing} ></Widget>
            <Widget name="Form" img={Form} ></Widget>
            <Widget name="Logo" img={Logo} ></Widget>
            </>
            :""
    
        }
    
    </span>
    <br/>
    <button id="toggle" className="d-flex flex-column align-items-center justify-content-center  " onClick={(e)=>seeMore(e)} style={{backgroundColor:'transparent', border:'none', fontSize:'1vw', width:'100%'}}> {btnMore? "Less": "More" }<i  className={btnMore? "fa fa-long-arrow-up" :"fa fa-long-arrow-down"}/></button>
    
    
    </div>
    
    </>
    )
}
export default Sidebar_left
