<template>
<div>
    <img class="welcomebox" :src ="product.headingimage"/>
    <div class="heading"><h1>{{ product.name }}</h1></div>
    <!--This is where the basket is displayed using slot-->
    <div><slot></slot></div>
    <div class="section2">
    <div class="itemdetails">
        <!--Displays the favorite and other product detials along with the add basket and remove basket features-->
        <button @click="addtoFavourite" :disabled="product.Favouritecheck == 0" style="float:right">Favourite</button>
        <p>Quantity: {{ product.quantity }}</p>
        <p>${{ product.amount }}</p>
        <p v-if="product.quantity > 0">InStock</p>
        <p v-else>Out Of Stock</p>
       <p>{{ product.text }}</p>
       <button @click="addToBasket" :disabled="product.quantity == 0" style="background-color: #18A0FB; color: #020351;border-radius: 40px;">Add to Basket</button>
       <button @click="removeFromBasket" :disabled="product.quantity == product.selected" style="background-color: #18A0FB; color: #020351;border-radius: 40px;">Remove From Basket</button>
    </div>
   </div>
   <!--Displays the image slider of the product images-->
   <div class="section2" style="margin-top:20px;">
    <h2 style="margin-top: 140px;">Pictures of {{ product.name }}s !</h2>
    <Slider v-bind:slides="product.images"></Slider>
   </div>
   <div>
    <!--Displays the product reviews section-->
    <h2 class="heading">Reviews</h2>
    <div class="sectionreviews">
    <p v-if="reviews.length == 0">There are no reviews for this product.</p>
    <ol v-else>
    <li v-for="(review, index) in reviews" :key="index">
    <div class="row">
    <p class="column">{{ review.name }}</p>
    <p class="column">Rating:{{ review.rating }}</p>
    <p class="column">{{ review.feedback }}</p>
    </div>
    </li>
    </ol>
    </div>
    </div>
    <ProductReviewVue @newreview="addReview"></ProductReviewVue>
    </div>
</template>

<script>
import ProductReviewVue from './ProductReview.vue'
import Slider from './Slider.vue'
export default {
    name: "ProductVue",
    components:{
    ProductReviewVue,
    Slider
},
data() {
      return {
         reviews: [],
         product: this.$store.state.products[this.$route.params.id]
      }
    },
      methods: {
        addToBasket() {
            let item = {
             id: this.product.id,
             name: this.product.name,
             prize: this.product.amount,
            }
            this.$emit('add-to-basket', item)
        },
        addtoFavourite(){
            let item = {
             id: this.product.id,
             name: this.product.name,
             prize: this.product.amount,
             image: this.product.cardimage
            }
            this.$store.dispatch("AddFavourite", item)
        },
        removeFromBasket() {
            let item = {
             id: this.product.id,
             name: this.product.name,
             prize: this.product.amount,
            }
            this.$emit('remove-from-basket', item)
        },
        addReview(productreview) {
            this.reviews.push(productreview)
        }
      }
}
</script>

<style>
img {width: 100%; max-width: 100%; height: auto; object-fit: contain; display: block;}
        .welcomebox{
            background-size:cover;
            margin-top: 45px;
        }
        .heading{
            border-radius: 8px; 
            background-color: #00B4D8;
        }
        .section2{
            display: flex;
            background-color: #00B4D8;
        }
        .section2 .itemdetails{
            display: block;
            background-color: #00B4D8;
            margin-left: 20px;
            margin-right: 50px;
            font-size: large;
        }
        .section3{
            margin-top: 20px;
            position: absolute;
            background-color:#00B4D8;
        }
        .Basket{
            background-color:#00B4D8;
        }
        .section4{
            background-color: #00B4D8;
            text-align: center;
        }
        .sectionreviews{
            background-color: #00B4D8;
        }
        .row{
            clear:both;
            display: flex;
        }
        .column{
            float: left;
            width: 30%;
            padding: 10px;
        }
</style>