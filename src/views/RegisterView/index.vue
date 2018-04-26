<template>
  <div id="register-view">
    <div id="register-view" class="container has-text-centered">
      <h1 class="title">Caatu</h1>
      <p class="subtitle">Registro de Usuário</p>
    </div>
    <form @submit.prevent="register_send()">
      <div class="field">
        <p class="control has-icons-left">
          <input v-model="form.username" class="input" type="text" placeholder="Nome">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <input v-model="form.email" class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <input v-model="form.password" class="input" type="Password" placeholder="Senha">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <button class="button is-primary is-medium is-fullwidth">
        Registrar
      </button>
    </form>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import store from '@/vuex/store'

export default {
  name: 'register-view',
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    register_send: function () {
      store.dispatch('register', this.form)
    }
  }
}
</script>
<style scoped>
  #register-view {
    margin: 2em auto;
    width: 25em;
  }
</style>
