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
      <br>
    </div>

    <div class="box">
      <div class="title is-3">Needs</div>
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
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="({path, amount}, index) in includedInCalculations(needs)" :key="index">
            <td>{{path}}</td>
            <td>{{amount | dollars}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="box">
      <div class="title is-3">Wants</div>
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
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="({path, amount}, index) in includedInCalculations(wants)" :key="index">
            <td>{{path}}</td>
            <td>{{amount | dollars}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="box">
      <div class="title is-3">Savings</div>
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
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="({path, amount}, index) in includedInCalculations(savings)" :key="index">
            <td>{{path}}</td>
            <td>{{amount | dollars}}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { get, flatten } from 'lodash'

export default {
  methods: {
    includedInCalculations (allValues) {
      return flatten(allValues).filter(({ amount }) => parseInt(amount) > 0)
    }
  },
  computed: {
    ...mapGetters(['selectedUser', 'results', 'score', 'suggested', 'questionsByType']),
    needs () {
      return this.questionsByType.needs.map((path) => {
        if (path.indexOf('vehicles') !== -1) {
          return this.selectedUser.profile.vehicles.map(({ monthlyLeasePayment, monthlyPayment }) => {
            return { path, amount: monthlyPayment || monthlyLeasePayment || 0 }
          })
        }
        if (path.indexOf('consumerDebt') !== -1) {
          return this.selectedUser.profile.consumerDebt.map(({ minMonthlyPayment }) => {
            return { path, amount: minMonthlyPayment || 0 }
          })
        }
        if (path.indexOf('studentLoans') !== -1) {
          return this.selectedUser.profile.studentLoans.map(({ minMonthlyPayment }) => {
            return { path, amount: minMonthlyPayment || 0 }
          })
        }

        return {
          path,
          amount: get(this.selectedUser.profile, path, 0) || 0
        }
      })
    },
    wants () {
      return this.questionsByType.wants.map((path) => {
        return {
          path,
          amount: get(this.selectedUser.profile, path, 0) || 0
        }
      })
    },
    savings () {
      return this.questionsByType.savings.map((path) => {
        console.log(path)
        return {
          path,
          amount: get(this.selectedUser.profile, path, 0) || 0
        }
      })
    }
  }
}
</script>

<style scoped>
  .title {
    background: #ddd;
    padding: 0.5em;
  }
</style>
