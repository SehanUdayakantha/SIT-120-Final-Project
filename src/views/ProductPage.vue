<template>
    <div>
      <!--Displays the entire product page layout-->
    <navbarVue></navbarVue>
    <!--Getting data through custom events and passing down data through props-->
    <product-vue v-on:add-to-basket="updateBasket" v-on:remove-from-basket="removeBasket">
      <BasketVue :basket="basket"></BasketVue>
    </product-vue>
    <footerVue></footerVue>
    </div>
  </template>
  
  
  <script>
  import navbarVue from '../components/navbar.vue';
  import footerVue from '../components/footer.vue';
  import ProductVue from '../components/ProductVue.vue';
  import BasketVue from '../Basket.vue';
  export default {
    name: 'ProductPageVue',
    components: {
      ProductVue,
      BasketVue,
      navbarVue,
      footerVue
    },
    data: function() {
      return{
          showBasket: false
      }    
        },
        computed: {
          basket(){
            return this.$store.state.StoreBasket;
          }
        },
        methods: {
          updateBasket(item) {
            this.$store.dispatch("AddItem", item)
          },
          removeBasket(item)
          {
            this.$store.dispatch("RemoveItem", item)
          }
      }
  }
  </script>
  
  <style>
  body, html, .home{
    background-color: blue;
  }
  </style>
  