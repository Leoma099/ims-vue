<template>
    <aside :class="`${is_expanded && `is-expanded`}`">
        <div class="logo">
            <img src="@/assets/image/vuejs.png" alt="">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined">
                    keyboard_double_arrow_right
                </span>
            </button>
        </div>

        <h3>MENU</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-symbols-outlined">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/product">
                <span class="material-symbols-outlined">inventory_2</span>
                <span class="text">Product</span>
            </router-link>
            <router-link class="button" to="/purchase">
                <span class="material-symbols-outlined">shopping_cart</span>
                <span class="text">Purchase</span>
            </router-link>
            <router-link class="button" to="/sales">
                <span class="material-symbols-outlined">point_of_sale</span>
                <span class="text">Sales</span>
            </router-link>
            <router-link class="button" to="/report">
                <span class="material-symbols-outlined">lab_profile</span>
                <span class="text">Report</span>
            </router-link>
        </div>
    </aside>
</template>
<script setup>
import { ref } from 'vue'

const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}
</script>
<style lang="scss" scoped>
aside
{
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .logo
    {
        margin-bottom: 1rem;

        img
        {
            width: 2rem;
        }
    }

    .menu-toggle-wrap
    {

        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle
        {
            transition: 0.2s ease-out;

            .material-symbols-outlined
            {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover
            {
                .material-symbols-outlined
                {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3, .button .text
    {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3
    {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu
    {
        margin: 0 -1rem;

        .button
        {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-symbols-outlined
            {
                font-size: 2rem;
                color: var(--light);
                margin-right: 1rem;
                transition: 0.2s ease-out;
            }

            .text
            {
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover
            {
                background-color: var(--dark-alt);

                .material-symbols-outlined, .text
                {
                    color: var(--primary);
                }
            }
        }
    }

    &.is-expanded
    {
        width: var(--sidebar-width);

        .menu-toggle-wrap
        {
            top: -3rem;
            .menu-toggle
            {
                transform: rotate(-180deg);
            }
        }

        h3, .button .text
        {
            opacity: 1;
        }

        .button
        {
            .material-symbols-outlined
            {
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 768) {
        position: fixed;
        z-index: 99;
    }
}
</style>