<template>
  <div>
    {{currentInvoiceArray[0].invoiceId}}
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: "invoiceId",
    data() {
      return {
        currentInvoice: null
      }
    },
    created() {
      this.getCurrentInvoice()
    },
    computed: {
      ...mapState(['currentInvoiceArray'])
    },
    methods: {
      getCurrentInvoice() {
        this.set_current_invoice(this.$route.params.id)
      },
      ...mapMutations(['set_current_invoice'])

    }
  }
</script>

<style scoped>

</style>
