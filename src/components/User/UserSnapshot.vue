<template>
  <div>
    <div v-if="selectedUser.profile && selectedUser.profile.financial">
      <div class="admin-field header">
        <div class="label">
          Monthly Income
        </div>
        <div class="value">
          {{selectedUser.profile.financial.monthlyHouseholdIncome | dollars}}
        </div>
      </div>
    </div>

    <div class="box">
      <div class="title is-4">Needs</div>
      <div class="columns">
        <div class="column is-narrow">
          <div class="admin-field">
            <div class="label">Amount</div>
            <div class="value">{{results.needs | dollars}}</div>
          </div>
        </div>
        <div class="column is-narrow">
          <div class="admin-field">
            <div class="label">Percentage</div>
            <div class="value">{{score.needs | percentage}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="title is-4">Wants</div>
      <div class="columns">
        <div class="column is-narrow">
          <div class="admin-field">
            <div class="label">Amount</div>
            <div class="value">{{results.wants | dollars}}</div>
          </div>
        </div>
        <div class="column is-narrow">
          <div class="admin-field">
            <div class="label">Percentage</div>
            <div class="value">{{score.wants | percentage}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="title is-4">Savings</div>
      <div class="columns">
        <div class="column is-narrow">
          <div class="admin-field">
            <div class="label">Amount</div>
            <div class="value">{{results.savings | dollars}}</div>
          </div>
        </div>
        <div class="column is-narrow">
          <div class="admin-field">
            <div class="label">Percentage</div>
            <div class="value">{{score.savings | percentage}}</div>
          </div>
        </div>
      </div>
    </div>

    <hr>
    <pre>{{selectedUser.profile}}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['selectedUser', 'results', 'score', 'suggested'])
  }
}
</script>

<style scoped>
  .title {
    margin-bottom: 0;
  }
</style>
