<template>
  <div>
    <h4 class="title is-4">Savings Information</h4>

    <div class="admin-field">
      <div class="label">Retirement + Investment</div>
      <div class="value">{{savings.retirementPlusInvestment | dollars}}</div>
    </div>
    <div class="admin-field">
      <div class="label">Cash + Emergency</div>
      <div class="value">{{savings.cashPlusEmergency | dollars}}</div>
    </div>
    <div class="admin-field">
      <div class="label">Real Estate</div>
      <div class="value">{{savings.realEstate | dollars}}</div>
    </div>
    <div class="admin-field">
      <div class="label">Average Monthly Savings</div>
      <div class="value">{{savings.averageMonthlySavings | dollars}}</div>
    </div>
    <div class="admin-field">
      <div class="label">Average Monthly Retirement Contribution</div>
      <div class="value">{{savings.averageMonthlyRetirementContribution | dollars}}</div>
    </div>
    <div class="admin-field">
      <div class="label">Average Monthly Debt Payment</div>
      <div class="value">{{savings.averageMonthlyDebtPayment | dollars}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['savings']
}
</script>
