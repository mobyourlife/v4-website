angular.module('MobYourLife.Manual', [
	'ngRoute'
])

.config(function ($routeProvider) {
	$routeProvider
		.when('/apresentacao/:passo?', {
			templateUrl: 'partials/apresentacao.html',
			controller: 'ApresentacaoCtrl'
		})
		.when('/vantagens', {
			templateUrl: 'partials/vantagens.html',
			controller: 'VantagensCtrl'
		})
		.when('/precos', {
			templateUrl: 'partials/precos.html',
			controller: 'PrecosCtrl'
		})
		.when('/manual/:subPagina?', {
			templateUrl: 'partials/manual/index.html',
			controller: 'ManualCtrl'
		})
		.when('/fale-conosco', {
			templateUrl: 'partials/fale-conosco.html',
			controller: 'FaleConoscoCtrl'
		})
		.otherwise({
			redirectTo: '/apresentacao'
		});
})

.run(function ($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (ev, data) {
		$rootScope.controller = data.controller;
	});
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
})

.controller('ManualCtrl', function ($scope, $routeParams) {
	var subPagina = $routeParams.subPagina || 'home';
	$scope.uri = 'partials/manual/subpaginas/' + subPagina + '.html';
});
