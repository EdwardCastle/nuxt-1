export const state = () => ({
  invoiceModal: null,
  modalActive: null
})
export const mutations = {
  toggle_invoice(state) {
    state.invoiceModal = !state.invoiceModal
  },
  toggle_modal(state) {
    state.modalActive = !state.modalActive
  }
}
