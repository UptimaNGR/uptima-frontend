<template>
  <div id="nav">
    <div class="nav font">
      <a href="http://uptima.ng">
        <div class="logo">
          <img src="../assets/images/png/normal-logo.png" alt="logo"/>
        </div>
      </a>
      <div class="routes">
        <div class="buttons">
          <ul>
            <li v-if = "this.$route.path === '/contact-us'">
              <router-link to="/"><button class="try">Home</button></router-link>
            </li>
            <li>
              <a class ="login-link" href="http://utrackdashboard.uptima.ng"><button class = "login">Login</button></a>
            </li>
            <li v-if = "this.$route.path !== '/contact-us'">
              <router-link to="/contact-us"><button class="try">Contact Us</button></router-link>
            </li>
            <li class= "dropdown">
              <button  class="try">
                Proposal <v-icon color = "#5051DB">mdi-chevron-down</v-icon>
              </button>
              <div>
                <ul class="dropdown-content">
                  <li class="dropdown-items">
                    <button class= "try"  @click.prevent="watchVideo()">Video</button>
                  </li>
                  <li  class="dropdown-items">
                    <button class= "try"><a href="/pdf/Utrack.pdf" target="_blank">
                  PDF
                </a></button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="mobile-nav">
      <div class="mobile-nav-content">
        <a href="http://uptima.ng">
          <div class="icon-mob">
            <img src="../assets/images/svg/icon-white.svg" alt="white-icon" />
          </div>
        </a>
        <div>
          <button
            class="navbar__button__mobile"
            :class="{ open: isOpen }"
            @click="isOpen = !isOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div class="nav__mobile" :class="{ open: isOpen }">
        <ul class="m-0 list-unstyled nav__mobile__list">
          <li v-if = "this.$route.path === '/contact-us'" class="nav__mobile__list__item" @click="isOpen = !isOpen">
            <router-link class="nav__mobile__link" to="/">Home</router-link>
          </li>
          <li class="nav__mobile__list__item" @click="isOpen = !isOpen">
            <a href="http://utrackdashboard.uptima.ng" class="nav__mobile__link login-link" to="/login">Login</a>
          </li>
          <li v-if = "this.$route.path !== '/contact-us'" class="nav__mobile__list__item" @click="isOpen = !isOpen">
            <router-link class="nav__mobile__link" to="/contact-us">Contact Us</router-link>
          </li>
          <hr>
          <li class="nav__mobile__list__item">Proposal
            <ul>
              <li class="nav__mobile__list__item" @click='isOpen = !isOpen; watchVideo()'>
                Video
              </li>
              <li class="nav__mobile__list__item" @click='isOpen = !isOpen'>
                <a href="/pdf/Utrack.pdf" target="_blank">
                  PDF
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false
  }),
  methods: {
    watchVideo() {
      this.$emit('video');
    }
  }
};
</script>

<style scoped>
#nav {
  padding: 20px 100px;
  position: fixed;
  z-index: 9;
  top: 0;
  width: 100%;
  max-width: 1440px;
  background-color: #ffffff;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.mobile-nav {
  display: none;
}
.routes {
  display: flex;
  align-items: center;
}
ul {
  display: flex;
}
li {
  list-style: none;
  margin-left: 20px;
}
a {
  color: inherit;
  text-decoration: inherit;
}
.logo > img {
  height: 50px;
}

.link > li > .router-link-exact-active {
  border-bottom: 4px solid #360efc;
}
button {
  cursor: pointer;
}
.login {
  padding: 10px 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.4px;
  color: #5051DB;
  background: transparent;
  box-sizing: border-box;
}
.login:hover {
  color: #3887f6;
  background: #ffffff;
  border-spacing: 2px solid #000000;
  transition: all ease-in-out 500ms;
}
.try {
  padding: 10px 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.4px;
  color: #5051DB;
  background: transparent;
  box-sizing: border-box;
}
.try:hover {
  color: #3887f6;
  background: #ffffff;
  border-spacing: 2px solid #000000;
  transition: all ease-in-out 500ms;
}
.dropdown {
  overflow: hidden;
}
.dropdown-content {
  display: none;
  z-index: 1;
  position: absolute;
  background-color: #ffffff;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.nav__mobile {
  display: block;
  opacity: 0;
  max-height: 0px;
  background: #ffffff;
  z-index: 9000;
  transition: all 0.5s ease-in-out;
  padding: 2em 0;
  box-shadow: 0px 18px 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 6em;
  width: 90vw;
  overflow: hidden;
}
.nav__mobile.open {
  opacity: 1;
  max-height: 70vh;
}

@media screen and (max-width: 768px) {
  .nav {
    display: none;
  }
  #nav {
    padding: 0;
    background: rgba(80, 81, 219, 1);
  }
  .mobile-nav {
    display: block;
    padding: 20px 20px;
  }
  ul {
    display: block;
  }
  .icon-mob > img {
    height: 50px;
  }
  .mobile-nav-content {
    display: flex;
    justify-content: space-between;
  }
  .navbar__button__mobile {
    display: block;
    width: 48px;
    height: 40px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    background: transparent;
    border: none;
  }
  .navbar__button:focus,
  .navbar__button__mobile:focus {
    outline: 0;
  }
  .navbar__button__mobile > span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: #ffffff;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  .navbar__button__mobile > span:nth-child(1) {
    top: 0px;
    transform-origin: left center;
  }

  .navbar__button__mobile > span:nth-child(2) {
    top: 15px;
    transform-origin: left center;
  }

  .navbar__button__mobile > span:nth-child(3) {
    top: 30px;
    transform-origin: left center;
  }

  .navbar__button__mobile.open > span:nth-child(1) {
    transform: rotate(45deg);
    top: -3px;
    left: 10px;
  }

  .navbar__button__mobile.open > span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  .navbar__button__mobile.open > span:nth-child(3) {
    transform: rotate(-45deg);
    top: 30px;
    left: 10px;
  }
  .nav__mobile__list__item {
    padding: 1.5em 0;
  }
  .nav__mobile__link {
    color: black;
  }
}
</style>
