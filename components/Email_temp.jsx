import React from 'react'

const Email_temp = () => {
    const htmlTemplate = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
<meta name="format-detection" content="telephone=no">
<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500&display=swap"
      rel="stylesheet">
<link rel="stylesheet" href="https://use.typekit.net/yfg0fch.css">
<style type="text/css">
    @font-face {
        font-family: Proxima Nova;
        src: url('fonts/proxima_nova/proxima_nova_extrabold.otf');
        font-weight: 600;
    }

    @font-face {
        font-family: Proxima Nova;
        src: url('fonts/proxima_nova/proxima_nova_bold.otf');
        font-weight: 500;
    }

    @font-face {
        font-family: Proxima Nova;
        src: url('fonts/proxima_nova/proxima_nova_regular.otf');
        font-weight: 400;
    }

    @font-face {
        font-family: Proxima Nova;
        src: url('fonts/proxima_nova/proxima_nova_thin.otf');
        font-weight: 300;
    }

    @font-face {
        font-family: Proxima Nova;
        src: url('fonts/proxima_nova/proxima_nova_light.otf');
        font-weight: 200;
    }


    html {
        width: 100%;
    }

    body {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        margin: 0;
        padding: 0;
        width: 100% !important;

    }

    table {
        border-spacing: 0;
        table-layout: fixed;
        margin: 0 auto;
    }

    table table table {
        table-layout: auto;
    }

    img {
        display: block !important;
        overflow: hidden !important;
    }

    table td {
        border-collapse: collapse;
    }

    @media only screen and (max-width: 670px) {
        .mobile-hidden {
            display: none !important;
        }
    }

    @media only screen and (max-width: 670px) {
        body {
            width: auto !important;
        }

    }

    /*.img-mobile {*/
    /*width: 390px;*/
    /*height: 417px;*/
    /*}*/

    @media only screen and (max-width: 670px) {
        table[class=A-Z-600] {
            width: 450px !important;
            padding: 0 !important;
        }

        /*table[class="A-Z-600-no-bg"] {*/
        /*width: 450px !important;*/
        /*background-image: none !important;*/
        /*}*/
        /*.A-Z-600 {*/
        /*width: 450px !important;*/
        /*padding: 0 !important;*/
        /*}*/
        .A-Z-600-no-bg {
            width: 450px !important;
            background-image: none !important;
        }

        table[class=mobile-center] {
            float: none !important;
        }

        img[class=img-mobile] {
            margin-top: 0 !important;
            margin-right: 0 !important;
            left: 0 !important;
            width: 300px !important;
            height: 320px !important;
        }
    }

    @media only screen and (min-width: 671px) {
        .img-mobile {
            width: 360px !important;
        }

        .A-Z-600-no-bg {
            background-position: center top !important;
        }
    }

    @media only screen and (max-width: 670px) {
        /*table[class=A-Z-600] {*/
        /*width: 450px !important;*/
        /*padding: 0 !important;*/
        /*}*/
        /*table[class=A-Z-600-no-bg] {*/
        /*width: 450px !important;*/
        /*background-image: none !important;*/
        /*}*/
        .A-Z-600 {
            width: 450px !important;
            padding: 0 !important;
        }

        .A-Z-600-no-bg {
            width: 450px !important;
            background-image: none !important;
        }

        table[class=mobile-center] {
            float: none !important;
        }

        .img-mobile {
            margin-top: 0 !important;
            margin-right: 0 !important;
            left: 0 !important;
            width: 300px !important;
            height: 320px !important;
        }
    }

    @media only screen and (max-width: 720px) {
        /*table[class=full-width] {*/
        /*width: 100% !important;*/
        /*} */
        .full-width {
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 670px) {
        table[class=A-Z3-3] {
            width: 100% !important;
        }

        .text-mobile {
            font-size: 25px !important;
            line-height: 35px !important;
        }

        td[class=text-mobile] {
            font-size: 25px !important;
            line-height: 35px !important;
        }
    }

    @media only screen and (max-width: 670px) {

        .A-Z3-3-border {
            border-left: none !important;
            padding-left: 0 !important;
            width: 100% !important;
        }
    }

    /*@media only screen and (max-width: 479px) {*/
    /*body {*/
    /*width: auto !important;*/
    /*}*/

    /*}*/

    @media only screen and (max-width: 479px) {
        /*table[class=A-Z-600] {*/
        /*width: 290px !important;*/
        /*}*/
        /*table[class=A-Z-600-no-bg] {*/
        /*width: 290px !important;*/
        /*}*/
        .A-Z-600 {
            width: 290px !important;
        }

        .A-Z-600-no-bg {
            width: 290px !important;
        }
    }

    html {
        width: 100%;
    }

    body {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        margin: 0;
        padding: 0;
    }

    table {
        border-spacing: 0;
        table-layout: fixed;
        margin: 0 auto;
    }

    table table table {
        table-layout: auto;
    }

    img {
        display: block !important;
        overflow: hidden !important;
    }

    table td {
        border-collapse: collapse;
    }

    .yshortcuts a {
        border-bottom: none !important;
    }

    a {
        color: #5869a5;
        text-decoration: none;
    }

    @media only screen and (max-width: 670px) {
        body {
            width: auto !important;
        }

    }

    @media only screen and (max-width: 479px) {
        body {
            width: auto !important;
        }

    }

    @media only screen and (max-width: 479px) {
        table[class=A-Z-600] {
            width: 290px !important;
        }
    }


</style>

</head>

<body>

<!--logo header-->
<table align="center" width="720" border="0" cellspacing="0" cellpadding="0" class="full-width"
   style="position:relative;opacity:1;z-index:0;overflow: hidden;">
<tr>
    <td>
        <table align="center" width="720" border="0" cellspacing="0" cellpadding="0" bgcolor="#5869a5"
               class="full-width"
               style="position:relative;opacity:1;z-index:0;min-width: 100%;">
            <tr>
                <td align="center">
                    <table align="center" class="A-Z-600" width="630" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td height="40"></td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://portfolio-manish-chauhans-projects.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
                                     border="0" alt="WebEnertia" width="116" height="33"/>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </td>
</tr>
</table>
<!--logo-header-end-->

<!--Banner-->
<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" class="">
<tr>
    <td>
        <table align="center" width="720" border="0" cellspacing="0" cellpadding="0" bgcolor="#5869a5"
               class="full-width"
               style="position:relative;opacity:1;z-index:0;max-width: 720px;">
            <tr>
                <td height="40"></td>
            </tr>
            <tr>
                <td align="center">
                    <table align="center" class="A-Z-600-no-bg" width="630" border="0" cellspacing="0"
                           cellpadding="0"
                           style="background-image: url(https://webenertia-pm-email-template.netlify.app/images/rectangle.png);background-repeat: no-repeat;background-size: 80% 89%;background-position-x: center;">
                        <tr>
                            <td>
                                <table class="A-Z-600" width="270" align="left" border="0" cellpadding="0"
                                       cellspacing="0">
                                    <tr>
                                        <td height="93" class="mobile-hidden"></td>
                                    </tr>
                                    <tr>
                                        <td class="text-mobile"
                                            style="font-family:'Roboto Slab',serif;color: #ffffff;font-size: 35px;font-weight: 300;letter-spacing: -.7px;line-height: 42px;padding-top: 3px;">
                                            <div>
                                                Meet your Developer:
                                            </div>
                                            <div class="text-mobile"
                                                 style="font-size: 43px;font-weight: 500;line-height: 56px;letter-spacing: -1.1px;">
                                                M.Chauhan
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="mobile-hidden" height="135"></td>
                                    </tr>
                                </table>

                                <table class="A-Z-600" width="325" align="right" border="0" cellpadding="0"
                                       cellspacing="0">
                                    <tr>
                                        <td>
                                            <table class="mobile-center" align="right" border="0" cellpadding="0"
                                                   cellspacing="0">
                                                <tr>
                                                  
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center">
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </td>
</tr>
</table>
<!--Banner End-->

<!--PM description-->
<table align="center" width="630" border="0" cellspacing="0" cellpadding="0" class="A-Z-600">
<tr>
    <td align="center">
        <table border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td height="37"></td>
            </tr>
            <tr>
                <td align="left" class="text-mobile"
                    style="display: table;max-width:600px;">
                    <span style="font-family:'Roboto Slab',serif;color:#000000;font-size: 26px;font-weight:300;letter-spacing:-.5px;opacity: 0.7;line-height: 1.2;">
                    Manish will be reaching out to you shortly, if he hasn’t already! In the meantime, here’s how to
                    get a hold of him:
                        </span>
                </td>
            </tr>
            <tr>
                <td height="40"></td>
            </tr>
        </table>
    </td>
</tr>
</table>
<!--PM description End-->

<!--pm-details-->
<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0"
   style="position:relative;opacity:1;z-index:0;">
<tr>
    <td align="center">
        <table class="A-Z-600" width="630" align="center" border="0" cellpadding="0" cellspacing="0"
               style="border-bottom: 1px solid #d6dede;">
            <!--<tr>-->
            <!--<td height="8"></td>-->
            <!--</tr>-->
            <tr>
                <td>
                    <table class="A-Z3-3" width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                        <!--<tr>-->
                        <!--<td height="17"></td>-->
                        <!--</tr>-->
                        <tr>
                            <td style="padding-right: 6px;width: 65px;">
                                <img src="https://webenertia-pm-email-template.netlify.app/images/email-icon.png"
                                     width="40">
                            </td>
                            <td style="font-family:'proxima-nova','arial',sans-serif; color:#5869a5;font-size:20px; font-weight:400;letter-spacing:-0.5px;line-height:25px;">
                                <a href="#"
                                   style="font-family:'proxima-nova','arial',sans-serif; color:#5869a5;font-size:20px; font-weight:400;letter-spacing:-0.5px;line-height:25px;">mani7015066@gmail.com</a>
                            </td>
                        </tr>
                        <tr>
                            <td height="10"></td>
                        </tr>
                    </table>
                    <table class="A-Z3-3-border" width="100%" align="left" border="0" cellpadding="0"
                           cellspacing="0">
                        <tr>
                            <td height="12"></td>
                        </tr>
                        <tr>
                            <td style="padding-right: 6px;padding-left: 4px;width: 61px;">
                                <img src="https://webenertia-pm-email-template.netlify.app/images/phone-icon.png"
                                     width="35">
                            </td>
                            <td style="font-family:'proxima-nova','arial',sans-serif; color:#5869a5;font-size:20px; font-weight:400;letter-spacing: -0.5px;line-height:25px;">
                                <a href="#"
                                   style="font-family:'proxima-nova','arial',sans-serif; color:#5869a5;font-size:20px; font-weight:400;letter-spacing: -0.5px;line-height:25px;">+917015066237</a>
                            </td>
                        </tr>
                        <tr>
                            <td height="27"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="13"></td>
            </tr>
        </table>
    </td>
</tr>
</table>
<!--pm-details-end-->

<!--feature-details-->
<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0"
   style="position:relative;opacity:1;z-index:0;">
<tr>
    <td align="center">
        <table class="A-Z-600" width="630" align="center" border="0" cellpadding="0" cellspacing="0"
               style="border-bottom: 1px solid #d6dede;">
            <tr>
                <td>

                    <table border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                        <tr>
                            <td height="34"></td>
                        </tr>
                        <tr>
                            <td align="left" class="text-mobile"
                                style="font-family:'Roboto Slab',serif;color:#000000;font-size: 26px;font-weight:300;letter-spacing:-.5px;opacity: 0.7;display: table;max-width:600px">
                                More about Manish ...
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table class="A-Z3-3" width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td height="39"></td>
                        </tr>
                        <tr>
                            <td style="padding-right: 18px;padding-left: 1px;width: 51px;">
                                <img src="https://webenertia-pm-email-template.netlify.app/images/member_icon.png"
                                     width="39">
                            </td>
                            <td>
                                <span style="font-family:'proxima-nova','arial',sans-serif; color: #8e8e8f;font-size:20px;letter-spacing: -0.34px;line-height:23px;">Member of the Clear Digital team since 2018</span>
                            </td>
                        </tr>
                        <tr>
                            <td height="12"></td>
                        </tr>
                        <tr>
                            <td style="padding-right: 18px;padding-left: 2px;width: 51px;">
                                <img src="https://webenertia-pm-email-template.netlify.app/images/graduate.png"
                                     width="38">
                            </td>
                            <td>
                                <span style="font-family:'proxima-nova','arial',sans-serif;font-size: 20px;color: #8e8e8f;letter-spacing: -0.24px;line-height:23px;">Post Graduated from PTU - (M.C.A)</span>
                            </td>
                        </tr>
                        <tr>
                            <td height="14"></td>
                        </tr>
                      
                        <tr>
                            <td height="27"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="13"></td>
            </tr>
        </table>
    </td>
</tr>
</table>
<!--feature-details-end-->

<!--PM description-->
<table align="center" width="630" border="0" cellspacing="0" cellpadding="0" class="A-Z-600">
<tr>
    <td align="center">
        <table border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td height="35"></td>
            </tr>
            <tr>
                <td align="left" class="text-mobile"
                    style="font-family:'Roboto Slab',serif;color:#000000;font-size: 26px;font-weight:300;letter-spacing:-.45px;opacity: 0.7;display: table;max-width:600px;line-height: 1.2;">
                    And a glimpse of other team member you’ll be working with ...
                </td>
            </tr>
            <tr>
                <td height="7"></td>
            </tr>
        </table>
    </td>
</tr>
</table>

<!--Collage-->
<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:rgb(255,255,255);"
   bgcolor="#ffffff">
<tr>
    <td align="center" bgcolor="#ffffff">
        <table style="background-color:rgb(255,255,255);max-width:900px;position:relative;opacity:1;top:0;left:0;"
               bgcolor="#FFFFFF" align="center" class="A-Z-600" width="100%" border="0" cellspacing="0"
               cellpadding="0">
            <tr>
                <td>
                    <table align="center" width="672" border="0" cellspacing="0" cellpadding="0" class="A-Z-600"
                           style="padding-left: 20px;">
                        <tr>
                            <td align="center">
                                <table border="0" align="center" cellpadding="0" cellspacing="0" width="100%"
                                       style="border-bottom: 1px solid #d6dede;">
                                  
                                    <tr>
                                        <td height="38"></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </td>
</tr>
</table>
<!--Collage end-->

<!--PM description-->
<table align="center" width="630" border="0" cellspacing="0" cellpadding="0" class="A-Z-600">
<tr>
    <td align="center">
        <table border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td height="35"></td>
            </tr>
            <tr>
                <td align="left" class="text-mobile"
                    style="font-family:'Roboto Slab',serif;color:#000000;font-size: 26px;font-weight:300;letter-spacing:-.4px;opacity: 0.7;display: table;line-height:1.2;">
                  If you have any other questions regarding project services, feel free to contact
                      <a href="" style="text-decoration:underline; color:#000000; font-weight:300;">Manish chauhan</a>, Director of Client Services:
                        <span style="font-weight:400;"> <a href="" style="font-weight:400;">mani7015066@gmail.com</a>
                        </span>
                    <!--<div style="display: inline">-->
                    <!--<a href=""-->
                    <!--style="font-weight:400;">-->
                    <!--mani7015066@gmail.com.com</a>-->
                    <!--</div>-->
                </td>
            </tr>
            <tr>
                <td height="40"></td>
            </tr>
        </table>
    </td>
</tr>
</table>
<!--PM description End-->

<!--footer-->
<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0"
   style="position:relative;opacity:1;z-index:0;">
<tr>
    <td align="center">
        <table align="center" bgcolor="#d8dfdf" class="full-width" width="720" border="0" cellspacing="0"
               cellpadding="0">
            <tr>
                <td>
                    <table align="center" width="100%" class="A-Z-600" border="0" cellspacing="0"
                           cellpadding="0">
                        <tr>
                            <td height="35"></td>
                        </tr>
                        <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td>
                                <span style="font-family:'Roboto Slab',serif;color:#000000;font-size: 18px;font-weight:300;letter-spacing: -.5px;display:inline-block;padding-left:11px">
                                Follow Us On:
                                    </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="20"></td>
                                    </tr>
                                </table>

                                <table class="A-Z3-3" align="center" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td height="18"></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">
                                                <img src="https://webenertia-pm-email-template.netlify.app/images/twitter.png"
                                                     width="48">
                                            </a>
                                        </td>
                                        <td width="35">
                                        </td>
                                        <td>
                                            <a href="#">
                                                <img src="https://webenertia-pm-email-template.netlify.app/images/instagram.png"
                                                     width="48">
                                            </a>
                                        </td>
                                        <td width="35">
                                        </td>
                                        <td>
                                            <a href="#">
                                                <img src="https://webenertia-pm-email-template.netlify.app/images/facebook.png"
                                                     width="48">
                                            </a>
                                        </td>
                                        <td width="35">
                                        </td>
                                        <td>
                                            <a href="#">
                                                <img src="https://webenertia-pm-email-template.netlify.app/images/linkedin.png"
                                                     width="48">
                                            </a>
                                        </td>
                                    </tr>
                                </table>

                                <table class="A-Z3-3" align="center" border="0" cellpadding="0" cellspacing="0"
                                       style="text-align: center; width: 80%;">
                                    <tr>
                                        <td height="35"></td>
                                    </tr>
                                    <tr>
                                        <td  style="font-family:'proxima-nova','arial',sans-serif; color:#5d5d5e;font-size:16px; font-weight:400;letter-spacing:-0.1px;line-height:20px;display: inline-block;max-width: 400px;padding-right: 11px;">
                                <span style="font-family:'proxima-nova',sans-serif,'Open Sans';color:#5d5d5e;font-size:16px; font-weight:400;letter-spacing:-0.1px;line-height:20px;display: inline-block;max-width: 400px;padding-right: 11px;">
                                    Made with  <img
                                        src="https://webenertia-pm-email-template.netlify.app/images/heart.png"
                                        width="16"
                                        style="display: inline!important;vertical-align: middle;margin-right: 4px;margin-left: 3px;margin-top: -4px;">in India
                                </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="font-family:'proxima-nova','arial',sans-serif;color:#5d5d5e;font-size:16px; font-weight:400;letter-spacing:-0.1px;line-height:19px;display: inline-block;max-width: 400px;padding-right: 4px;">
                                <span style="font-family:'proxima-nova','arial',sans-serif;color:#5d5d5e;font-size:16px; font-weight:400;letter-spacing:-0.1px;line-height:19px;display: inline-block;max-width: 400px;padding-right: 4px;">
                                   
                                    <br>Phone: (+91)7015066237
                                </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="9"></td>
                                    </tr>
                                    <tr>
                                        <td style="font-family:'proxima-nova','arial',sans-serif;color:#5d5d5e;font-size:16px; font-weight:400;letter-spacing:-0.2px;line-height:22px;display: inline-block;padding-right:15px;">
                                <span style="font-family:'proxima-nova','arial',sans-serif;color:#5d5d5e;font-size:16px; font-weight:400;letter-spacing:-0.2px;line-height:22px;display: inline-block;padding-right:15px;">
                                    Copyright © 2023, All rights reserved
                                </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="5"></td>
                                    </tr>
                                    <tr>
                                        <td style="font-family:'proxima-nova','arial',sans-serif;color:#5869a5;letter-spacing:-0.1px;line-height:25px;text-transform:uppercase;padding-right: 9px;">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td height="20"></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </td>
</tr>
</table>
<!--footer-->
</body>
</html>


    
    `;
    const createMarkup = (html) =>({__html: html});

  return (
   
    
    <section className="email_template bg-white" >
        <div className="container">
          <div dangerouslySetInnerHTML={createMarkup(htmlTemplate)}/>
        </div>
    </section>
  )
}

export default Email_temp;