<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#" class="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </a>
            <a href="/" class="navbar-brand">BuyPhone</a>
            <ul class="navbar-nav">
                <li><router-link :to="{name: 'homeLink'}" class="nav-link">Home</router-link></li>      
                <!-- class="nav-link"的作用是去掉li的默认样式 -->
                <li><router-link :to="{name: 'menuLink'}" class="nav-link">Phones</router-link></li>
                <li><router-link :to="{name: 'adminLink'}" class="nav-link">Admin</router-link></li>
                <li><router-link :to="{name: 'aboutLink'}" class="nav-link">About</router-link></li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-link" v-show="isLogin">{{currentUser}}</li>
                <li><router-link :to="{name: 'loginLink'}" v-show="isLogin" class="nav-link">[sign out]</router-link></li>
                <li><router-link :to="{name: 'loginLink'}" v-show="!isLogin" class="nav-link">Login</router-link></li>
                <li><router-link :to="{name: 'registerLink'}" v-show="!isLogin" class="nav-link">Register</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data(){
        return {
            homeLink : '/'
        }
    },
    computed: {
        currentUser(){
            return this.$store.getters.currentUser;
        },
        isLogin(){
            return this.$store.getters.isLogin;
        }
    }
}
</script>