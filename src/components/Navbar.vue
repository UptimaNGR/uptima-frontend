<template>
  <div id="nav">
    <div class="nav font">
      <div class="logo">
        <img src="../assets/images/png/normal-logo.png" alt="logo" />
      </div>
      <div class="routes">
        <div class="links">
          <ul class="link">
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="#">ABOUT</router-link></li>
            <li><router-link to="/solutions">SOLUTIONS</router-link></li>
          </ul>
        </div>
        <div class="buttons">
          <ul>
            <li>
              <router-link to="/login"><button class="login">Login</button></router-link>
            </li>
            <li>
              <router-link to="#"><button class="try">TRY FOR FREE</button></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="mobile-nav">
      <div class="mobile-nav-content">
        <div class="icon-mob">
          <img src="../assets/images/svg/icon-white.svg" />
        </div>
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
          <li class="nav__mobile__list__item" @click="isOpen = !isOpen">
            <router-link class="nav__mobile__link" to="/">HOME</router-link>
          </li>
          <li class="nav__mobile__list__item" @click="isOpen = !isOpen">
            <router-link class="nav__mobile__link" to="#">ABOUT</router-link>
          </li>
          <li class="nav__mobile__list__item" @click="isOpen = !isOpen">
            <router-link class="nav__mobile__link" to="/solutions">SOLUTIONS</router-link>
          </li>
          <li class="nav__mobile__list__item" @click="isOpen = !isOpen">
            <router-link class="nav__mobile__link" to="/login">LOGIN</router-link>
          </li>
          <li class="nav__mobile__list__item" @click="isOpen = !isOpen">
            <router-link class="nav__mobile__link" to="#">TRY FOR FREE</router-link>
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
    })
};
</script>

<style scoped>
#nav {
  padding: 20px 100px;
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
  margin-left: 40px;
}
.logo > img {
  height: 50px;
}
.link li a {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
}
.link li a:hover {
  border-bottom: 4px solid #360efc;
  transition: all ease-in-out 200ms;
}
.link > li > .router-link-exact-active {
  border-bottom: 4px solid #360efc;
}
a {
  text-decoration: none;
  cursor: pointer;
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
  color: #000000;
  background: transparent;
  border: 2px solid #f9bc0a;
  box-sizing: border-box;
}
.login:hover {
  color: #f9bc0a;
  background: #ffffff;
  border-spacing: 2px solid #000000;
  transition: all ease-in-out 500ms;
}
.try {
  padding: 10px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.4px;
  color: #ffffff;
  background: #3887f6;
  border: 1px solid #3887f6;
}
.try:hover {
  background: #5051db;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.55);
  transition: all ease-in-out 500ms;
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
    background: #360efc;
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
