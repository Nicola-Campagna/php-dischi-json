// setting Vue Js

const { createApp } = Vue
createApp({
    data() {
        return {
            // title: "ciao ok"
            disco: [],
        }
    },

    methods: {
        fetchDisco() {
            axios.get("/php-dischi-json/API/get-list.php").then((response) => {
                this.disco = response.data;
                // console.log(this.disco);
            })
        }

    },
    created() {
        this.fetchDisco()
    }
}).mount("#app");



