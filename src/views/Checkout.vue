<template>
    <center>
        <!--Checkout page layout-->
    <div class="checkout" >
    <h1 class="heading">Checkout</h1>
    <div class="basket">
        <h3 class="heading">Basket</h3>
        <!--Displays the basket items selected-->
        <li class="basket" v-for="(product, index) in basket" :key="index">
      {{ product.name }}: ${{ product.prize }}
     </li>
     <br>
     <!--Shows the final price of the basket when the basket is pressed-->
     <button v-on:click="baskettotal">Press to display the total amount below !</button>
     <p>Total amount: ${{ Total }}</p>
    </div>
    <!--Takes in user input of the information needed to make the purchase successful-->  
    <div class="Checkoutdetails">
    <h3>Shipping Details</h3>
    <div class="Checkoutdetails">
    <p>Name</p>
    <input required class="checkoutinput" type="text" v-model="name">
    </div>
    <div class="Checkoutdetails">
    <p>Address</p>
    <input required class="checkoutinput" type="text" v-model="address">
    </div>
    <div class="Checkoutdetails">
    <p>Region</p>
    <input required class="checkoutinput" type="text" v-model="Region">
    </div>
    <div class="Checkoutdetails">
    <p>E-mail</p>
    <input required class="checkoutinput" type="text" v-model="Email">
    </div>
    </div>
    <form>
    <div class="Checkoutdetails">
    <h3>Payment Details</h3>
    <p>Name present on card</p>
    <input required class="checkoutinput" type="text" v-model="CardName">
    </div>
    <br>
    <div class="Checkoutdetails">
    <p>Card Type</p>
    <div class="CardType">
    <input class="checkoutinput" type="radio" id="one" value="One" v-model="picked" />
	<label for="one"><img class="icon" src="../assets/Visa.svg.png"></label>
	<input class="checkoutinput" type="radio" id="two" value="Two" v-model="picked" />
	<label for="two"><img class="icon" src="../assets/MasterCard_Logo.svg.png"></label>
    <input class="checkoutinput" type="radio" id="three" value="Three" v-model="picked" />
	<label for="three"><img class="icon" src="../assets/index.png"></label>
    </div>
    </div>
    <div class="Checkoutdetails">
    <p>Card Number</p>
    <input required class="checkoutinput" type="password" v-model="CardNumber">
    </div>
    <div class="Checkoutdetails">
    <p>Expiration Date</p>
    <input required class="checkoutinput" type="text" v-model="ExpireDate">
    </div>
    <div class="Checkoutdetails">
    <p>CVC number</p>
    <input required class="checkoutinput" type="text" v-model="CVC">
    </div>
    <br>
    <br>
    <!--Takes the user to the confiramtion page once the button is pressed-->
    <router-link to="/ConfirmationPageVue"><button type="submit">Submit</button></router-link>
    </form>
    </div>
    </center>
</template>

<script>   
export default {
    name: "CheckoutVue",
    components: {
},
    data() {
        return {
            name: 'ExampleName',
            address: '123 Kingbury Avenue',
            Region: 'Burwood',
            Email: 'example@gmail.com',
            CardName: '',
            CardNumber: '',
            picked: 'One',
            ExpireDate: '',
            CVC: '',
            Total: 0
        }
    },
    computed: {
          basket(){
            return this.$store.state.StoreBasket;
          }
        },
        methods:{
            baskettotal(){
                for (let product in this.basket) {
                    this.Total += this.basket[product].prize
                }
                return this.Total;
            },
        }        
}
</script>

<style>
    .Checkoutdetails{
        background-color: #00B4D8;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .checkoutinput{
        width: 35vh;
        height: 4vh;
        background-color: #00B4D8;
    }
    .baasket{
        background-color: #00B4D8;  
    }
    .icon{
        display:flex;
        border-radius: 50%;
        height: 30px;
        width: 35px;
    }
    .CardType{
        display: flex;
    }

</style>