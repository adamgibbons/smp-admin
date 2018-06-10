<template>
  <div>
    <!-- <h3 class="title is-3">User Details</h3> -->
    <div class="columns">
      <div class="column is-narrow">
        <div class="admin-field header">
          <div class="label">
            User Name
          </div>
          <div class="value">
            {{selectedUser.name}}
          </div>
        </div>
      </div>
      <div class="column is-narrow">
        <div class="admin-field header">
          <div class="label">
            Email
          </div>
          <div class="value">
            {{selectedUser.email}}
          </div>
        </div>
      </div>
      <div class="column is-narrow">
        <div class="admin-field header">
          <div class="label">
            Created
          </div>
          <div class="value">
            {{selectedUser.created | date}}
          </div>
        </div>
      </div>
      <div class="column is-narrow">
        <div class="admin-field header">
          <div class="label">
            ID
          </div>
          <div class="value">
            {{selectedUser._id}}
          </div>
        </div>
      </div>
    </div>

    <div class="tabs is-boxed">
      <ul>
        <!-- <li class="is-active"><a>Profile</a></li> -->
        <li :class="{'is-active': $route.name === 'UserProfile'}"><router-link :to="{name: 'UserProfile'}">Profile</router-link></li>
        <li :class="{'is-active': $route.name === 'UserSnapshot'}"><router-link :to="{name: 'UserSnapshot'}">50/30/20 Snapshot</router-link></li>
        <li :class="{'is-active': $route.name === 'UserNotes'}"><router-link :to="{name: 'UserNotes'}">Notes</router-link></li>
        <li :class="{'is-active': $route.name === 'UserQueries'}"><router-link :to="{name: 'UserQueries'}">Queries</router-link></li>
      </ul>
    </div>

    <router-view></router-view>
    <!-- <pre>{{selectedUser}}</pre> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions(['fetchUser', 'fetchQuestions'])
  },
  computed: {
    ...mapGetters(['selectedUser'])
  },
  mounted () {
    this.fetchUser({ id: this.$route.params.id })
    this.fetchQuestions()
  }
}
</script>

<style>
  .menu {
    font-weight: 500;
  }
  .admin-field {
    margin: 1em 0;
  }

  .admin-field.header {
    margin-right: 1em;
  }

  .admin-field .label {
    border-bottom: 1px dotted #ddd;
  }

  .admin-field .label,
  .admin-field .label:not(:last-child) {
    margin-bottom: 0;
    font-size: 0.95em;
    font-weight: 400;
  }
  .admin-field .value {
    font-size: 1.3em;
    font-weight: 600;
  }
  h4.title.is-4 {
    background-color: #ddd;
    padding: 0.5em 1em;
    margin: 0.5em 0;
  }
</style>

<style scoped>
  .tabs li.is-active a {
    font-weight: 500;
    border-width: 2px;
  }
</style>
