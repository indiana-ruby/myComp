<template>
  <div class="app-container">
    <comp :products="products"/>
  </div>
</template>

<script>
  import comp from '../src/index';
  import products from './mock/mock';
  import axios from 'axios';

  export default {
    name: 'App',
    components: {
      comp
    },
    data() {
      return {
        products
      }
    },
    created() {
      console.log(products);
    },
    methods: {
    },
    mounted() {
      axios.get(`http://127.0.0.1:7001/component/addlist`,{
        params: {
          componentId: Math.floor(Math.random()*1000),
          componentName: `${Math.floor(Math.random()*1000)}`,
          componentType: 0,
          componentGit: '12',
          componentAuthor: '12',
          componentDes: '12',
          componentVersion: '12',
        }
      }).then(res => {
        console.log(res.data);
      });
      axios.get('http://127.0.0.1:7001/component/getlist',{
        params: {
          page: 0
        }
      });
      axios.post('http://127.0.0.1:7001/component/edit',{
        id: '5f0d385beb7d5b4605d36bed',
        update: {
          componentName: 'fuck u'
        }
      });
    }
  }
</script>

<style lang="less">
.app-container {
  width: 7.5rem;
}
</style>
