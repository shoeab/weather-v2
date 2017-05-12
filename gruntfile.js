module.exports = function grunt(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify:{
			t1:{
				files:{
					'public/app/dest/all.min.js' : ['public/app/controllers/musicCtrl.js']
				}
			}
		},

	});
};