<template>
    <div>
    <Navbar></Navbar>
    <!--Search bar function that finds the products to store in the filtered array to be shown below-->   
    <div class="searchbar">
            <input class="searchinput" type="text" placeholder="Search" v-model="search">
    </div>
    <!--Displays all the products in card format as a list in the filtered list-->
      <li v-for="(product, index) in filteredProducts" :key="index">
      <div class="cardslist">
        <h3 class="name">{{ product.name }}</h3>
        <Card :image="product.cardimage" :text="product.name" :id="product.id"></Card>
     </div>
    </li>
    <Footer></Footer>
    </div>
</template>

<script>
import Card from '@/Card.vue';
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';

export default {
    data(){
        return{
            search: '',
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        filteredProducts: function(){
            return this.products.filter((product) => {
                return product.name.match(this.search);
            });
        }
    },
    components: { Card, Navbar, Footer }
}
</script>

<style>

    .searchbar{
        width: 100%;
        text-align: center;
        margin-top: 50px;
        background-color: #18A0FB;
        height: 50px;
    }
    .submitbutton{
        padding: 8px;
        border-radius: 50%;
        margin-left: 20px;
        background-color: blue;
    }
    .searchinput{
        width: 400px;
        margin-top: 15px;
    }
    .cardslist{
       background-color: #18A0FB;
       margin-bottom: 20px;
    }
    .name{
        text-align: center;
    }
</style>