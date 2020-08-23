<template>
  <div id="Solution" class="font">
    <Nav class="home-nav" />
    <div class = "main-container">
      <v-carousel :show-arrows="false" :height="650" :cycle="true">
        <v-carousel-item class="solutions">
          <div class="container">
            <div class = "container-inner">
              <h3 class="heading">
                THE LEADING PROVIDER OF FUEL REMOTE MONITORING SOLUTIONS
              </h3>
              <p>
                Take charge of your fuel levels by exploring our innovative solutions
                <br />for remote monitoring of fuel levels.
              </p>
              <div>
                <a href="#"><button class="btn1">
                    WATCH DEMO
                  </button></a>
                <a href="../assets/images/pdf/up.pdf" target="_blank">
                  <button class="btn2 deep-blue-bg">
                    DOWNLOAD PROPOSAL
                  </button>
                </a>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item class="solutions2">
          <div class="container">
            <div class = "container-inner">
              <h3 class="heading">
                THE LEADING PROVIDER OF FUEL REMOTE MONITORING SOLUTIONS
              </h3>
              <p>
                Take charge of your fuel levels by exploring our innovative solutions
                <br />for remote monitoring of fuel levels.
              </p>
              <div>
                <a href="#"><button class="btn1">
                    WATCH DEMO
                  </button></a>
                <a href="../assets/images/pdf/UP.pdf" target="_blank">
                  <button class="btn2 deep-blue-bg">
                    DOWNLOAD PROPOSAL
                  </button>
                </a>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item class="solutions3">
          <div class="container">
            <div class = "container-inner">
              <h3 class="heading">
                THE LEADING PROVIDER OF FUEL REMOTE MONITORING SOLUTIONS
              </h3>
              <p>
                Take charge of your fuel levels by exploring our innovative solutions
                <br />for remote monitoring of fuel levels.
              </p>
              <div>
                <a href="#"><button class="btn1">
                    WATCH DEMO
                  </button></a>
                <a href="../assets/images/pdf/UP.pdf" target="_blank">
                  <button class="btn2 deep-blue-bg">
                    DOWNLOAD PROPOSAL
                  </button>
                </a>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div v-scrollanimation class="section-2">
      <div class="text-container">
        <p class="deep-blue">01</p>
        <h4 class="small-heading">EASILY ACCESSIBLE DATA</h4>
        <p class="body-text">
          Our solution transmits actionable data real time from tanks and tankers to the cloud. This
          data can easily be shared via the internet amidst departments. All permitted staffs can easily see the exact inventory at any time, on any day which would enable them make better decisions.
        </p>
      </div>
      <div class= "img-container">
        <img src="../assets/images/png/analysis.png" alt="analysis" />
      </div>
    </div>
    <div v-scrollanimation class="section-2 reverse light-blue-bg">
      <div class= "img-container">
        <img src="../assets/images/png/graph.png" alt="graph" />
      </div>
      <div class="text-container">
        <p class="deep-blue">02</p>
        <h4 class="small-heading">REAL TIME OVERVIEW OF OPERATIONS</h4>
        <p class="body-text">
          Managers at filling stations are provided a hawk-eyed view of operations from anywhere
          they are, thereby easily spotting red flags and preventing possible cash losses.
        </p>
      </div>
    </div>
    <div v-scrollanimation class="section-2 ">
      <div class="text-container">
        <p class="deep-blue">03</p>
        <h4 class="small-heading">DETAILED REPORTS</h4>
        <p class="body-text">
          Our solution provides our customers with useful insight into historical data with visually appealing charts and graphs, presenting information in an easy-to-read single glance. Our solution also provides automated visibility of expected cash-inflow.
        </p>
      </div>
      <div class= "img-container">
        <img src="../assets/images/png/analysis.png" alt="analysis" />
      </div>
    </div>
    <div v-scrollanimation class="section-2 reverse light-blue-bg">
      <div class= "img-container">
        <img src="../assets/images/png/graph.png" alt="graph" />
      </div>
      <div class="text-container">
        <p class="deep-blue">04</p>
        <h4 class="small-heading">PERSONALISED SETTINGS</h4>
        <p class="body-text">
          Managers at filling stations are allowed to make personalized settings such as different low-level notifcation fo each of your facility, and set price of your product for beter financial report and operational management.
        </p>
      </div>
    </div>
    <div class="reason">
      <!-- <router-link to="contact-us"
        ><button class="deep-blue">
          TALK TO US
        </button></router-link
      > -->
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
        <p>
          We want to help you take control of things and <br />always be on top of your operations
          wherever you are.
        </p>
      </div>
    </div>
    <div class="section-3" v-scrollanimation>
      <div class="light-blue-bg cont">
        <div>
          <h3>90%</h3>
          <h2>
            Leakage <br />
            proof
          </h2>
        </div>
      </div>
      <div class="deep-blue-bg shadow cont-mid">
        <div>
          <h3>0%</h3>
          <h2>
            Fuel <br />
            wastage
          </h2>
        </div>
      </div>
      <div class="light-blue-bg cont">
        <div>
          <h3>89%</h3>
          <h2>
            Cost <br />
            saving
          </h2>
        </div>
      </div>
    </div>
    <div class="reason">
      <h3 class="heading">WHY CHOOSE UPTIMA</h3>
      <div class="reason-gra">
        <div class="light-blue-bg bg">
          <img src="../assets/images/svg/oil.svg" alt="oil" />
          <p>
            Our solutions are cloud based hence clients data can easily be accessed via the
            internet, remotely providing our customers faster communication within the company's
            hierarchical system, increased transparency and better operational efficiencies
          </p>
        </div>
        <div class="light-blue-bg bg">
          <img src="../assets/images/svg/connect.svg" alt="connect" />
          <p>
            With our on-demand subscription based pricing structure, Uptima offers its clients
            increased flexibility. Clients can easily choose a monthly payment plan and this affords
            our clients the ability to easily stop and start as the need arises without worrying
            much about sunk cost.
          </p>
        </div>
        <div class="light-blue-bg bg">
          <img src="../assets/images/svg/screen.svg" alt="screen" />
          <p>
            Uptima works with most major oil and gas companies who use our solutions to optimize
            their logistics and offer a better service to their customers.
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="get-started">
      <h1 class="heading">TAKE CHARGE OF YOUR FUEL LEVELS AND SAVE</h1>
      <p>
        Get the Insurance you need for your tanks to never run dry.
      </p>
      <router-link to="/contact-us"><button class="deep-blue-bg">Get Started</button></router-link>
    </div> -->
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
          </button>
        </form>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

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
.home-nav {
  max-width: 100%;
}
.main-container {
  margin-top: 90px;
}
.solutions {
  background: url(../assets/images/png/tankker.png);
  background-size: cover;
}
.solutions2 {
  background: url(../assets/images/png/tanker2.png);
  background-size: cover;
}
.solutions3 {
  background: url(../assets/images/png/tanker3.png);
  background-size: cover;
}
.container {
  text-align: center;
  /* padding: 0 150px; */
  padding: auto;
  min-width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: rgba(80, 81, 219, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin: 0;

}
.btn1 {
  background: #3887f6;
  border: 2px solid #3887f6;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.4px;
  color: #ffffff;
  padding: 10px 25px;
  margin-right: 50px;
  margin-top: 30px;
  cursor: pointer;
}
.btn1:hover {
  color: #ffffff;
  background: #5051db;
  border: 2px solid #5051db;
  transition: all ease-in-out 500ms;
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
  border: 2px solid #5051db;
  background: transparent;
  cursor: pointer;
}
.btn2:hover {
  background: #5051db;
  border: 2px solid #5051db;
  transition: all ease-in-out 500ms;
}
.section-2 {
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
  align-items: center;
}
.text-container {
  max-width: 60%;
}
.shadow {
  box-shadow: 8px 10px 25px #c4c4c4, -7px -10px 20px rgba(196, 196, 196, 0.25);
  color: white;
}
.cont {
  margin: auto;
  width: 30%;
  height: 250px;
  display: flex;
  justify-items: center;
}
.cont div {
  margin: auto;
}
.cont-mid {
  margin: auto;
  width: 30%;
  height: 300px;
  display: flex;
  justify-items: center;
}
.cont-mid div {
  margin: auto;
}
.section-3.before-enter .cont, .section-3.before-enter .cont-mid {
  opacity: 0;
  transition: all 4s ease-out;
}
.section-3.enter .cont, .section-3.enter .cont-mid {
  opacity: 1;
}
.section-2 img {
  transition: transform 0.4s;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.section-2 img:hover {
  transform: scale(1.2);
  cursor: pointer;
}
.section-2 .img-container {
  max-width: 40%;
  align-content : center;
  justify-content: center;
  }
.section-2.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.section-2.enter {
  opacity: 1;
  transform: translateY(0px)
}
.before-enter p, .before-enter h4 {
  opacity: 0;
  transform: translateX(-150px);
  transition: all 1s cubic-bezier(.41,.01,.57,1.61);
}
.reverse.before-enter p, .reverse.before-enter h4 {
  opacity: 0;
  transform: translateX(150px);
  transition: all 1s cubic-bezier(.41,.01,.57,1.61);
}
.enter p, .enter h4 {
  opacity: 1;
  transform: translateX(0PX);
}
.reverse.enter p, .reverse.enter h4 {
  opacity: 1;
  transform: translateX(0PX);
}
.before-enter img {
  opacity: 0;
  transform: scale(0);
  transition: all 2s ease-out;
}
.enter img {
  opacity: 1;
  transform: scale(1)
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
  background: transparent;
}
.reason button:hover {
  color: #ffffff;
  background: #5051db;
  border: 2px solid #5051db;
  transition: all ease-in-out 500ms;
}
.reason svg {
  margin-left: 30px;
}
.reason-gra {
  display: grid;
  grid-template-columns: auto auto auto auto;
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
.section-3 {
  padding: auto;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
}
.section-3 h2 {
  font-style: normal;
  font-weight: normal;
  font-size: 4vmin;
  text-align: center;
  /* line-height: 80px; */
}
.section-3 h3 {
  font-style: normal;
  font-weight: normal;
  font-size: 7vmin;
  /* line-height: 57px; */
  text-align: center;
}
.reason-gra {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.reason {
  margin-top: 20px;
  padding: 50px 100px;
}
.reason-gra > div {
  padding: 20px;
  display: block;
  align-items: center;
}
.reason-gra > div >img {
  display: block;
  margin: auto !important;
}
.heading {
  text-align: center;
  margin-bottom: 10px;
}
.bg {
  /* max-width: 222px; */
  padding: 50px;
  border: 5px solid white;
}
.bg img {
  /* position: relative; */
  /* animation: float 6s ease-in-out infinite; */
  width: 100px;
  height: 100px;
  margin: auto;
}
.bg p {
  text-align: justify;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #000000;
}
.images img {
  width: 20%;
  transition: transform 0.4s;
  filter: grayscale(100%);
  --webkit-filter: grayscale(100%);
}
.images img:hover {
  filter: grayscale(0%);
  --webkit-filter: grayscale(0%);
  transform: scale(1.1);
  cursor: pointer;
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
  margin-bottom: 20px;
}
.help-image {
  display: flex;
}
.help-image img {
  filter: grayscale(100%);
  --webkit-filter: grayscale(100%);
}
.help-image img:hover {
  filter: grayscale(0%);
  --webkit-filter: grayscale(0%);
  cursor: pointer;
  transition: all ease-in-out 500ms;
}
.grow {
  padding: 20px 100px;
}
.grow h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 45px;
  letter-spacing: 1px;
  color: #817f7f;
  margin-bottom: 30px;
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
  margin: auto;
  margin-bottom: 50px;
}
.filling h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  letter-spacing: 1px;
  color: #817f7f;
  margin: 0;
  margin-bottom: 20px;
}
.filling img {
  width: 100%;
}
.solutions button > svg {
  margin-left: 20px;
}
.get-started {
  text-align: center;
  background: #f6faff;
  padding: 100px 0;
}
.get-started p {
  font-size: 18px;
}
.get-started button {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.4px;
  color: #ffffff;
  border: 2px solid #1c17ff;

  padding: 15px 40px;
  margin-top: 50px;
  cursor: pointer;
}
.get-started button:hover {
  color: #1c17ff;
  background: #ffffff;
  border: 2px solid #1c17ff;
  transition: all ease-in-out 500ms;
}
.filling hr {
  height: 1px;
  background-color: #f9bc0a;
  border: none;
  width: 150px;
  margin: auto;
  margin-bottom: 50px;
}
.filling h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  letter-spacing: 1px;
  color: #817f7f;
  margin: 0;
  margin-bottom: 20px;
}
.filling img {
  width: 100%;
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
  padding: 0 10px;
  width: 40%;
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
  border: 2px solid #3887f6;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.4px;
  color: #3887f6;
  padding: 15px 25px;
  background: transparent;
}
.newsletter button:hover {
  color: #ffffff;
  background: #5051db;
  border: 2px solid #5051db;
  transition: all ease-in-out 500ms;
}
.footer {
  margin-top: 100px;
}
@media screen and (max-width: 768px) {
  * {
    max-width: 100%;
  }
  .btn1 {
    margin: 10px;
  }
  .btn2 {
    margin: 10px;
  }
  .img-container {
    min-width: 90%;
    margin: 5px;
  }
  .text-container {
    min-width: 90%;
    margin: 5px;
  }
  .container {
    padding: 10px;
    position: absolute;
    margin: auto;
  }
  .container h3 {
    font-size: 35px;
  }
  .about {
    padding: 20px;
  }
  .sponsor {
    display: block;
  }
  .sponsor img {
    margin-bottom: 20px;
    width: 100%;
  }
  .offer {
    margin: 20px 0;
    font-size: 20px;
  }
  .reason {
    padding: 10px;
  }
  .reason-gra {
    grid-template-columns: auto;
  }
  .reason-gra > div {
    padding: 10px;
  }
  .bg {
    max-width: none;
  }
  .help {
    padding: 20px;
  }
  .help-image {
    display: block;
  }
  .help-image img {
    width: 100%;
  }
  .help-text h5 {
    line-height: 35px;
  }
  .help-text p {
    font-size: 15px;
  }
  .grow {
    padding: 20px;
  }
  .grow h3 {
    line-height: 25px;
    text-align: center;
  }
  .grow p {
    text-align: center;
    margin-bottom: 50px;
    font-size: 15px;
  }
  .filling h3 {
    font-size: 20px;
  }
  .filling img {
    width: 100vw;
  }
  .section-2 {
    padding: 20px;
    flex-direction: column-reverse;
  }
  .before-enter p, .before-enter h4 {
    opacity: 1;
    transform: translateX(0px);
    transition: all 1s cubic-bezier(.41,.01,.57,1.61);
  }
  .reverse.before-enter p, .reverse.before-enter h4 {
    opacity: 1;
    transform: translateX(0px);
    transition: all 1s cubic-bezier(.41,.01,.57,1.61);
  }
  .reverse {
    flex-direction: column;
  }
  .section-2 img {
    width: 100%;
  }
  .reason {
    padding: 20px;
  }
  .reason h3 {
    margin: 20px 0;
  }
  .reason-gra {
    grid-template-columns: 1fr;
  }
  .get-started {
    padding: 50px 20px;
  }
  .heading {
    font-size: 35px;
    line-height: 45px;
  }
  .filling h3 {
    font-size: 20px;
  }
  .filling img {
    width: 100vw;
  }
  .newsletter {
    padding: 30px;
    margin-top: 0;
    width: 100vw;
    padding: 20px 0;
  }
  .form {
    display: block;
    text-align: center;
  }
  .form input {
    width: 80%;
    height: 50px;
    margin-bottom: 20px;
  }
  .newsletter button {
    display: block;
    margin: auto;
    margin-top: 20px;
  }
  .footer {
    margin-top: 0;
  }
}
</style>
