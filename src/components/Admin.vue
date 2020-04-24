<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <app-new-phone></app-new-phone>
        </div>
        <div class="col-sm-12 col-md-4">
            <h3 class="text-muted my-5">手机列表</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品牌</th>
                        <th>删除</th>
                    </tr>
                </thead>

                <tbody v-for="item in getMenuItems" :key="item.brand">
                    <tr>
                        <td>{{item.brand}}</td>
                        <td><button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import newPhone from "./NewPhone.vue";
export default {
    data(){
        return {
            // getMenuItems: []
        }
    },
    components: {
        'app-new-phone': newPhone
    },
    computed: {
        getMenuItems:{
            get(){
                // return this.$store.state.menuItems;
                return this.$store.getters.getMenuItems;
            },
            set(){

            }
        }
    },
    created(){
        fetch('https://buyphone-39f3e.firebaseio.com/menu.json')
        .then(res => res.json())
        .then(data => {
            let menuArray = [];
            for(let key in data){
                data[key].id = key;
                menuArray.push(data[key]);
            }
            // this.getMenuItems = menuArray;
            // 数据同步
            this.$store.commit("setMenuItems", menuArray)
        })

    },
    methods: {
        deleteData(item){
            fetch('https://buyphone-39f3e.firebaseio.com/menu/'+ item.id +'.json', {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                // 实时更新数据
                this.$store.commit('removeMenuItems', item)
            })
            .catch(err => console.log(err));
        }
    }

 }
</script>