console.log("a模块213213123");
define(["b"], function (obj) {
    console.log(obj);
    return {
        name: "amodule"
    }
})