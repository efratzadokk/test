import React, { Component } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton
} from "react-share";


import Grid from '@material-ui/core/Grid';
import {

  TwitterIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon,
  PinterestIcon

} from "react-share";
export default function Shares(props) {

  return (
    <>
      <Grid container direction="row" style={{ height: "5vh", textAlign: 'center', alignItems: 'center' }} >
        <Grid item md={4} sm={4} style={{ alignItems: "right" }}>
          <TwitterShareButton url={"https://peing.net/ja/"}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>

        </Grid>
        {/* <Grid item md={1} sm={1}/> */}
        <Grid item md={4} sm={4} style={{ alignItems: "right" }}>
          <WhatsappShareButton url={"https://peing.net/ja/"}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </Grid>
        <Grid item md={4} sm={4} style={{ alignItems: "right" }}>
          <FacebookShareButton url={"https://peing.net/ja/"}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </Grid>


      </Grid>
      <Grid container direction="row" style={{ height: "3vh", textAlign: 'center', alignItems: 'center' }} >
        <Grid item md={4} sm={4} style={{ alignItems: "right" }}>
          <TelegramShareButton url={"https://peing.net/ja/"}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>

        </Grid>
        <Grid item md={4} sm={4} style={{ alignItems: "right" }}>
          <EmailShareButton  >
            <EmailIcon size={32} round />
          </EmailShareButton>

        </Grid>
        <Grid item md={4} sm={4} style={{ alignItems: "right" }}>
          <LinkedinShareButton url={"https://peing.net/ja/"}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

        </Grid>


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



