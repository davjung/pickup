<template>
    <div class="login">
        <div class="leftSide">
            <div class="holder">
                <h4>Login</h4>
                <input class="authInput" type="text" v-model="email" placeholder="Email"><br>
                <input class="authInput" type="password" v-model="password" placeholder="Pw"><br>
                <button v-on:click="signIn">login</button>
                <p>Don't have an account? You can <router-link to="/sign-up">create one!</router-link></p>
            </div>
        </div>
        <div class="rightSide">
            <img src="../assets/login_image.jpg"/>
        </div>
            
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'

    export default {
        name: 'login',
        data: function() {
            return{
                email: '',
                password: '',
            }
        },
        methods: {
            signIn: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    this.$router.replace('home')
                })
                .catch(err => {
                    alert('Oops. ' + err.message)
                })
            }
        }
    }
</script>

<style scoped>
    .login {
        height: 80vh;
        border-bottom: 1px black solid;
    }

    .leftSide {
        width: 35%;
        float: left;
        height: 100%
    }

    .rightSide {
        background: blue;
        margin-left: 35%;
        width: 65%;
        float: left;
        height: 100%;
    }

    .holder {
        width: 70%;
        position: relative;
        top: 50%;
        transform: perspective(1px) translateY(-85%);
        border-left: 1px solid black;
    }

    .holder h4 {
        text-align: left;
        padding-left: 5%
    }

    .holder button {
        border-radius: 3px;
        border: 1px solid indigo;
        padding: 7px;
        padding-right: 38px;
        background: rgb(130, 158, 89);
        color: white;
    }

    img {
        height: 100%;
    }

    input {
        margin: 10px 0;
        width: 90%;
        padding: 10px;
        border-radius: 5px;
        border: 1px black solid;
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    p a {
        text-decoration: underline;
        cursor: pointer;
    }

</style>