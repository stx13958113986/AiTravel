
Vue.filter("dateFormat", function (datestr, pattern = "YYYY-MM-DD") {
    return new Date(datestr).toLocaleString();
}
);
new Vue({
    el: "#comment",
    data() {
        return {
            lid: location.search.split("=")[1],
            uname: "",
            list: [],
            msg: "",
            pageIndex: 0, //当前显示的页码
            pageCount: "",
            pre: {
                page: true
            },
            nex: {
                page: false
            },
            pa:'pno_active',  
        };
    },
    components: {},
    created() {
        this.getcontent();
        this.getComment();
    },
    methods: {
        getcontent() {

            var url = "users/islogin"
            this.$http.get(url).then(result => {
                if (result.data.ok == 1) {
                    this.uname = result.data.uname;
                } else {

                }
            });
        },
        postComment() {
            var lid = this.lid;
            var content = this.msg;
            var uname = this.uname
            var url = "comment/saveComment";
            var obj = {
                lid: lid,
                content: content,
                uname: uname
            };
            this.$http.post(url, obj, {
                emulateJSON: true
            }).then(result => {
                if (result.data.code == 1) {
                    window.history.go(0);
                } else {
                    alert("你还未登录");
                }
            });
        },
        getComment() {
            var url = "comment/getComment?lid=" + this.lid;
            url += "&pno=" + this.pageIndex;
            this.$http.get(url).then(result => {
                this.list = result.body.products;
                this.pageCount = result.body.pageCount;
            });
        },
        go(i) {
            this.pageIndex = i;
            console.log("pageIndex="+this.pageIndex)   
            console.log("pageCount="+this.pageCount)  
            if (this.pageIndex==0) {
                this.pre.page= true;
            }else{
                this.pre.page= false;
            }
            if (this.pageIndex == this.pageCount-1) {
                this.nex.page=true;
            }else{
                this.nex.page=false;
            }
            this.getComment();
        },
        next() {
            if (this.pageIndex < this.pageCount - 1) {
                this.pageIndex++;
                this.pre.page= false;
                this.getComment();
            }
            if (this.pageIndex == this.pageCount-1) {
                this.nex.page=true;
            }
        },
        prev() {
            if (this.pageIndex >= 1) {
                this.pageIndex--;
                this.getComment();
            }
            if (this.pageIndex == 0) {
                this.pre.page = true;
            } 
            if (this.pageIndex < this.pageCount - 1) {
                this.nex.page= false;
            }
        }

    }
})