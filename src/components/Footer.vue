<template>
  <footer id="footer" class="deep-blue-bg font">
    <div class="sec1">
      <div class="address">
        <ul>
          <li>&copy; <span>Uptima Solutions</span></li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
    <div class="scroll">
      <back-to-top>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="17.5" fill="#5051DB" stroke="white" />
          <path
            d="M11.739 17.9999L12.8425 19.1034L17.2173 14.7364V24.2608H18.7825V14.7364L23.1494 19.1112L24.2608 17.9999L17.9999 11.739L11.739 17.9999Z"
            fill="white"
          /></svg
      ></back-to-top>
    </div>
  </footer>
</template>

<script>
import BackToTop from 'vue-backtotop';

export default {
  components: { BackToTop }
};
</script>

<style scoped>
#footer {
  display: flex;
  padding: 0 50px;
}
.sec1 {
  width: 100%;
}
.links,
.address {
  max-width: 35%;
  display: block;
  margin: auto;
  padding: 20px 0;
}
.links ul,
.address ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 16px 0;
}
.links ul > li,
.links ul > li > a {
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.4px;
  color: #ffffff;
}
.links ul > li > a:hover {
  color: #f9bc0a;
}
.links ul > li > .router-link-exact-active {
  color: #f9bc0a;
}
hr {
  width: 95%;
  background-color: #ffffff;
  height: 1px;
  border: none;
}
.address ul > li > span {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.4px;
  color: #ffffff;
}
.address > ul > li {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.4px;
  color: #ffffff;
}
.scroll {
  display: flex;
}
.scroll > svg {
  align-self: center;
  margin-right: 50px;
}
@media screen and (max-width: 768px) {
  .links,
  .address {
    max-width: none;
  }
  .address ul {
    display: block;
    text-align: center;
    margin: 0;
  }
  .address ul > li {
    margin-bottom: 10px;
  }
  .scroll > svg[data-v-40ab164b] {
    align-self: center;
    margin-right: 20px;
  }
}
</style>
