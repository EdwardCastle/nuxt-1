<template>
  <div>
    <b-container class="Hero">
      <b-row>
        <b-col :cols="!isDesktop ?   '12' : '7'" class="center-all">
          <p :class="isMobile ? 'header-mobile' : 'header'">Find your Fire
            Extinguisher</p>
          <p class="snippet" :style="isMobile ? 'font-size: 12px' :''">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto illum quidem
            asperiores, cum nisi aperiam eius ipsa sapiente odit!</p>
          <b-button class="button" :style="isMobile ? 'padding: 0.5rem !important; width: 75%': ''">Start Looking</b-button>
        </b-col>
        <b-col v-show="isDesktop" cols="5">
          <img src="~/assets/svg/fire-extinguisher.svg"
               alt="fire extinguisher" style="width: 20rem; height: 20rem">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {

    computed: {
      isMobile() {
        return this.$screen.width <= 768
      },
      isTablet() {
        return this.$screen.width > 768 && this.$screen.width <= 1024
      },
      isDesktop() {
        return this.$screen.width > 1024

      }

    }
  }
</script>

<style scoped>
  .Hero {
    height: 100vh;
    padding: 5rem;
    position: relative;
    /*display: flex;*/
  }

  /*.text-container {*/
  /*  width: 55%;*/
  /*}*/

  .header {
    font-weight: 900;
    font-size: 3.5rem;
  }

  .header-mobile {
    font-weight: 900;
    font-size: 1.8rem;
    align-items: center;
    align-content: center;
  }

  .snippet {
    color: grey;
    font-size: 1.25rem;
  }
    .center-all {
      align-content: center;
      align-items: center;
      display: flex;
      flex-wrap: wrap
    }
  .button {
    padding: 1rem 4rem;
    border-radius: 100rem;
    background-color: rgb(231, 81, 43);
    color: white;
    width: 20rem;
    font-weight: 700;
    transition: 0.5s;
  }

</style>

