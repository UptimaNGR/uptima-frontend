<template>
  <div id="app">
    <router-view />
    <v-snackbar
      v-model="snackbarData.showSnackbar"
      :color="snackbarData.color"
      :top="true"
      :right="true"
      :timeout="6000"
    >
      {{ snackbarData.text }}
      <v-btn dark text @click="updateSnackbar({ showSnackbar: false })">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  data() {
    return {};
  },
  created() {
    this.updateSnackbar({
      color: '',
      text: '',
      showSnackbar: false
    });
  },
  computed: {
    ...mapGetters(['snackbarData'])
  },
  methods: {
    ...mapMutations(['updateSnackbar'])
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  max-width: 1440px!important;
  display: block;
  width: 100%;
  margin: auto;
}
.light-blue {
  color: #f6faff;
}
.cream {
  color: #fffbf1;
}
.deep-blue {
  color: #5051db;
}
.yellow {
  color: #f9bc0a;
}
.light-blue-bg {
  background: #f6faff;
}
.cream-bg {
  background: #fffbf1;
}
.deep-blue-bg {
  background: #5051db;
}
.yellow-bg {
  background: #f9bc0a;
}
.small-text {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.4px;
}
.heading {
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 55px;
  letter-spacing: 1px;
  color: #000000;
}
.small-heading {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 1px;
  color: #37383c;
}
.body-text {
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #817f7f;
}
.font {
  font-family: 'Poppins', sans-serif;
}
a {
  text-decoration: none;
}
button {
  outline: none;
}
button:hover {
  transform: translateY(-3px);
}
.vue-form-wizard .wizard-header {
  display: none;
}
.vue-form-wizard .wizard-icon-circle .wizard-icon-container {
  background: #ffffff;
  border: none;
}
.vue-form-wizard.md .wizard-icon-circle {
  border-color: #f9bc0a !important;
  height: 30px;
  width: 30px;
}
.vue-form-wizard .wizard-nav-pills {
  margin-top: 20px;
}
.active {
  color: #f9bc0a !important;
}
.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle {
  background: #e4e4e4 !important;
}
.vue-form-wizard .wizard-icon-circle .wizard-icon-container {
  background: #ffffff !important;
  border: none;
}
.wizard-progress-bar {
  background-color: #f9bc0a !important;
  color: #f9bc0a !important;
}
.wizard-card-footer {
  margin-top: 50px;
}
.v-snack__content {
  height: 50px;
  font-size: 15px;
  font-family: 'Ubuntu', sans-serif;
}
@keyframes mymove {
  from {
    left: 0px;
  }
  to {
    left: 50px;
  }
}
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
