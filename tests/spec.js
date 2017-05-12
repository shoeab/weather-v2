/*describe('Filters', function(){ //describe your object type
    beforeEach(module('MyApp')); //load module

    describe('reverse',function(){ //describe your app name

        var reverse;
        beforeEach(inject(function($filter){ //initialize your filter
            reverse = $filter('reverse',{});
        }));

        it('Should reverse a string', function(){  //write tests
            expect(reverse('shoeab')).toBe('baeohs'); //pass
            expect(reverse('alibaba')).toBe('ababila'); //pass
            expect(reverse('sho')).toBe('ohs'); //pass
            //expect(reverse('jam')).toBe('oops'); // this test should fail
        });

    });
});

describe('Filters', function(){ //describe your object type
    beforeEach(module('MyApp')); //load module

    describe('square',function(){ //describe your app name

        beforeEach(inject(function($filter){ //initialize your filter
            square = $filter('square',{});
        }));

        it('Should square a number', function(){  //write tests
            expect(square(2)).toBe(4); //pass
            expect(square(9)).toBe(81); //pass
            //expect(square('sho')).toBe('ohs'); //pass
            //expect(reverse('jam')).toBe('oops'); // this test should fail
        });

    });
});*/

var $httpBackend, musicService;

beforeEach(module('MyApp'));

beforeEach(inject(function (_$httpBackend_, _musicService_) {
  $httpBackend = _$httpBackend_;
  musicService = _musicService_;
}));


it('should get the sales data in Array', function () {
  // given
  var response = { data: 'result' };
  var result = {}
  $httpBackend.expect('GET', '/sales').respond(200, response);

  // when
  musicService.search().then(function (responseData) {
    result = responseData;
  });
  $httpBackend.flush();

  // then
  expect(typeof(result)).toEqual("Array");
});

/*
var scope,
    controller;

describe('SqCtrl', function () {
    beforeEach(module('MyApp')); //load module

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('SqCtrl', {
                '$scope': scope
            });
        }));

        it('watches the name and updates the counter', function () {
            expect(scope.square(5)).toBe(25);
            expect(scope.square(9)).toBe(81);
        });
    });

describe('FacCtrl', function(){
    beforeEach(module('MyApp')); // load module

    beforeEach(inject(function ($rootScope, $controller){
        scope = $rootScope.$new();
        controller = $controller('FacCtrl', {
            '$scope': scope
        });
    }));

    it('should return factorial of a number', function(){
        expect(scope.factorial(5)).toBe(120);
        expect(scope.factorial(10)).toBe(3628800);
    });
});*/