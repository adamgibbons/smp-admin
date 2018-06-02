<template>
  <div>
    <h4 class="title is-4">Housing Information</h4>

    <div class="admin-field">
      <div class="label">Status</div>
      <div class="value">{{housing.status || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Property Type</div>
      <div class="value">{{housing.propertyType || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Zip Code</div>
      <div class="value">{{housing.zip || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Monthly Mortgage Payment</div>
      <div class="value">{{housing.monthlyMortgagePayment || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Included in Monthly Mortgage Payment</div>
      <div class="value">{{housing.monthlyMortgagePaymentIncludes || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Annual Property Tax</div>
      <div class="value">{{housing.annualPropertyTax || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Loan Balance</div>
      <div class="value">{{housing.loanBalance || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Current Interest Rate</div>
      <div class="value">{{housing.currentInterestRate || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Term on Current Loan</div>
      <div class="value">{{housing.termOnCurrentLoan || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Monthly Rent</div>
      <div class="value">{{housing.monthlyRent || '-'}}</div>
    </div>

    <div class="admin-field">
      <div class="label">Does Rent Include Utilities?</div>
      <div class="value">{{housing.rentIncludesUtilities || '-'}}</div>
    </div>
    <pre>{{housing}}</pre>
  </div>
</template>

<script>
export default {
  props: ['housing']
}
</script>
