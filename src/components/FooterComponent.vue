<template>
<!-- Main footer component -->
  <!-- responsive footer transition -->
  <svg id="visual" viewBox="0 0 900 100" width=100% xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="100" fill="#171611"></rect><path d="M0 24L8.8 25.5C17.7 27 35.3 30 53 39C70.7 48 88.3 63 106 69.3C123.7 75.7 141.3 73.3 159 63.8C176.7 54.3 194.3 37.7 212 32.7C229.7 27.7 247.3 34.3 265 35.7C282.7 37 300.3 33 318 38.8C335.7 44.7 353.3 60.3 371 65.5C388.7 70.7 406.3 65.3 423.8 61.8C441.3 58.3 458.7 56.7 476.2 56.2C493.7 55.7 511.3 56.3 529 59.2C546.7 62 564.3 67 582 63.8C599.7 60.7 617.3 49.3 635 41.2C652.7 33 670.3 28 688 29.2C705.7 30.3 723.3 37.7 741 45.2C758.7 52.7 776.3 60.3 794 64.7C811.7 69 829.3 70 847 62.8C864.7 55.7 882.3 40.3 891.2 32.7L900 25L900 101L891.2 101C882.3 101 864.7 101 847 101C829.3 101 811.7 101 794 101C776.3 101 758.7 101 741 101C723.3 101 705.7 101 688 101C670.3 101 652.7 101 635 101C617.3 101 599.7 101 582 101C564.3 101 546.7 101 529 101C511.3 101 493.7 101 476.2 101C458.7 101 441.3 101 423.8 101C406.3 101 388.7 101 371 101C353.3 101 335.7 101 318 101C300.3 101 282.7 101 265 101C247.3 101 229.7 101 212 101C194.3 101 176.7 101 159 101C141.3 101 123.7 101 106 101C88.3 101 70.7 101 53 101C35.3 101 17.7 101 8.8 101L0 101Z" fill="#344E41" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
  <div class="footer-container py-4">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 px-0">
          <!-- Logo area -->
          <div class="footer-svg">
            <img
              src="@/assets/3dLogo.svg"
              alt="GreenPath 3D Logo"
              class="mw-80"
            />
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 px-0">
          <!-- Address of Green Path -->
          <div class="footer-col address text-center">
            Green Path gGmbH<br />
            Singapurstraße 123<br />
            22334 Hamburg
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 px-0">
          <!-- Legal links -->
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
          <!-- Social media links -->
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

<style scoped>
.footer-container {
    background-color: #344E41;
}

.custom-link, .footer-col {
    color: white;
    text-decoration: none;
}

.custom-link:hover {
    font-weight: bold;
    color: white;
}

.footer-svg img {
    max-width: 80%; 
}

.address {
    font-size: 18px;
    line-height: 1.5;
}

</style>