// 產品資料格式
// 匯入 Vue
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';
const url = "https://vue3-course-api.hexschool.io/v2"; // 請加入站點
const path = "sesame-store"; // 請加入個人 API Path
// data = {} v-if 無法用
let data = undefined;
let products = []

// 1. 建立元件

const app = {
    // 資料
    data() { // data 是個 function
        return {
            products,
            data
        }
    },
    methods: {
        getData() {

            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            console.log(token);
            // header 夾帶 token
            axios.defaults.headers.common['Authorization'] = token;
            axios.get(`${url}/api/${path}/admin/products`)
                .then((res) => {
                    if (res.data.products.length == 0){
                        alert("無商品");
                        window.location = 'index.html'
                    }
                    console.log(res);
                    this.products = res.data.products;
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
    mounted() {
        this.getData();
    }
}
// 2. 生成 Vue 應用程式

createApp(app) //生成
    .mount('#app') // 渲染

