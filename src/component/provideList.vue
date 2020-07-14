<template>
  <cmsComp>
    <div class="provideList" slot-scope="{products,inView}">
      <slot
        :inView="inView"
        :handleClick="handleClick"
      >
      </slot>
    </div>
  </cmsComp>
</template>

<script>
import cmsComp from './cmsComp.vue';

  export default {
    name: 'provideList',
    computed: {
    },
    components: {
      cmsComp
    },
    data() {
      return {
      }
    },
    props: {

    },
    created() {
    },
    methods: {
      handleClick() {
        console.log('click')
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
