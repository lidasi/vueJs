<template>
  <div class="foot">
    <img src="../assets/logo.png"/>
    <div class="email">
      <p>联系我：844133353@qq.com</p>
      <a><p>Fork me on GitHub</p></a>
    </div>
  </div>
</template>

<style>
.foot {
    width: 100%;
  height: 100px;
  background-color: #262627;
  display: flex;
  color: #fff;
  justify-content: space-around;
  align-items: center;
}
.email{
  font-size: 13px;
}
.email p{
  margin: 10px 0;
}
.foot img{
    height: 20px;
    margin-left: 2%;
    padding-right: 2%;
    border-right: 1px solid #666;
}

</style>
