<template>
    <div class="sc-content">
        <header-vue/>
        <main-vue/>
    </div>
</template>
<script>
import HeaderVue from "@/view/layouts/header/index.vue";
import MainVue from "@/view/layouts/main/index.vue";

export default
{
    name: 'Content',

    components:
    {
        HeaderVue,
        MainVue,
    }
}
</script>