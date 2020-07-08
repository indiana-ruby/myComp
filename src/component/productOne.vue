<template>
  <div class="product-one">
    <div class="product-img">
      <img class="product-img-item" :src="product.small_image" />
    </div>
    <div class="product-info">
      <div class="product-name">{{product.name}}</div>
      <div class="product-desc">{{product.spec}}</div>
      <div class="product-tag">新品</div>
      <div class="product-price">￥<span>12</span></div>
      <div class="product-green-price">￥<span>12</span></div>
      <div class="product-cart"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'productOne',
    computed: {
    },
    components: {
    },
    data() {
      return {
        
      }
    },
    props: {
      product: {
        type: Object,
        default: function () {
          return {}
        }
      },
      handlers: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    created() {
      const {
        small_image: image, product_name, spec, price, vip_price, origin_price, stock_number,
        mark_new, is_promotion, buy_limit, activity, is_presale, presale_delivery_date_display, hide_cart, is_booking, today_stockout
      } = this.product;

      let notice = '', noticeStyle = '', cartEnable = true;
      // let isCanBook = util && util.compVer(platform.appVersion, '8.28.0') >= 0;
      let isCanBook = true;
      if(is_booking){
        if(isCanBook){
            notice = '今日售罄';
        }else{
            notice = '抢光了';
            cartEnable = false;
        }
        // noticeStyle = style.noticeGray;
      }
      if (stock_number < 1) {
          notice = '抢光了';
          // noticeStyle = style.noticeGray;
          cartEnable = false;
      }

      this.priceNum = Number(price);
      this.isValidPrice = !isNaN(priceNum);
      this.originPriceNum = Number(origin_price);
      this.showOriginPrice = (isValidPrice ? priceNum < originPriceNum : true) && originPriceNum > 0;
      this.originPriceStr = originPriceNum.toFixed(2);
      let [p1, p2] = (this.isValidPrice ? this.priceNum.toFixed(2) : price).split('.');
      this.p1 = p1;
      this.p2 = p2;
      this.vipPriceNum = Number(vip_price).toFixed(2).split('.');
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
.vipPriceTagOne{
  width: 2rem;
  height: 0.6rem;
  background: url('https://img.ddimg.mobi/assets/h5/vip-price-tag.png') no-repeat;
  background-size: 100% 100%;
  margin-left: r(4);
}
.vipPriceTagTwo{
  width: 2rem;
  height: 0.6rem;
  background: url('https://img.ddimg.mobi/assets/h5/greenPrice.png') no-repeat;
  background-size: 100% 100%;
  margin-left: r(4);
}
.product-one {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  width: 7.5rem;
}
.product-img {
  width: 2.18rem;
  height: 2.18rem;
  background: url('https://img.ddimg.mobi/assets/h5/product-img-load.png') no-repeat;
  background-size: 100% 100%;
  border-radius: .3rem;
  .product-img-item {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.product-info {
  padding: 0.3rem 0.3rem 0.3rem 0;
  flex: 1;
  position: relative;
  .product-name {
    line-height: .36rem;
    word-break: break-all;
    font-size: .3rem;
    color: #333333;
    overflow: hidden;
  }
  .product-desc {
    line-height: .36rem;
    font-size: .24rem;
    color: #999999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .product-tag {
    color: #FE6263;
    font-size: 0.2rem;
    border: 0.02rem solid #FE6263;
    border-radius: 0.1rem;
    // line-height: 0.26em;
    width: .52rem;
    text-align: center;
    box-sizing: border-box;
  }
  .product-price {
    line-height: .4rem;
    font-weight: bold;
    font-size: 0.34rem;
    color: #FE6263;
  }
  .product-green-price {
    line-height: .36rem;
    font-weight: bold;
    font-size: 0.24rem;
    color: #2FB157;
  }
  .product-cart {
    position: absolute;
    right: 0;
    top: 50%;
    display: block;
    width: .52rem;
    height: .52rem;
    background: url(https://img.ddimg.mobi/assets/h5/gray_cart.png) no-repeat;
    background-size: 100% 100%;
  }
}
</style>
