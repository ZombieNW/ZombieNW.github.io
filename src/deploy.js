import ghpages from 'gh-pages';

ghpages.publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/ZombieNW/ZombieNW.github.io.git',
		cname: 'zombienw.com'
	},
	function (err) {
		console.log(err);
	}
);
