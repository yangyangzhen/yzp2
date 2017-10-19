﻿(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'杨祯培',
        ab:'',
        name1:'杨祯培',
        phone:'13235910563',
        phone1:'13235910563',
        createTime:'2017-9-28 15:30:00',
        email:'1415200861@qq.com',
        hylx:'111'
      });
    });
  }])
})();
