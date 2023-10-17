<template>
    <body>
        <router-view></router-view>
    </body>
</template>

<style scoped>
</style>

<script >
import LoginForm from './components/loginForm.vue';

export default {
    name: 'App',  
    components: {
        'login-form': LoginForm  
    }
}
</script>
