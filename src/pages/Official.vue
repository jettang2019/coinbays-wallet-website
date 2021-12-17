<script setup>
</script>

<template>
  <div class="official-page">
    <header class="header bg1">
      <div class="bg2">
        <img src="../assets/img/Coinbays3.png" alt="logo" class="logo"/>
        <div class="middle-wrapper">
          <div class="text1">
            <p>THE MOST TRUSTED&</p>
            <p>SECURE CRYPTO WALLET</p>
          </div>
          <div class="text2">
            <p>Buy, store, exchange & earn crypto.</p>
            <p>Join 10 million+ people using coinbays Wallet</p>
          </div>
          <div class="download-container">
            <img src="../assets/img/android-download.png" alt="android" class="android">
            <img src="../assets/img/ios-download.png" alt="ios" class="ios">
          </div>
        </div>
        <div class="img-phone-container">
          <img src="../assets/img/iphone13.png" alt="iphone13" class="iphone13">
        </div>
      </div>
    </header>
    <main class="main">
      <section class="update-content">
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
          <img src="../assets/img/part3-logo.png" alt="part3-logo" class="part3-logo"/>
          <div class="text1 tips1">
            <p>ANYTIME,  ANYWHERE</p>
          </div>
          <div class="text2 tips2">
            <p>Cross Chains, Conveninet and Decentralizad,All in Here</p>
          </div>
          <img src="../assets/img/part3-bottom.png" alt="part3-bottom" class="part3-bottom"/>
          <div class="text1 tips3">
            <p>OPEN-SOURCES AND SAFETY</p>
          </div>
          <div class="text2 tips4">
            <p>The private key is stored in your device and protected</p>
            <p>with many layers of encryption</p>
          </div>
        </div>
        <div class="part2-container">
          <div class="tips-box">
            <p>Copyright &copy; 2021 Coinbays Ltd.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style>
::-webkit-scrollbar-track-piece {
  background: #808893;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background: #566375;
  border-radius: 20px;
}
</style>
<style lang="less" scoped>
.official-page {
  &::-webkit-scrollbar-track-piece {
    background: #808893;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #566375;
    border-radius: 20px;
  }

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  user-select: none;
  min-width: 1200px;
  background: #12171b;

  .logo {
    width: 235.44px;
    //height: 50.53px;
    position: absolute;
    top: 29px;
    left: 140px;
    z-index: 2;
  }

  .bg1 {
    background: linear-gradient(180deg, #E5E5F2 0%, #EFEFF8 100%);;
    background-size: cover;
  }

  .header {
    height: 666px;
    padding: 19px 0 0;

    .bg2 {
      margin: 0 auto;
      max-width: 1340.81px;
      height: 666px;
      position: relative;
    }

    .bg2:after {
      content: "";
      clear: both;
    }

    .middle-wrapper {
      position: absolute;
      width: 365px;
      top: 20%;
      left: 140px;

      .text1 {
        margin: 0 auto;
        text-align: left;
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #0054B1;
      }

      .text2 {
        margin: 0 auto;
        text-align: left;
      }

      .download-container {
        width: 100%;
        margin: 0 auto;
      }

      .download-container img {
        margin-top: 15px;
        width: 45%;
      }

      .download-container img:first-child {
        margin-right: 15px;
      }
    }

    .img-phone-container {
      width: 260px;
      margin: 0 auto;
      position: absolute;
      right: 22%;
      top: 45px;

      img {
        width: 100%;
      }
    }
  }

  .main {
    color: white;
    padding-bottom: 90px;
    background-color: #FFF;

    .update-content {
      margin: 0 auto;
      max-width: 1340.81px;
      height: 666px;
      position: relative;

      .part2-container {
        width: 100%;
        margin: 0 auto;
        padding-top: 45px;
      }

      .part2-container .title {
        text-align: center;
        font-size: 18px;
        margin: 0 auto;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #0054B1;
      }

      .part2-container .tips-box {
        margin: 0 auto;
        text-align: center;
        color: #1F335E;
      }

      .icon-pg-container {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .icon-pg-container img {
        margin-top: 20px;
        width: 118px;
        margin-right: 8px;
        margin-left: 8px;
      }
    }

    .part3-container {
      width: 80%;
      margin: 35px auto 0;
      text-align: center;
      background: #EEEEF7;
      position: relative;
      height: 656px;
    }

    .part3-container:after {
      content: '';
      clear: both;
    }

    .part3-container .part3-logo {
      width: 188px;
      height: 280px;
      position: absolute;
      top: 45px;
      left: 145px;
    }

    .text1 {
      margin: 0 auto;
      text-align: left;
      font-size: 24px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 500;
      color: #0054B1;
    }

    .tips1 {
      position: absolute;
      right: 335px;
      top: 85px;
    }

    .tips2 {
      position: absolute;
      right: 180px;
      top: 135px;
    }

    .tips3 {
      position: absolute;
      left: 65px;
      bottom: 155px;
    }

    .tips4 {
      position: absolute;
      left: 65px;
      bottom: 100px;
    }


    .text2 {
      margin: 0 auto;
      text-align: left;
      color: #1F335E;
    }

    .part3-container .part3-bottom {
      margin: 0 auto;
      width: 338px;
      height: 241px;
      position: absolute;
      bottom: 65px;
    }
  }

}
</style>
