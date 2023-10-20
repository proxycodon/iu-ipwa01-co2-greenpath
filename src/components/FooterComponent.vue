<template>
  <div class="footer-container py-4">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 px-0">
          <div class="footer-svg">
            <img
              src="@/assets/3dLogo.svg"
              alt="GreenPath 3D Logo"
              class="mw-80"
            />
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 px-0">
          <div class="footer-col address text-center">
            Green Path gGmbH<br />
            Singapurstraße 123<br />
            22334 Hamburg
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 px-0">
          <div class="footer-col legal text-center">
            <router-link to="/legal-notice" class="custom-link d-block mb-2"
              >Legal Notice</router-link
            >
            <router-link to="/terms-conditions" class="custom-link d-block mb-2"
              >Terms & Conditions</router-link
            >
            <router-link to="/privacy-policy" class="custom-link d-block mb-2"
              >Privacy Policy</router-link
            >
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 px-0">
          <div class="footer-col social text-center w-100">
            <span>Let's connect!</span>
            <div class="social-icons d-flex justify-content-center mt-2 gap-3">
              <a href="https://www.instagram.com/"
                ><img
                  src="@/assets/instagram-icon.svg"
                  alt="Instagram"
                  height="24"
              /></a>
              <a href="https://www.linkedin.com/"
                ><img
                  src="@/assets/linkedin-icon.svg"
                  alt="LinkedIn"
                  height="24"
              /></a>
              <a href="https://twitter.com/"
                ><img
                  src="@/assets/twitterx-icon.svg"
                  alt="X (former Twitter)"
                  height="24"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped src="@/assets/styles/footer.css"></style>