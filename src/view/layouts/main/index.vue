<template>
    <div class="sc-width-12-small" style="margin-top: 60px;">
        <div class="sc-grid sc-grid-columns-12">
            <div class="sc-grid-column-start-1 sc-grid-column-end-13">
                <div class="sc-margin-y-small">
                    <overview-vue/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import OverviewVue from "@/view/company/overview/index.vue";

export default
{
    name: 'Main',

    components:
    {
        OverviewVue,
    }
}
</script>