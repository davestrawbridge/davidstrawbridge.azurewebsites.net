var scripts = document.getElementsByTagName('script');
var self = scripts[scripts.length - 1];

document.write('<h2>' + self.src + '</h2>');

