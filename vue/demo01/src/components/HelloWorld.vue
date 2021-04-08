<template>
  <div>
  <h1>{{count}}*2={{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button>
  </div>
</template>

<script>
  import {computed,onMounted,reactive,ref,toRefs} from 'vue'
  export default{
      setup(){
          // const state=reactive({//响应式方法
          //     count:1,
          // })
          const {state,double} =useCounter(1)
          const num=ref(2) //让原始数据类型变成响应式
          function add(){
            state.count++
          console.log(111);
          }
          onMounted(() => {
            console.log('onmount');
          })

         
          return {
            ...toRefs(state),
              state,
              add,
              double,
              num
          }
      }
      
      
  }

  function useCounter(count){
            const state= reactive({
              count
            })
          const double=computed(()=>state.count*2)
          return {state,double}

          }
</script>

<style>
  
</style>