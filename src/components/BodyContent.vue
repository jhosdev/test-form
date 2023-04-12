<template>
    <div class="outside">
        <div class="container left">
            <p>Test</p>
        </div>
        <div class="container right">
            <p>Test</p>
        </div>
    </div>
</template>

<script>

export default {
    name: "BodyContent",
    components: {},
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
.left {
    width: 20%;

}
.right {
    width: 80%;
    margin: 3rem 1rem 3rem 1rem;
    display: flex;
    padding-left: 100px;
    flex-wrap: wrap;

}
</style>