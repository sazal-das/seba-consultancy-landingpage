import { api } from 'boot/axios'

export default {
  bookDemo (payload) {
    return api.post('book-demo', payload)
  }
}
