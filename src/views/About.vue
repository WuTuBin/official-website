<template>
  <div class="about">
    <div class="box">
      <div class="left">
        <div class="big">
          <div class="small"></div>
        </div>
      </div>
      <div class="right">
        <div class="big">
          <div class="small"></div>
        </div>
      </div>
    </div>
    <h1>一阴一阳之谓道</h1>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>
<style lang="stylus" scoped>

.box{
  border: 1px solid #000;
  width: 400px
  height: 400px;
  border-radius: 200px;
  margin: 50px auto;
  display: flex;
  overflow: hidden;
}
.left,.right{
  width: 50%;
  height: 100%;
  position:relative;
}
.left{
  background-color: #fff;
}
.left .big{
  width: 100%;
  height: 50%;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  z-index:1;
  left: 50%;
  display: flex;
  justify-content:center;
  align-items:center;
}
.left .small{
  background-color:#fff;
  width: 50%;
  height: 50%;
  border-radius: 50%;
}
.right{
  background-color: #000;
}
.right .big{
  width: 100%;
  height: 50%;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  right: 50%;
  bottom: 0;
  display: flex;
  justify-content:center;
  align-items:center;
}
.right .small{
  background-color:#000;
  width: 50%;
  height: 50%;
  border-radius: 50%;
}
h1{
  font-size: 80px;
  margin:0;
  padding:0;
  letter-spacing: 70px;
  text-align center
}
</style>
