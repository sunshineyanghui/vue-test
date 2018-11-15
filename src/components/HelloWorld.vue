<template>
  <div class="order">
    <div class="order-title">
      <ul>
        <li :class="active ===1 ? 'active' : ''" @click="clickActive(1)">全部</li>
        <li :class="active===2 ? 'active' : ''"@click="clickActive(2)">已付款</li>
        <li @click="clickActive(3)">已退款</li>
        <li @click="clickActive(4)">已完成</li>
      </ul>
    </div>
    <div class="order-list">
      <ul v-if="orderlistall">
        <li>
          <div class="order-list-left"><img :src="imglogo"></div>
          <div class="order-list-right">
            <h3>是肯定还上课哈市</h3>
            <p>的水电费水电费水电费</p>
          </div>
        </li>
        <li>
          <div class="order-list-left"><img :src="imglogo"></div>
          <div class="order-list-right">
            <h3>是肯定还上课哈市</h3>
            <p>的水电费水电费水电费</p>
          </div>
        </li><li>
          <div class="order-list-left"><img :src="imglogo"></div>
          <div class="order-list-right">
            <h3>是肯定还上课哈市</h3>
            <p>的水电费水电费水电费</p>
          </div>
        </li>
      </ul>
      <ul v-if="orderlistpay">
        <li>
          <div class="order-list-left"><img :src="imglogo"></div>
          <div class="order-list-right">
            <h3>1是肯定还上课哈市</h3>
            <p>的水电费水电费水电费</p>
          </div>
        </li>
        <li>
          <div class="order-list-left"><img :src="imglogo"></div>
          <div class="order-list-right">
            <h3>2是肯定还上课哈市</h3>
            <p>的水电费水电费水电费</p>
          </div>
        </li><li>
          <div class="order-list-left"><img :src="imglogo"></div>
          <div class="order-list-right">
            <h3>3是肯定还上课哈市</h3>
            <p>的水电费水电费水电费</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import imglogo from '@/assets/logo.png'
export default {
  name: 'HelloWorld',
  data () {
    return {
      imglogo,
      orderlistall: true,
      active: 1,
      orderlistpay: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    clickActive(event) {
      console.log('clickActive', event)
      if (event === 1) {
        this.active = 1
        this.orderlistall = true
        this.orderlistpay = false
      } else {
        this.active = 2
        this.orderlistpay = true
        this.orderlistall = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  margin: 0;
  padding:0;
}
ul li{
 list-style: none;
 margin: 0;
 padding:0;
}
.order{

}
.order-title ul{
  display: flex;
  justify-content: space-between;
}
.order-title ul li{
  width:25%;
}
.order-list {

}
.order-list ul li{
  display: flex;
  justify-content: space-between
}
.order-list-left {
  width: 30%;
}
.order-list-left img {
  width:100%;
}
.order-list-right {
  width: 70%;
}
.active{
  background-color: #ccc;
}
</style>
