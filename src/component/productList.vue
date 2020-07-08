<template>
  <div class="product-list">
    <div v-for="item in products" :key="item.id">
      <productOne :product="item" />
    </div>
  </div>
</template>

<script>
  import productOne from './productOne.vue';

  export default {
    name: 'productList',
    computed: {
    },
    components: {
      productOne
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

</style>
