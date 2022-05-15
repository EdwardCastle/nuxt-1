import db from '~/firebase/firebaseInit'

export const state = () => ({
  invoiceModal: null,
  modalActive: null,
  invoiceData: [],
  invoicesLoaded: null,
  currentInvoiceArray: null
})
export const mutations = {
  toggle_invoice(state) {
    state.invoiceModal = !state.invoiceModal
  },
  toggle_modal(state) {
    state.modalActive = !state.modalActive
  },
  set_invoice_data(state, payload) {
    state.invoiceData.push(payload)
  },
  invoices_loaded(state, payload) {
    state.invoicesLoaded = true
  },
  set_current_invoice(state, payload){
    state.currentInvoiceArray = state.invoiceData.filter(invoice => {
      return invoice.invoiceId === payload
    })
  }
}

export const actions = {
  async get_invoices({commit, state}) {
    const getData = db.collection('invoices')
    const results = await getData.get()
    results.forEach(doc => {
      if (!state.invoiceData.some(invoice => invoice.docId === doc.id)) {
        const data = {
          docId: doc.id,
          invoiceId: doc.data().invoiceId,
          billerStreetAddress: doc.data().billerStreetAddress,
          billerCity: doc.data().billerCity,
          billerZipCode: doc.data().billerZipCode,
          billerCountry: doc.data().billerCountry,
          clientName: doc.data().clientName,
          clientEmail: doc.data().clientEmail,
          clientStreetAddress: doc.data().clientStreetAddress,
          clientCity: doc.data().clientCity,
          clientZipCode: doc.data().clientZipCode,
          clientCountry: doc.data().clientCountry,
          invoiceDateUnix: doc.data().invoiceDateUnix,
          invoiceDate: doc.data().invoiceDate,
          paymentTerms: doc.data().paymentTerms,
          paymentDueDateUnix: doc.data().paymentDueDateUnix,
          paymentDueDate: doc.data().paymentDueDate,
          productDescription: doc.data().productDescription,
          invoiceItemList: doc.data().invoiceItemList,
          invoiceTotal: doc.data().invoiceTotal,
          invoicePending: doc.data().invoicePending,
          invoiceDraft: doc.data().invoiceDraft,
          invoicePaid: doc.data().invoicePaid,
        }
        commit('set_invoice_data', data)
      }
    })
    commit('invoices_loaded')
  }
}
