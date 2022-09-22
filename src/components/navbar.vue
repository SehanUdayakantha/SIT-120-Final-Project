<template>
  <!-- Navigation Bar -->
  <div class="navbar">
        <b>Foodie Cafe</b>
        <!--Links to each given page-->
        <a><router-link to="/HomePageVue">Home</router-link></a>
        <a><router-link to="/CategoryPageVue">Food Categories</router-link></a>
        <a><router-link to="/ContactPageVue">Contact</router-link></a>
        <a><router-link to="/FavouritePageVue">Favorites</router-link></a>
    </div>
</template>

<script>
export default {
    name: "navbarVue"

}
</script>

<style>

        .navbar{
            overflow: hidden;
            background-color: #020351;
            position: fixed;
            width: 100%;
            height: 42px;
            top:0;
            z-index: 1;
        }
        .navbar a{
            float: left;
            display: block;
            color: #18A0FB;
            text-align: center;
            padding: 8px 16px;
            text-decoration: none;
            font-size: small;
        }
        .navbar b{
            float: left;
            display: block;
            text-align: center;
            text-decoration: none;
            font-size: larger;
            background-color:#00B4D8; 
            color: #020351; 
            border-radius: 15px; 
            padding: 9px 0px;
        }
        .navbar a:hover{
           background-color: #18A0FB;
           color: #020351;
        }
        .navbar a.active {
            background-color: #18A0FB;
            color: #020351;
        }
        
        @media screen and (max-width: 700px) {
            
            .navbar{
                width: 100%;
                height: 300px;
                position: relative;
            }
            .navbar a{
                background-color: #020351;
                color: #00B4D8;
                display: block;
                padding: 12px;
                text-decoration: none;
                float: none;
                display: block;
                text-align: left;
                width: 100%;
                margin: 0;
                padding: 14px;
            }
            .navbar b{
                display: block;
                text-decoration: none;
                text-align: center;
                font-size: larger;
                background-color:#00B4D8; 
                color: #020351; 
                padding: 10px 300px;
            }
            .navbar a.active {
                background-color: #18A0FB;
                color: #020351;
            }
        }
</style>