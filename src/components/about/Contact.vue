<template>
    <div class="mb-3 card text-dark bg-light">
        <div class="card-header">CONTACT US</div>
        <div class="card-body">
            <h4 class="card-title">CONTACT US</h4>
            <p class="card-text">920296471@qq.com</p>

            <router-link :to="{name: 'phoneNumberLink'}">联系电话</router-link>
            <router-link :to="{name: 'personNameLink'}">联系人</router-link>

            <router-view></router-view>
        </div>
    </div>
</template>