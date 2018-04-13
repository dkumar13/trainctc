///<reference path="./angular.js" />

let pnr, pnrVal, xhr, parjsn;
let imgdata;
let getclick

let myApp = angular.module("myModule", ["ngRoute"]);

myApp.controller("myController", function ($scope, $http) {

    $scope.getpnr = function () {

        pnr = document.getElementById("getval");
        //alert("PNR Value = " + pnr.value)
        if (pnr != "undefined" || pnr != "null") {

            $http({
                method: "GET",
                url: "https://api.railwayapi.com/v2/pnr-status/pnr/" + pnr.value + "/apikey/2afh9rxhwo/"
            }).then(
                function (response) {
                    $scope.data = response.data;
                    console.log($scope.data)
                    console.log($scope.data.passengers[0])
                    //alert(pnr)

                    allstyle();
                    //pnr.style.marginLeft="90px";

                    //$digest
                },
                function (response) {
                    $scope.status = response.status;
                    console.log($scope.status)
                });
        }
    }
    $scope.trnno = function () {

        var pnr = document.getElementById("gettn");
        var dte = document.getElementById("getdat");
        //alert("PNR Value = " + pnr.value)
        if (pnr != "undefined" || pnr != "null") {
            
            $http({
                method: "GET",
                url: "https://api.railwayapi.com/v2/live/train/" + pnr.value + "/date/" + dte.value + "/apikey/2afh9rxhwo/"
            }).then(
                function (response) {
                    $scope.data = response.data;
                    console.log($scope.data)
                    //console.log($scope.data.passengers[0])
                    //alert(pnr)
                    // document.getElementById("displcss").style.display = "block";
                    //$digest
                },
                function (response) {
                    $scope.status = response.status;
                    console.log($scope.status)
                });
                seatavcss();
        }
    }

    $scope.checkcss = function (){

        document.getElementById("pagdat").style.marginTop = "125px";

    }

})











myApp.controller("allImages", function ($scope) {

    imgdata = {
        logo: "./trn_bck2.jpg"
    }

    $scope.imgdata = imgdata;
})


myApp.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "main.html",
        controller: "addevent"
    })
        .when("/pnr", {
            templateUrl: "pnr.html",
            controller: "myController"

        })
        .when("/seat", {
            templateUrl: "seat.html",
            controller: "myController"

        })
        .otherwise({
            templateUrl: "main.html"
        })

})

myApp.controller("addevent", function ($scope, $timeout) {

    $timeout(() => {
        getclick = document.getElementById("dismen")

    }, 1000)

    $scope.hidedata = () => {
        document.getElementById("trndl1").style.display = "flex";
        getclick.style.display = "none"
        document.getElementById("pagdat").style.marginTop = "0px";

    }

})


const allstyle = () => {

    document.getElementById("pagdat").style.marginTop = "0px";
    document.getElementById("getval").style.marginLeft = "95px";
    document.getElementById("pnrchart").style.display = "block";
    document.getElementById("jrnif").style.display = "block";
    document.getElementById("displcss").style.display = "block";
}

const seatavcss = () =>{

    document.getElementById("data").style.display = "block";
    document.getElementById("pagdat").style.marginTop = "0px";
    document.getElementById("gettn").style.marginLeft = "221px";
}