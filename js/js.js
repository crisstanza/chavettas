"use strict";

const sample = [
	[
		[
			[
				[
					[
						{
							foo: [{ rate: 2.18 }],
						},
					],
				],
			],
		],
	],
	{
		fieldCount: 0,
		affectedRows: 0,
		insertId: 0,
		serverStatus: 0,
		message: '',
		protocol141: true,
		changedRows: 0,
	},
];

(function() {

	function window_Load(event) {
		console.log($('test')); // the body element

		console.log($.json.search(sample, 'foo')); // the array
		console.log($.json.search(sample, 'rate')); // 2.18
		console.log($.json.search(sample, 'protocol141')); // true
		console.log($.json.search(sample, 'hueBR', 'LOL')); // 'LOL'
	}

	window.addEventListener('load', window_Load);

})();
