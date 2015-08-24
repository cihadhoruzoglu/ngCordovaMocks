/**
 * Copyright (c) 2014 Ecofic LLC. All rights reserved.
 * http://www.ecofic.com

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaDevice
 *
 * @description
 * A service for testing device information
 * in an app build with ngCordova.
**/  
ngCordovaMocks.factory('$cordovaAppVersion', ['$q', function ($q) {
	return {
		/**
		 * @ngdoc property
		 * @name cordovaAppVersion
		 * @propertyOf ngCordovaMocks.cordovaAppVersion
		 *
		 * @description
		 * Access to the application version number.
		 **/
		getVersionNumber: function() {
			var defer = $q.defer();
			defer.resolve('0.0.0');
			return defer.promise;
		}
	};
}]);