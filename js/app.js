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
        
        $scope.myDate = 0;
        
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

            Array.prototype.unique = function (myQuery) {
                var i,
                    arr = [];
                for (i = 0; i < this.length; i += 1) {
                    if (arr.indexOf(this[i][myQuery]) === -1) {
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
//            console.log('Unique dates: '   + uniqueDates);
//            console.log('Unique sources: ' + uniqueSources);
//            console.log('Unique targets: ' + uniqueTargets);
            // =================== end find unique array elements =================


            // =================== begin build new formatted array ================
//            uniqueDates.forEach(function (date, index) {               // main loop
//            
//                var dateKey = date.toString(),         // conv date nums to strings
//                    eachDateObject = {};            // init main containing objects
//
//                uniqueSources.forEach(function (source) {   // loop for source objs
//                    
//                    uniqueTargets.forEach(function (target) {   // loop for targets
//                        allTargets[target] = index;      // populate allTargets obj
//                    });
//                    
//                    allSources[source] = allTargets;     // populate allSources obj
//
//                });
//
//                eachDateObject[dateKey] = allSources;       // populate main object
//                formattedData.push(eachDateObject);    // push main object to array
//            });
            
            //  loop over unique dates array
            uniqueDates.forEach(function (date, index) {

                // create temp date object to collect sources
                var dateObj = {[date] : {}};

                // loop over entire 'rawData' object
                rawData.forEach(function (element) {

                    // if date object not have 'source' object, add it
                    if (!dateObj[date][element.source]) {
                        dateObj[date][element.source] = {};
                    }

                    // if results date property matches main loop's 'date' property...
                    if (element.annum === date) {

                        // populate source object with results target & value
                        dateObj[date][element.source][element.target] = element.value;

                    }
                });
                
                // push populated date object to output array
                formattedData.push(dateObj);
                
            });
            // =================== end build new formatted array ==================

            // bind new array to $scope
            $scope.formattedData = formattedData;
            $scope.rawData    = rawData;
            $scope.dateArray  = uniqueDates;
            $scope.minDate    = uniqueDates[0];
            $scope.maxDate    = uniqueDates[uniqueDates.length - 1];
        
        });

    }]);

})();