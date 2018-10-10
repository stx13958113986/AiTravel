<template>
  <div>
 <header id="header">
<nav v-if="!islogin" id="signout" class="navbar navbar-default navbar-fixed-top noBorder" role="navigation">
	<div class="container">

		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand brandStyle" href="#">AI Travel</a>
		</div>

		<div class="collapse navbar-collapse noPadding" id="myNavbar">
			<div class="navbar-right menustyle">
				<ul class="nav navbar-nav">
					<li><a href="/">
							<p>网站首页</p>
						</a></li>
					<li><a href="/selection">
							<p>甄选旅程</p>
						</a></li>
					<li><a href="/private">
							<p>私人订制</p>
						</a></li>
					<li><a href="/about_us">
							<p>关于我们</p>
						</a></li>
					<li><a href="/user_reg">
							<p>注册</p>
						</a></li>
					<li><a href="/user_login">
							<p>登录</p>
						</a></li>
				</ul>
			</div>
		</div>

	</div>
</nav>
 <nav v-else="" id="signin" class="navbar navbar-default navbar-fixed-top noBorder" role="navigation">
	<div class="container">

		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand brandStyle" href="#">AI Travel</a>
		</div>

		<div class="collapse navbar-collapse noPadding" id="myNavbar">
			<div class="navbar-right menustyle">
				<ul class="nav navbar-nav">
					<li><a href="/">
							<p>网站首页</p>
						</a></li>
					<li><a href="/selection">
							<p>甄选旅程</p>
						</a></li>
					<li><a href="/privated">
							<p>私人订制</p>
						</a></li>
					<li><a href="/about_us">
							<p>关于我们</p>
						</a></li>
					<li><a href="/">
							<p><span style="color:rgb(148, 147, 223)" id="uname" v-text="uname"></span></p>
						</a></li>
					<li><a href="javascript:;">
							<p  @click="signout()">退出</p>
						</a></li>
				</ul>
			</div>
		</div>

	</div>
</nav> 
</header>
  </div>
</template>
<script>
export default {
  name: "tr-header",
  data() {
    return {
      keyword: "",
      islogin: false,
      uname: ""
    };
  },
  mounted() {
		var self = this;
		
    this.$http.get("http://localhost:3000/users/islogin").then(res => {
      if (res.data.ok == 1) {
        self.islogin = true;
        self.uname = res.data.uname;
      } else self.islogin = false;
    });
  },

  methods: {
    signout() {
      this.$http.get("http://localhost:3000/users/signout").then(res => {
        location.href = `http://127.0.0.1:3001/`;
      });
    }
  }
};
</script>
<style scoped>
body {
  font-family: Arial, sans-serif;
  width: 100%;
  padding-top: 110px;
}

a {
  color: #8d736c !important;
}

.navbar {
  padding: 25px 0;
  background-color: #fff;
  transition: padding 0.4s;
}
.navbar.scrolled {
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  padding: 0px 0;
}

#myNavbar {
  overflow-x: hidden;
}

#myNavbar ul li:last-child a {
  padding-right: 0;
}

#myNavbar ul li {
  padding: 0 7px;
}
#myNavbar ul li a p {
  transition: all 1s;
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  -ms-transition: all 1s;
  -o-transition: all 1s;
}
#myNavbar ul li:hover a p {
  color: #1baadb;
}
.brandStyle {
  color: #487b83 !important;
  font-family: Cabin, sans-serif;
  font-size: 30px;
}

.menustyle {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
}

.noPadding {
  padding: 0;
}

.noBorder {
  border: 0;
}
@media (max-width: 992px) {
  body {
    padding-top: 76px;
  }

  li {
    padding-left: 8px;
  }

  h1 {
    margin-top: 80px;
  }

  .navbar {
    padding: 16px 0;
  }
}
</style>