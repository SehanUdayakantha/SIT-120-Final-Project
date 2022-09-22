<template>
  <div>
    <!--Displays favorite page layout-->
    <Navbar></Navbar>
    <br>
    <h1 class="heading">Favourite</h1>
    <!--Shows favorites in card format if there's any present in the array-->
    <p class="heading" v-if="Favourites.length == 0">There are no Favourites present</p>
    <button @click="removefavourite" :disabled="Favourites.length == 0" v-else >Remove from Favourite</button>       
      <li v-for="(Favourite, index) in Favourites" :key="index">
      <div class="cardslist">
        <h1 class="name">{{ Favourite.name }}</h1>
        <Card :image="Favourite.image" :text="Favourite.name" :id="Favourite.id"></Card>
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
    name: "FavouritePageVue",
    computed: {
        Favourites() {
            return this.$store.state.Favourites;
        }
    },
    methods: {
        removefavourite()
        {
            this.$store.dispatch("RemoveFavourite")
        }
    },
    components: { Card, Navbar, Footer }
}
</script>

<style>
.name{
    margin-top: 50px;
}
</style>