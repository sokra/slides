module.exports = function(options) {
  if(!options) options = {};
  return function (deck) {
    var progressParent = document.createElement('div'),
      progressBar = document.createElement('div'),
      progressTimeBar = document.createElement('div'),
      prop = options.orientation === 'vertical' ? 'height' : 'width';

    progressParent.className = 'bespoke-progress-parent';
    progressBar.className = 'bespoke-progress-bar';
    progressTimeBar.className = 'bespoke-progress-bar-time';
    progressParent.appendChild(progressBar);
    progressParent.appendChild(progressTimeBar);
    deck.parent.appendChild(progressParent);

    var interval = setInterval(function() {
      var timeProgress = 0;
      if(startTime && options.time) {
        timeProgress = (Date.now() - startTime) / options.time;
      }
      var overTime = timeProgress > 1;
      if(overTime) {
        timeProgress = 2 - timeProgress;
      }
      progressTimeBar.style["background"] = overTime ? "red" : undefined;
      progressTimeBar.style[prop] = Math.round(Math.max(0, Math.min(1000, timeProgress * 1000)))/10 + '%';
    }, 1000);
    var startTime = null;

    deck.on('activate', function(e) {
      progressBar.style[prop] = (e.index * 100 / (deck.slides.length - 1)) + '%';
      if(e.index === 1)
        startTime = Date.now();
    });
  };
};
