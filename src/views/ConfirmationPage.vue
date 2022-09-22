<template>
  <div class="page" id="confirm">
    <center>
      <!--Displays that the confirmation was successful and redirects to the home page-->
    <h1 class="heading">Payment was Sucessfull</h1>
    <h3 class="heading">Items ordered will be delivered to your address</h3>
    <h1 class="heading">Thank you for Shopping with Foodie Cafe</h1>
    <router-link to="/HomePageVue"><button class="heading">Return to Home Page</button></router-link>
  </center>
  </div>
</template>

<script>
export default {
    name: "ConfirmationPageVue"
}
</script>

<style>

</style>