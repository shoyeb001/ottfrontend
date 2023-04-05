import { reactive } from "vue";

const state = reactive({
    islogged: false,
});

if (localStorage.getItem("user")!==null) {
    state.islogged = true;
}

export default{
    state:state,
};
