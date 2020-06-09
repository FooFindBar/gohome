<template>
  <div class="all">
    <div class="big">
      <div class="left">当前日期：</div>
      <div class="right">{{datenow}}</div>
    </div>
    <div class="big">
      <div class="left">距离下班时间还有：</div>
      <div class="right">{{outnow}}</div>
    </div>
    <div class="big">
      <div class="left">距离下班时间还有：</div>
      <div class="right">{{outhh}}小时</div>
    </div>
    <div class="big">
      <div class="left">距离下班时间还有：</div>
      <div class="right">{{outmm}}分钟</div>
    </div>
    <div class="big">
      <div class="left">距离下班时间还有：</div>
      <div class="right">{{outss}}秒</div>
    </div>
    <div class="big">
      <div class="left">距离下班时间还有：</div>
      <div class="right">{{outtime}}毫秒</div>
    </div>
    <star></star>
    <vue-particles style="width: 100%;height: 100%; position: fixed;" color="#dedede"></vue-particles>
  </div>
</template>

<script>
  import star from '@/components/star.vue'
  export default {
    data() {
      return {
        //计时器刷新频率毫秒制度
        changetime:999,
        // 你要上班的时间24小时制
        gowork:9,
        // 你下班的时间24小时制
        gohome:18,
        datenow: '',
        outnow: '',
        year: '',
        month: '',
        date: '',
        hour: '',
        minute: '',
        second: '',
        milliSeconds: '',
        outtime: 0,
        outss: 0,
        outhh: 0,
        outmm: 0,

      }
    },
    created() {
      this.timer()
    },
    methods: {
      // 这是获取数据的函数
      getData() {
        var date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.date = date.getDate();
        this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        this.milliSeconds = date.getMilliseconds();
        this.datenow = this.year + '-' + this.month + '-' + this.date + ' ' + this.hour + ':' + this.minute + ':' + this.second + '.' + this.milliSeconds;
        var a = (this.hour * 3600000) + (this.minute * 60000) + (this.second * 1000) + this.milliSeconds
        this.outtime = (this.gohome*60*60*1000) - a
        this.outss = (this.outtime / 1000).toFixed(4)
        this.outmm = (this.outtime / 1000 / 60).toFixed(4)
        this.outhh = (this.outtime / 1000 / 60 / 60).toFixed(4)
        this.outnow = this.formatDuring(this.outtime)
        if(a>=this.gowork*60*60*1000&&a<this.gohome*60*60*1000){
          if(this.$route.path!="/Home") this.$router.push('/Home')
        }else{
          if(this.$route.path!="/About") this.$router.push('/About')
        }
      },
      // 这是一个定时器
      timer() {
        return setInterval(() => {
          this.getData()
        }, this.changetime)
      },
      formatDuring(mss) {
        var days = parseInt(mss / (1000 * 60 * 60 * 24));
        var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = (mss % (1000 * 60)) / 1000;
        return hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
      }
    },
    components: {
      star
    }
  }
</script>

<style>
  body,
  html {
    height: 100%;
  }
  *{
    padding: 0px;
    margin: 0px;
  }
  .all {
    color: white;
    background: url("~@/assets/bg_1.jpg");
    background-size: cover;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .big {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    padding: 5px;
    margin-top: 25px;
    font-size: 20px;
    font-family: "黑体";
    text-align: end;
    width: 200px;
    text-shadow: 5px 5px 5px #020c25;
  }

  .right {
    text-align: start;
    width: 300px;
    border: 3px solid white;
    padding: 5px;
    margin-top: 20px;
    font-size: 20px;
    font-family: "黑体";
    box-shadow: 5px 5px 100px #020c25, inset 5px 5px 100px #020c25;
    border-radius: 5px;
  }
</style>