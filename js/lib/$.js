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
