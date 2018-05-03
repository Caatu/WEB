<template>
  <div id="dashboard-view" class="container">
    <h1>Dashboard</h1>
    <div >
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <router-link to="/dasboard" class="button is-primary is-fullwidth">Inicio</router-link>
          </a>

          <div class="navbar-end">
            <div class="navbar-item">
              <a class="navbar-item left">
                <a class="button is-primary is-fullwidth">Logout</a>
              </a>
            </div>
          </div>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>
