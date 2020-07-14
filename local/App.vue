<template>
  <div class="app-container">
    <comp :products="cmsComponentProps.products"/>
  </div>
</template>

<script>
  import comp from '../src/index';
  import axios from 'axios';

  export default {
    name: 'App',
    computed: {
    },
    components: {
      comp
    },
    data() {
      return {
        cmsComponentProps: {
          products: [{
            activity: [],
            badge_img: "https://img.ddimg.mobi/e8bb812d0eeac1591780130076.jpg",
            badge_position: 2,
            buy_limit: 0,
            category_id: "58fa23d8916edf7e198b496a",
            category_path: "58f9e568936edfe3568b5738,58fa23d8916edf7e198b496a",
            id: "58c367e9936edf64323def2s",
            is_booking: 0,
            is_gift: 0,
            is_invoice: 1,
            is_onion: 0,
            is_presale: 0,
            is_promotion: 0,
            is_vod: false,
            mark_discount: 0,
            mark_new: 1,
            mark_self: 0,
            month_sales: 0,
            name: "鲜活鲈鱼1条 300-400g",
            oid: 248,
            origin_price: "21.90",
            presale_delivery_date_display: "",
            price: "21.90",
            product_name: "鲜活鲈鱼1条 300-400g",
            sale_point_msg: [["肉质清香白嫩刺少", "有“淡水石斑”的美称"], ["推荐清蒸鲈鱼", "轻松品尝原汁原味鲜美"]],
            sizes: [{title: "处理方式", title_name: "鱼类处理方式", id: 1, _id: "59104272936edfa4218e2c61"}],
            small_image: "http://testimg.ddimg.mobi/product/7fc8eb4dab1fb1544435611154.jpg!maicai.product.list",
            spec: "肉质白嫩 适合清蒸",
            status: 1,
            stock_number: 0,
            stockout_reserved: false,
            sub_list: [],
            today_stockout: "",
            total_sales: 7966,
            type: 0,
            vip_price: "4.00"
          },
          {
            activity: [],
            badge_img: "https://img.ddimg.mobi/e8bb812d0eeac1591780130076.jpg",
            badge_position: 2,
            buy_limit: 0,
            category_id: "58fa23d8916edf7e198b496a",
            category_path: "58f9e568936edfe3568b5738,58fa23d8916edf7e198b496a",
            id: "58c367e9936edf64323def2f",
            is_booking: 0,
            is_gift: 0,
            is_invoice: 1,
            is_onion: 0,
            is_presale: 0,
            is_promotion: 0,
            is_vod: false,
            mark_discount: 0,
            mark_new: 1,
            mark_self: 0,
            month_sales: 0,
            name: "鲜活鲈鱼1条 300-400g",
            oid: 248,
            origin_price: "21.90",
            presale_delivery_date_display: "",
            price: "21.90",
            product_name: "鲜活鲈鱼1条 300-400g",
            sale_point_msg: [["肉质清香白嫩刺少", "有“淡水石斑”的美称"], ["推荐清蒸鲈鱼", "轻松品尝原汁原味鲜美"]],
            sizes: [{title: "处理方式", title_name: "鱼类处理方式", id: 1, _id: "59104272936edfa4218e2c61"}],
            small_image: "http://testimg.ddimg.mobi/product/7fc8eb4dab1fb1544435611154.jpg!maicai.product.list",
            spec: "肉质白嫩 适合清蒸",
            status: 1,
            stock_number: 0,
            stockout_reserved: false,
            sub_list: [],
            today_stockout: "",
            total_sales: 7966,
            type: 0,
            vip_price: "4.00"
          }]
        }
      }
    },
    created() {
    },
    methods: {
      fetchComp() {
        
      },
    },
    watch: {
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
