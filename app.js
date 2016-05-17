(function () {
    'use strict';

    var app = angular.module('myApp', []);

    app.controller('mainController', ['$scope', function ($scope) {

        var i, j, k, l,
            uniqueDates,
            uniqueSources,
            uniqueTargets,
            allSources = {},
            allTargets = {},
            formattedData = [];
        
        var rawData = [
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 143511206,
                'annum': 1455602400000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1456466400000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8165055,
                'annum': 1456207200000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25408360,
                'annum': 1456207200000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1454306400000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 662607,
                'annum': 1455775200000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8162677,
                'annum': 1456120800000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1456466400000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123145,
                'annum': 1454997600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 593412,
                'annum': 1456725600000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 664846,
                'annum': 1456725600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 160351773,
                'annum': 1454738400000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1454738400000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11113132,
                'annum': 1454738400000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123448,
                'annum': 1455343200000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 99093,
                'annum': 1456552800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59185841,
                'annum': 1456552800000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8131545,
                'annum': 1454565600000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1454417,
                'annum': 1455084000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1455170400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1486222,
                'annum': 1455170400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13561555,
                'annum': 1455429600000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 172667605,
                'annum': 1455429600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1455429600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1490868,
                'annum': 1455429600000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11145809,
                'annum': 1455256800000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7575,
                'annum': 1455429600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5225271,
                'annum': 1455516000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8086996,
                'annum': 1455602400000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1455602400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1493176,
                'annum': 1455602400000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25387589,
                'annum': 1455602400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1493022,
                'annum': 1455688800000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6425488,
                'annum': 1455516000000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278894,
                'annum': 1455775200000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1455861600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 592210,
                'annum': 1455861600000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1456466400000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1455688800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5228793,
                'annum': 1455688800000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 143066781,
                'annum': 1455170400000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 80039570,
                'annum': 1456207200000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1454997600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 590861,
                'annum': 1454997600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 987169,
                'annum': 1454997600000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1455429600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5225271,
                'annum': 1455429600000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11154331,
                'annum': 1455429600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8100927,
                'annum': 1456380000000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1456380000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 991923,
                'annum': 1456466400000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1454392800000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11085090,
                'annum': 1454392800000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12016776,
                'annum': 1455084000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 512599462,
                'annum': 1455084000000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 893201750,
                'annum': 1455084000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 514197841,
                'annum': 1455516000000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1455516000000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1455775200000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 174158278,
                'annum': 1456552800000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1456552800000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7628,
                'annum': 1456552800000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1454652000000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11106101,
                'annum': 1454652000000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 660136,
                'annum': 1454911200000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1454911200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 532932,
                'annum': 1454911200000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 148285,
                'annum': 1455256800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 585598542,
                'annum': 1454306400000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7551,
                'annum': 1454997600000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1455170400000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11138849,
                'annum': 1455170400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 149961424,
                'annum': 1456207200000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1453834,
                'annum': 1454911200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 986847,
                'annum': 1454911200000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 142293677,
                'annum': 1454479200000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 661358,
                'annum': 1455256800000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24068148,
                'annum': 1454306400000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8124768,
                'annum': 1454306400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13485669,
                'annum': 1454392800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1454479200000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1454479200000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12002572,
                'annum': 1454479200000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12005050,
                'annum': 1454565600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13570126,
                'annum': 1455602400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 281878177,
                'annum': 1455602400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 591748,
                'annum': 1455602400000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1454738400000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1455429600000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7578,
                'annum': 1455602400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 910252,
                'annum': 1456725600000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1262099,
                'annum': 1456725600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 535180,
                'annum': 1456725600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 532736,
                'annum': 1454652000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 149159834,
                'annum': 1455688800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1493469,
                'annum': 1455688800000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6429662,
                'annum': 1455688800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 147630630,
                'annum': 1454652000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1491872,
                'annum': 1455084000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 280277418,
                'annum': 1454479200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 590104,
                'annum': 1454479200000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6431549,
                'annum': 1455775200000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12042230,
                'annum': 1456120800000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 664823,
                'annum': 1456552800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 905482,
                'annum': 1454392800000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1454392800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 149546091,
                'annum': 1455861600000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 660118,
                'annum': 1454824800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 147445480,
                'annum': 1454565600000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1261517,
                'annum': 1456380000000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1456552800000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 80176056,
                'annum': 1456639200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1507997,
                'annum': 1456639200000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1454479200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 150892907,
                'annum': 1456639200000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 142671930,
                'annum': 1454824800000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1456639200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1456639200000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 279358,
                'annum': 1456639200000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1257701,
                'annum': 1454479200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 532452,
                'annum': 1454479200000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8129247,
                'annum': 1454479200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 909380,
                'annum': 1456293600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 534666,
                'annum': 1456293600000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1454565600000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1454738400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 590552,
                'annum': 1454824800000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25346492,
                'annum': 1454997600000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6416007,
                'annum': 1454997600000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123646,
                'annum': 1455775200000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 171770667,
                'annum': 1454738400000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79645203,
                'annum': 1454738400000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11117462,
                'annum': 1454911200000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 67215,
                'annum': 1454911200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 589515196,
                'annum': 1456120800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 516596128,
                'annum': 1456120800000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 99103,
                'annum': 1456639200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59077079,
                'annum': 1455948000000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8161136,
                'annum': 1455948000000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8158914,
                'annum': 1455861600000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1456293600000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1457664,
                'annum': 1456293600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 592823,
                'annum': 1456293600000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 144602603,
                'annum': 1456552800000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1454392800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 147970940,
                'annum': 1454911200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 162650530,
                'annum': 1456725600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5241425,
                'annum': 1456725600000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1455256800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 516051224,
                'annum': 1455948000000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 895477593,
                'annum': 1455948000000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1455343200000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7606,
                'annum': 1456120800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 514197841,
                'annum': 1455429600000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 662103,
                'annum': 1455602400000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1455602400000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123763,
                'annum': 1456120800000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1260863,
                'annum': 1456207200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 148026310,
                'annum': 1454997600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 282394907,
                'annum': 1455948000000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 173359829,
                'annum': 1455948000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13600915,
                'annum': 1455948000000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1456911,
                'annum': 1455948000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 908940,
                'annum': 1456120800000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1456120800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 282961442,
                'annum': 1456466400000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 80140565,
                'annum': 1456466400000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 174352450,
                'annum': 1456725600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 992541,
                'annum': 1456725600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1454738400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 148771968,
                'annum': 1455343200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 910064,
                'annum': 1456552800000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1456552800000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98251,
                'annum': 1454565600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1484784,
                'annum': 1455084000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 281174172,
                'annum': 1455170400000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278678,
                'annum': 1455343200000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 143346903,
                'annum': 1455429600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 591457,
                'annum': 1455429600000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123034,
                'annum': 1454738400000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1455256800000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12023859,
                'annum': 1455256800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5223953,
                'annum': 1455256800000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1455516000000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12027102,
                'annum': 1455516000000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11156124,
                'annum': 1455516000000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278680,
                'annum': 1455516000000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1455602400000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278766,
                'annum': 1455602400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7574498,
                'annum': 1455602400000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6427521,
                'annum': 1455602400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 280545985,
                'annum': 1454652000000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 171650864,
                'annum': 1454652000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1455688800000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79964334,
                'annum': 1455861600000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7602,
                'annum': 1455861600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8098953,
                'annum': 1456293600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 517920976,
                'annum': 1456466400000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503349175,
                'annum': 1456466400000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1456466400000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123592,
                'annum': 1455688800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 149354733,
                'annum': 1455775200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1499919,
                'annum': 1456207200000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674141,
                'annum': 1454997600000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7609,
                'annum': 1456207200000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12027102,
                'annum': 1455429600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3732648,
                'annum': 1455429600000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12051146,
                'annum': 1456380000000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11215985,
                'annum': 1456380000000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 144494796,
                'annum': 1456466400000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1456466400000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6447343,
                'annum': 1456552800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 159811563,
                'annum': 1454392800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3675723,
                'annum': 1454392800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1455084000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 588217994,
                'annum': 1455516000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 588887077,
                'annum': 1455775200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3785165,
                'annum': 1456552800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13642357,
                'annum': 1456552800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 283014183,
                'annum': 1456552800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8074707,
                'annum': 1454652000000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1454911200000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24145057,
                'annum': 1455256800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 533476,
                'annum': 1455256800000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348116,
                'annum': 1454306400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8081864,
                'annum': 1455170400000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 279095,
                'annum': 1456207200000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 142079046,
                'annum': 1454306400000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1452501,
                'annum': 1454392800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 985363,
                'annum': 1454392800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8071579,
                'annum': 1454479200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8073115,
                'annum': 1454565600000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1454565600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1455602400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7571785,
                'annum': 1455429600000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7573,
                'annum': 1455256800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59192474,
                'annum': 1456725600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58851152,
                'annum': 1454652000000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24101685,
                'annum': 1454652000000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6410861,
                'annum': 1454652000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 906346,
                'annum': 1454824800000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25337048,
                'annum': 1454824800000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 142953580,
                'annum': 1455084000000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 172762339,
                'annum': 1455516000000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79829207,
                'annum': 1455516000000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17862991,
                'annum': 1455516000000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1455688800000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1260105,
                'annum': 1455688800000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 897217577,
                'annum': 1456639200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7563655,
                'annum': 1455084000000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674141,
                'annum': 1454479200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13585747,
                'annum': 1455775200000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1456378,
                'annum': 1455775200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 592021,
                'annum': 1455775200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1494522,
                'annum': 1455775200000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25394699,
                'annum': 1455775200000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 124102,
                'annum': 1456725600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1454306400000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7511,
                'annum': 1454306400000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1454392800000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 144060192,
                'annum': 1456120800000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98992,
                'annum': 1456380000000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25414056,
                'annum': 1456380000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13643992,
                'annum': 1456639200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 283212801,
                'annum': 1456639200000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17992018,
                'annum': 1456639200000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7628,
                'annum': 1456639200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 905720,
                'annum': 1454479200000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1454479200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8076277,
                'annum': 1454824800000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12011199,
                'annum': 1454824800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 162640977,
                'annum': 1456639200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8103487,
                'annum': 1456639200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3789767,
                'annum': 1456639200000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1456293600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13502331,
                'annum': 1454565600000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1453106,
                'annum': 1454565600000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 147699,
                'annum': 1454565600000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348404,
                'annum': 1454738400000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17791933,
                'annum': 1454824800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1482471,
                'annum': 1454824800000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7544,
                'annum': 1454824800000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 149324,
                'annum': 1456639200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5233708,
                'annum': 1455948000000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 279009,
                'annum': 1455948000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1454997600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13518206,
                'annum': 1454738400000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17787546,
                'annum': 1454738400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 160489880,
                'annum': 1454911200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1454911200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3704793,
                'annum': 1454911200000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278278,
                'annum': 1454911200000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25419900,
                'annum': 1456639200000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1455861600000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17954543,
                'annum': 1456293600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 991202,
                'annum': 1456293600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 511919995,
                'annum': 1454824800000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 892572789,
                'annum': 1454824800000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 897376378,
                'annum': 1456725600000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1454997600000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1454997600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 510320451,
                'annum': 1454479200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 587811084,
                'annum': 1455256800000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 893692119,
                'annum': 1455256800000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348631,
                'annum': 1455256800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1455343200000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8148728,
                'annum': 1455343200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 588024254,
                'annum': 1455343200000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 893933150,
                'annum': 1455343200000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348673,
                'annum': 1455343200000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 80108255,
                'annum': 1456380000000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1456380000000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7617,
                'annum': 1456380000000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1455602400000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1456207200000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6438985,
                'annum': 1456207200000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98876,
                'annum': 1456207200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1497838,
                'annum': 1455948000000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1456120800000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24196463,
                'annum': 1456120800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 534382,
                'annum': 1456120800000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 147968,
                'annum': 1454997600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 283212911,
                'annum': 1456725600000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 144722975,
                'annum': 1456725600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5216737,
                'annum': 1454738400000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 148327,
                'annum': 1455343200000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1455688800000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17887017,
                'annum': 1455688800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 591914,
                'annum': 1455688800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 280978099,
                'annum': 1455084000000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7559,
                'annum': 1455084000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 591177,
                'annum': 1455170400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8084826,
                'annum': 1455343200000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1455343200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3728046,
                'annum': 1455343200000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1455429600000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1455386,
                'annum': 1455429600000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 147347,
                'annum': 1454306400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8085551,
                'annum': 1455516000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1455516000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5226959,
                'annum': 1455602400000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 148413,
                'annum': 1455602400000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24162628,
                'annum': 1455602400000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1455602400000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674141,
                'annum': 1454652000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 989342,
                'annum': 1455688800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58981206,
                'annum': 1455516000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 907736,
                'annum': 1455516000000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1455516000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1455516000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 161489668,
                'annum': 1455775200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1455861600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1496187,
                'annum': 1455861600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 162085571,
                'annum': 1456293600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5236562,
                'annum': 1456293600000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 279150,
                'annum': 1456293600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 590423229,
                'annum': 1456466400000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 896774601,
                'annum': 1456466400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 161354800,
                'annum': 1455688800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8088731,
                'annum': 1455688800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1455688800000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12033078,
                'annum': 1455688800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13529026,
                'annum': 1454997600000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7621,
                'annum': 1456466400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3712042,
                'annum': 1455084000000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123194,
                'annum': 1455084000000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348838,
                'annum': 1455775200000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1455775200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 162504364,
                'annum': 1456552800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1456552800000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12056808,
                'annum': 1456552800000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 124094,
                'annum': 1456552800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 160218419,
                'annum': 1454652000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58877385,
                'annum': 1454911200000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8137467,
                'annum': 1454911200000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25346363,
                'annum': 1454911200000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 660523,
                'annum': 1454997600000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1455256800000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1259335,
                'annum': 1455256800000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123382,
                'annum': 1455256800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1455170400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5222153,
                'annum': 1455170400000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 171962529,
                'annum': 1454911200000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12045033,
                'annum': 1456207200000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6402654,
                'annum': 1454306400000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17737754,
                'annum': 1454392800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 589944,
                'annum': 1454392800000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674141,
                'annum': 1454392800000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11092185,
                'annum': 1454479200000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278151,
                'annum': 1454565600000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 172878167,
                'annum': 1455602400000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8136031,
                'annum': 1454738400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13553193,
                'annum': 1455256800000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17844077,
                'annum': 1455256800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7599304,
                'annum': 1456725600000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1456725600000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8175518,
                'annum': 1456725600000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6448509,
                'annum': 1456725600000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 659013,
                'annum': 1454392800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1454652000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 148230845,
                'annum': 1455084000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13562445,
                'annum': 1455516000000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 148819,
                'annum': 1455948000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 586267172,
                'annum': 1454565600000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1454565600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1455688800000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1456639200000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 122890,
                'annum': 1454479200000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 142503284,
                'annum': 1454652000000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24129089,
                'annum': 1455084000000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1258869,
                'annum': 1455084000000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17750618,
                'annum': 1454479200000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1452830,
                'annum': 1454479200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1454479200000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 149262,
                'annum': 1456466400000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 661673,
                'annum': 1455343200000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79931081,
                'annum': 1455775200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 989667,
                'annum': 1455775200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1455775200000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98746,
                'annum': 1455775200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 533908,
                'annum': 1455775200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1456120800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3761227,
                'annum': 1456120800000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11194613,
                'annum': 1456120800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 280099515,
                'annum': 1454306400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 589770,
                'annum': 1454306400000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674141,
                'annum': 1454306400000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24077123,
                'annum': 1454392800000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24221008,
                'annum': 1456380000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1456380000000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1456380000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 534864,
                'annum': 1456380000000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6443130,
                'annum': 1456380000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 590651576,
                'annum': 1456552800000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1456552800000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1456639200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58811286,
                'annum': 1454479200000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24085247,
                'annum': 1454479200000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1454824800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1454824800000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1454824800000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123038,
                'annum': 1454824800000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11231460,
                'annum': 1456639200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59125001,
                'annum': 1456293600000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8166901,
                'annum': 1456293600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 280414454,
                'annum': 1454565600000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 171867550,
                'annum': 1454824800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8094753,
                'annum': 1455948000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3756083,
                'annum': 1455948000000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11190747,
                'annum': 1455948000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1491633,
                'annum': 1454997600000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1456293600000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1453648,
                'annum': 1454738400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 986598,
                'annum': 1454738400000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1456639200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1456639200000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1260719,
                'annum': 1455948000000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1456293600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 509894626,
                'annum': 1454392800000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 891419320,
                'annum': 1454392800000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348411,
                'annum': 1454824800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 588659216,
                'annum': 1455688800000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503349016,
                'annum': 1456207200000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1456207200000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1456725600000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1456725600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1456725600000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1456725600000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12057026,
                'annum': 1456725600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8078428,
                'annum': 1454997600000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12014225,
                'annum': 1454997600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1499671,
                'annum': 1456120800000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 661681,
                'annum': 1455516000000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1456380000000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1457984,
                'annum': 1456380000000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348683,
                'annum': 1455429600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 148988046,
                'annum': 1455602400000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348736,
                'annum': 1455602400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 150161524,
                'annum': 1456293600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 909138,
                'annum': 1456207200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 159762493,
                'annum': 1454306400000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11077409,
                'annum': 1454306400000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 277878,
                'annum': 1454306400000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1455948000000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1455948000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59086227,
                'annum': 1456120800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1456120800000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1458260,
                'annum': 1456466400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59167372,
                'annum': 1456466400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 909842,
                'annum': 1456466400000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1456466400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 534992,
                'annum': 1456466400000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8171844,
                'annum': 1456466400000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1456725600000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17995103,
                'annum': 1456725600000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1458711,
                'annum': 1456725600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8075911,
                'annum': 1454738400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3699745,
                'annum': 1454738400000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24236036,
                'annum': 1456552800000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1456552800000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1261971,
                'annum': 1456552800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 535118,
                'annum': 1456552800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1495910,
                'annum': 1456552800000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25421518,
                'annum': 1456552800000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 172998325,
                'annum': 1455688800000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1454565600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1490661,
                'annum': 1454565600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 591014,
                'annum': 1455084000000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674141,
                'annum': 1455084000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13544918,
                'annum': 1455170400000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1454742,
                'annum': 1455170400000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7569,
                'annum': 1455170400000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79826045,
                'annum': 1455429600000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17860004,
                'annum': 1455429600000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1455516000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 161233330,
                'annum': 1455602400000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1455602400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13510454,
                'annum': 1454652000000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7537,
                'annum': 1454652000000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278622,
                'annum': 1455256800000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1455688800000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7584,
                'annum': 1455688800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7572224,
                'annum': 1455516000000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24154810,
                'annum': 1455516000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1493076,
                'annum': 1455516000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1455775200000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11176937,
                'annum': 1455775200000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1456655,
                'annum': 1455861600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 989955,
                'annum': 1455861600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1456293600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3768307,
                'annum': 1456293600000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1455688800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13611391,
                'annum': 1456207200000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 173665745,
                'annum': 1456207200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 592649,
                'annum': 1456207200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 990833,
                'annum': 1456207200000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17807485,
                'annum': 1454997600000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1454109,
                'annum': 1454997600000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278679,
                'annum': 1455429600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 162230038,
                'annum': 1456380000000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1456380000000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 279218,
                'annum': 1456380000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 150553574,
                'annum': 1456466400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 593159,
                'annum': 1456466400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5210596,
                'annum': 1454392800000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 148074,
                'annum': 1455084000000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348528,
                'annum': 1455084000000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1455084000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5241425,
                'annum': 1456552800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 593229,
                'annum': 1456552800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 992292,
                'annum': 1456552800000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1258489,
                'annum': 1454911200000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98552,
                'annum': 1455256800000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1455256800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1492412,
                'annum': 1455256800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 587123840,
                'annum': 1454997600000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 892948208,
                'annum': 1454997600000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 67215,
                'annum': 1454997600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3717925,
                'annum': 1455170400000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278528,
                'annum': 1455170400000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7544,
                'annum': 1454911200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 161941672,
                'annum': 1456207200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1456207200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 147258042,
                'annum': 1454479200000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123048,
                'annum': 1454911200000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98091,
                'annum': 1454306400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7545246,
                'annum': 1454306400000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1257301,
                'annum': 1454306400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1489934,
                'annum': 1454306400000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79509264,
                'annum': 1454392800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1454392800000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7518,
                'annum': 1454392800000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 660807,
                'annum': 1455084000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58868678,
                'annum': 1454738400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 906248,
                'annum': 1454738400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1491173,
                'annum': 1454738400000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98592,
                'annum': 1455429600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1455429600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1492964,
                'annum': 1455429600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 586495982,
                'annum': 1454652000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 281361002,
                'annum': 1455256800000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1455256800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 591313,
                'annum': 1455256800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 988081,
                'annum': 1455256800000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1456725600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1496331,
                'annum': 1456725600000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 142184672,
                'annum': 1454392800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7555140,
                'annum': 1454652000000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1454652000000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98336,
                'annum': 1454824800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7558195,
                'annum': 1454824800000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1454824800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1454824800000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1455516000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 591589,
                'annum': 1455516000000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 122855,
                'annum': 1454392800000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1455688800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 533908,
                'annum': 1455688800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 590776888,
                'annum': 1456639200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 518705046,
                'annum': 1456639200000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 147601,
                'annum': 1454479200000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1454479200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 985734,
                'annum': 1454479200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 282135150,
                'annum': 1455775200000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1455775200000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1455775200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7579234,
                'annum': 1455775200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 908372,
                'annum': 1455775200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5233708,
                'annum': 1456120800000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79471919,
                'annum': 1454306400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7547513,
                'annum': 1454392800000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 664133,
                'annum': 1456293600000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1456380000000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503349220,
                'annum': 1456552800000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 174258913,
                'annum': 1456639200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 593276,
                'annum': 1456639200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 160471508,
                'annum': 1454824800000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278275,
                'annum': 1454824800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5241425,
                'annum': 1456639200000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24212867,
                'annum': 1456293600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 280795541,
                'annum': 1454824800000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79649707,
                'annum': 1454824800000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1454824800000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674141,
                'annum': 1454824800000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123931,
                'annum': 1456293600000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1455948000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7561049,
                'annum': 1454997600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 589969336,
                'annum': 1456293600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1454738400000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7544,
                'annum': 1454738400000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1454911200000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1454911200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5216737,
                'annum': 1454911200000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348419,
                'annum': 1454911200000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 143176292,
                'annum': 1455256800000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 895825806,
                'annum': 1456120800000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348958,
                'annum': 1456120800000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98814,
                'annum': 1455861600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7581637,
                'annum': 1455861600000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1455861600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1493980,
                'annum': 1455861600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13619682,
                'annum': 1456293600000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 67215,
                'annum': 1454392800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 514846466,
                'annum': 1455688800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 589714527,
                'annum': 1456207200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 516676840,
                'annum': 1456207200000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 896032663,
                'annum': 1456207200000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1456725600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3790904,
                'annum': 1456725600000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11233445,
                'annum': 1456725600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 513428072,
                'annum': 1455256800000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79821793,
                'annum': 1455343200000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17855504,
                'annum': 1455343200000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1455948000000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98592,
                'annum': 1455343200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7571152,
                'annum': 1455343200000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24152760,
                'annum': 1455343200000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25358575,
                'annum': 1455343200000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1455343200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1456120800000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1455429600000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 279314,
                'annum': 1456466400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 534494,
                'annum': 1456207200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1494743,
                'annum': 1456207200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1454306400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5208734,
                'annum': 1454306400000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 142840045,
                'annum': 1454997600000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1260861,
                'annum': 1456120800000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6436856,
                'annum': 1456120800000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503349131,
                'annum': 1456380000000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1456380000000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1456380000000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6445274,
                'annum': 1456466400000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 80179370,
                'annum': 1456725600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1456725600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1456552800000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79897758,
                'annum': 1455688800000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1456068,
                'annum': 1455688800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58831142,
                'annum': 1454565600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7552695,
                'annum': 1454565600000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1454565600000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24093854,
                'annum': 1454565600000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1257917,
                'annum': 1454565600000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6408739,
                'annum': 1454565600000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 172202150,
                'annum': 1455084000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1455084000000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 172326392,
                'annum': 1455170400000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79759411,
                'annum': 1455170400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 161059459,
                'annum': 1455343200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5225271,
                'annum': 1455343200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 148932871,
                'annum': 1455429600000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 147848,
                'annum': 1454738400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8083353,
                'annum': 1455256800000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123449,
                'annum': 1455429600000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 148327,
                'annum': 1455429600000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79614426,
                'annum': 1454652000000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1454652000000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1453375,
                'annum': 1454652000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1479381,
                'annum': 1454652000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3745815,
                'annum': 1455775200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 282264541,
                'annum': 1455861600000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1456293600000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1456293600000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11209063,
                'annum': 1456293600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3739830,
                'annum': 1455688800000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278829,
                'annum': 1455688800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1456207200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 280834846,
                'annum': 1454997600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1454997600000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1455429600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1456380000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5238550,
                'annum': 1456380000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8080089,
                'annum': 1455084000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5220417,
                'annum': 1455084000000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11132074,
                'annum': 1455084000000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 67215,
                'annum': 1455084000000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348688,
                'annum': 1455516000000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1455516000000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1456552800000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11229493,
                'annum': 1456552800000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1458545,
                'annum': 1456552800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1506552,
                'annum': 1456552800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7558744,
                'annum': 1454911200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 906408,
                'annum': 1454911200000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6413874,
                'annum': 1454911200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58955213,
                'annum': 1455256800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 907316,
                'annum': 1455256800000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8146696,
                'annum': 1455256800000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6422318,
                'annum': 1455256800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 512169190,
                'annum': 1454997600000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17795570,
                'annum': 1454911200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8097018,
                'annum': 1456207200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1454306400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 146995966,
                'annum': 1454306400000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 171289687,
                'annum': 1454392800000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1454479200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5212283,
                'annum': 1454479200000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1454565600000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1455755,
                'annum': 1455602400000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1454738400000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24109400,
                'annum': 1454738400000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1454738400000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25333034,
                'annum': 1454738400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58981206,
                'annum': 1455429600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 511140404,
                'annum': 1454652000000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1455026,
                'annum': 1455256800000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25428079,
                'annum': 1456725600000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1454652000000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1258135,
                'annum': 1454652000000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8133819,
                'annum': 1454652000000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1258421,
                'annum': 1454824800000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6413353,
                'annum': 1454824800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1455516000000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123748,
                'annum': 1455948000000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 891900507,
                'annum': 1454565600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 908176,
                'annum': 1455688800000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503349236,
                'annum': 1456639200000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1456639200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58915000,
                'annum': 1455084000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 533194,
                'annum': 1455084000000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6418109,
                'annum': 1455084000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13494213,
                'annum': 1454479200000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79546612,
                'annum': 1454479200000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 124034,
                'annum': 1456466400000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7595,
                'annum': 1455775200000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1455775200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 161922418,
                'annum': 1456120800000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1456120800000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 149324,
                'annum': 1456725600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 985045,
                'annum': 1454306400000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 143837066,
                'annum': 1455861600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 149736167,
                'annum': 1455948000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7593184,
                'annum': 1456380000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 518327294,
                'annum': 1456552800000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1458632,
                'annum': 1456639200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7550030,
                'annum': 1454479200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3704066,
                'annum': 1454824800000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79581683,
                'annum': 1454565600000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674141,
                'annum': 1454565600000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7534,
                'annum': 1454565600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 511549436,
                'annum': 1454738400000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 67215,
                'annum': 1454738400000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12041883,
                'annum': 1455948000000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 658396,
                'annum': 1454306400000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98373,
                'annum': 1454997600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58894409,
                'annum': 1454997600000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 143406109,
                'annum': 1455516000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 590504,
                'annum': 1454738400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1480945,
                'annum': 1454738400000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1454911200000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 142611393,
                'annum': 1454738400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 148584663,
                'annum': 1455256800000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 664578,
                'annum': 1456466400000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1456120800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7598760,
                'annum': 1456639200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 535152,
                'annum': 1456639200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 908770,
                'annum': 1455948000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 534294,
                'annum': 1455948000000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6435611,
                'annum': 1455948000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 908554,
                'annum': 1455861600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1501723,
                'annum': 1456293600000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7613,
                'annum': 1456293600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 586826833,
                'annum': 1454824800000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 67215,
                'annum': 1454824800000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 142731964,
                'annum': 1454911200000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 894752467,
                'annum': 1455688800000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1455688800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5218150,
                'annum': 1454997600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3705553,
                'annum': 1454997600000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1455256800000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1455343200000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1455293,
                'annum': 1455343200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1489421,
                'annum': 1455343200000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6424392,
                'annum': 1455343200000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 173547809,
                'annum': 1456120800000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 80002756,
                'annum': 1456120800000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1456120800000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 173909921,
                'annum': 1456380000000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 894129715,
                'annum': 1455429600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 588424321,
                'annum': 1455602400000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 662347,
                'annum': 1455688800000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 663271,
                'annum': 1455948000000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 148819,
                'annum': 1456120800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 162375208,
                'annum': 1456466400000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1456466400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3780304,
                'annum': 1456466400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59102743,
                'annum': 1456207200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8068331,
                'annum': 1454306400000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1454306400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 990256,
                'annum': 1455948000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 592279,
                'annum': 1455948000000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7606,
                'annum': 1455948000000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25399451,
                'annum': 1456120800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 517522993,
                'annum': 1456380000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13635108,
                'annum': 1456466400000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 174035386,
                'annum': 1456466400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7595731,
                'annum': 1456466400000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1456466400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1508309,
                'annum': 1456725600000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 659801,
                'annum': 1454652000000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12011052,
                'annum': 1454738400000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8174122,
                'annum': 1456552800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 905890,
                'annum': 1454565600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1454565600000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25331831,
                'annum': 1454565600000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 147802,
                'annum': 1454652000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 987793,
                'annum': 1455170400000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674141,
                'annum': 1455170400000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12026801,
                'annum': 1455343200000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11152303,
                'annum': 1455343200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 281803461,
                'annum': 1455429600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 988547,
                'annum': 1455429600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 160924466,
                'annum': 1455256800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3723221,
                'annum': 1455256800000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11163219,
                'annum': 1455602400000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1259885,
                'annum': 1455602400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 590438,
                'annum': 1454652000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 986270,
                'annum': 1454652000000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1455516000000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8150227,
                'annum': 1455516000000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25377387,
                'annum': 1455516000000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1455775200000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 662925,
                'annum': 1455861600000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79691139,
                'annum': 1454997600000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1456466400000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12000138,
                'annum': 1454392800000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278462,
                'annum': 1455084000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 587357229,
                'annum': 1455084000000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 894293973,
                'annum': 1455516000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 515247100,
                'annum': 1455775200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8103251,
                'annum': 1456552800000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1454652000000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12008336,
                'annum': 1454652000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3694500,
                'annum': 1454652000000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278231,
                'annum': 1454652000000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24112241,
                'annum': 1454911200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7568780,
                'annum': 1455256800000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25349231,
                'annum': 1455256800000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 67215,
                'annum': 1454306400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13520943,
                'annum': 1454911200000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79653241,
                'annum': 1454911200000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1454911200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 590683,
                'annum': 1454911200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1454911200000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1456207200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3761516,
                'annum': 1456207200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58771697,
                'annum': 1454306400000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25326328,
                'annum': 1454306400000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1454392800000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 659493,
                'annum': 1454565600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1454565600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5214070,
                'annum': 1454565600000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1258339,
                'annum': 1454738400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 907676,
                'annum': 1455429600000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8149491,
                'annum': 1455429600000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 892136490,
                'annum': 1454652000000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1455256800000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 99104,
                'annum': 1456725600000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25335708,
                'annum': 1454652000000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24111299,
                'annum': 1454824800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1491449,
                'annum': 1454824800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 281803543,
                'annum': 1455516000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1491151,
                'annum': 1455516000000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 143623818,
                'annum': 1455688800000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 144385515,
                'annum': 1456380000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 510741187,
                'annum': 1454565600000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8154839,
                'annum': 1455688800000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98438,
                'annum': 1455084000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 906898,
                'annum': 1455084000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1455084000000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 171410346,
                'annum': 1454479200000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 148327,
                'annum': 1455516000000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1455775200000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1260303,
                'annum': 1455775200000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1454306400000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17724960,
                'annum': 1454306400000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1257491,
                'annum': 1454392800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1490063,
                'annum': 1454392800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 149933803,
                'annum': 1456120800000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 142400139,
                'annum': 1454565600000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8169497,
                'annum': 1456380000000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 149158,
                'annum': 1456380000000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1456639200000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 144667364,
                'annum': 1456639200000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 147849,
                'annum': 1454824800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1490370,
                'annum': 1454479200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1495062,
                'annum': 1456293600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 986012,
                'annum': 1454565600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1454565600000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 149046,
                'annum': 1456293600000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24121078,
                'annum': 1454997600000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1454997600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 148932871,
                'annum': 1455516000000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503349078,
                'annum': 1456293600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 586907943,
                'annum': 1454911200000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 664823,
                'annum': 1456639200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 147810853,
                'annum': 1454738400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59192474,
                'annum': 1456639200000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1456639200000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1262043,
                'annum': 1456639200000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1455948000000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24194066,
                'annum': 1455948000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1494248,
                'annum': 1455948000000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24186684,
                'annum': 1455861600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1455861600000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1260501,
                'annum': 1455861600000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6433538,
                'annum': 1455861600000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1454824800000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348781,
                'annum': 1455688800000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1455688800000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503349243,
                'annum': 1456725600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8103819,
                'annum': 1456725600000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11125084,
                'annum': 1454997600000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 172568186,
                'annum': 1455343200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 988418,
                'annum': 1455343200000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1455343200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 589318792,
                'annum': 1455948000000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1455948000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 907580,
                'annum': 1455343200000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1455343200000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1259545,
                'annum': 1455343200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 533620,
                'annum': 1455343200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1492712,
                'annum': 1455343200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 513823589,
                'annum': 1455343200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13603512,
                'annum': 1456120800000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17930907,
                'annum': 1456120800000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1456120800000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7575,
                'annum': 1455343200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 593000,
                'annum': 1456380000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1456380000000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 661677,
                'annum': 1455429600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 514441199,
                'annum': 1455602400000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 144274194,
                'annum': 1456293600000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8102175,
                'annum': 1456466400000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1456466400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5240380,
                'annum': 1456466400000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24205140,
                'annum': 1456207200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7587775,
                'annum': 1456207200000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1456207200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1456207200000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 11997399,
                'annum': 1454306400000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79995220,
                'annum': 1455948000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7585457,
                'annum': 1456120800000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 664416,
                'annum': 1456380000000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17977104,
                'annum': 1456466400000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 99046,
                'annum': 1456466400000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1261737,
                'annum': 1456466400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1495642,
                'annum': 1456466400000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25417892,
                'annum': 1456466400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 150892907,
                'annum': 1456725600000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278266,
                'annum': 1454738400000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 143285089,
                'annum': 1455343200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13577801,
                'annum': 1455688800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 532594,
                'annum': 1454565600000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1455084000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 987498,
                'annum': 1455084000000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 122746,
                'annum': 1454306400000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1455256800000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12030059,
                'annum': 1455602400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3733511,
                'annum': 1455602400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58998225,
                'annum': 1455602400000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1455602400000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1454652000000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1455775200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5228793,
                'annum': 1455775200000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17911056,
                'annum': 1455861600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 148412845,
                'annum': 1455170400000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 143734944,
                'annum': 1455775200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 282549560,
                'annum': 1456207200000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1456207200000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1456207200000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 172081125,
                'annum': 1454997600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1483013,
                'annum': 1454997600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 161180707,
                'annum': 1455429600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1455429600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3775273,
                'annum': 1456380000000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1454392800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1454392800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 160662091,
                'annum': 1455084000000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1455084000000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1455084000000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1456552800000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 279356,
                'annum': 1456552800000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 149324,
                'annum': 1456552800000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1456552800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1456552800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1454652000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5215044,
                'annum': 1454652000000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98340,
                'annum': 1454911200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 509657901,
                'annum': 1454306400000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 891210797,
                'annum': 1454306400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 160794162,
                'annum': 1455170400000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12020518,
                'annum': 1455170400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 280795626,
                'annum': 1454911200000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1456207200000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11202206,
                'annum': 1456207200000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 148934,
                'annum': 1456207200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 905276,
                'annum': 1454306400000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1454306400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1473885,
                'annum': 1454392800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 159947039,
                'annum': 1454479200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 160085077,
                'annum': 1454565600000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11098842,
                'annum': 1454565600000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79862931,
                'annum': 1455602400000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1455602400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 988983,
                'annum': 1455602400000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1455429600000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1259621,
                'annum': 1455429600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 533664,
                'annum': 1455429600000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25365784,
                'annum': 1455429600000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348331,
                'annum': 1454652000000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1454652000000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 172449580,
                'annum': 1455256800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1455256800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 147052309,
                'annum': 1454392800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58874879,
                'annum': 1454824800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 532898,
                'annum': 1454824800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 988637,
                'annum': 1455516000000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1455516000000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 147489,
                'annum': 1454392800000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 659238,
                'annum': 1454479200000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7575,
                'annum': 1455516000000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98675,
                'annum': 1455688800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59018676,
                'annum': 1455688800000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24170878,
                'annum': 1455688800000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25388861,
                'annum': 1455688800000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1455084000000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1455084000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1475895,
                'annum': 1454479200000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7523,
                'annum': 1454479200000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 173120669,
                'annum': 1455775200000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17899176,
                'annum': 1455775200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1455775200000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8156822,
                'annum': 1455775200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8095362,
                'annum': 1456120800000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 171173283,
                'annum': 1454306400000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1452217,
                'annum': 1454306400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1473615,
                'annum': 1454306400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58789679,
                'annum': 1454392800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1454392800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 532312,
                'annum': 1454392800000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6404720,
                'annum': 1454392800000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 663877,
                'annum': 1456207200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59147063,
                'annum': 1456380000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 909612,
                'annum': 1456380000000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123993,
                'annum': 1456380000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1456639200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1454479200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5216737,
                'annum': 1454824800000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1456639200000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25327494,
                'annum': 1454479200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7590506,
                'annum': 1456293600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 590286,
                'annum': 1454565600000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 892383350,
                'annum': 1454738400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 986737,
                'annum': 1454824800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 161757397,
                'annum': 1455948000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1455948000000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1455948000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 906656,
                'annum': 1454997600000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1258667,
                'annum': 1454997600000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 148666,
                'annum': 1455775200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 517100156,
                'annum': 1456293600000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 896279828,
                'annum': 1456293600000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1454738400000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 660094,
                'annum': 1454738400000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12011199,
                'annum': 1454911200000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 892736170,
                'annum': 1454911200000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1456120800000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98852,
                'annum': 1455948000000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1455948000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 534170,
                'annum': 1455861600000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25398181,
                'annum': 1455861600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 282693204,
                'annum': 1456293600000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 173787845,
                'annum': 1456293600000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 661103,
                'annum': 1455170400000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1456207200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 590858980,
                'annum': 1456725600000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 279370,
                'annum': 1456725600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1454997600000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 891663245,
                'annum': 1454479200000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348224,
                'annum': 1454479200000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1454479200000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 67215,
                'annum': 1454479200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13560159,
                'annum': 1455343200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 281573013,
                'annum': 1455343200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1455343200000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348931,
                'annum': 1455948000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 58973667,
                'annum': 1455343200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 282535289,
                'annum': 1456120800000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1457049,
                'annum': 1456120800000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 592459,
                'annum': 1456120800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13627604,
                'annum': 1456380000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1503441,
                'annum': 1456380000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 588136118,
                'annum': 1455429600000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1455429600000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 894502643,
                'annum': 1455602400000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12054761,
                'annum': 1456466400000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11222948,
                'annum': 1456466400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3675371,
                'annum': 1454306400000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17922434,
                'annum': 1455948000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1455948000000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98852,
                'annum': 1456120800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1494653,
                'annum': 1456120800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 590200631,
                'annum': 1456380000000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 896531209,
                'annum': 1456380000000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1456466400000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24228451,
                'annum': 1456466400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13645015,
                'annum': 1456725600000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1456725600000
            },
            {
                'source': 'GAS STATION',
                'target': 'BANANA',
                'value': 7628,
                'annum': 1456725600000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1454738400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7598057,
                'annum': 1456552800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 282001626,
                'annum': 1455688800000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 122986,
                'annum': 1454652000000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13537005,
                'annum': 1455084000000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79725378,
                'annum': 1455084000000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17819236,
                'annum': 1455084000000
            },
            {
                'source': 'FARM',
                'target': 'BANANA',
                'value': 59037,
                'annum': 1455170400000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17831040,
                'annum': 1455170400000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'PEAR',
                'value': 346353,
                'annum': 1455343200000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1455343200000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1455429600000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1455256800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 161190978,
                'annum': 1455516000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3733096,
                'annum': 1455516000000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123560,
                'annum': 1455602400000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98619,
                'annum': 1455602400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 907930,
                'annum': 1455602400000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1455602400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 533774,
                'annum': 1455602400000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8152569,
                'annum': 1455602400000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17775651,
                'annum': 1454652000000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98592,
                'annum': 1455516000000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1259695,
                'annum': 1455516000000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 533692,
                'annum': 1455516000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8091019,
                'annum': 1455775200000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12036022,
                'annum': 1455775200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13593480,
                'annum': 1455861600000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 173241869,
                'annum': 1455861600000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1455861600000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12047751,
                'annum': 1456293600000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11169964,
                'annum': 1455688800000
            },
            {
                'source': 'GROCER',
                'target': 'ORANGE',
                'value': 663319,
                'annum': 1456120800000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17942761,
                'annum': 1456207200000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1457105,
                'annum': 1456207200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8085158,
                'annum': 1455429600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1505033,
                'annum': 1456466400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8069916,
                'annum': 1454392800000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 277994,
                'annum': 1454392800000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 148543,
                'annum': 1455688800000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 894998783,
                'annum': 1455775200000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 80171409,
                'annum': 1456552800000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17987889,
                'annum': 1456552800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1454911200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1491561,
                'annum': 1454911200000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1455256800000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1454306400000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348480,
                'annum': 1454997600000
            },
            {
                'source': 'KIOSK',
                'target': 'TANGERINE',
                'value': 20062782,
                'annum': 1454997600000
            },
            {
                'source': 'KIOSK',
                'target': 'PEAR',
                'value': 5439516,
                'annum': 1455170400000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 144164569,
                'annum': 1456207200000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674141,
                'annum': 1454911200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1482792,
                'annum': 1454911200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'PEAR',
                'value': 5235259,
                'annum': 1456207200000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123895,
                'annum': 1456207200000
            },
            {
                'source': 'GAS STATION',
                'target': 'AVOCADO',
                'value': 147849,
                'annum': 1454911200000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1454306400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 532232,
                'annum': 1454306400000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 280133986,
                'annum': 1454392800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3682900,
                'annum': 1454479200000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278077,
                'annum': 1454479200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'PEAR',
                'value': 3688808,
                'annum': 1454565600000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17874510,
                'annum': 1455602400000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674145,
                'annum': 1455602400000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1491432,
                'annum': 1455602400000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98330,
                'annum': 1454738400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7557502,
                'annum': 1454738400000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 532864,
                'annum': 1454738400000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6412778,
                'annum': 1454738400000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24153968,
                'annum': 1455429600000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6424967,
                'annum': 1455429600000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 67215,
                'annum': 1454652000000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 79792267,
                'annum': 1455256800000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1487812,
                'annum': 1455256800000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24238359,
                'annum': 1456725600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1456725600000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98293,
                'annum': 1454652000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 906066,
                'annum': 1454652000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1490930,
                'annum': 1454652000000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1454824800000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8136776,
                'annum': 1454824800000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1455470,
                'annum': 1455516000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 150360020,
                'annum': 1456380000000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348275,
                'annum': 1454565600000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 67215,
                'annum': 1454565600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7576969,
                'annum': 1455688800000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8142026,
                'annum': 1455084000000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25343301,
                'annum': 1455084000000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 123450,
                'annum': 1455516000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59039372,
                'annum': 1455775200000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24178783,
                'annum': 1455775200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1493718,
                'annum': 1455775200000
            },
            {
                'source': 'BODEGA',
                'target': 'PEAR',
                'value': 21878533,
                'annum': 1456120800000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 279011,
                'annum': 1456120800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13477184,
                'annum': 1454306400000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98131,
                'annum': 1454392800000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8127095,
                'annum': 1454392800000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25326306,
                'annum': 1454392800000
            },
            {
                'source': 'MARKET',
                'target': 'APPLE',
                'value': 143943949,
                'annum': 1455948000000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1495336,
                'annum': 1456380000000
            },
            {
                'source': 'MARKET',
                'target': 'TANGERINE',
                'value': 897025326,
                'annum': 1456552800000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 992425,
                'annum': 1456639200000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98189,
                'annum': 1454479200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 147970940,
                'annum': 1454824800000
            },
            {
                'source': 'MARKET',
                'target': 'PEAR',
                'value': 11115210,
                'annum': 1454824800000
            },
            {
                'source': 'ONLINE',
                'target': 'PEAR',
                'value': 12057015,
                'annum': 1456639200000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6406720,
                'annum': 1454479200000
            },
            {
                'source': 'GAS STATION',
                'target': 'KIWI',
                'value': 98930,
                'annum': 1456293600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1456293600000
            },
            {
                'source': 'KIOSK',
                'target': 'KIWI',
                'value': 2014764,
                'annum': 1456293600000
            },
            {
                'source': 'ONLINE',
                'target': 'KIWI',
                'value': 1261277,
                'annum': 1456293600000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25410233,
                'annum': 1456293600000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6441063,
                'annum': 1456293600000
            },
            {
                'source': 'MARKET',
                'target': 'BANANA',
                'value': 171529813,
                'annum': 1454565600000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17763048,
                'annum': 1454565600000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'BANANA',
                'value': 1477684,
                'annum': 1454565600000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 122928,
                'annum': 1454565600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 586714212,
                'annum': 1454738400000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'BANANA',
                'value': 13519838,
                'annum': 1454824800000
            },
            {
                'source': 'ONLINE',
                'target': 'BANANA',
                'value': 1453732,
                'annum': 1454824800000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1454824800000
            },
            {
                'source': 'GROCER',
                'target': 'AVOCADO',
                'value': 124094,
                'annum': 1456639200000
            },
            {
                'source': 'FARM',
                'target': 'KIWI',
                'value': 43408,
                'annum': 1454997600000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'KIWI',
                'value': 533054,
                'annum': 1454997600000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8139811,
                'annum': 1454997600000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1456293600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 280674938,
                'annum': 1454738400000
            },
            {
                'source': 'KIOSK',
                'target': 'BANANA',
                'value': 34674141,
                'annum': 1454738400000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'PEAR',
                'value': 8076910,
                'annum': 1454911200000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 511919995,
                'annum': 1454911200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'KIWI',
                'value': 910164,
                'annum': 1456639200000
            },
            {
                'source': 'BODEGA',
                'target': 'KIWI',
                'value': 24237327,
                'annum': 1456639200000
            },
            {
                'source': 'LOCAL COOP',
                'target': 'KIWI',
                'value': 1496210,
                'annum': 1456639200000
            },
            {
                'source': 'MARKET',
                'target': 'KIWI',
                'value': 8174980,
                'annum': 1456639200000
            },
            {
                'source': 'GROCER',
                'target': 'KIWI',
                'value': 6447920,
                'annum': 1456639200000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'KIWI',
                'value': 7584187,
                'annum': 1455948000000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'KIWI',
                'value': 500713,
                'annum': 1455948000000
            },
            {
                'source': 'CAFE',
                'target': 'KIWI',
                'value': 25396166,
                'annum': 1455948000000
            },
            {
                'source': 'CAFETERIA',
                'target': 'KIWI',
                'value': 59058802,
                'annum': 1455861600000
            },
            {
                'source': 'BODEGA',
                'target': 'BANANA',
                'value': 80074809,
                'annum': 1456293600000
            },
            {
                'source': 'INSTITUTIONAL KITCHEN',
                'target': 'BANANA',
                'value': 832915055,
                'annum': 1456293600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'APPLE',
                'value': 150705341,
                'annum': 1456552800000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 585808891,
                'annum': 1454392800000
            },
            {
                'source': 'BODEGA',
                'target': 'TANGERINE',
                'value': 503348157,
                'annum': 1454392800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'TANGERINE',
                'value': 518705046,
                'annum': 1456725600000
            },
            {
                'source': 'CAFETERIA',
                'target': 'PEAR',
                'value': 160522274,
                'annum': 1454997600000
            },
            {
                'source': 'GAS STATION',
                'target': 'PEAR',
                'value': 278368,
                'annum': 1454997600000
            },
            {
                'source': 'DISTRIBUTOR',
                'target': 'TANGERINE',
                'value': 586042690,
                'annum': 1454479200000
            },
            {
                'source': 'FRUIT STAND',
                'target': 'BANANA',
                'value': 591405,
                'annum': 1455343200000
            },
            {
                'source': 'GROCER',
                'target': 'TANGERINE',
                'value': 68259,
                'annum': 1455343200000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 990536,
                'annum': 1456120800000
            },
            {
                'source': 'CAFETERIA',
                'target': 'BANANA',
                'value': 282829784,
                'annum': 1456380000000
            },
            {
                'source': 'GROCER',
                'target': 'BANANA',
                'value': 17965887,
                'annum': 1456380000000
            },
            {
                'source': 'FOOD TRUCK',
                'target': 'BANANA',
                'value': 991594,
                'annum': 1456380000000
            }
        ];

        
        // ================== begin find unique array elements ================
        Array.prototype.contains = function (v) {
            for (var i = 0; i < this.length; i += 1) {
                if (this[i] === v) {
                    return true;
                }
            }
            return false;
        };

        Array.prototype.unique = function (myQuery) {
            var arr = [];
            for (var i = 0; i < this.length; i += 1) {
                if (!arr.contains(this[i][myQuery])) {
                    arr.push(this[i][myQuery]);
                }
            }
            return arr;
        };

        // find uniques and sort them
        uniqueDates   = rawData.unique('annum').sort();
        uniqueSources = rawData.unique('source').sort();
        uniqueTargets = rawData.unique('target').sort();

        // report!
        console.log('Unique dates: '   + uniqueDates.length + '.');
        console.log('Unique sources: ' + uniqueSources.length + '.');
        console.log('Unique targets: ' + uniqueTargets.length + '.');
        // =================== end find unique array elements =================

        
        // =================== begin build new formatted array ================
        
        // * build a targets object.                                  * works *
        // * adapts dynamically to source data.
        // * init all values to zero; we'll change them later
        for (l = 0; l < uniqueTargets.length; l += 1) {
            allTargets[uniqueTargets[l]] = 0;
        };
        
        // * build sources object.                                    * works *
        // * adapts dynamically to source data.
        // * add an allTargets object to each source
        for (j = 0; j < uniqueSources.length; j += 1) {
            allSources[uniqueSources[j]] = allTargets;
        };
        
        // * build final array.                                       * works *
        // * add an allSources object to each date.
        for (i = 0; i < uniqueDates.length; i += 1) {
            var dateKey = uniqueDates[i].toString();
            var eachDateObject = {};
            eachDateObject[dateKey] = allSources;
            formattedData.push(eachDateObject);
        };
        // =================== end build new formatted array ==================
        
        // bind new array to $scope
        $scope.formattedData = formattedData;        

    }]);

})();