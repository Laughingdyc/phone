<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>型号</th>
                        <th>单价</th>
                        <th>加入购物车</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.size">
                    <tr>
                        <td><strong>{{item.brand}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.size">
                        <td>{{option.size}}</td>
                        <td>{{option.price}} RMB</td>
                        <td><button @click="addToBasket(item, option)" class="btn btn-sm btn-outline-success">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-sm-12 col-md-4">
            <div v-if="baskets.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>数量</th>
                            <th>型号</th>
                            <th>价格</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in baskets" :key="item.size">
                        <tr>
                            <td>
                                <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                                <span>{{item.quantity}}</span>
                                <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
                            </td> 
                            <td>{{item.size}}</td>
                            <td>{{item.price * item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>总价: {{total}} RMB</p>
                <button class="btn btn-success btn-block">提交</button>
            </div>
            <div v-else>
                {{basketText}}
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
export default {
    data(){ 
        return{
            baskets: [],
            basketText: "购物车里没有任何商品",
            // getMenuItems: {
            //     Samsung: {
            //         'brand': 'Samsung',
            //         'description': '三星',
            //         'options': [{
            //             'size': 'Samsung S20',
            //             'price': 6999
            //         },
            //         {
            //             'size': 'Samsung S20 Plus',
            //             'price': 7999
            //         },
            //         {
            //             'size': 'Samsung S20 Ultra',
            //             'price': 9999
            //         }]
            //     },
            //     Huawei: {
            //         'brand': 'Huawei',
            //         'description': '华为',
            //         'options': [{
            //             'size': 'Huawei P40',
            //             'price': 4188
            //         },
            //         {
            //             'size': 'Huawei P40 Pro',
            //             'price': 5988
            //         },
            //         {
            //             'size': 'Huawei P40 Pro Plus',
            //             'price': 7988
            //         }]
            //     },
            //     Xiaomi: {
            //         'brand': 'Xiaomi',
            //         'description': '小米',
            //         'options': [{
            //             'size': 'Xiaomi 10',
            //             'price': 3999
            //         },
            //         {
            //             'size': 'Xiaomi 10 pro',
            //             'price': 4999
            //         }]
            //     },
            //     OPPO: {
            //         'brand': 'OPPO',
            //         'description': '蓝厂',
            //         'options': [{
            //             'size': 'OPPO Find X2',
            //             'price': 5499
            //         },
            //         {
            //             'size': 'OPPO Find X2 Pro',
            //             'price': 6999
            //         },
            //         {
            //             'size': 'OPPO Find X2 Pro & Lamborghini',
            //             'price': 12999
            //         }]
            //     },
            //     vivo: {
            //         'brand': 'vivo',
            //         'description': '绿厂',
            //         'options': [{
            //             'size': 'vivo NEX 3S',
            //             'price': 4998
            //         }]
            //     }
            // }
        }
    },
    computed: {
        getMenuItems(){
            // 在vuex中获取数据
            // return this.$store.state.menuItems;

            // 通过getters获取数据
            return this.$store.getters.getMenuItems;
        },
        total() {
            let totalCost = 0;
            for(let index in this.baskets){
                totalCost += this.baskets[index].price * this.baskets[index].quantity;
            }
            return totalCost;
        }
    },
    created(){
        this.fetchData();
    },
    methods: {
        fetchData(){
            // fetch('https://buyphone-39f3e.firebaseio.com/menu.json')
            // .then(res => res.json())
            // .then(data => {
            //     this.getMenuItems = data;
            // })
            // .catch(err => console.log(err));

            // axios.get('menu.json')
            //     .then(res => {this.getMenuItems = res.data})

            // this.http.get('menu.json')
            //     .then(res => this.getMenuItems = res.data)

            // 将请求下来的数据存储到vuex中
            this.http.get('menu.json')
                .then(res => this.$store.commit("setMenuItems", res.data))
        },
        
        
        addToBasket(item, option){
            let clickedBasket = {
                brand: item.brand,
                size: option.size,
                price: option.price,
                quantity: 1
            };
            if(this.baskets !== null && this.baskets.length > 0){
                let isSamePhone = false;
                this.baskets.filter((basket) => {
                    if(basket.size === clickedBasket.size){
                        basket.quantity ++;
                        isSamePhone = true;
                    }
                })
                if(!isSamePhone){
                    this.baskets.push(clickedBasket);
                }
            }else{
                this.baskets.push(clickedBasket);
            }
        },
        decreaseQuantity(item){
            item.quantity --;
            if(item.quantity <= 0){
                this.baskets.splice(this.baskets.indexOf(item), 1);
            }
        },
        increaseQuantity(item){
            item.quantity ++;
        }
    }
}
</script>