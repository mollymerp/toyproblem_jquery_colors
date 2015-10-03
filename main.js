$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  $('p').each(function(){
    var text = $(this).html().split(' '),
    len = text.length,
    result = [];

    for( var i = 0; i < len; i++ ) {
      result[i] = '<span>' + text[i] + '</span>';
    }
    $(this).html(result.join(' '));

  })

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  var colors =["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"];

  function changeCols() {
    $('span').each(function(){
    var randomCol = colors[Math.floor(Math.random() * colors.length)];
    $(this).css('color',randomCol);
    })
  };

  setInterval(changeCols, 1000);
});