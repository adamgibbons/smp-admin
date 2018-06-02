<template>
  <div>
    <h4 class="title is-4">Savings Information</h4>

    <div class="admin-field">
      <div class="label">retirementPlusInvestment</div>
      <div class="value">{{savings.retirementPlusInvestment | dollars}}</div>
    </div>
    <div class="admin-field">
      <div class="label">cashPlusEmergency</div>
      <div class="value">{{savings.cashPlusEmergency | dollars}}</div>
    </div>
    <div class="admin-field">
      <div class="label">realEstate</div>
      <div class="value">{{savings.realEstate | dollars}}</div>
    </div>
    <div class="admin-field">
      <div class="label">averageMonthlySavings</div>
      <div class="value">{{savings.averageMonthlySavings | dollars}}</div>
    </div>
    <div class="admin-field">
      <div class="label">averageMonthlyRetirementContribution</div>
      <div class="value">{{savings.averageMonthlyRetirementContribution | dollars}}</div>
    </div>
    <div class="admin-field">
      <div class="label">averageMonthlyDebtPayment</div>
      <div class="value">{{savings.averageMonthlyDebtPayment | dollars}}</div>
    </div>
    <pre>{{savings}}</pre>
  </div>
</template>

<script>
export default {
  props: ['savings']
}
</script>
