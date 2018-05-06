<template>
  <div id="dashboard-view" class="container">
    <div class="container has-text-centered">
      <h1 class="title">Dashboard</h1>
    </div>
    
    <div >
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <router-link to="/dasboard" class="button is-primary is-fullwidth">Inicio</router-link>
          </a>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
              <a class="navbar-item">
                <a class="button is-primary is-fullwidth">Logout</a>
              </a>
            </div>
          </div>
      </nav>
    </div>
  </div>
</template>