<template>
            <h1 class="titleContentPages">FAQs</h1>
    <div class="content-wrapper">
        <div class="accordion" id="faqAccordion">
            <div v-for="(item, index) in faqs" :key="index" class="accordion-item">
                <h2 class="accordion-header" :id="'heading' + index">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index">
                        {{ item.question }}
                    </button>
                </h2>
                <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        {{ item.answer }}
                    </div>
                </div>
            </div>
        </div>
    </div>        
</template>

<script>
export default {
    data() {
        return {
            faqs: [
                { 
                    question: 'Why is it important to track the carbon footprint?', 
                    answer: 'Our carbon footprint tells us how big our individual or collective contribution to the greenhouse effect is. By tracking and understanding it, we can take targeted action to reduce it and thus actively contribute to environmental protection.'
                },
                {
                    question: 'What can I do to reduce my own carbon footprint?',
                    answer: 'Start saving energy at home. This can mean switching to energy-efficient light bulbs, using thermostats wisely and turning off appliances when not in use. Also consider investing in energy-efficient appliances. Wherever possible, use public transportation, bicycles or walk. Not only will this reduce your carbon footprint, but it can also help reduce traffic congestion in cities. Air travel contributes significantly to global CO2 emissions. Consider whether a meeting really needs to be held in person or if it can be held online as an alternative. For vacation travel, you might consider closer destinations. Rethink how often and how much you buy. Producing, transporting and disposing of products creates CO2 emissions. By buying long-lasting products and reducing your overall consumption, you can reduce your footprint. If you have the option, consider switching to renewable energy sources such as solar or wind. Many energy providers now offer renewable energy options.',
                },
                {
                    question: 'What does "t CO₂" mean?',
                    answer: 'The abbreviation "t CO₂" stands for "tons of carbon dioxide". It is used to express the amount of carbon dioxide (CO₂) in tons. Expressing them in metric tons provides a tangible representation of these emissions and facilitates the comparison and quantification of reduction measures.',
                    
                },
                {
                    question: 'Why should I care about my carbon footprint when big companies emit much more?',
                    answer: 'While large companies and industries produce significant emissions, every individual plays a role. Individual actions can add up and make a difference, especially if they inspire others to take action as well.',
                }
                
            ]
        };
    }
}
</script>

<style scoped>

.accordion-button {
    font-size: 18px;
}

.content-wrapper {
    display: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    border-radius: 10px;
    padding: 20px;
    margin: 0 auto;
    background-color: #344E41;
    
}
.titleContentPages {
    width: 90vw;
    padding: 20px;
    margin: 0 auto;
    color: white;
}
</style>