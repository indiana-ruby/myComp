<template>
  <provideList>
    <div class="product-list" slot-scope="{ handleClick, inView}">
      <div v-for="item in products" :key="item.id">
        <productOne :product="item" :handleClick="handleClick" :inView="inView"/>
      </div>
    </div>
  </provideList>
</template>

<script>
  import productOne from './productOne.vue';
  import provideList from './provideList.vue';
  export default {
    name: 'productList',
    computed: {
    },
    components: {
      productOne,
      provideList
    },
    data() {
      return {
        
      }
    },
    props: {
      products: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    created() {
    },
    methods: {
      rotate() {
      }
    },
    watch: {
    },
    mounted() {
    }
  }
</script>

<style lang="less">
  .product-list {
    width: 7.5rem;
  }
</style>
