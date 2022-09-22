<template>
  <div>
<div class="welcomebox">
        <div class="welcometext">
        <h1 >Welcome to Foodie Cafe</h1>
       </div>
    </div>
    <div class="section01">
        <div class="image01">
         <img src="../assets/bakedgoods.jpg" alt="bakedgoods" width="900" height="250">
        </div>
        <div class="p1">
            <h1>Bakery Foods</h1>
            <p>All the foods are made freshly everyday, especially baked food items we prepare them everyday and servered freshly to our customers.</p>
        </div>
    </div>
    <div style="background-color:#48CAE4;" class="section01">
        <div class="p2">
            <h1>Drinks and Refreshers</h1>
            <p>We also supply our customers drinks and refreshers  upon thier request  like feresh fruit juices which are prepared freshly and coofee and other drinks are also made  freshly with the accurate instructions by our customer.</p>
        </div>
        <div class="image01">
            <img src="../assets/selection-of-different-coffee-type.jpg" alt="drinks" width="1350" height="250">
        </div>
    </div>
    <div style="background-color:#90E0EF;" class="section03">
        <h1 style="text-align: center; background-color:#00B4D8; border-radius: 20px; ">A Video about how the foods in the cafe are prepared !</h1>
        <iframe class="video" src="https://www.youtube.com/embed/xPPLbEFbCAo?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomeVue"
}
</script>


<style scoped>
img {max-width: 100%; display: block;}
        .welcomebox{
            background-image: url(../assets/cafes-of-mayfield-newcastle-nsw.jpg);
            background-size:cover;
            padding: 200px;
            margin: 0px;
            text-align: center;
            color: #020351;
        }
        .welcometext{
            background-color:#00B4D8;
            border-radius: 50px;
        }
        .section01{
            display: flex;
            background-color: #90E0EF;
            margin-top: 20px;
            text-align: center;
        }
        .video{
            width: 100%; 
            height: 555px;
        }
</style>
