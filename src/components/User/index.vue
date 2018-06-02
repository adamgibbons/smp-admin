<template>
  <div>
    <h3 class="title is-3">User: {{selectedUser.name}}</h3>
    <hr>
    <div class="columns">
      <div class="column">
        <Personal
          v-show="activeSection === 'personal'"
          :personal="personal"
        />
        <Financial
          v-show="activeSection === 'financial'"
          :financial="financial"
        />
        <Housing
          v-show="activeSection === 'housing'"
          :housing="housing"
        />
        <Utilities
          v-show="activeSection === 'utilities'"
          :utilities="utilities"
        />
        <Savings
          v-show="activeSection === 'savings'"
          :savings="savings"
        />
        <Insurance
          v-show="activeSection === 'insurance'"
          :insurance="insurance"
        />
        <LivingExpenses
          v-show="activeSection === 'livingExpenses'"
          :livingExpenses="livingExpenses"
        />
        <ConsumerDebt
          v-show="activeSection === 'consumerDebt'"
          :consumerDebt="consumerDebt"
        />
        <StudentLoans
          v-show="activeSection === 'studentLoans'"
          :studentLoans="studentLoans"
        />
        <Vehicles
          v-show="activeSection === 'vehicles'"
          :vehicles="vehicles"
        />
      </div>
      <div class="column is-3">
        <aside class="menu box">
          <ul class="menu-list">
            <li>
              <a
                @click="selectSection('personal')"
                :class="{'is-active': activeSection === 'personal'}"
              >Personal
              </a>
            </li>
            <li>
              <a
                @click="selectSection('financial')"
                :class="{'is-active': activeSection === 'financial'}"
                >Financial
              </a>
            </li>
            <li>
              <a
                @click="selectSection('housing')"
                :class="{'is-active': activeSection === 'housing'}"
                >Housing
              </a>
            </li>
            <li>
              <a
                @click="selectSection('utilities')"
                :class="{'is-active': activeSection === 'utilities'}"
                >Utilities
              </a>
            </li>
            <li>
              <a
                @click="selectSection('savings')"
                :class="{'is-active': activeSection === 'savings'}"
                >Savings
              </a>
            </li>
            <li>
              <a
                @click="selectSection('insurance')"
                :class="{'is-active': activeSection === 'insurance'}"
                >Insurance
              </a>
            </li>
            <li>
              <a
                @click="selectSection('livingExpenses')"
                :class="{'is-active': activeSection === 'livingExpenses'}"
                >Living Expenses
              </a>
            </li>
            <li>
              <a
                @click="selectSection('consumerDebt')"
                :class="{'is-active': activeSection === 'consumerDebt'}"
                >Consumer Debt
              </a>
            </li>
            <li>
              <a
                @click="selectSection('studentLoans')"
                :class="{'is-active': activeSection === 'studentLoans'}"
                >Student Loans
              </a>
            </li>
            <li>
              <a
                @click="selectSection('vehicles')"
                :class="{'is-active': activeSection === 'vehicles'}"
                >Vehicles
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>

    <!-- <pre>{{selectedUser}}</pre> -->
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
  data () {
    return {
      activeSection: 'personal'
    }
  },
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
    ...mapActions(['fetchUser']),
    selectSection (section) {
      this.activeSection = section
    }
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

<style>
  .admin-field {
    margin: 1em 0;
  }
  .admin-field .label,
  .admin-field .label:not(:last-child) {
    margin-bottom: 0;
  }
</style>
