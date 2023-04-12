<template>
    <div class="container">
        <MenuIcon/>
        <h1 class="green">{{ title }}</h1>
        <UserIcon/>
    </div>
</template>

<script>
import UserIcon from "@/components/icons/IconUser.vue";
import MenuIcon from "@/components/icons/IconMenu.vue";

export default {
    name: "HeaderContent",
    components: {UserIcon,MenuIcon},
    props: {
        title: String,
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 0 30px 0 30px;
}

h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}
</style>