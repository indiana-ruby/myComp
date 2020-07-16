<template>
  <div class="app-container">
    <comp :products="products"/>
  </div>
</template>

<script>
  import comp from '../src/index';
  import products from './mock/mock';
  import axios from 'axios';
  import io from 'socket.io-client';

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
      const socket = io('http://127.0.0.1:7001/component/build', {
        reconnectionAttempts: 10,
        query: {
          componentId: '5f0d385beb7d5b4605d36bed'
        }
      })

      // 连接服务端
      socket.on('connect', () => {
        console.log('connect!');
        socket.emit('start', 'hello world!');
      });

      //接收消息通知
      socket.on('start', msg => {
        console.log(msg);
      });

      // 接收上线通知
      socket.on('building', msg=>{
        console.log(msg);
      });

      // axios.post('http://127.0.0.1:7001/component/build',{
      //   componentId: '5f0d385beb7d5b4605d36bed'
      // });
      // axios.get(`http://127.0.0.1:7001/component/addlist`,{
      //   params: {
      //     componentId: Math.floor(Math.random()*1000),
      //     componentName: `${Math.floor(Math.random()*1000)}`,
      //     componentType: 0,
      //     componentGit: '12',
      //     componentAuthor: '12',
      //     componentDes: '12',
      //     componentVersion: '12',
      //   }
      // }).then(res => {
      //   console.log(res.data);
      // });
      // axios.get('http://127.0.0.1:7001/component/getlist',{
      //   params: {
      //     page: 0
      //   }
      // });
      // axios.post('http://127.0.0.1:7001/component/edit',{
      //   id: '5f0d385beb7d5b4605d36bed',
      //   update: {
      //     componentName: 'fuck u'
      //   }
      // });
    }
  }
</script>

<style lang="less">
.app-container {
  width: 7.5rem;
}
</style>
