<template>
  <div class="font">
    <div class="logo">
      <router-link to="/"
        ><div><img src="../assets/images/png/normal-logo.png" alt="logo" /></div
      ></router-link>
    </div>
    <div class="login-hero">
      <div class="login">
        <header>
          <h1>Log In to view your dashboard</h1>
        </header>
        <form action="">
          <div class="form-input">
            <img src="../assets/images/svg/person.svg" />
            <input type="text" placeholder="Email or Username" class="input" v-model="entry" />
          </div>
          <div class="form-input">
            <img src="../assets/images/svg/padlock.svg" />
            <input
              type="password"
              placeholder="Password"
              class="input"
              v-model="loginData.password"
            />
          </div>
          <div class="check">
            <div class="flex-check">
              <input type="checkbox" />
              <span>Stay signed in</span>
            </div>
            <a href="#"> Forgot password?</a>
          </div>
          <button
            class="button"
            @click.prevent="submit"
            :disabled="!entry || !loginData.password || isLoading"
          >
            <span v-if="getStatus === 'loading'">
              <v-progress-circular width="3" indeterminate size="12"></v-progress-circular>
            </span>
            <span v-else>LOGIN</span>
          </button>
        </form>

        <p>Don’t have an account? Click <router-link to="" class="here">here</router-link></p>
      </div>
      <div class="footer">
        <p>&copy; Novus, Epok Technologies</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Login',
    data() {
        return {
            loginData: {
                password: ''
            },
            entry: '',
            isLoading: false
        };
    },
    computed: {
        ...mapGetters(['getStatus'])
    },
    watch: {
        getStatus(value) {
            if (value === 'success') {
                this.isLoading = false;
            } else if (value === 'error') {
                this.isLoading = false;
            }
        }
    },
    methods: {
        ...mapActions('auth', ['login']),
        submit() {
            this.isLoading = true;

            if (this.entry.includes('@')) {
                this.loginData.email = this.entry;
            } else {
                this.loginData.username = this.entry;
            }
            this.login(this.loginData);
        }
    }
};
</script>

<style scoped>
.logo {
  padding: 45px 0 45px 100px;
}
.logo img {
  height: 50px;
}
.login-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login {
  min-width: 528px;
  background: #fcfcfc;
  box-shadow: 4px 4px 10px rgba(210, 192, 192, 0.25), -4px -4px 10px rgba(210, 192, 192, 0.25);
  padding: 50px 70px;
}
.login p {
  text-align: center;
  margin-top: 56px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #817f7f;
}
.here {
  color: #1c17ff;
}
h1 {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  color: #000000;
  text-align: center;
  margin-bottom: 46px;
}
.form-input {
  height: 45px;
  /* width: 80%; */
  background: #f6faff;
  border: 1px solid #e4e4e4;
  display: flex;
  padding: 0 18px;
  margin-bottom: 17px;
}
input {
  border: none;
  outline: none;
}
.input {
  margin-left: 22px;
  width: 80%;
}
.check {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;
}
.flex-check {
  display: flex;
  align-items: center;
}
.flex-check span {
  margin-left: 9px;
}
.flex-check span {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #454141;
}
.button {
  background: #3887f6;
  border: 0.8px solid #5051db;
  width: 100%;
  padding: 15px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
}
.button:hover {
  background: #5051db;
  border: 0.8px solid #5051db;
  transition: all ease-in-out 1s;
}
p {
  margin: 0;
}
.footer {
  margin-top: 68px;
  text-align: center;
}
.footer p:nth-child(1) {
  margin-bottom: 20px;
}
.footer p:nth-child(2) {
  margin-bottom: 8px;
}
button[disabled] {
  background: #1c17ff;
  cursor: not-allowed !important;
  opacity: 0.7 !important;
  color: #e4e4e4;
}
button[disabled]:hover {
  background: #1c17ff;
  cursor: not-allowed !important;
  opacity: 0.7 !important;
  color: #e4e4e4;
}
@media screen and (max-width: 768px) {
  .logo {
    padding: 50px 20px;
  }
  .login {
    min-width: 100%;
    padding: 20px;
  }
}
</style>
