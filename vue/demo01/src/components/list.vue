<template>
    <div>
    <h1>{state.count}}</h1>
    <button @click="add">累加</button>
    </div>
</template>

<script>
    import {reactive} from 'vue'
    export default{
        setup(){
            const state=reactive({
                count:1
            })
            function add(){
            console.log(111);
            }
            return {
                state,
                add
            }
        }
        
        
    }
</script>

<style>
    
</style>