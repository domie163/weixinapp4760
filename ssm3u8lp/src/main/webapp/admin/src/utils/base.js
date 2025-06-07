const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm3u8lp/",
            name: "ssm3u8lp",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm3u8lp/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "论坛小程序"
        } 
    }
}
export default base
