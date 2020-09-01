<template>
  <div>
    <Nav />
    <div class="contact font">
      <div class="image">
        <img src="../assets/images/png/contact.png" alt="woman-with-loudspeaker" />
      </div>
      <div id="app">
        <div>
          <h5 class="form-heading">TALK TO US</h5>
          <p class="form-subheading">We are here to listen to you... Tell us anything!</p>
          <form-wizard @on-complete="submit" color="#1C17FF" finish-button-text="SUBMIT">
            <tab-content title="Personal" icon="ti-user">
              <form class="info">
                <div class="form-section">
                  <p>Name</p>
                  <input
                    :class="{ error: $v.itemData.name.$error }"
                    type="text"
                    placeholder="John Doe"
                    @input="$v.itemData.name.$touch()"
                    v-model.trim="itemData.name"
                    pattern="^[a-zA-Z-]*$"
                  />
                  <div v-if="$v.itemData.name.$dirty">
                    <p class="error-message" v-if="!$v.itemData.name.minLength">
                      Name must be at least three chatacters
                    </p>
                    <p class="error-message" v-if="!$v.itemData.name.required">
                      Name is required.
                    </p>
                  </div>
                </div>
                <div class="form-section">
                  <p>Email</p>
                  <input
                    :class="{ error: $v.itemData.email.$error }"
                    type="email"
                    @input="$v.itemData.email.$touch()"
                    placeholder="johndoe@gmail.com"
                    v-model.trim="itemData.email"
                    pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                  />
                  <div v-if="$v.itemData.email.$dirty">
                    <p class="error-message" v-if="!$v.itemData.email.email">
                      Please enter a valid email address.
                    </p>
                    <p class="error-message" v-if="!$v.itemData.email.required">
                      Email is required.
                    </p>
                  </div>
                </div>
                <div class="form-section">
                  <p>Phone</p>
                  <input
                    :class="{ error: $v.itemData.phoneNumber.$error }"
                    type="phone"
                    @input="$v.itemData.phoneNumber.$touch()"
                    placeholder="+234 293 182 1092"
                    v-model.trim="itemData.phoneNumber"
                    pattern="^(0|\+234)[0-9]{10}$"
                  />
                  <div v-if="$v.itemData.phoneNumber.$dirty">
                    <p class="error-message" v-if="!$v.itemData.phoneNumber.phone">
                      Phone Number is invalid.
                    </p>
                    <p class="error-message" v-if="!$v.itemData.phoneNumber.required">
                      Phone Number is required.
                    </p>
                  </div>
                </div>
              </form>
            </tab-content>
            <tab-content title="Company" icon="ti-settings">
              <form class="info">
                <div class="form-section">
                  <p>Company</p>
                  <input
                    :class="{ error: $v.itemData.companyName.$error }"
                    type="text"
                    @input="$v.itemData.companyName.$touch()"
                    placeholder="John Doe Inc"
                    v-model.trim="itemData.companyName"
                  />
                  <div v-if="$v.itemData.companyName.$dirty">
                    <p class="error-message" v-if="!$v.itemData.companyName.required">
                      Company Name is required.
                    </p>
                  </div>
                </div>
                <div class="form-section">
                  <p>No of tanks</p>
                  <input
                    :class="{ error: $v.itemData.numberOfTanks.$error }"
                    type="number"
                    min="0"
                    @input="$v.itemData.numberOfTanks.$touch()"
                    placeholder=""
                    v-model.trim="itemData.numberOfTanks"
                  />
                  <div v-if="$v.itemData.numberOfTanks.$dirty">
                    <p class="error-message" v-if="!$v.itemData.numberOfTanks.required">
                      Number of Tanks is required.
                    </p>
                  </div>
                </div>
                <div class="form-section">
                  <p>Facility type</p>
                  <v-select
                    :class="{ error: $v.itemData.facilityType.$error }"
                    class="inpt"
                    placeholder=""
                    multiple
                    @input="$v.itemData.facilityType.$touch()"
                    v-model.trim="itemData.facilityType"
                    :options="interestOptions"
                  />
                  <div v-if="$v.itemData.facilityType.$dirty">
                    <p class="error-message" v-if="!$v.itemData.facilityType.required">
                      Facility type is required.
                    </p>
                  </div>
                </div>
              </form>
            </tab-content>
            <tab-content title="Request" icon="ti-check">
              <form class="info">
                <p>Request note</p>
                <div>
                  <textarea
                    :class="{ error: $v.itemData.message.$error }"
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    @input="$v.itemData.message.$touch()"
                    v-model.trim="itemData.message"
                  ></textarea>
                  <div v-if="$v.itemData.message.$dirty">
                    <p class="error-message" v-if="!$v.itemData.message.required">
                      This field is required.
                    </p>
                  </div>
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
                <path d="M1 8H41" stroke="#1C17FF" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M36 1L43 8L36 15"
                  stroke="#1C17FF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <v-btn
              slot="finish"
              class="submit"
              :loading="loading"
              :disabled="loading || !isFilled"
              color="secondary"
            >
              SUBMIT
            </v-btn>
          </form-wizard>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { FormWizard, TabContent } from 'vue-form-wizard';
import {
  helpers, required, email, minLength
} from 'vuelidate/lib/validators';
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select';
import Nav from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

const phone = helpers.regex('phone', /^(0|\+234)[0-9]{10}$/);

export default {
  components: {
    Nav,
    Footer,
    FormWizard,
    TabContent,
    vSelect
  },
  data() {
    return {
      itemData: {},
      interestOptions: ['isolated', 'tanker', 'station'],
      loading: false
    };
  },
  validations: {
    itemData: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      phoneNumber: {
        required,
        phone
      },
      companyName: {
        required
      },
      numberOfTanks: {
        required
      },
      facilityType: {
        required
      },
      message: {
        required
      }
    }
  },
  computed: {
    isFilled() {
      return (
        this.itemData.name &&
        this.itemData.email &&
        this.itemData.phoneNumber &&
        this.itemData.companyName &&
        this.itemData.numberOfTanks &&
        this.itemData.facilityType &&
        this.itemData.message
      );
    }
  },
  methods: {
    ...mapActions('contact', ['contactUs']),
    submit() {
      this.loading = true;
      this.contactUs(this.itemData);
    }
  }
};
</script>

<style scoped>
.contact {
  display: flex;
  max-height: 722px;
  margin-top: 90px
}
#app {
  width: 100%;
  padding: 20px 50px 50px 50px;
}
.form-heading {
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 1px;
  color: #5051db;
}
.form-subheading {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #000000;
  margin: 10px 0;
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
.form-section {
  margin-bottom: 30px;
  height: 100px;
}
input {
  outline: none;
  margin-bottom: 20px;
}
textarea {
  width: 100%;
  height: 350px;
  background: #ffffff;
  border: 1px solid #c5c5c6;
  outline: none;
  resize: none;
  padding: 10px;
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
  background: #360efc !important;
  border: 0.8px solid #2460a7;
  padding: 10px 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.4px;
  color: #ffffff;
}
.error-message {
  color: red !important;
  font-size: 15px !important;
  margin: 0;
}
button[disabled] {
  cursor: not-allowed !important;
  color: black !important;
  opacity: 0.7 !important;
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
<style>
.vs__dropdown-toggle {
  padding: 10px 0;
}
.vs__selected {
  color: #ffffff;
  background: #360efc;
}
.vs__deselect {
  fill: #ffffff;
}
</style>
