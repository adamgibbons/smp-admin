<template>
  <div>
    <h4 class="title is-4">Vehicles</h4>
    <div
      class="box"
      v-for="({
        type,
        year,
        make,
        model,
        mileage,
        monthlyPayment,
        loanBalance,
        loanPaidOffDate,
        loanInterestRate,
        monthlyLeasePayment,
        ownership}, index) in vehicles"
      :key="index">
      <div class="columns">
        <div class="column is-4">
          <div class="admin-field">
            <div class="label">Type</div>
            <div class="value">{{type || '-'}}</div>
          </div>
        </div>
        <div class="column is-4">
          <div class="admin-field">
            <div class="label">Year</div>
            <div class="value">{{year || '-'}}</div>
          </div>
        </div>
        <div class="column is-4">
          <div class="admin-field">
            <div class="label">Make</div>
            <div class="value">{{make || '-'}}</div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="admin-field">
            <div class="label">Model</div>
            <div class="value">{{model || '-'}}</div>
          </div>
        </div>
        <div class="column is-4">
          <div class="admin-field">
            <div class="label">Mileage</div>
            <div class="value">{{mileage || '-'}}</div>
          </div>
        </div>
        <div class="column is-4">
          <div class="admin-field">
            <div class="label">Monthly Payment</div>
            <div class="value">{{monthlyPayment || '-'}}</div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="admin-field">
            <div class="label">Loan Balance</div>
            <div class="value">{{loanBalance || '-'}}</div>
          </div>
        </div>
        <div class="column is-4">
          <div class="admin-field">
            <div class="label">Loan Paid Off Date</div>
            <div class="value">{{loanPaidOffDate || '-'}}</div>
          </div>
        </div>
        <div class="column is-4">
          <div class="admin-field">
            <div class="label">Loan Interest Rate</div>
            <div class="value">{{loanInterestRate || '-'}}%</div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="admin-field">
            <div class="label">Monthly Lease Payment</div>
            <div class="value">{{monthlyLeasePayment | dollars}}</div>
          </div>
        </div>
        <div class="column is-8">
          <div class="admin-field">
            <div class="label">Ownership</div>
            <div class="value">{{ownership || '-'}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['vehicles']
}
</script>
