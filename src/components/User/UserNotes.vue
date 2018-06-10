<template>
  <div>
    <div v-show="!editing">
      <div class="has-text-left">
        <button class="button is-link is-outlined" @click="enterEditMode">Edit</button>
      </div>
      <br>
      <div style="white-space:pre-wrap;">{{selectedUser.notes}}</div>
    </div>

    <div class="has-text-left">
      <button class="button is-success is-outlined" v-show="editing" @click="save">Save</button>
    </div>
    <br>
    <textarea v-show="editing" v-model="form.notes" placeholder="Add notes here..."></textarea>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['selectedUser'])
  },
  data () {
    return {
      editing: false,
      form: {
        notes: null
      }
    }
  },
  methods: {
    ...mapActions(['updateNotes']),
    enterEditMode () {
      this.editing = true
      this.form.notes = this.selectedUser.notes.slice(0)
    },
    save ({ notes }) {
      this.updateNotes({ notes: this.form.notes })
      this.editing = false
    }
  }
}
</script>

<style scoped>
  textarea {
    width: 100%;
    min-height: 200px;
    border: 1px solid lightslategray;
    font-size: 0.95em;
    font-family: monospace;
    padding: 1em;
  }
</style>
