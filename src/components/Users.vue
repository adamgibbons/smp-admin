<template>
  <div class="content">

    <div class="modal" :class="{'is-active': modalIsVisible === true}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Delete User</p>
          <!-- <button class="delete" aria-label="close"></button> -->
        </header>
        <section class="modal-card-body">
          Warning! <strong>{{modal.name}}</strong> will be permanently deleted.
        </section>
        <footer class="modal-card-foot">
          <button class="button is-danger" @click="confirm({ id: modal.id })">Delete User</button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>

    <h3 class="title is-3">Users</h3>

    <table class="table is-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Created</th>
          <th>ID</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="({name, email, created, _id}, index) in users" :key="index">
          <td><router-link :to="{name: 'UserProfile', params: { id: _id }}">{{name}}</router-link></td>
          <td><a :href="'mailto:' + email">{{email}}</a></td>
          <td>{{created | date}}</td>
          <td><code>{{_id}}</code></td>
          <td style="text-align:right;">
            <router-link class="button is-small is-link is-outlined" :to="{name: 'UserProfile', params: { id: _id }}">Details</router-link>
            &nbsp;
            <router-link class="button is-small is-link is-outlined" :to="{name: 'UserNotes', params: { id: _id }}">Notes</router-link>
            &nbsp;
            <button class="button is-small is-danger is-outlined" @click="openModal({ name, id: _id })">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['users'])
  },
  data () {
    return {
      modalIsVisible: false,
      modal: {
        name: null,
        id: null
      }
    }
  },
  methods: {
    ...mapActions(['fetchUsers', 'removeUser']),
    openModal ({ name, id }) {
      this.modalIsVisible = true
      this.modal.name = name
      this.modal.id = id
    },
    closeModal () {
      this.modalIsVisible = false
      this.modal = {
        name: null,
        id: null
      }
    },
    confirm ({ id }) {
      this.removeUser({ id })
      this.modalIsVisible = false
      this.modal = {
        name: null,
        id: null
      }
    }
  },
  mounted () {
    this.$store.dispatch('fetchUsers')
  },
  filters: {
    date: (date) => {
      if (date) return new Date(date).toLocaleString()

      return '-'
    }
  }
}
</script>

<style scoped>
  code {
    color: #666;
  }
</style>
