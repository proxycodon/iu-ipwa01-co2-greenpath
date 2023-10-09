<template>
    <div class="contact-form-wrapper">
        <div class="title">
            <h1 class="text-center">Contact Us</h1>
        </div>
        <div class="contact-form mb-4">
            <!-- reCaptcha protected formspree contact form -->
            <form ref="contactForm" @submit.prevent="submitForm" action="https://formspree.io/f/mpzgovew" method="POST">
                <!-- Name Field -->
                <div class="mb-3">
                    <label for="name" class="form-label">Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="name" v-model="name" name="name" required>
                </div>

                <!-- Email Field -->
                <div class="mb-3">
                    <label for="email" class="form-label">Email address <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" id="email" v-model="email" name="_replyto" required>
                </div>

                <!-- Text Field -->
                <div class="mb-3">
                    <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                    <textarea class="form-control" id="message" v-model="message" name="message" maxlength="800" style="height: 10vh;" required></textarea>
                    <div class="remainingCharacters">{{ remainingCharacters }}/800</div>
                </div>

                <!-- Checkbox -->
                <div class="form-check mb-3">
                    <input type="checkbox" class="form-check-input" id="privacyCheckbox" v-model="privacyAccepted" required>
                    <label class="form-check-label" for="privacyCheckbox">
                        I have read and accept the <router-link to="/Privacy-Policy" target="_blank" rel="noopener">Privacy Policy</router-link>.
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
    data() {
        return {
            name: "",
            email: "",
            message: "",
            privacyAccepted: false
        };
    },
    computed: {
        remainingCharacters() {
            return 800 - this.message.length;
        }
    },
    methods: {
        submitForm() {
            if (!this.privacyAccepted) {
                alert("Please accept the privacy policy.");
                return;
            }
            // Directly submit the form using vue $refs against XSS
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
    background-color: #344E41;
}

.remainingCharacters {
    font-size: 14px;
}
</style>
