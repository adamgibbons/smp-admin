<template>
  <div>
    <h4 class="title is-4">Personal Information</h4>
    <div class="columns">
      <div class="column">
        <div class="admin-field">
          <div class="label">Gender</div>
          <div class="value">{{personal.gender || '-'}}</div>
        </div>
        <div class="admin-field">
          <div class="label">Education</div>
          <div class="value">{{personal.education || '-'}}</div>
        </div>
        <div class="admin-field">
          <div class="label">Age</div>
          <div class="value">{{personal.age || '-'}}</div>
        </div>
        <div class="admin-field">
          <div class="label">Marital Status</div>
          <div class="value">{{personal.maritalStatus || '-'}}</div>
        </div>
        <div class="admin-field">
          <div class="label">Occupation</div>
          <div class="value">{{personal.occupation || '-'}}</div>
        </div>
        <div class="admin-field">
          <div class="label">Employment</div>
          <div class="value">{{personal.employment || '-'}}</div>
        </div>
      </div>
      <div class="column" v-show="personal.maritalStatus === 'married'">
        <div class="admin-field">
          <div class="label">Spouse's Education</div>
          <div class="value">{{personal.educationSpouse || '-'}}</div>
        </div>
        <div class="admin-field">
          <div class="label">Spouse's Occupation</div>
          <div class="value">{{personal.occupationSpouse || '-'}}</div>
        </div>
        <div class="admin-field">
          <div class="label">Spouse's Employment</div>
          <div class="value">{{personal.employmentSpouse || '-'}}</div>
        </div>
      </div>
    </div>

    <hr>
    <pre>{{personal}}</pre>
  </div>
</template>

<script>
export default {
  props: ['personal']
}
</script>

<style scoped>
  h4.title.is-4 {
    margin-bottom: 0.5em;
  }
</style>
