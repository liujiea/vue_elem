<template>
    <div>
        <transition name="router-fade" mode="out-in">
            <!-- keep-alive 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。 -->
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
        <svg-icon></svg-icon>
    </div>
</template>

<script>
    import svgIcon from './components/common/svg';

    export default {
        components: {
            svgIcon
        }
    }
</script>

<style lang="scss">
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
</style>
