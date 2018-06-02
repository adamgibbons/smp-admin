<template>
  <div>
    <ExpenseList title="Insurance Policies" :expenses="insurance" filterType="insurance" />
    <hr>
    <pre>{{insurance}}</pre>
  </div>
</template>

<script>
import ExpenseList from './ExpenseList'

export default {
  props: ['insurance'],
  components: { ExpenseList }
}
</script>
