<template>
  <div v-if="invoicesLoaded">
    <div v-if="!mobile" class="app flex flex-column">
      <Navigation/>
      <Modal v-show="modalActive"/>
      <div class="app-content flex flex column">
        <transition name="invoice">
          <InvoiceModal v-if="invoiceModal"/>
        </transition>
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
  import {mapState, mapActions} from 'vuex'

  export default {
    components: {},
    data() {
      return {
        mobile: false,
        tablet: false,
        desktop: false,
      }
    },
    created() {
      this.get_invoices()
      if (process.client) {
        this.checkScreen()
        window.addEventListener("resize", this.checkScreen)
      }
    },
    computed: {
      ...mapState(['invoiceModal', 'modalActive', 'invoicesLoaded'])
    },
    methods: {
      checkScreen() {
        const windowWidth = window.innerWidth
        this.mobile = windowWidth < 768;
        this.tablet = windowWidth >= 768 && windowWidth < 1024
        this.desktop = windowWidth > 1024
      },
      ...mapActions(['get_invoices'])
    }
  }
</script>
<style lang="scss" scoped>
  // animated invoice
  .invoice-enter-active,
  .invoice-leave-active {
    transition: 0.8s ease all;
  }

  .invoice-enter-from,
  .invoice-leave-to {
    transform: translateX(-700px);
  }

</style>
