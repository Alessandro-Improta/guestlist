angular.module('guestlist').controller('mainController', function($scope, guestService){

	function getGuests() {
		return guestService.getGuests();
	};

	$scope.guests = getGuests();


	$scope.totalGuests = function(){
		var totalGuests = 0;
		for(var i = 0; i < $scope.guests.length; i++) {
			totalGuests += $scope.guests[i]['num_guests'];
		}
		return totalGuests;
	}();

	$scope.sealingGuests = function(){
		var sealingGuests = 0;
		for(var i = 0; i < $scope.guests.length; i++) {
			sealingGuests += $scope.guests[i]['num_sealing'];
		}
		return sealingGuests;
	}();

	$scope.filterObject = {};

	function filterBySealing(boolean) {
		$scope.filterObject = {sealing: boolean};
	};

	function filterByInvited(boolean) {
		$scope.filterObject = {invited: boolean};
	};

	function filterByImportance(num) {
		$scope.filterObject = {attendance_importance: num};
	};

	function noFilter(){
		$scope.filterObject = {};
	}

	$scope.$watch('filterOptions', function() {
		switch($scope.filterOptions) {
			case 'sealing':
				filterBySealing(true);
				break;
			case 'not sealing':
				filterBySealing(false);
				break;
			case 'invited':
				filterByInvited(true);
				break;
			case 'not invited':
				filterByInvited(false);
				break;
			case '1':
				filterByImportance(1);
				break;
			case '2':
				filterByImportance(2);
				break;
			case '3':
				filterByImportance(3);
				break;
			case '4':
				filterByImportance(4);
				break;
			default:
				noFilter();		
		}
	})

});