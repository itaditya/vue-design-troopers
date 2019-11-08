const path = require('path');

module.exports = {
	title: 'Vue Design Troopers',
	require: [path.resolve(__dirname, 'src/docs/setup.js')],
	components: 'src/components/**/[A-Z]*.vue',
	defaultExample: true,
	copyCodeButton: true,
	pagePerSection: true,
	usageMode: 'expand',
	exampleMode: 'expand',
	serverPort: 6061
}
