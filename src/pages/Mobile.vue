<script setup>
import '../assets/css/reset.css'
import 'animate.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const isIos = useStore().state.isIos
const buttonInnerText = ref('立即下载')
const buttonDisabled = ref(false)
const btnType = ref('download')

let downloaded = false

const download = () => {
  if (isIos) btnType.value = 'trust'
  if (downloaded) return

  buttonDisabled.value = true
  buttonInnerText.value = '正在下载 ...'
  setTimeout(interval, 2000)
}

const interval = () => {
  let num = 0
  let timer
  ;(function callback() {
    if (String(num).substr(String(num).length - 1, 1) === '6') {
      num += 4
    } else {
      num += 3
    }
    if (isIos) {
      buttonInnerText.value = `一键信任 (${num}%)`
    } else {
      buttonInnerText.value = `正在下载 (${num}%)`
    }
    timer = setTimeout(callback, 1000)
    if (num > 100) {
      onDownloaded()
      clearTimeout(timer)
    }
  })()
}

const onDownloaded = () => {
  isIos && (buttonDisabled.value = false)
  downloaded = true
  if (isIos) {
    buttonInnerText.value = '一键信任'
  } else {
    buttonInnerText.value = '下载完成'
  }
}

onMounted(() => {
  // window.TySCM({
  //   appKey: 'trgmbw', // 填入分配到的 AppKey 值
  //   // tfAppKey: 'OXdjbFk4cD', // 如果是 tf 签，需填入 tf 签的 AppKey 值
  //   onready: function (o) {
  //     // 进行下载按钮的点击事件绑定
  //     document.getElementById('download').addEventListener('click', function () {
  //       // 进行唤醒或安装
  //       o.wakeupOrInstall(function (profileUrl) {
  //         // 进行一键信任按钮的点击事件绑定
  //         if (isIos) {
  //           document.getElementById('trust').addEventListener('click', function () {
  //             // 进行一键信任
  //             window.location.href = profileUrl
  //           })
  //         }
  //       })
  //     })
  //   }
  // })
})
</script>

<template>
  <div class="container">
    <div class="top-block">
      <img src="../assets/img/Coinbays3.png" alt="logo" class="logo" />
      <div class="text1">
        <p>THE MOST TRUSTED&</p>
        <p>SECURE CRYPTO WALLET</p>
      </div>
      <div class="text2">
        <p>Buy, store, exchange & earn crypto.</p>
        <p>Join 10 million+ people using coinbays Wallet</p>
      </div>
      <div class="img-phone-container">
        <img src="../assets/img/iphone13.png" alt="iphone13" class="iphone13">
      </div>
      <div class="download-container">
        <img src="../assets/img/ios-download.png" alt="ios" class="ios">
        <img src="../assets/img/android-download.png" alt="android" class="android">
      </div>
      <div class="part2-container">
        <p class="title">Multi-chain, Easy to Use</p>
        <div class="tips-box">
          <p>We support all the leading chains/cryptocurrencies</p>
          <p>(Ethereum, TRX, BSC)</p>
        </div>
        <div class="icon-pg-container">
          <img src="../assets/img/coin1.png" alt="coin1" class="coin1">
          <img src="../assets/img/coin2.png" alt="coin2" class="coin2">
          <img src="../assets/img/coin3.png" alt="coin3" class="coin3">
        </div>
      </div>
      <div class="part3-container">
        <img src="../assets/img/part3-logo.png" alt="part3-logo" class="part3-logo" />
        <div class="text1">
          <p>ANYTIME,ANYWHERE</p>
        </div>
        <div class="text2">
          <p>Cross Chains, Conveninet and Decentralizad,</p>
          <p>All in Here</p>
        </div>
        <img src="../assets/img/part3-bottom.png" alt="part3-bottom" class="part3-bottom" />
        <div class="text1">
          <p>OPEN-SOURCES AND SAFETY</p>
        </div>
        <div class="text2">
          <p>The private key is stored in your device and protected</p>
          <p>with many layers</p>
        </div>
      </div>
      <div class="part2-container">
        <p class="title">GET THE WALLET APP NOW!</p>
        <div class="tips-box">
          <p>The most trusted & secure crypto wallet</p>
        </div>
        <div class="download-container">
          <img src="../assets/img/ios-download.png" alt="ios" class="ios">
          <img src="../assets/img/android-download.png" alt="android" class="android">
        </div>
        <div class="tips-box">
          <p>Copyright &copy; 2021 Coinbays Ltd.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --swiper-navigation-size: 6.66667vw;
}

@media screen and (max-width: 340px) {
  .container .top-block {
    min-height: 630px;
  }
}

.container {
  text-align: center;
  width: 100%;
  background: #161f27;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}

.container .top-block {
  height: 100%;
  position: relative;
  padding-top: 6.66667vw;
  background-image: linear-gradient(180deg, #E5E5F2 0%, #EFEFF8 100%);
}

.container .top-block .logo {
  margin: 0 auto 5.33333vw;
  width: 32.90933vw;
  height: 6.93333vw;
}

.container .top-block .text1 {
  margin: 6.5vw auto 5.33333vw;
  text-align: center;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #0054B1;
}

.container .top-block .text2 {
  margin: 0 auto 5.33333vw;
  text-align: center;
  line-height: 4.65vw;
}

.img-phone-container {
  width: 100%;
  margin: 0 auto;
}
.img-phone-container img {
  width: 65%;
}
.download-container {
  width: 100%;
  margin: 7.5vw auto 4.5vw;
}
.download-container img {
  margin-top: 5.5vw;
  width: 65%;
}

.part2-container {
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 10vw;
}

.part2-container .title{
  text-align: center;
  font-size: 18px;
  margin: 0 auto 5.33333vw;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #0054B1;
}

.part2-container .tips-box{
  margin: 0 auto;
  text-align: center;
  color: #1F335E;
  padding-bottom: 5.33333vw;
}

.icon-pg-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10vw;
  padding-left: 10vw;
  padding-right: 10vw;
}

.icon-pg-container img{
  width: 20vw;
  border: 1px dotted #1F335E;
}
.part3-container {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-top: 10vw;
}
.part3-container .part3-logo {
  margin: 0 auto 5.33333vw;
  width: 25.90933vw;
  height: 36.93333vw;
  border: 1px dotted #313131;
}

.part3-container .part3-bottom {
  margin: 0 auto 5.33333vw;
  width: 55.90933vw;
  height: 35.93333vw;
  border: 1px dotted #313131;
}
</style>
