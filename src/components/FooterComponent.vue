<template>
    <div class="footer-container">
  
      <div class="footer-content">
        <div class="footer-svg">
             <img src="@/assets/3dLogo.svg" alt="GreenPath 3D Logo">
        </div>
        <div class="footer-col address">
          Green Path gGmbH<br>
          Singapurstraße 123<br>
          22334 Hamburg
        </div>
  
        <div class="footer-col legal">
          <a href="#">Legal Notice</a>
          <a href="#">Data Privacy</a>
        </div>
  
        <div class="footer-col social">
          <span>Let's connect!</span>
          <div class="social-icons">
            <a href="https://www.instagram.com/"><img src="@/assets/instagram-icon.svg" alt="Instagram"></a>
            <a href="https://www.linkedin.com/"><img src="@/assets/linkedin-icon.svg" alt="LinkedIn"></a>
            <a href="https://twitter.com/"><img src="@/assets/twitterx-icon.svg" alt="X (former Twitter)"></a>
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