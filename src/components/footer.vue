<template>
  <div class="footer">
    <!--Footer and it's links-->
        <div class="footerbox">
            <ol>
            <a style="font-size: large; float: left; background-color:#00B4D8; color: #020351; border-radius: 9px;">Foodie Cafe</a>
            <b href="#find">Find us on :</b>
            <a href="#youtube">Youtube</a>
            <a href="instagram">Instagram</a>
            <router-link to="ContactPageVue"><a href="help">Help</a></router-link>
            <router-link to="AboutUsVue"><a href="about">About us</a></router-link>
            <a href="privacy">Privacy Policy</a>
            <a href="Terms">Terms and Conditions</a>
           </ol>
           <!--Shows all the payment logos in the webpage-->
           <div class="section08">
           <img class="paymentpic" src="../assets/BPAY_Pty_Ltd_logo.svg.png" alt="paymentpic">
           <img class="paymentpic" src="../assets/MasterCard_Logo.svg.png" alt="paymentpic">
           <img class="paymentpic" src="../assets/Visa.svg.png" alt="paymentpic">
           <img class="paymentpic" src="../assets/index.png" alt="paymentpic">
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterVue"
}
</script>

<style>
.footer{
    position: relative;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #020351;
    color:#00B4D8;
    text-align: center;
    margin-bottom: 0px;
}
.footerbox{
    display: block;
    color: #18A0FB;
    text-align: center;
    text-decoration: none;
    font-size: small;
    margin-top: 40px;
    bottom: 0;
}
.footer a{
    text-decoration: none;
    margin-left: 20px;
}
.footer a:hover{
    background-color: #18A0FB;
    color: #020351;
}
.section08{
    display: flex;
    background-color: #020351;
    bottom: 0;
}
.paymentpic{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    float: left;
    padding: 38px 20px;
    margin-left: 20px;
}
@media screen and (max-width: 700px) {
.Footer{
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #020351;
    color:#00B4D8;
    text-align: center;
    margin-bottom: 0px;
}
.footerbox{
    display: block;
    color: #18A0FB;
    text-align: center;
    padding: 16px 8px;
    text-decoration: none;
    font-size: small;
}
}
</style>