<template>
  <div>
    <h3 class="title is-3">User: {{selectedUser.name}}</h3>
    <hr>
    <div class="columns">
      <div class="column">

        <div v-show="activeSection === 'personal'">
          <h4 class="title is-4">Personal Information</h4>
          <div class="field">
            <div class="label">Gender</div>
            <div class="value">{{personal.gender}}</div>
          </div>
          <div class="field">
            <div class="label">Education</div>
            <div class="value">{{personal.education}}</div>
          </div>
          <div class="field">
            <div class="label">Age</div>
            <div class="value">{{personal.age}}</div>
          </div>
          <div class="field">
            <div class="label">Marital Status</div>
            <div class="value">{{personal.maritalStatus}}</div>
          </div>
          <div class="field">
            <div class="label">Dependents</div>
            <div class="value">{{personal.dependents}}</div>
          </div>
          <div class="field">
            <div class="label">occupation</div>
            <div class="value">{{personal.occupationSpouse}}</div>
          </div>
          <div class="field">
            <div class="label">Employment</div>
            <div class="value">{{personal.employment}}</div>
          </div>
        </div>

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
  }
}
</script>
