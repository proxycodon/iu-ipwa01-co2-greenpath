<template>
    <div class="contact-form-wrapper">
        <h1 class="titleContentPages">Contact Us</h1>
      <div class="introText">
      <p>
        Do you have any questions, suggestions or have you discovered an error? Do not hesitate to contact us. 
        Our team is always happy to help and will get back to you shortly. 
        Your feedback is important to us and helps us to continuously improve our service. 
        We look forward to hearing from you!
      </p>
    </div>
      <div class="contact-form mb-4">
        <!-- reCaptcha protected formspree contact form -->
        <form
          ref="contactForm"
          @submit.prevent="submitForm"
          action="https://formspree.io/f/mpzgovew"
          method="POST"
        >
          <!-- Name field -->
          <div class="mb-3">
            <label for="name" class="form-label"
              >Name <span class="text-danger">*</span></label
            >
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="name"
              name="name"
              required
            />
          </div>
  
          <!-- Email field -->
          <div class="mb-3">
            <label for="email" class="form-label"
              >Email address <span class="text-danger">*</span></label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              name="_replyto"
              required
            />
          </div>
  
          <!-- Text field -->
          <div class="mb-3">
            <label for="message" class="form-label"
              >Message <span class="text-danger">*</span></label
            >
            <textarea
              class="form-control"
              id="message"
              v-model="message"
              name="message"
              maxlength="800"
              style="height: 10vh"
              required
            ></textarea>
            <div class="remainingCharacters">{{ remainingCharacters }}/800</div>
          </div>
  
          <!-- Privacy checkbox -->
          <div class="form-check mb-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="privacyCheckbox"
              v-model="privacyAccepted"
              required
            />
            <label class="form-check-label" for="privacyCheckbox">
              I have read and accept the
              <router-link to="/Privacy-Policy" target="_blank" rel="noopener"
                >Privacy Policy</router-link
              >.
            </label>
          </div>
  
          <p class="text-danger">* Mandatory field</p>
  
          <!-- Submit Button -->
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      // Initial values for the contact page data
      data() {
          return {
              name: "",
              email: "",
              message: "",
              privacyAccepted: false
          };
      },
      computed: {
          // Calculates remaining number of characters the user can enter based on a limit of 800 characters
          remainingCharacters() {
              return 800 - this.message.length;
          }
      },
      methods: {
          // Submitting the contact form and updating the 'submitted' status
          submitForm() {
              if (!this.privacyAccepted) {
                  alert("Please accept the privacy policy.");
                  return;
              }
              // Using vue.js $refs against XSS
              this.$refs.contactForm.submit();
          }
      }
  };
  </script>
  
<style scoped>
.contact-form-wrapper {
    color: white;
  }
  
  .contact-form {
    width: 90vw;
    border-radius: 10px;
    padding: 20px;
    margin: 0 auto;
    background-color: #344e41;
  }
  
  .remainingCharacters {
    font-size: 14px;
  }
  
  .titleContentPages {
    width: 90vw;
    padding: 20px;
    margin: 0 auto;
  }
</style>