import React, {Component} from 'react';
import {
  FacebookShareCount,
  TwitterShareButton,
  InstapaperShareButton,
  PinterestShareCount,
  RedditShareCount,
  TelegramShareButton,
} from "react-share";


import Grid from '@material-ui/core/Grid';
import {
 
  TwitterIcon,
  InstapaperIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon,
  PinterestIcon

} from "react-share";
class Shares extends Component {
  render() {
    return (
      <>
<Grid container direction="row" style={{height:"5vh",textAlign:'center',alignItems:'center'}} >
                <Grid item md={4} sm={4}  style={{alignItems: "right"}}> <TwitterIcon size={32} round={true} url={TwitterShareButton} /></Grid>
                {/* <Grid item md={1} sm={1}/> */}
                <Grid item md={4} sm={4}  style={{alignItems: "right"}}> <InstapaperIcon  size={32} round={true} url={InstapaperShareButton} /></Grid>
                {/* <Grid item md={1} sm={1}/> */}
                <Grid item md={4} sm={4}  style={{alignItems: "right"}}> <FacebookIcon  size={32} round={true} url={FacebookShareCount} /></Grid>
                
    
    </Grid>
    <Grid container direction="row" style={{height:"5vh",textAlign:'center',alignItems:'center'}} >
                <Grid item md={4} sm={4}  style={{alignItems: "right"}}> <TelegramIcon  size={32} round={true} url={TelegramShareButton} /></Grid>
                {/* <Grid item md={1} sm={1}/> */}
                <Grid item md={4} sm={4}  style={{alignItems: "right"}}> <WhatsappIcon  size={32} round={true} url={TelegramShareButton} /></Grid>
                {/* <Grid item md={1} sm={1}/> */}
                <Grid item md={4} sm={4}  style={{alignItems: "right"}}> <EmailIcon  size={32} round={true} url={FacebookShareCount} /></Grid>
                
    
    </Grid>
{/* <TwitterIcon size={32} round={true} url={TwitterShareButton} /> */}
{/* <FacebookShareCount url={''}>
  {shareCount => <span className="myShareCountWrapper">{''}</span>}
</FacebookShareCount> */}
{/* <InstapaperIcon  size={32} round={true} url={InstapaperShareButton} />
<FacebookIcon  size={32} round={true} url={FacebookShareCount} />
<TelegramIcon  size={32} round={true} url={TelegramShareButton} />
<WhatsappIcon  size={32} round={true} url={TelegramShareButton} /> */}

      </>
      // <div>
      //   <div>
      //     <Icon type="Facebook" className="shares-facebook"/>
      //     <Icon type="Twitter" className="shares-twitter"/>
      //     <Instagram className="shares-instagram"/>
      //   </div>
 
      //   <a href="https://telegram.org/">
      //     <Telegram className="shares-telegram"/>
      //   </a>
      // </div>
    );
  }
}
 
export default Shares;

