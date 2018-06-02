<template>
  <div>
    <h4 class="title is-4">Financial Information</h4>

    <div class="admin-field">
      <div class="label">Monthly Household Income</div>
      <div class="value">{{financial.monthlyHouseholdIncome || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Dependents</div>
      <div class="value">{{financial.dependents || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Credit Score</div>
      <div class="value">{{financial.creditScore || '-'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['financial']
}
</script>
