<template>
    <v-app>
        <v-main>
            <v-form method="POST" action="/api/item/create">
                <v-text-field v-model="title" label="title"></v-text-field>
                <v-text-field v-model="image" label="image"></v-text-field>
                <v-text-field v-model="price" label="price"></v-text-field>
                <v-text-field v-model="description" label="description"></v-text-field>
                <v-text-field v-model="email" label="email"></v-text-field>
                <v-btn v-on:click="submit">投稿</v-btn>
            </v-form>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
const title = ref("Alpha")
const image = ref("/img1.jpg")
const price = ref("100")
const description = ref("Blah Blah Blah")
const email = ref("alhpa@example.com")

const submit = async () => {
    console.log("submit")
    const resp = await useFetch("/api/item/create", {
        method: "POST",
        body: { title: title.value, image: image.value, price: price.value, description: description.value, email: email.value },
    })
    console.log("resp")
    console.log(resp)
}
</script>
