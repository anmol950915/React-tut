const heading = React.createElement(
	'h1',
	{ id: 'heading', className: 'abc' },
	'this is a heading'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
