$(function() {
  $('.search-container').prependTo('.navigation-wrapper');
  $('.SQreamHomeSite').insertAfter('.search-container');
  $('.SQreamHomeSite').show();
  $('.VersionControl').appendTo('.logo-wrapper');
  $('.VersionControl').show();
    
  var mLabel;
  var mTarget;
  var versionData='';
  
  for(var v in versionsData) {
    mLabel = v;
    mTarget = versionsData[v].url;
    versionData=versionData+"<a href='"+versionsData[v].url+"'>"+v+"</a>";
  }
  
  console.log(versionData);

    $(versionData).prependTo('.dropdown-content');
  
    $('.dropdown-content a').each(function() {
      var VersionNo = $('.dropbtn .ProductVersionsSQream').text();
          if ($(this).text() == VersionNo) {
              $(this).hide();
          }
      });
      
    if ($(window).width() > 1280){
        $('.search-container').show();
    }
    });
  
  $(function() {
      $('.home-page .SQreamHomeSite').prependTo('.navigation-wrapper');
      $('.home-page .SQreamHomeSite').show();
  });