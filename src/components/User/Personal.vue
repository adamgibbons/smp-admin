<template>
  <div>
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
</template>

<script>
export default {
  props: ['personal']
}
</script>
