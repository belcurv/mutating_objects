(function () {
    'use strict';

    var app = angular.module('myApp', []);
    
    
    // =============================== SERVICES ===============================
    app.factory('testFactory', ['$http', '$q', function ($http, $q) {

        var url = 'data/data.csv',
            
            getStuff = function () {
                return $http.get(url).then(function (data) {
                    return Papa.parse(data.data, {
                        header: true,
                        dynamicTyping: true,
                        skipEmptyLines: true,
                        complete: function (results) {
                            // console.log('Papa results: ' + results.data);
                            return results.data;
                        }
                    });
                });
            };

        return {
            getStuff: getStuff
        };
        
    }]);
    

    // ============================= CONTROLLERS ==============================
    app.controller('mainController', ['$scope', 'testFactory', function ($scope, testFactory) {
        
        testFactory.getStuff().then(function (results) {

            var rawData = [],
                uniqueDates,
                uniqueSources,
                uniqueTargets,
                allSources    = {},
                allTargets    = {},
                formattedData = [];
            
            // ==================== begin type conversion =====================
            results.data.forEach(function (each) {
                rawData.push({
                    source : each.source,               // stay a string
                    target : each.target,               // stay a string
                    value  : +each.value,               // conv to number
                    annum  : Date.parse(each.annum)     // conv to date
                });
            });
            // ===================== end type conversion ======================
   
            // ================== begin find unique array elements ================
            Array.prototype.contains = function (v) {
                var i;
                for (i = 0; i < this.length; i += 1) {
                    if (this[i] === v) {
                        return true;
                    }
                }
                return false;
            };

            Array.prototype.unique = function (myQuery) {
                var i,
                    arr = [];
                for (i = 0; i < this.length; i += 1) {
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
            console.log('Unique dates: '   + uniqueDates.length);
            console.log('Unique sources: ' + uniqueSources.length);
            console.log('Unique targets: ' + uniqueTargets.length);
            // =================== end find unique array elements =================


            // =================== begin build new formatted array ================
            uniqueDates.forEach(function (date) {        // main loop for date objs

                var dateKey = date.toString(),         // conv date nums to strings
                    eachDateObject = {};            // init main containing objects

                uniqueSources.forEach(function (source) {   // loop for source objs

                    uniqueTargets.forEach(function (target) {   // loop for targets
                        allTargets[target] = 0;          // populate allTargets obj
                    });

                    allSources[source] = allTargets;     // populate allSources obj

                });

                eachDateObject[dateKey] = allSources;       // populate main object
                formattedData.push(eachDateObject);    // push main object to array
            });
            // =================== end build new formatted array ==================

            // bind new array to $scope
            $scope.formattedData = formattedData;
        
        });

    }]);

})();