<template>

    <div id="login-view" class="container has-text-centered">
        <h1 class="title">Caatu</h1>
        <p class="subtitle">
            Acesse sua conta
        </p>
        <!-- <b-notification :active.sync="loginError" type="is-danger">
            Não foi possivel logar com as credências providas
        </b-notification> -->
        <form @submit.prevent="login(form)">
            <div class="field">
              <p class="control has-icons-left">
                <input v-model="form.username" class="input" type="text" placeholder="Nome">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input v-model="form.password" class="input" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <button class="button is-primary is-medium is-fullwidth">
                Logar
            </button>
        </form>
        <router-link to="/register">Registre-se</router-link>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from '@/vuex/store'
export default {
  name: 'login-view',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      isLoading: false,
      loginError: false
    }
  },
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style scoped>
    #login-view {
        margin: 2em auto;
        width: 25em;
    }
</style>
