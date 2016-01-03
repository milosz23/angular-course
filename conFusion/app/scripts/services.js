'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://test.vi:3000/")

        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            this.getDishes = function(){
                return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
            };

            // implement a function named getPromotion
            // that returns a selected promotion.
            this.getPromotion = function(){
                return $resource(baseURL+"promotions/:id",null);
            };
    
                        
        }])

        .service('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            this.getFeedback = function(){
                return $resource(baseURL+"feedback/:id",null,  {'save':{method:'POST' }});
            };
                        
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var corpfac = {};

            corpfac.getLeaders = function(){
                return $resource(baseURL+"leadership/:id",null);
            };

            return corpfac;
    
        }])

;
