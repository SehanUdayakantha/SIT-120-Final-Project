<template>
  <div class="aboutuspage">
    <Navbar></Navbar>
    <h1 class="Heading">About Us</h1>
    <br>
    <!--Shows certain text on aspects of the company foodie cafe-->
    <h3 class="heading">Our Mission</h3>
    <div class="section01">
    <img class="image" src="../assets/index.jpg">
    <p>Our target at foodie cafe is to provide our best service to our customers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti tempora ullam quaerat molestias, commodi impedit et doloribus doloremque porro magnam explicabo dicta. Vero, non in officiis dolorem perspiciatis omnis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut animi deleniti numquam, ipsa, eligendi magni deserunt est culpa non consectetur adipisci repellat consequuntur magnam architecto rem, doloremque quia eveniet sed.</p>
   </div>
   <h3 class="heading">What we do !</h3>
   <div class="section01">
    <p>We make fresh foods everyday in order to supply our customers fresh service. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti tempora ullam quaerat molestias, commodi impedit et doloribus doloremque porro magnam explicabo dicta. Vero, non in officiis dolorem perspiciatis omnis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut animi deleniti numquam, ipsa, eligendi magni deserunt est culpa non consectetur adipisci repellat consequuntur magnam architecto rem, doloremque quia eveniet sed.</p>
    <img class="image" src="../assets/bijyl26bjkw7z4lyaazf.jpg"> 
  </div>
  <h3 class="heading">How make our Food at Foodiecafe</h3>
  <div class="section01">
    <img class="image" src="../assets/dr-dough-doughnuts.png">
    <p>We shop daily and make all the new batches of food everyday at our factory and hope to satisfy our customers with wonderful tastes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti tempora ullam quaerat molestias, commodi impedit et doloribus doloremque porro magnam explicabo dicta. Vero, non in officiis dolorem perspiciatis omnis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut animi deleniti numquam, ipsa, eligendi magni deserunt est culpa non consectetur adipisci repellat consequuntur magnam architecto rem, doloremque quia eveniet sed.</p>
  </div>
   <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
export default {
    components: { Navbar, Footer }
}
</script>

<style>
.Heading{
    background-color: #18A0FB;
    margin-top: 50px;
    border-radius: 8%;
}    
.iamge{
    width: 100%;
    height: 100%;
}
.section01{
    display: flex;
    background-color: #90E0EF;
    text-align: center;
    padding: 20px;
}
</style>