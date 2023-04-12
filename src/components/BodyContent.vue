<template>
    <div class="outside">
        <AddTutorial></AddTutorial>
    </div>
</template>

<script>

import AddTutorial from "@/components/AddTutorial.vue";

export default {
    name: "BodyContent",
    components: {AddTutorial},
    props: {
        title: String,
    }
}
</script>

<style scoped>
.outside {
    display: flex;
    padding: 0 30px 0 30px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
}
</style>