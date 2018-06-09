<template>
  <div class="columns">
    <div class="column">
      <Personal :personal="personal" />
      <Financial :financial="financial" />
      <Housing :housing="housing" />
      <Utilities :utilities="utilities" />
      <Savings :savings="savings" />
      <Insurance :insurance="insurance" />
      <LivingExpenses :livingExpenses="livingExpenses" />
      <ConsumerDebt :consumerDebt="consumerDebt" />
      <StudentLoans :studentLoans="studentLoans" />
      <Vehicles :vehicles="vehicles" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Personal from './Personal'
import Financial from './Financial'
import Housing from './Housing'
import Utilities from './Utilities'
import Savings from './Savings'
import Insurance from './Insurance'
import LivingExpenses from './LivingExpenses'
import ConsumerDebt from './ConsumerDebt'
import StudentLoans from './StudentLoans'
import Vehicles from './Vehicles'

export default {
  computed: {
    ...mapGetters(['selectedUser']),
    profile () {
      return this.selectedUser.profile || {}
    },
    personal () {
      return this.profile.personal || {}
    },
    financial () {
      return this.profile.financial || {}
    },
    housing () {
      return this.profile.housing || {}
    },
    utilities () {
      return this.profile.utilities || {}
    },
    savings () {
      return this.profile.savings || {}
    },
    insurance () {
      return this.profile.insurance || {}
    },
    livingExpenses () {
      return this.profile.livingExpenses || {}
    },
    consumerDebt () {
      return this.profile.consumerDebt || {}
    },
    studentLoans () {
      return this.profile.studentLoans || {}
    },
    vehicles () {
      return this.profile.vehicles || {}
    }
  },
  methods: {
    ...mapActions(['fetchUser'])
  },
  mounted () {
    this.fetchUser({ id: this.$route.params.id })
  },
  components: {
    Personal,
    Financial,
    Housing,
    Utilities,
    Savings,
    Insurance,
    LivingExpenses,
    ConsumerDebt,
    StudentLoans,
    Vehicles
  }
}
</script>
