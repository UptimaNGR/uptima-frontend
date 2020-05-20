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
                            GET DEMO
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
                </div>
                <div>
                    <img src="../assets/images/png/screen.png" alt="screen" />
                </div>
            </div>
        </div>
        <div class="section-2">
            <div class="text-container">
                <p class="deep-blue">01</p>
                <p class="deep-blue">MAKE ACCURATE FORCASTS</p>
                <h3 class="small-heading">Understand the actions to take at specific times</h3>
                <p class="body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                </p>
            </div>
            <div>
                <img src="../assets/images/png/analysis.png" alt="analysis" />
            </div>
        </div>
        <div class="section-2 light-blue-bg">
            <div>
                <img src="../assets/images/png/graph.png" alt="graph" />
            </div>
            <div class="text-container">
                <p class="deep-blue">02</p>
                <p class="deep-blue">MAKE ACCURATE FORCASTS</p>
                <h3 class="small-heading">Understand the actions to take at specific times</h3>
                <p class="body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                </p>
            </div>
        </div>
        <div class="section-2">
            <div class="text-container">
                <p class="deep-blue">03</p>
                <p class="deep-blue">MAKE ACCURATE FORCASTS</p>
                <h3 class="small-heading">Understand the actions to take at specific times</h3>
                <p class="body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
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
            <h3 class="heading">WHY CHOOSE NOVUS</h3>
            <div class="reason-gra">
                <div class="light-blue-bg bg">
                    <img src="../assets/images/svg/oil.svg" alt="oil" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,e sed do eiusmod
                        tempor isunt ut labore t d tempor incididunt ut labore et dolore magna
                        aliqua
                    </p>
                </div>
                <div class="light-blue-bg bg">
                    <img src="../assets/images/svg/connect.svg" alt="connect" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,e sed do eiusmod
                        tempor isunt ut labore t d tempor incididunt ut labore et dolore magna
                        aliqua
                    </p>
                </div>
                <div class="light-blue-bg bg">
                    <img src="../assets/images/svg/screen.svg" alt="screen" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,e sed do eiusmod
                        tempor isunt ut labore t d tempor incididunt ut labore et dolore magna
                        aliqua
                    </p>
                </div>
                <div class="light-blue-bg bg">
                    <img src="../assets/images/svg/charge.svg" alt="charge" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,e sed do eiusmod
                        tempor isunt ut labore t d tempor incididunt ut labore et dolore magna
                        aliqua
                    </p>
                </div>
            </div>
        </div>
        <div class="get-started">
            <h1 class="heading">READY TO LOREM IPSUM</h1>
            <p>
                Be in the know lorem ipsum when you dolor <br />
                ipsum dolor lorem
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
.section-1 {
    background: #e3e0eb;
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
    display: flex;
}
.reason {
    padding: 50px 100px;
}
.heading {
    text-align: center;
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
.get-started {
    text-align: center;
    background: #e3e0eb;
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
    padding: 15px 40px;
    margin-top: 50px;
    cursor: pointer;
}
</style>
