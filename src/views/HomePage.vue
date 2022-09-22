<template>
    <div id="home">
      <!--Displays the entire home page layout-->
      <navbar></navbar>
      <div class="section09">
      <slider-vue v-bind:slides="['https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&w=1000&q=80','https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80']"></slider-vue>
      </div>
      <Home></Home>
      <h1 style="text-align:center; background-color:#00B4D8; border-radius: 20px; margin-top: 0px;">There are many selections in our cafe</h1>
          <p>Shown below are a list of choices that can be made in our cafe to satisfy our customers.</p>
      <!--Displays some of the product options in the home page-->    
      <div class="section05">
      <card :image="products[0].cardimage" :text="products[0].name" :id="products[0].id"></card>
      <card :image="products[1].cardimage" :text="products[1].name" :id="products[1].id"></card>
    </div>
    <div class="section05">
      <card :image="products[2].cardimage" :text="products[2].name" :id="products[2].id"></card>
      <card :image="products[3].cardimage" :text="products[3].name" :id="products[3].id"></card>
    </div>
      <footerVue></footerVue>
    </div>
  </template>
  
  <script>
  import Home from '../components/Home.vue'
  import navbar from '../components/navbar.vue';
  import footerVue from '../components/footer.vue';
  import Card from '../Card.vue'
  import SliderVue from '../components/Slider.vue';
  
  export default {
    name: 'HomePageVue',
    components: {
      Home,
      navbar,
      footerVue,
      Card,
      SliderVue,
    },
    computed: {
          products(){
            return this.$store.state.products;
          }
    }  
  }
  </script>
  
  <style>
  .home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body, html, .home{
    background-color:blue;
  }
  .section05{
    display: flex;
    margin-top: 20px;
    width: 100%;
    height: 250px;
  }
  .section09{
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
  }        
  </style>
  