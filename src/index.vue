<template>
  <div class="comp">
    {{name}}{{age}}
  </div>
</template>

<script>
  // import { mapGetters } from 'vuex'
  // import { wxappLogin } from "./util/helper"
  
  // const {gdBridge, gdUtil} = core;
  // const KNB = gdBridge.getBridge().knb;
  // const env = gdUtil.env;

  export default {
    name: 'comp',
    computed: {
    },
    components: {
    },
    data() {
      return {
        showApp: true
      }
    },
    props: {
      name: {
        type: String,
        default: function () {
          return 'lc'
        }
      },
      age: {
        type: String,
        default: function () {
          return '22'
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
