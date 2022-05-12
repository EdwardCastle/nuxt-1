import InvoiceModal from '~/components/InvoiceModal.vue'
import {shallowMount} from "@vue/test-utils"
import { config } from '@vue/test-utils'
config.showDeprecationWarnings = false
describe('navigation.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(InvoiceModal, {
        methods: {closeInvoice: ()=>{}}
    })
  })
  it('renders', ()=> {
      expect(wrapper.exists()).toBe(true)

  });
})
