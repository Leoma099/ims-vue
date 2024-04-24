<template>
    <header class="sc-container-large">
        <nav class="sc-header sc-padding-xsmall sc-margin-y-small">
            <a href=""><i class="fas fa-bars"></i></a>
            <ul>
                <div class="sc-flex sc-flex-small sc-align-items-center">
                    <div class="sc-avatar sc-avatar-small"></div>
                    <li>
                        <a href="">Demo User <i class="fa-solid fa-angle-down"></i></a>
                    </li>
                </div>
            </ul>
        </nav>
    </header>
</template>
<script>
export default
{
    name: "HeaderVue",
}
</script>
<style>
.sc-header
{
    position: fixed;
    top: 0;
    width: calc(100% - 220px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    z-index: 1055;

}

.sc-header ul
{
    list-style-type: none;
    padding: 0;
    margin: 0px;
}

.sc-header ul li a
{
    text-decoration: none;
    font-size: 1.2rem;
    color: #000000;
    transition: 0.3s;
}
</style>