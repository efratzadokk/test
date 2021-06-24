
import React from 'react';
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


function Sidebar_left(props){
    return(
    <div id="sidebar_left" style={{paddingTop: "0px" , height: "87%", width:"5vw", borderRadius: "10px"}}>
      

<Widget name="Title" img={Title} ></Widget>
<Widget name="Paragraph" img={Paragraph} ></Widget>
<Widget name="Image" img={Image} ></Widget>
<Widget name="Button" img={Button} ></Widget>
<Widget name="Video" img={Video} ></Widget>
<Widget name="Spacer" img={Spacer} ></Widget>
<Widget name="Icon" img={Icon} ></Widget>
<Widget name="Gallery" img={Gallery} ></Widget>
<Widget name="Html" img={Html} ></Widget>
<Widget name="Sharing" img={Sharing} ></Widget>
<Widget name="Form" img={Form} ></Widget>

</div>
    )
}
export default Sidebar_left
