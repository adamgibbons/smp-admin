<template>
  <div>
    <ExpenseList title="Insurance Policies" :expenses="insurance" filterType="insurance" />
  </div>
</template>

<script>
import ExpenseList from './ExpenseList'

export default {
  props: ['insurance'],
  components: { ExpenseList }
}
</script>
