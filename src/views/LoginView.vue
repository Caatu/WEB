<template>
    <div id="login-view" class="container has-text-centered">
        <h1 class="title">Caatu</h1>
        <p class="subtitle">
            Acesse sua conta
        </p>
        <!-- <b-notification :active.sync="loginError" type="is-danger">
            Não foi possivel logar com as credências providas
        </b-notification> -->
        <form @submit.prevent="login">
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <button class="button is-primary is-medium is-fullwidth">
                Logar
            </button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'login-view',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      isLoading: false,
      loginError: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>
    #login-view {
        margin: 2em auto;
        width: 25em;
    }
</style>
