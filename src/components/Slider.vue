<template>
  <div class="slider">
    <!--Slider that displays images recieved through props using transitons-->
    <transition-group name="slide-fade" tag="div">
      <div v-for="j in [currentSlide]" :key="j">
        <img :src="currentImg" />
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  props: ['slides'],
  name: "image-slider",
  data() {
    return {
      duration: null,
      currentSlide: 0
    };
  },

  mounted: function() {
    this.beginSlide();
  },

  methods: {
    beginSlide: function() {
      this.duration = setInterval(this.after, 5000);
    },

    after: function() {
      this.currentSlide += 1;
    },
    before: function() {
      this.currentSlide -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.slides[Math.abs(this.currentSlide) % this.slides.length];
    }
  }
};
</script>

<style>
  .slider{
    overflow: hidden;
    background-size:cover;
    opacity: 1;
    height: 60vh;
    max-width: 100%;
    height: auto;
  }

.slide-fade-enter-active,
.slide-fade-leave-active {
  visibility: hidden;
  width:100%;
  height: 100%;
  opacity: 1;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

img {
  max-width: 100%;
  height: auto;
}
</style>