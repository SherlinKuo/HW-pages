// 此架構參考解答及上課內容

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const url = "https://vue3-course-api.hexschool.io/v2"; // 請加入站點
const path = "sesame-store"; // 請加入個人 API Path

createApp({
    data(){
        return{
            submit:{
                username: '',
                password: ''
            }
        }
    },
    methods:{
        login(){
            axios.post(`${url}/admin/signin`, this.submit)
            .then((res) => {
                console.log(res);
                const { token, expired } = res.data;
                document.cookie = `hexToken=${token}; expires=${new Date(expired)}; `;
                window.location = 'products.html'
            } )
            .catch((err) => {
                alert(err.data.message);
            })
        }
    }
}).mount('#app')
