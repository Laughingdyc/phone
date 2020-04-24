<template>
    <form>
        <h3 class="text-muted my-5">添加新手机型号</h3>
        <div class="row form-group">
            <label class="col-sm-1">品牌</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPhone.brand">
            </div>
        </div>
        <div class="row form-group">
            <label class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea rows="5" class="form-control" v-model="newPhone.description"></textarea>
            </div>
        </div>

        <p><strong>选项1</strong></p>
        <div class="row form-group">
            <label class="col-sm-1">型号</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPhone.size1">
            </div>
        </div>
        <div class="row form-group">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPhone.price1">
            </div>
        </div>
        <p><strong>选项2</strong></p>
        <div class="row form-group">
            <label class="col-sm-1">型号</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPhone.size2">
            </div>
        </div>
        <div class="row form-group">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPhone.price2">
            </div>
        </div>
        <p><strong>选项3</strong></p>
        <div class="row form-group">
            <label class="col-sm-1">型号</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPhone.size3">
            </div>
        </div>
        <div class="row form-group">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPhone.price3">
            </div>
        </div>
        
        <div class="form-group row">
            <button @click="addItemMune" type="button" class="btn btn-success btn-block">添加</button>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return{
            newPhone: {}
        }
    },
    methods: {
        addItemMune(){
            let data = {
                'brand': this.newPhone.brand,
                'description': this.newPhone.description,
                'options': [
                    {
                        'size': this.newPhone.size1,
                        'price': this.newPhone.price1
                    },
                    {
                        'size': this.newPhone.size2,
                        'price': this.newPhone.price2
                    },
                    {
                        'size': this.newPhone.size3,
                        'price': this.newPhone.price3
                    }
                ]
            };
            // fetch('https://buyphone-39f3e.firebaseio.com/menu.json', {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(data)
            // })
            // .then(res => res.json())
            // .then(data => this.$router.push({name: 'menuLink'}))
            // .catch(err => console.log(err));

            // this.http.post("menu.json", data)
            //     .then(res => this.$router.push({name: "menuLink"}))
            //     .catch(err => console.log(err));

            // 数据同步到vuex中
            this.http.post("menu.json", data)
                .then(res => this.$store.commit('pushToMenuItems', data))
                .catch(err => console.log(err));
        }
    }
}
</script>