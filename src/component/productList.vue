<template>
  <cmsComp>
    <div class="product-list" slot-scope="{inView}">
      <div v-for="item in products" :key="item.id">
        <productOne :product="item" :handleClick="handleClick" :inView="inView"/>
      </div>
    </div>
  </cmsComp>
</template>

<script>
  import productOne from './productOne.vue';
  import cmsComp from './cmsComp.vue';
  export default {
    name: 'productList',
    computed: {
    },
    components: {
      productOne,
      cmsComp
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
