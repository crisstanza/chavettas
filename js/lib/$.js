"use strict";

if (typeof $ === 'undefined') {
	var $ = function(id) {
		return document.getElementById(id);
	};
};

(function() {

	if (typeof $.json === 'undefined') $.json = {};

	$.json.search = (object, target, defaultValue) =>
		Object.entries(object).reduce((stack, [key, value]) => {
			switch (true) {
				case key === target:
					return value;
				case !!Object.keys(value).length:
					return $.json.search(value, target, stack);
				default:
					return stack;
			}
		}, defaultValue
	);

})();

(function() {

	$.addClass = function(element, className) {
		var classNames = element.className;
		if (classNames) {
			var classes = classNames.split(' ');
			var length = classes.length;
			for (var i = 0 ; i < length ; i++) {
				var clazz = classes[i];
				if (clazz == className) {
					return;
				}
			}
			var newClassNames = classNames.trim() + ' ' + className;
			element.className = newClassNames;
		} else {
			element.className = className;	
		}
		return $;
	};

	$.delClass = function(element, className) {
		var classNames = element.className;
		if (classNames) {
			var classes = classNames.split(' ');
			var length = classes.length;
			for (var i = 0 ; i < length ; i++) {
				var clazz = classes[i];
				if (clazz == className) {
					classes[i] = '';
					break;
				}
			}
			var newClassNames = classes.join(' ').trim();
			element.className = newClassNames;
		}
		return $;
	};

	$.hasClass = function(element, className) {
		var classNames = element.className;
		if (classNames) {
			var classes = classNames.split(' ');
			var length = classes.length;
			for (var i = 0 ; i < length ; i++) {
				var clazz = classes[i];
				if (clazz == className) {
					return true;
				}
			}
		}
		return false;
	};

})();
