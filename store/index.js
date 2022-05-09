export const state = () => ({
  invoiceModal: null,
})
export const mutations = {
  toggle_invoice(state) {
    state.invoiceModal = !state.invoiceModal
  }
}
