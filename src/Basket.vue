<template>
  <div class="Basket">
    <!--Basket and displays according to the parameter given-->
    <button v-on:click="showBasket = !showBasket">Basket({{ basket.length }})</button>
    <div v-if="showBasket" class="basket-dropdown">
    <ul class="basket-dropdown__list">
    <li v-for="(product, index) in basket" v-bind:key="index">
    {{ product.name }} : ${{ product.prize }}
    </li>
    <!--Link to direct to the confirmation page only if there is a products in the basket-->
    <router-link to="/CheckoutVue"><button v-if="basket.length > 0">Confirm add to cart</button></router-link>
    </ul>
    </div>
    </div>
</template>

<script>
export default {
    name: "BasketVue",
    props:['basket'],
    data: function(){
      return{
        showBasket: false,
      }
    }
}
</script>

<style>

</style>