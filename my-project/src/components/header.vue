<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="logo">
        <a href="/home"><img src="../assets/touxiang.png" alt width="210"></a>
      </div>
      <ul class="nav">
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/introduce">不会画画</router-link></li>
        <li><router-link to="/employment">的歌手</router-link></li>
        <li><router-link to="/consult">不是一个好的程序猿</router-link></li>
      </ul>
    </div>
  </div>
</template>
<style>
.header{
  width:100%;
  height:100%;
  color:#fff;
}
.header-wrapper{
  width:100%;
  height:200px;
}
.logo{
  width:210px;
  height:100px;
  margin-top:10px;
  float:left;
}
.nav{
  width:700px;
  height:100px;
  font-size:15px;
  float:right;
}
.nav li{
  float:left;
  margin-right:30px;
  height:34px;
  line-height:34px;
  overflow:hidden;
  margin-top:34px;
}
.nav li:last-child{
  margin-right:0;
}
.nav a{
  display:inline-block;
  padding:0 13 5 8px;

  color:#fff;
  border-radius:15px;
}
.nav a.router-link-active{
  background:#c10514;
}
</style>
