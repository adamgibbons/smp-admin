<template>
  <div>
    <h4 class="title is-4">Student Loans</h4>
    <div
      class="box"
      v-for="({type, minMonthlyPayment, graduationDate, school, balance}, index) in studentLoans"
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
        <div class="label">Graduation Date</div>
        <div class="value">{{graduationDate}}</div>
      </div>
      <div class="admin-field">
        <div class="label">School</div>
        <div class="value">{{school}}</div>
      </div>
      <div class="admin-field">
        <div class="label">Balance</div>
        <div class="value">{{balance | dollars}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['studentLoans']
}
</script>
