<template>
    <button @click="signUp = !signUp">Sign Up/ Login</button>
    <div v-if="signUp">
    <h1>hehe register</h1>
        <table style="margin:auto">
            <tbody>
                <tr><th><label>Enter your name:</label></th><td><input type="text" v-model="name"><br><br></td></tr>
                <tr><th><label>Enter your surname:</label></th><td><input type="text" v-model="surname"><br><br></td></tr>
                <tr><th><label>Enter your age:</label></th><td><input type="text" v-model="age"><br><br></td></tr>
                <tr><th><label>Enter your favourite coding language:</label></th><td><input type="text" v-model="fav_coding_lang"><br><br></td></tr>
                <tr><th><label>Enter your favourite car:</label></th><td><input type="text" v-model="fav_car"><br><br></td></tr>
                <tr><th><label>Enter your eye colour:</label></th><td><input type="text" v-model="eye_color"><br><br></td></tr>
                <tr><th><label>Enter your username:</label></th><td><input type="text" v-model="user_name"><br><br></td></tr>
                <tr><th><label>Enter your password:</label></th><td><input type="password" v-model="password"></td></tr>
                <tr><td><button @click="addUser()">Submit</button></td></tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <h1>hehehe Login</h1>
        <tbody style="margin: auto;">
                <tr><th><label>Enter your username:</label></th><td><input type="text" v-model="user_name"><br><br></td></tr>
                <tr><th><label>Enter your password:</label></th><td><input type="password" v-model="password"></td></tr>
                <tr><td><button @click="loginUser()">Send</button></td></tr>
            </tbody>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'',
            surname:'',
            age:'',
            fav_coding_lang:'',
            fav_car:'',
            eye_color:'',
            user_name:'',
            password:'',
            signUp:true
        }
    },
    methods:{
        addUser(){
            this.$store.dispatch('addUser',this.$data);
        },
        loginUser(){
            this.$store.dispatch('loginUser',this.$data);
        }
    }
}
</script>
<style lang="">
</style>