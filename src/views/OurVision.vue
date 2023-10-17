<template>
            <h1 class="titleContentPages">Our Vision</h1>
    <div class="vision-wrapper text-white">
        
        <p>At Green Path, we dream of a world where nature and humanity live together in perfect harmony. A world where every child knows the sound of babbling brooks, breathes the scent of fresh flowers, and enjoys the sight of endless green forests. We envision a future where cities and towns benefit from clean air and clear water, and where every living thing has its rightful place in the cycle of life.</p>
        <p>Our vision is not just to preserve our planet, but to revitalize it. It is not only about stopping the damage we have caused, but also about healing the wounds and discovering new ways to work with the Earth. We strive for a world where sustainable practices are the rule, not the exception, and where every individual understands that they are responsible for protecting and caring for our Earth.</p>
        <p>At Green Path, we believe this vision is achievable. With determination, innovation and collaboration, we can create a better, greener future where the Earth not only survives, but thrives. By acting today, we are laying the foundation for a world inspired by the beauty, diversity and resilience of nature.</p>
        <p>Our carbon footprint tracker is more than just another digital tool. It is a tangible example of our determination and spirit of innovation. With its help, we want to create visibility and encourage self-reflection on one's own behavior towards a greener future. </p>
        <p>It's up to us to lead the way to a more sustainable, just, and loving planet. Take the first step in that direction with us at Green Path.</p>


        <div class="row align-items-center">
                <div class="col-md-1">
                    <img src="@/assets/thispersondoesnotexist.jpg" alt="Our CEO at Green Path" class="vision-image">
                </div>
                <div class="col-md-1">
                    <div class="ceo-info">
                        <h2>Linda Müller</h2>
                        <p>Chief Executive Officer</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'OurVision'
}
</script>

<style scoped>
body {
  background-color: #171611;
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
}

.vision-page {
    width: 90vw;
    margin: 0 auto;
}

.vision-wrapper, .titleContentPages {
    padding: 20px;
    border-radius: 10px;
}

.vision-wrapper {
    background-color: #344E41;
}

.titleContentPages {
    color: white;
}

.vision-image {
  width: 250px;
  border-radius: 10px;
}

</style>
