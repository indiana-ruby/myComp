<template>
  <div class="cms-comp-item" ref="cmsComp">
    <slot :inView="inView"></slot>
  </div>
</template>

<script>
  export default {
    name: 'cmsComp',
    computed: {
    },
    components: {
    },
    data() {
      return {
        inView: false,
      }
    },
    props: {
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
      const intersectionObserver = new IntersectionObserver(function(entries) {
        if (entries[0].intersectionRatio <= 0) return;
        console.log('in');
        this.inView = true;
      });
      intersectionObserver.observe(this.$refs.cmsComp);
    }
  }
</script>

<style lang="less">

</style>
