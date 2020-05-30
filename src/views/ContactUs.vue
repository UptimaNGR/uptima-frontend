<template>
    <div>
        <Nav />
        <div class="contact font">
            <div class="image">
                <img src="../assets/images/png/contact.png" alt="woman-with-loudspeaker" />
            </div>
            <div id="app">
                <div>
                    <form-wizard @on-complete="submit" color="#1C17FF" finish-button-text="SUBMIT">
                        <tab-content title="Personal" icon="ti-user">
                            <form class="info">
                                <div>
                                    <p>Name</p>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        v-model="name"
                                    />
                                </div>
                                <div>
                                    <p>Email</p>
                                    <input
                                        type="email"
                                        required
                                        placeholder="johndoe@gmail.com"
                                        v-model="email"
                                    />
                                </div>
                                <div>
                                    <p>Phone</p>
                                    <input
                                        type="phone"
                                        required
                                        placeholder="+234 293 182 1092"
                                        v-model="phoneNumber"
                                    />
                                </div>
                            </form>
                        </tab-content>
                        <tab-content title="Company" icon="ti-settings">
                            <form class="info">
                                <div>
                                    <p>Company</p>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe Inc"
                                        v-model="companyName"
                                    />
                                </div>
                                <div>
                                    <p>No of tanks</p>
                                    <input
                                        type="number"
                                        required
                                        placeholder=""
                                        v-model="numberOfTanks"
                                    />
                                </div>
                                <div>
                                    <p>Facility type</p>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Full covered"
                                        v-model="facilityType"
                                    />
                                </div>
                            </form>
                        </tab-content>
                        <tab-content title="Request" icon="ti-check">
                            <form class="info">
                                <p>Request note</p>
                                <div>
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="10"
                                        v-model="message"
                                    ></textarea>
                                </div>
                            </form>
                        </tab-content>
                        <button slot="prev" class="back">
                            <svg
                                width="42"
                                height="16"
                                viewBox="0 0 42 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M41 8L0.999999 8"
                                    stroke="#939393"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7 15L0 8L7 1"
                                    stroke="#939393"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            Back
                        </button>
                        <button slot="next" class="next">
                            Next
                            <svg
                                width="44"
                                height="16"
                                viewBox="0 0 44 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 8H41"
                                    stroke="#1C17FF"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M36 1L43 8L36 15"
                                    stroke="#1C17FF"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                        <button slot="finish" class="submit">SUBMIT</button>
                    </form-wizard>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
// local registration
import axios from 'axios';

import { FormWizard, TabContent } from 'vue-form-wizard';
import Nav from '../components/NavbarDark.vue';
import Footer from '../components/Footer.vue';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

export default {
    components: {
        Nav,
        Footer,
        FormWizard,
        TabContent
    },
    data() {
        return {
            name: '',
            email: '',
            phoneNumber: '',
            companyName: '',
            numberOfTanks: '',
            facilityType: '',
            message: ''
        };
    },
    methods: {
        onComplete() {
            // alert('Yay. Done!');
        },
        submit() {
            axios
                .post(`${process.env.VUE_APP_API_URL}/api/v1/contact-us`, {
                    name: this.name,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    companyName: this.companyName,
                    numberOfTanks: this.numberOfTanks,
                    facilityType: this.facilityType,
                    message: this.message
                })
                .then(res => {
                    console.log(res.data);
                    this.name = '';
                    this.email = '';
                    this.phoneNumber = '';
                    this.companyName = '';
                    this.numberOfTanks = '';
                    this.facilityType = '';
                    this.message = '';
                });
        }
    }
};
</script>

<style scoped>
.contact {
    display: flex;
    max-height: 722px;
}
#app {
    width: 100%;
    padding: 50px;
}
.image {
    filter: grayscale(100%);
}

.info p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.4px;
    color: #454141;
}
.info input {
    background: #ffffff;
    border: 1px solid #c5c5c6;
    height: 45px;
    width: 100%;
    padding: 0 10px;
}
.info input::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.4px;
    color: #939393;
}
input {
    outline: none;
    margin-bottom: 50px;
}
textarea {
    width: 100%;
    height: 250px;
    background: #ffffff;
    border: 1px solid #c5c5c6;
    outline: none;
    resize: none;
}
.back {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.4px;
    color: #817f7f;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
}
.back svg {
    align-self: center;
    margin-right: 10px;
}
.next {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.4px;
    color: #360efc;
    cursor: pointer;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
}
.next svg {
    align-self: center;
    margin-left: 10px;
}
.submit {
    background: #360efc;
    border: 0.8px solid #2460a7;
    padding: 10px 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.4px;
    color: #ffffff;
}
@media screen and (max-width: 768px) {
    #app {
        padding: 20px;
    }
    .contact {
        flex-direction: column;
    }
    .image {
        display: none;
    }
}
</style>
