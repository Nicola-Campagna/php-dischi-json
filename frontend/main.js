// setting Vue Js

const { createApp } = Vue
createApp({
    data() {
        return {
            // title: "ciao ok"
            disco: [],
        }
    },

    created() {
        // console.log(axios);
        axios.get("http://localhost/php-dischi-json/API/get-list.php").then((response) => {
            this.disco = response.data;
        })
    }
}).mount("#app");



