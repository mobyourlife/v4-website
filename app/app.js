angular.module('MobYourLife.Website', [
	'ngRoute'
])

.config(function ($routeProvider) {
	$routeProvider
		.when('/inicio', {
			templateUrl: 'partials/inicio.html',
			controller: 'InicioCtrl'
		})
		.when('/vantagens', {
			templateUrl: 'partials/vantagens.html',
			controller: 'VantagensCtrl'
		})
		.when('/precos', {
			templateUrl: 'partials/precos.html',
			controller: 'PrecosCtrl'
		})
		.when('/fale-conosco', {
			templateUrl: 'partials/fale-conosco.html',
			controller: 'FaleConoscoCtrl'
		})
		.otherwise({
			redirectTo: '/inicio'
		});
})

.run(function ($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (ev, data) {
		$rootScope.controller = data.controller;
	});
})

.controller('InicioCtrl', function ($scope, $routeParams) {
	//
})

.controller('ApresentacaoCtrl', function ($scope, $routeParams, $location) {
	$scope.passo = $routeParams.passo || 1;

	$scope.anterior = function() {
		$scope.goto(Number($scope.passo) - 1);
	}

	$scope.proximo = function () {
		$scope.goto(Number($scope.passo) + 1);
	}

	$scope.goto = function (passo) {
		$scope.passo = passo;
		$location.path('/apresentacao/' + $scope.passo);
	}

	if ($scope.passo < 1) {
		$scope.goto(1);
	} else if ($scope.passo > 4) {
		$scope.goto(4);
	}
})

.controller('VantagensCtrl', function () {
	//
})

.controller('PrecosCtrl', function () {
	//
});
