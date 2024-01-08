<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-title>ユーザー登録</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-form>
                <v-text-field label="名前" v-model="name"></v-text-field>
                <v-text-field label="メールアドレス" v-model="email"></v-text-field>
                <v-text-field label="パスワード" v-model="password"></v-text-field>
                <v-btn>登録</v-btn>
            </v-form>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
const name = ref("Alpha")
const email = ref("alpha@example.com")
const password = ref("secret")
</script>