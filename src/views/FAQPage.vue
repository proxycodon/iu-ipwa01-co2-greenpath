<template>
    <div class="vision-wrapper text-white px-2">
        
        <h1 class="titleContentPages">FAQs</h1>
        <div class="accordion" id="faqAccordion">
            <FaqItem 
                v-for="item in faqs" 
                :key="item.id" 
                :id="item.id" 
                :question="item.question" 
                :answer="item.answer" 
            />
        </div>
    </div>
</template>

<script>
import FaqItem from '@/components/FaqItem.vue';
import faqsData from '@/faqs.json';

export default {
    components: {
        FaqItem
    },
    data() {
        return {
            faqs: faqsData
        };
    }
}
</script>

<style scoped>

.vision-wrapper {
    width: 90vw;
    padding: 20px;
    margin: 0 auto;
}
.accordion {
    border-radius: 10px;
    overflow: hidden;
    padding: 20px;
    width: 90vw;
    margin: 0 auto;
    height: 800px;
    overflow-y: auto;
    background-color: #344E41;
    height: 100%;
}

.titleContentPages {
    width: 90vw;
    padding: 20px;
    margin: 0 auto;
}

</style>