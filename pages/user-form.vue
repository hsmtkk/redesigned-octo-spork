<template>
    <v-app>
        <v-main>
            <v-form method="POST" action="/api/user/register">
                <v-text-field v-model="name" label="name"></v-text-field>
                <v-text-field v-model="email" label="email"></v-text-field>
                <v-text-field v-model="password" label="password"></v-text-field>
                <v-btn v-on:click="register">register</v-btn>
            </v-form>

            <v-form method="POST" action="/api/user/login">
                <v-text-field v-model="email" label="email"></v-text-field>
                <v-text-field v-model="password" label="password"></v-text-field>
                <v-btn v-on:click="login">login</v-btn>
            </v-form>

        </v-main>
    </v-app>
</template>

<script setup lang="ts">
const name = ref("Alpha")
const email = ref("alpha@example.com")
const password = ref("secret")

const register = async () => {
    console.log("submit")
    const resp = await useFetch("/api/user/register", {
        method: "POST",
        body: { name: name.value, email: email.value, password: password.value },
    })
    console.log("resp")
    console.log(resp)
}

const login = async () => {
    console.log("submit")
    const resp = await useFetch("/api/user/login", {
        method: "POST",
        body: { email: email.value, password: password.value },
    })
    console.log("resp")
    console.log(resp)
}

</script>
