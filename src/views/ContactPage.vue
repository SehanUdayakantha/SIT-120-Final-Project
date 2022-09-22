<template>
  <div>
    <Navbar></Navbar>
    <br>
    <!--Shows all the forms of contacts that the foodie cafe owns-->
    <div class="contactpage">
    <h1 class="heading">Contacts and Assitance</h1>
    <h3 class="heading">Contact</h3>
    <div class="heading">
    <p>If you have a complaint or a query about your visit to our foodie cafe please feel free contant us through the platfroms given below</p>
    <br>
    <p>Mobile Number: {{ number }}</p>
    <br>
    <p>Facebook: <a href="facebook">{{ facebook }}</a></p>
    <br>
    <p>Instagram: <a href="instagram">{{ instagram }}</a></p>
    <br>
    <br>
    <p>Twitter: <a href="twitter">{{ twitter }}</a></p>
    <br>
    <br>
    <p>YouTube: <a href="youtube">{{ YouTube }}</a></p>
    <br>
  </div>
  </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
export default {
  name: "ContantPageVue",
    data(){
        return{
            number: '+64123456789',
            facebook: "w.w.w.Foodiecafe@facebook.com",
            instagram: "w.w.w.Foodiecafe@intsagram.com",
            twitter: "w.w.w.Foodiecafe@twitter.com",
            YouTube: "w.w.w.Foodiecafe@youtube.com"
        }
    },
    components: { Navbar, Footer }
}
</script>

<style>
.contactpage{
  background-color: blue;
}
</style>