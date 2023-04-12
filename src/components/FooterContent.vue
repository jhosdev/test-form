<template>
    <div class="container">
        <div class="footer-element">
            <DocumentationIcon class="icon"/>
            <p>venta@library.com</p>
        </div>

        <div class="footer-element">
            <CommunityIcon class="icon"/>
            <p>981622558</p>
        </div>

        <div class="footer-element">
            <EcosystemIcon class="icon"/>
            <p>Los Manzanos 398</p>
        </div>
    </div>
</template>

<script>
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";
import CommunityIcon from "@/components/icons/IconCommunity.vue";
import EcosystemIcon from "@/components/icons/IconEcosystem.vue";
export default {
    name: "FooterContent",
    components: {EcosystemIcon, DocumentationIcon, CommunityIcon, }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 10px 30px 10px 30px;
}
.footer-element {
    display: flex;
    align-items: center;
}
.icon {
    margin-right: 10px;
    padding-top: 1px;
}
</style>