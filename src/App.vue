<template>
    <div class="app">
      <sidebar-vue/>

      <router-view/>
    </div>
    <!-- <content-vue/> -->
</template>

<script>
import SidebarVue from "./components/sidebar.vue";
// import ContentVue from "@/view/layouts/content/index.vue";

export default
{
  name: 'App',

  components:
  {
    SidebarVue,
    // ContentVue,
  }
}
</script>
<style lang="scss">
:root 
{
  --primary: #4ade80;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 200px;
}

*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body
{
  background: var(--light);
}

button
{
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app
{
  display: flex;

  main
  {
    flex: 1 1 0;
    // padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>
