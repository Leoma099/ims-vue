<template>
    <sidebar-vue/>
    <content-vue/>
</template>

<script>
import SidebarVue from "@/view/layouts/sidebar/index.vue";
import ContentVue from "@/view/layouts/content/index.vue";

export default
{
  name: 'App',

  components:
  {
    SidebarVue,
    ContentVue,
  }
}
</script>
<style lang="scss">
  @import "./scss/index.scss";
</style>
