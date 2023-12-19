<script>
    import { Ref } from 'vue';
    import axios from 'axios';

    const email = ref('');
    const password = ref('');

    const register = async () => {
        try {
            const res = await axios.post('http://localhost:3000/api/users', {
                email: email.value,
                password: password.value
            })
            console.log(res);
            alert('Register Success')
        } catch (e) {
            alert(e.message);
        }
    }
</script>

<template>
    Register
    <form @submit.prevent="register">
        <input type="text" v-model="email">
        <input type="password" v-model="password">
        <button>Register</button>
    </form>
</template>