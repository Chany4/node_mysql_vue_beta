<template>
    <h1>This is the fruits View</h1>
    <div>
        <section v-for="fruit in $store.state.fruits" :key="fruit.id">
            {{ fruit.id }}
            {{ fruit.fruit_name }}
            {{ fruit.weight }}
            {{ fruit.amount }}
            <button v-if="$cookies.get('token')" @click ="addToCart()">Purchase {{ fruit.fruit_name }}</button>
        </section>
    </div>
</template>
<script>
export default {
    methods : {
        getFruits(){
            this.$store.dispatch('getFruits')
        },
        addToCart(){
            this.$store.dispatch('addToCart')
        }
    },
    mounted(){
        this.getFruits()
    }
    
}
</script>
<style lang="">
    
</style>