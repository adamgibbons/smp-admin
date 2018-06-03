<template>
  <div>
    <h4 class="title is-4">Consumer Debt</h4>
    <div
      class="box"
      v-for="({type, minMonthlyPayment, averageLoanBalance, interestRate}, index) in consumerDebt"
      :key="index">
      <div class="admin-field">
        <div class="label">Type</div>
        <div class="value">{{type || '-'}}</div>
      </div>
      <div class="admin-field">
        <div class="label">Minimum Monthly Payment</div>
        <div class="value">{{minMonthlyPayment | dollars}}</div>
      </div>
      <div class="admin-field">
        <div class="label">Average Loan Balance</div>
        <div class="value">{{averageLoanBalance | dollars}}</div>
      </div>
      <div class="admin-field">
        <div class="label">Interest Rate</div>
        <div class="value">{{interestRate}}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['consumerDebt']
}
</script>
