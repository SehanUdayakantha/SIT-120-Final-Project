import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [ {
      id: 0,
      name: "Chocolate Milkshake",
      headingimage: 'https://vinepair.com/wp-content/uploads/2016/07/HEADER.jpg',
      cardimage:'https://media.istockphoto.com/photos/homemade-chocolate-cake-milkshake-picture-id1183223263?k=20&m=1183223263&s=612x612&w=0&h=u7n8Yv-IJEmR0dQxI50L7oU_FPrdtSgb_8apdcFMMyM=',
      images: ['https://girlinthelittleredkitchen.com/wp-content/uploads/2016/08/Susan-Palmer-Boozy-Mexican-Chocolate-Milkshakes.jpg','https://thefrayedapron.com/wp-content/uploads/2020/02/chocolate-smoothie_.jpg','https://simplelivingrecipes.com/wp-content/uploads/2020/02/Healthy-chocolate-shake-1.jpeg'],
      amount: 3.25,
      Favouritecheck: 1,
      quantity: 10,
      selected: 0,
      text: "Chocholate Milshake => Ingredients : [cup milk | chocolate-flavored syrup | vanilla ice cream] ",
  },
  {
    id: 1,
    name: "Chocolate Donut",
    headingimage: 'https://assets-us-01.kc-usercontent.com/0542d611-b6d8-4320-a4f4-35ac5cbf43a6/62cd63c9-2365-4eb0-95aa-d44487da91c4/donut-shop-insurance-header.jpg?w=1110&h=400&fit=crop',
    cardimage:'https://www.adashofmegnut.com/wp-content/uploads/2018/04/Double-Chocolate-Sprinkle-Donuts-9.jpg',
    images: ['https://st.focusedcollection.com/11312302/i/1800/focused_151278558-stock-photo-closeup-view-one-chocolate-glazed.jpg', 'https://thumbs.dreamstime.com/z/tasty-chocolate-donut-isolated-white-33038907.jpg', 'https://cupcakesandkalechips.com/wp-content/uploads/2022/01/Gluten-Free-Chocolate-Donuts-Recipe-9127.jpg'],
    amount: 2.25,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Chocholate Donut => Ingredients : [ all-purpose flour | unsweetened cocoa powder | baking powder | baking soda | salt | egg | granulated sugar | milk | yogurt | unsalted butter, melted | vanilla extract]",
  },
  {
    id: 2,
    name: "Chocolate Chip Cookie",
    headingimage: 'https://previews.123rf.com/images/axelbueckert/axelbueckert1804/axelbueckert180400020/99891766-cookies-and-biscuits-border-frame-in-banner-or-header-format-with-copy-space.jpg',
    cardimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEMcId1BOazaXIaEfg0UJTRhktd0aQX0uMQ&usqp=CAU',
    images: ['https://www.simplyrecipes.com/thmb/V-04lWuHEfsBZWVj-9B9OQhiIFY=/1800x1200/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__08__oatmeal-raisin-choc-chip-orange-pecan-cookies-horiz-a-1800-187a89c989ef408c87b1a26dd1207f70.jpg','https://miso-jfoodo.jetro.go.jp/assets/images/recipes/miso-chocolate-chip-cookies/main.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAhSr0fCzZLYwnvKAO6xCBKsLKJB-KuT7BQ&usqp=CAU'],
    amount: 1.25,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Chocholate Chip Cookie => Ingredients : [ all-purpose flour | baking soda | salt | butter, softened | granulated sugar | brown sugar | egg | vanilla | semisweet chocolate chips ]",
  },
  {
    id: 3,
    name: "Chocolate Croissant",
    headingimage: 'https://www.ranson.be/assets/uploads/site/_767xAUTO_fit_center-center_80_none/ranson-bakery-header.jpg?v=1655373537',
    cardimage:'https://media.istockphoto.com/photos/fresh-chocolate-croissants-on-a-plate-picture-id180824921?k=20&m=180824921&s=612x612&w=0&h=Hr5Iw4faW9RxKzLqJLWBlh1gnYWo9TbXo3u2Qf5xQfA=',
    images: ['https://media.istockphoto.com/photos/chocolate-drizzled-croissants-picture-id624138466?k=20&m=624138466&s=612x612&w=0&h=7GoDSBmg64Kt2adEFn8T37sOS4xZMDrRsQX4BnkBj54=','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoT0lIJkjUWEJYIQL-fPvx6FU4or3KGkS_Ug&usqp=CAU','https://st.focusedcollection.com/16017410/i/1800/focused_183101220-stock-photo-croissants-striped-pattern-white-background.jpg'],
    amount: 2.25,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Chocholate Croissant => Ingredients : [ flour | water | milk | sugar | salt | instant dry yeast | unsalted butter, softened | egg | sweetened chocolate bar ]",
  },
  {
    id: 4,
    name: "Coffee",
    headingimage: 'https://coffeewitness.com/wp-content/uploads/2022/03/cups_1250x-720x275.jpg',
    cardimage:'https://www.homeworldhelensvale.com.au/wp-content/uploads/2017/05/The-coffee-Club-2.jpg',
    images: ['https://img.medscapestatic.com/vim/live/professional_assets/medscape/thumbnail_library/1800ss_getty_rf_coffee.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCykzUrmtgM601kJ2MCS1jYdpBW3ihwxCGw&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_HtxOlDlY44aS7FcT9HBWMbp52AvUExRloSE54RXgrxl9o-J2Vf-aBtBuNmVZmT6SdM&usqp=CAU'],
    amount: 2.25,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Coffee => Ingredients : [ espresso shots | fresh whole milk ]",
  },
  {
    id: 5,
    name: "Strawberry Milkshake",
    headingimage: 'https://vinepair.com/wp-content/uploads/2016/07/HEADER.jpg',
    cardimage:'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXdiZXJyeSUyMG1pbGtzaGFrZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    images: ['https://media.istockphoto.com/photos/glass-with-strawberry-smoothie-or-milkshake-picture-id1255401209?k=20&m=1255401209&s=612x612&w=0&h=01L0Kp3spiruWTFmVuuQj_KqKUOOxnGjAnCqoNhaWSY=','https://www.sneakyveg.com/wp-content/uploads/2019/04/strawberry-milkshake-SV-3.jpg','https://capital-brands-llc.imgix.net/recipe-r2230-strawberry-protein-punch-fullsize-205329.jpg'],
    amount: 3.25,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Strawberry Milshake => Ingredients : [ fresh strawberries | sugar | vanilla extract | vanilla ice cream | milk ]",
  },
  {
    id: 6,
    name: "Vanila Cookie",
    headingimage: 'https://previews.123rf.com/images/axelbueckert/axelbueckert1804/axelbueckert180400020/99891766-cookies-and-biscuits-border-frame-in-banner-or-header-format-with-copy-space.jpg',
    cardimage:'https://www.simplyrecipes.com/thmb/VA1vyA5sEP4JhNJ1NQrg4BkWL7E=/1800x1200/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__12__white-chocolate-macadamia-cookies-horiz-a-1800-74a80c98c2dc4119affcaf13512b3096.jpg',
    images: ['https://sweetsandthankyou.com/wp-content/uploads/2022/07/Macadamia-Cookies16-2.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7Lq7cwG2j3Q_kPy_klR8G--m9Ctvv27Iky-OFOU1Wc60e4aTUbObLDv4RXOmN289CAU&usqp=CAU','https://mapleandthyme.com/wp-content/uploads/2022/07/lemon-white-chocolate-chip-cookies-7.jpg'],
    amount: 1.25,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Vanila Cookie => Ingredients : [ butter, softened | caster sugar | egg | plain flour sifted | baking powder | vanilla essence ]",
  },
  {
    id: 7,
    name: "Grilled Cheese Sandwich",
    headingimage: 'https://i0.wp.com/yourfoodonline.com.au/wp-content/uploads/2021/02/Your-Food-Online-Header-Features.jpg?fit=1200%2C460&ssl=1',
    cardimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKy8pV-emjM0OxldFvzdQVqAc9SfT86agPAanIxRgXg-_Vfwq3gdHzTpD56e9t2S554ek&usqp=CAU',
    images: ['https://www.simplyrecipes.com/thmb/7akCtTGrMVaKQLHNqXBVrSpDjwE=/1800x1200/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__09__grilled-cheese-sandwich-bacon-pear-horiz-a-1800-9b487e327f30498399c5196957890bfb.jpg','https://st.focusedcollection.com/11312302/i/1800/focused_149604598-stock-photo-grilled-cheese-sandwich.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet9VqaSCiCXJCGPeNImFcMqMBqjKf8YO9oXM7zg0FGMHFjEJQJ3r5fl89Bwbzuj3_0kI&usqp=CAU'],
    amount: 3.25,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Grilled Cheese Sandwich => Ingredients : [ white bread | butter, divided | Cheddar cheese ]",
  },
  {
    id: 8,
    name: "Fruit Cake Slice",
    headingimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHu9CBKvktBSDkpaOdnM6EBUCYTrowHkSqIA&usqp=CAU',
    cardimage:'https://media.istockphoto.com/photos/fruitcake-on-a-cutting-board-picture-id1291195097?k=20&m=1291195097&s=612x612&w=0&h=EH8AQENohHu2IxPb22Jjgiwmm-wrtn9QtctJ-GS2Vsk=',
    images: ['https://media.istockphoto.com/photos/freshly-baked-fruitcake-made-with-glacier-cherriesmixed-and-dark-picture-id1183554181?k=20&m=1183554181&s=612x612&w=0&h=Tma7W04H0ju_EvUr9yKOG4Mki3qOpQnvKdDHtHbYtnM=','https://i.pinimg.com/originals/5e/76/7f/5e767f71973b40ce966ef9c1cf3011d1.jpg','https://desirerecipes.com/wp-content/uploads/2021/11/image-8-1.jpg'],
    amount: 1.25,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Fruit Cake => Ingredients : [ baking soda | full fat sour cream | chopped dates | raisins | chopped glazed cherries | chopped walnuts | all-purpose flour, divided | unsalted butter | sugar | egg | Finely grated zest of orange | salt ]",
  },
  {
    id: 9,
    name: "Chocolate Cake Slice",
    headingimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHu9CBKvktBSDkpaOdnM6EBUCYTrowHkSqIA&usqp=CAU',
    cardimage:'https://media.istockphoto.com/photos/piece-of-dark-chocolate-cake-picture-id153505933?k=20&m=153505933&s=612x612&w=0&h=qrd02925pxjKazFhypolbf-aVl7YVljsKi8MsePg0lQ=',
    images: ['https://media.istockphoto.com/photos/sweet-homemade-dark-chocolate-layer-cake-picture-id904337728?k=20&m=904337728&s=612x612&w=0&h=DWX0TWZPMiee-BYI6NV_S3fGG8Rg9UIxtB7r2RXOX3U=','https://easycakerecipes.co.uk/wp-content/uploads/2022/02/Triple-Layer-Chocolate-Cake.jpg.webp','https://image.shutterstock.com/z/stock-photo-plate-with-slice-of-tasty-homemade-chocolate-cake-on-table-1295709469.jpg'],
    amount: 2.45,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Chocholate Cake => Ingredients : [ Melted butter | brown sugar | milk | butter, cubed | cocoa powder | Bicarbonate Soda | self-raising flour | plain flour | eggs, lightly whisked | pure icing sugar | cocoa powder | butter | boiling water ]",
  },
  {
    id: 10,
    name: "Chocholate muffins",
    headingimage: 'https://www.stoeber.cc/wp-content/uploads/2020/03/schoko-muffins_HEADER.jpg',
    cardimage:'https://media.istockphoto.com/photos/homemade-dark-chocolate-muffins-picture-id537698587?k=20&m=537698587&s=612x612&w=0&h=zPommgzWw6Q1uPha2mBSrTVpJn54mzoFUf_ln4LKx8Y=',
    images: ['https://theviewfromgreatisland.com/wp-content/uploads/2021/01/chocolate-muffins-17-1080x716.jpg','https://thumbs.dreamstime.com/b/chocolate-muffin-16908605.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIpN4cj4A2aGPL-9kXAiuLxJlyCwsiyBas7dz9NH9QJl767Q4q7k1H_5IOj_X9TfsbPc&usqp=CAU'],
    amount: 1.55,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Chocholate muffins => Ingredients : [ self-raising flour, sifted | cocoa powder, sifted | caster sugar | dark chocolate bits | vegetable oil | milk | vanilla extract | eggs ]",
  },
  {
    id: 11,
    name: "Vegetable Sandwich",
    headingimage: 'https://i0.wp.com/yourfoodonline.com.au/wp-content/uploads/2021/02/Your-Food-Online-Header-Features.jpg?fit=1200%2C460&ssl=1',
    cardimage:'https://www.simplyrecipes.com/thmb/tIf9TS7HkkRw9YXhG5hxswr_9CE=/1800x1200/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2013__08__avocado-lettuce-tomato-sandwich-horiz-a-1800-cd53279aeb4147bf9e6589c01097511d.jpg',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfkSS2PrB0Df1WwsD7pAuwyGgJzOv6JXKknbv87vFJGHXgWoHSyG3S8kJEhXKWkd0Glw&usqp=CAU','https://foodbyjonister.com/wp-content/uploads/2020/03/VegetableSandwich1.jpg','https://alittlebityummy.com/wp-content/uploads/2018/01/Low-FODMAP-Easy-Salad-Sandwich-Landscape.jpg'],
    amount: 3.15,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Vegetable Sandwich => Ingredients : [ Butter | cream cheese | shredded cheese | Red onion | Diced Carrot | Sweet Peas | Kernel Sweet Corn | Garlic | tomato ketchup | red pepper flakes | salt | pepper | Oatnut bread ]",
  },
  {
    id: 12,
    name: "Stawberry Donut",
    headingimage: 'https://assets-us-01.kc-usercontent.com/0542d611-b6d8-4320-a4f4-35ac5cbf43a6/62cd63c9-2365-4eb0-95aa-d44487da91c4/donut-shop-insurance-header.jpg?w=1110&h=400&fit=crop',
    cardimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CGIYuYhLDxxQuAeuoEDLyg-ykSVdLonIgvpWav7gb5Ixen5rlXBXnFrmUkSj76arT8w&usqp=CAU',
    images: ['https://www.sugarsaltmagic.com/wp-content/uploads/2019/05/Baked-Strawberry-Doughnuts-FB.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTARB0IXYcIUdqe4RBn1lho_lIEMH8ym_iry-3sgZ6I8Yt0pI6Jb0X-bPlQ0WKcboxm5fo&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwnseV4msDyu8JIHJ8UMk1VgyNYf0X3uQlw&usqp=CAU'],
    amount: 2.25,
    Favouritecheck: 1,
    quantity: 10,
    selected: 0,
    text: "Strawberry Donut => Ingredients : [ all-purpose flour | granulated sugar | baking powder | vanilla Greek yogurt | milk | egg | pure vanilla extract | unsalted butter, melted | strawberries | strawberry jam | confectioners sugar, sifted | red sprinkles ]",
  },
 ],
 StoreBasket: [],
 Favourites: [],
  },
  getters: {
    items: (state) => state.products,
    StoreBasket: (state) => state.StoreBasket,
    Favourites: (state) => state.Favourites
  },
  mutations: {
    addItem(state, item) {
      state.StoreBasket.push(item);
      state.products[item.id].quantity -= 1;
      state.products[item.id].selected += 1;
  },
    addFavourite(state, item) {
      state.Favourites.push(item);
      state.products[item.id].Favouritecheck -= 1;
  },
   removeItem(state, item){
      state.StoreBasket.pop();
      state.products[item.id].quantity += 1;
  },
   removeFavourite(state){
      state.Favourites.pop();
  }
  },
  actions: {
    AddItem(context, item) {
      context.commit("addItem", item);
  },
  AddFavourite(context, item) {
      context.commit("addFavourite", item);
  },
  RemoveItem(context, item) {
      context.commit("removeItem", item);
  },
  RemoveFavourite(context) {
      context.commit("removeFavourite");
  }
  },
  modules: {
  }
})
