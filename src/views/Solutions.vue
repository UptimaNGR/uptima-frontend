<template>
  <div class="solution font">
    <div class="section-1">
      <Nav />
      <div class="section-1-content">
        <div class="text">
          <p class="deep-blue small-text">A BETTER WAY TO SAVE COSTS AND TAKE CONTROL</p>
          <h1 class="heading-text">TAKE CHARGE OF YOUR FUEL LEVELS AND SAVE</h1>
          <router-link to="#"
            ><button class="deep-blue button">
              GET A FREE DEMO
            </button></router-link
          >
        </div>
        <div>
          <img src="../assets/images/png/screen.png" alt="screen" />
        </div>
      </div>
    </div>
    <div class="section-2">
      <div class="text-container">
        <p class="deep-blue">01</p>
        <h4 class="small-heading">EASILY ACCESSIBLE DATA</h4>
        <p class="body-text">
          Our solution transmits actionable data real time from tanks and tankers to the cloud. This
          data can easily be shared via the internet amidst departments. Accounting department for
          instance can easily see the exact fuel inventory at any time, on any day which can then be
          exported into their accounting software.
        </p>
      </div>
      <div>
        <img src="../assets/images/png/analysis.png" alt="analysis" />
      </div>
    </div>
    <div class="section-2 reverse light-blue-bg">
      <div>
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
    <div class="section-2">
      <div class="text-container">
        <p class="deep-blue">03</p>
        <h4 class="small-heading">REDUCTION OF LOGISTIC COSTS</h4>
        <p class="body-text">
          Our clients logistic departments use the data provided by Uptima's solutions (predicted
          order date, tank level consumption and interactive maps) to optimise fuel delivery routes,
          thereby reducing the number of deliveries to each tank by over 20%, hence saving costs.
        </p>
      </div>
      <div>
        <img src="../assets/images/png/analysis.png" alt="analysis" />
      </div>
    </div>
    <div class="section-3">
      <div class="light-blue-bg cont">
        <h3>90%</h3>
        <h2>
          Leakage <br />
          proof
        </h2>
      </div>
      <div class="deep-blue-bg shadow cont">
        <h3>0%</h3>
        <h2>
          Fuel <br />
          wastage
        </h2>
      </div>
      <div class="light-blue-bg cont">
        <h3>89%</h3>
        <h2>
          Cost <br />
          saving
        </h2>
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
        <div class="light-blue-bg bg">
          <img src="../assets/images/svg/charge.svg" alt="charge" />
          <p>
            We pride ourselves in reducing the harm caused to the environment as our solutions help
            reduce CO2 Emissions by several tons daily. This is by our ability to help our clients
            based on live data to plan effectively and optimise their lo
          </p>
        </div>
      </div>
    </div>
    <div class="get-started">
      <h1 class="heading">TAKE CHARGE OF YOUR FUEL LEVELS AND SAVE</h1>
      <p>
        Get the Insurance you need for your tanks to never run dry.
      </p>
      <router-link to="#"><button class="deep-blue-bg">Get Started</button></router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/NavbarDark.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Solution',
    components: {
        Nav,
        Footer
    }
};
</script>

<style scoped>
@import '../assets/css/main.css';

.section-1 {
  background: #f6faff;
}
.section-1-content {
  display: flex;
  padding: 100px 100px 90px 100px;
  justify-content: space-between;
}
.text {
  padding: 30px 0;
  max-width: 519px;
}
.heading-text {
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 60px;
  letter-spacing: 1px;
  color: #37383c;
  margin: 0;
}
.button {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.4px;
  background: transparent;
  padding: 10px 50px;
  border: 2px solid #1c17ff;
  box-sizing: border-box;
  margin-top: 60px;
}
.button:hover {
  color: #ffffff;
  background: #5051db;
  transition: all ease-in-out 500ms;
}
.section-2 {
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
  align-items: center;
}
.text-container {
  max-width: 489px;
}
.shadow {
  box-shadow: 8px 10px 25px #c4c4c4, -7px -10px 20px rgba(196, 196, 196, 0.25);
  color: white;
}
.cont {
  padding: 0 100px;
}
.section-2 img {
  transition: transform 0.4s;
}
.section-2 img:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.section-3 {
  padding: 50px 100px;
  display: flex;
  justify-content: center;
}
.section-3 h2 {
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  text-align: center;
  line-height: 80px;
}
.section-3 h3 {
  font-style: normal;
  font-weight: normal;
  font-size: 90px;
  line-height: 57px;
  text-align: center;
}
.reason-gra {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.reason {
  padding: 50px 100px;
}
.heading {
  text-align: center;
}
.bg {
  /* max-width: 222px; */
  padding: 50px;
}
.bg img {
  position: relative;
  animation: float 6s ease-in-out infinite;
  width: 100px;
  height: 100px;
}
.bg p {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #000000;
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
@media screen and (max-width: 768px) {
  .section-1-content {
    padding: 20px;
    display: block;
    text-align: center;
  }
  .section-1-content img {
    display: none;
  }
  .section-1-content h1 {
    font-size: 35px;
    line-height: 45px;
  }
  .section-2 {
    padding: 20px;
    flex-direction: column;
  }
  .reverse {
    flex-direction: column-reverse;
  }
  .section-2 img {
    width: 100%;
  }
  .section-3 {
    flex-direction: column;
    padding: 20px;
  }
  .section-3 h3 {
    font-size: 45px;
    margin: 15px 0;
  }
  .section-3 h2 {
    font-size: 25px;
    line-height: 40px;
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
}
</style>
