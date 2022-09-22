<template>
  <div class="section06">
    <!--The router link to change each card image and the use of props to apply changes-->
            <img class="popupimage" :src ="image"/>
            <div class="popup">
                <router-link v-bind:to="'/ProductPageVue/' + id"><div class="popuptext"><a>{{ text }}</a></div></router-link>
            </div>
  </div>        
</template>

<script>
export default {
    name: 'CardVue',
    props:['image', 'text', 'id']
}
</script>

<style>
    .section06{
            position: relative;
            display: flex;
            margin-top: 20px;
            width: 100%;
            height: 250px;
        }
        .section06:hover .popupimage{
            opacity: 0.3;
        }
        .section06:hover .popup{
            opacity: 1;
        }
        .popupimage{
            opacity: 1;
            display: block;
            transition: .5s ease;
            backface-visibility: hidden;
            width: 100%;
            margin-right:20px; 
            margin-left: 20px;
        }
        .popup{
            transition: .5s ease;
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            text-align: center;
        }
        .popuptext{
            background-color:#18A0FB;
            color: #020351;
            font-size: large;
            padding: 16px 32px;
            border-radius: 50px;
        }
        .popuptext a{
            text-decoration: none;
        }
</style>