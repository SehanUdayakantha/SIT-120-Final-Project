<template>
  <div class="page">
    <!--Displays the login page layout-->
        <div class="box">
            <h1>Foodie Cafe</h1>
        </div>
        <div class="box">
            <h2>Login</h2>
        </div>
        <div class="login">
        <form>
         <!--Asks and takes in user input of the username and passowrd-->     
        <h2>Username</h2>
        <input required class="inputbox" type="text" placeholder="Enter Username here" v-model="Username">
        <h2>Password</h2>
        <input required class="inputbox2" type="password" placeholder="Enter Password here" v-model="Password">
        <router-link to="/HomePageVue"><button>Submit</button></router-link>
            </form> 
        </div>
        </div>           
</template>

<script>
export default {
    name:"loginVue",
    data() {
        return{
            Password: null,
            Username: null
        }
    }

}
</script>

<style>
body,html 
        {
            height: 100%;
            margin: 0;
        }
        .page{
            background-image: url(../assets/home-bg-1024x680.jpg);
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-top: 0;
        }
        .login{
            text-align: center;
            padding-top: 60px;
        }
        .inputbox{
            width: 35%;
            height: 25px;
        }
        .inputbox2{
            width: 35%;
            height: 25px;
            margin-right: 85px;
            margin-left: 135px ;
        }
        .box{
            background-color: #00B4D8;
            border-radius: 10%;
            text-align: center;
            display: flex;
            margin-top: 25px;
            align-items: center;
            justify-content: center;
        }
        img {max-width: 100%; max-height:100%; display: block;}
</style>