<template>
  <div id="Solution" class="font">
    <div class="solutions">
      <Nav />
      <div class="container">
        <h3 class="heading">THE LEADING PROVIDER OF FUEL REMOTE MONITORING SOLUTIONS</h3>
        <p>
          Take charge of your fuel levels by exploring our innovative solutions <br />for remote
          monitoring of fuel levels.
        </p>
        <div>
          <router-link to="#"
            ><button class="btn1">
              GET STARTED
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L6 6L1 1"
                  stroke="#F9BC0A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg></button
          ></router-link>
          <router-link to="#"
            ><button class="btn2 deep-blue-bg">GET A FREE DEMO</button></router-link
          >
        </div>
      </div>
    </div>
    <div class="about">
      <h3>ABOUT US</h3>
      <p>
        Uptima is on a mission to help businesses in the oil and gas sector in Africa realize their
        full potential through innovative software and hardware solutions. We are presently a
        leading provider of hardware and on-demand cloud computing solutions for remote Monitoring
        of tanks and tankers within the oil and gas industry.
      </p>
    </div>
    <div class="sponsor light-blue-bg">
      <img src="../assets/images/png/tech-crunch.png" alt="tech-crunch" />
      <img src="../assets/images/png/guardian.png" alt="guardian" />
      <img src="../assets/images/png/combination.png" alt="combination" />
    </div>
    <div class="reason">
      <router-link to="#"
        ><button class="deep-blue">
          TALK TO US
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11L6 6L1 1"
              stroke="#1C17FF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg></button
      ></router-link>
      <h3 class="offer">WHAT WE OFFER</h3>
      <div class="reason-gra">
        <div class="light-blue-bg bg">
          <img src="../assets/images/svg/oil.svg" alt="oil" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,e sed do eiusmod tempor isunt ut
            labore t d tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div class="light-blue-bg bg">
          <img src="../assets/images/svg/connect.svg" alt="connect" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,e sed do eiusmod tempor isunt ut
            labore t d tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div class="light-blue-bg bg">
          <img src="../assets/images/svg/screen.svg" alt="screen" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,e sed do eiusmod tempor isunt ut
            labore t d tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div class="light-blue-bg bg">
          <img src="../assets/images/svg/charge.svg" alt="charge" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,e sed do eiusmod tempor isunt ut
            labore t d tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
    </div>
    <div class="images">
      <img src="../assets/images/png/pic1.png" alt="pic1" />
      <img src="../assets/images/png/pic2.png" alt="pic2" />
      <img src="../assets/images/png/pic3.png" alt="pic3" />
      <img src="../assets/images/png/pic4.png" alt="pic4" />
      <img src="../assets/images/png/pic5.png" alt="pic5" />
    </div>
    <div class="help">
      <div class="help-text">
        <h5>IT’S YOUR COMPANY. WE ARE HERE TO HELP</h5>
        <p>We want to help you take control of things and always be in the loop as to</p>
      </div>
      <div class="help-image">
        <img src="../assets/images/png/stack.png" alt="stack" />
        <div class="light-blue-bg">
          <div class="grow">
            <h3>WE HELP YOUR BUSINESS GROW</h3>
            <p>
              Through detailed information and sufficient data, we want to make it easy for you to
              manage your fuel levels and make informed decisions on on your fuel consumption rates
            </p>
            <router-link to="#"
              >FIND OUT MORE
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L6 6L1 1"
                  stroke="#F9BC0A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="filling">
      <hr />
      <h3>BE AHEAD. USE WHAT IT TAKES TO <br />GROW BIG</h3>
      <img src="../assets/images/png/filling.png" alt="filling" />
      <div class="light-blue-bg newsletter">
        <h2 class="yellow">NEWSLETTER</h2>
        <p>Stay in touch with latest updates from us. We promise we wouldn’t spam</p>
        <form class="form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button>
            SUBSCRIBE
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L6 6L1 1"
                stroke="#360EFC"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
    <Footer class="footer" /></div
></template>

<script>
import Nav from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        Nav,
        Footer
    }
};
</script>

<style scoped>
.solutions {
  background: url(../assets/images/png/tanker.png);
  min-height: 650px;
  background-size: cover;
}
.container {
  text-align: center;
  padding: 0 150px;
  margin-top: 100px;
}
.container h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  letter-spacing: 1px;
  color: #ffffff;
  margin: 0;
}
.container p {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.4px;
  color: #ffffff;
}
.btn1 {
  border: 2px solid #f9bc0a;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.4px;
  color: #ffffff;
  background: transparent;
  padding: 10px 25px;
  margin-right: 50px;
  margin-top: 30px;
  cursor: pointer;
}
.btn2 {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.4px;
  padding: 10px 25px;
  margin-top: 30px;
  color: #ffffff;
  border: 2px solid #360efc;
  cursor: pointer;
}
.about {
  padding: 50px 100px;
  text-align: center;
}
.about h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 75px;
  text-align: center;
  letter-spacing: 1px;
  color: #817f7f;
}
.about p {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 1px;
  color: #000000;
}
.sponsor {
  display: flex;
  justify-content: space-around;
  padding: 30px 100px;
}
.reason button {
  border: 2px solid #1c17ff;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.4px;
  padding: 10px 25px;
  text-align: center;
  display: block;
  margin: auto;
  cursor: pointer;
}
.reason svg {
  margin-left: 30px;
}
.reason-gra {
  display: flex;
}
.reason {
  padding: 50px 100px;
}
.offer {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 75px;
  text-align: center;
  letter-spacing: 1px;
  color: #817f7f;
  margin-top: 70px;
}
.bg {
  max-width: 222px;
  padding: 50px;
}
.bg p {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #000000;
}
.images img {
  width: 20%;
}
.help {
  padding: 100px;
}
.help-text {
  text-align: center;
}
.help-text h5 {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 75px;
  text-align: center;
  letter-spacing: 1px;
  color: #939393;
}
.help-text p {
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 1px;
  color: #000000;
}
.help-image {
  display: flex;
}
.help-image img {
  filter: grayscale(100%);
  --webkit-filter: grayscale(100%);
}
.grow {
  padding: 20px 100px;
}
.grow h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 75px;
  letter-spacing: 1px;
  color: #817f7f;
}
.grow p {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 35px;
  letter-spacing: -0.4px;
  color: #000000;
  margin-bottom: 100px;
}
.grow a {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.4px;
  color: #f9bc0a;
  margin-top: 100px;
}
.filling hr {
  height: 1px;
  background-color: #f9bc0a;
  border: none;
  width: 150px;
}
.filling h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  letter-spacing: 1px;
  color: #817f7f;
}
.form {
  display: flex;
  justify-content: space-between;
}
.newsletter {
  width: 75%;
  padding: 50px 100px;
  display: block;
  margin: auto;
  margin-top: -200px;
  transform: translateY(10px);
}
.newsletter h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 34px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
}
.newsletter p {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.4px;
  text-align: center;
  color: #939393;
  margin-bottom: 70px;
}
.newsletter input {
  background: #ffffff;
  border: 1px solid rgba(28, 23, 255, 0.25);
  padding: 15px 50px;
  width: 25%;
}
.newsletter input::placeholder {
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.4px;
  color: #939393;
}
.newsletter button {
  border: 2px solid #1c17ff;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.4px;
  color: #1c17ff;
  padding: 15px 25px;
}
.solutions button > svg {
  margin-left: 20px;
}
.footer {
  margin-top: 100px;
}
</style>
