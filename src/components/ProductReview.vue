<template>
    <div>
  <div class="section4">
    <!--Prevents the form from being submitted if any mistakes are present-->
    <form @submit.prevent="submit">
        <p class="mistake" v-if="mistakes.length">
          <b>Please correct the following mistake(s):</b>
          <ul>
            <li v-for="(mistake,index) in mistakes" v-bind:key="index">{{ mistake }}</li>
          </ul>
        </p>
        <!--Takes in all the user input for the review-->
        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name">
        </p>
        <p>
          <label for="review">Comment:</label>      
          <textarea id="review" v-model="feedback"></textarea>
        </p>
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>
        <p>
          <input style="background-color: #18A0FB; color: #020351;border-radius: 40px;" type="submit" value="Submit">  
        </p></form>    
        </div>      
      
    </div>
</template>

<script>
export default {
    data() {
      return {
        name: null,
        feedback: null,
        rating: null,
        mistakes: []
      }
    },
    methods: {
      submit() {
        this.mistakes = []
        if(this.name && this.feedback && this.rating) {
          let productreview = {
            name: this.name,
            feedback: this.feedback,
            rating: this.rating,
          }
          this.$emit('newreview', productreview)
          this.name = null
          this.feedback = null
          this.rating = null
        } else {
          if(!this.name) this.mistakes.push("Name required.")
          if(!this.feedback) this.mistakes.push("Comment required.")
          if(!this.rating) this.mistakes.push("Rating required.")
        }
      }
    }
}
</script>

<style>
.section4{
            background-color: #00B4D8;
            text-align: center;
        }
        .sectionreviews{
            background-color: #00B4D8;
        }
</style>