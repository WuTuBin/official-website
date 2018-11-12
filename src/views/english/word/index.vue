<template>
  <div class="box">
    <ul class="title">
      <li v-for="(item,index) in title" :key="index"><a :href="'#'+item">{{item}}</a></li>
    </ul>
    <ul class="words">
      <li v-for="(item,index) in words" :key="index">
        <a :name="index">{{index}}</a>
        <table>
          <tr v-for="(tmp,index) in item" :key="index"><td v-for="(item,index) in tmp" :key="index">{{item.key}}:<br/>{{item.val}}</td></tr>
        </table>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
// import Vue from "vue";
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import { words } from "./text";
@Component
export default class Hello extends Vue {
  words:any = words
  title:any = ''

  created() {
    this.title = Object.keys(words)
    let tmp:any = {}
    for (let key in this.words) {
      let item = this.words[key]
      let len = Object.keys(item).length
      let arr:any = [],j=0
      for (let i = 0; i < len; i++) {
        if (i!=0&&i%10==0) {
          j++
        }
        if (!arr[j]) {
          arr[j]=[]
        }
        arr[j].push(item[i])
      }
      tmp[key] = arr
    }
    console.log(tmp)
    this.words = tmp
  }
}
</script>

<style lang="stylus" scoped>
.box{
  height 100%;
  display:flex;
  flex-direction column
}
table,tr,td{
  border: 1px solid ;
  border-collapse collapse
}
table{
  width 100%;
}
td{
  padding:10px;
}
.title{
  display:flex;
  flex-shrink:0;
  justify-content:space-around;
  padding-bottom:20px;
}
.title li{
  background-color:#ccc;
  flex-shrink:0;
  border-radius:4px;
  padding:4px 10px;
  cursor pointer  
}
.title li a{
   
}
.words{
  overflow:auto;  
}

.words a{
  padding:20px;
  display:inline-block;
  font-size: 20px;
  font-weight bold;
}
</style>
