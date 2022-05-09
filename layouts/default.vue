<template>
  <div>
    <div v-if="!mobile" class="app flex flex-column">
      <Navigation/>
      <div class="app-content flex flex column">
        <InvoiceModal/>
        <Nuxt/>
      </div>
    </div>
    <div v-else class="mobile-message flex flex-column">
      <h2>Sorry this app is not supported on Mobile devices</h2>
      <p>To use this app please use a computer or a Table</p>
    </div>
  </div>
</template>

<script>
  import InvoiceModal from "~/components/InvoiceModal";

  export default {
    components: {InvoiceModal},
    data() {
      return {
        mobile: false,
        tablet: false,
        desktop: false,
      }
    },
    created() {
      if (process.client) {
        this.checkScreen()
        window.addEventListener("resize", this.checkScreen)
      }
    },
    methods: {
      checkScreen() {
        const windowWidth = window.innerWidth
        this.mobile = windowWidth < 768;
        this.tablet = windowWidth >= 768 && windowWidth < 1024
        this.desktop = windowWidth > 1024
      }
    }
  }
</script>
<style lang="scss" scoped>


</style>
