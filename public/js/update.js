new Vue({
    el:"#main",
    data() {
      return {
        uid: location.search.split("=")[1],
        list: [],
        user_name: "",
        phone: "",
        address: ""
      };
    },
    components: {},
    created() {
      this.getcontent(); 
    },
    methods: {
      getcontent() {  
        console.log("uid="+this.uid);
        var url = "users/search?uid=" + this.uid;
        this.$http.get(url).then(result => {
          if (result.data.code == 1) {
            this.list = result.data.msg[0];
          } else {
            alert("加载失败");
          }
        });
      },
      confirm() {
        var uid = this.uid;
        var user_name = this.user_name;
        if (!user_name) {
          user_name = this.list.user_name;
        }
        var phone = this.phone;
        if (!phone) {
          phone = this.list.phone;
        }
        var address = this.address;
        if (!address) {
          address = this.list.address;
        }
        console.log(uid, user_name, phone, address);
        var url = "users/update";
        var obj = {
          uid: uid,
          user_name: user_name,
          phone: phone,
          address: address
        };
        console.log(obj);
        this.$http.post(url, obj,{emulateJSON: true}).then(result => {
          if (result.data.code == 1) {
            window.location = "http://localhost:3000/index.html";
          } else {
            alert("更新失败");
          }
        });
      }
    }
  })