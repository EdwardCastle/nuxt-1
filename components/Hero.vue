<template>
  <div class="Hero container">
    <div class="text-container">
      <h1 class="header">Find your Fire Extinguisher</h1>
      <p class="snippet">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto illum quidem asperiores,
        cum nisi aperiam eius ipsa sapiente odit!</p>
      <b-button class="button   ">Start Looking</b-button>
    </div>
    <img class="image" src="~/assets/svg/fire-extinguisher.svg" alt="fire extinguisher">
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .Hero {
    height: 50vh;
    position: relative;
    display: flex;
    padding: 5rem 0 5rem 5rem;
    align-items: self-start;
  }

  .text-container {
    width: 55%;
  }

  .header {
    font-weight: 900;
    font-size: 5rem;
  }

  .snippet {
    color: grey;
    font-size: 1.25rem;
  }

  .image {
    width: 20rem;
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

  @media (max-width: 500px) {
    .Hero {
      height: 40vh;
    }
  }
</style>
