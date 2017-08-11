(function(){

  var applyTextOnHover = function(hoverElem ,textElem, eventType, text) {
    hoverElem.addEventListener(eventType, function() {
      textElem.innerHTML = text;
    })
  };

  ////////////////////
  // Skills Section //
  ////////////////////

  var skillsHeaderText = document.getElementById('skills-header-text');

  // hover over javascript skill column
  var skillsJs = document.getElementById('skill-javascript');
  applyTextOnHover(skillsJs, skillsHeaderText, 'mouseover', 'javascript');

  // hover over linux and ops skill column
  var skillsLinux = document.getElementById('skill-linux');
  applyTextOnHover(skillsLinux, skillsHeaderText, 'mouseover', 'linux, automation & operations');

  // hover over python skill column
  var skillsPython = document.getElementById('skill-python');
  applyTextOnHover(skillsPython, skillsHeaderText, 'mouseover', 'python');

  // hover over cpp skill column
  var skillsCpp = document.getElementById('skill-cpp');
  applyTextOnHover(skillsCpp, skillsHeaderText, 'mouseover', 'c++');

  // hover over other skills column
  var skillsOther = document.getElementById('skill-other');
  applyTextOnHover(skillsOther, skillsHeaderText, 'mouseover', 'miscellaneous');

  // no hover
  var skillColumns = document.getElementsByClassName('skill-col');
  for(var i = 0; i < skillColumns.length; i++) {
    applyTextOnHover(skillColumns[i], skillsHeaderText, 'mouseout', 'skills');
  }

  ////////////////////////
  // Experience Section //
  ////////////////////////

  var experienceHeaderText = document.getElementById('experience-header-text');

  // hover over appdirect experience column
  var experienceAppdirect = document.getElementById('appdirect-logo');
  applyTextOnHover(experienceAppdirect, experienceHeaderText, 'mouseover', 'AppHelp');

  // hover over concordia experience column
  var experienceConcordia = document.getElementById('concordia-logo');
  applyTextOnHover(experienceConcordia, experienceHeaderText, 'mouseover', 'Concordia University');

  // hover over shopify experience column
  var experienceShopify= document.getElementById('shopify-logo');
  applyTextOnHover(experienceShopify, experienceHeaderText, 'mouseover', 'Shopify');

  // no hover
  var experienceColumns = document.getElementsByClassName('experience-col');
  for(var i = 0; i < experienceColumns.length; i++) {
    applyTextOnHover(experienceColumns[i], experienceHeaderText, 'mouseout', 'experience');
  }

  ///////////////////
  // Links Section //
  ///////////////////

  var linksHeaderText = document.getElementById('links-header-text');

  // hover over github links column
  var linksGithub = document.getElementById('links-github');
  applyTextOnHover(linksGithub, linksHeaderText, 'mouseover', 'GitHub');

  // hover over stackexchange links column
  var linksSE = document.getElementById('links-stackexchange');
  applyTextOnHover(linksSE, linksHeaderText, 'mouseover', 'Stack Exchange');

  // hover over stackoverflow links column
  var linksSO = document.getElementById('links-stackoverflow');
  applyTextOnHover(linksSO, linksHeaderText, 'mouseover', 'Stack Overflow');

  // hover over linkedin links column
  var linksLinkedIn = document.getElementById('links-linkedin');
  applyTextOnHover(linksLinkedIn, linksHeaderText, 'mouseover', 'LinkedIn');

  // hover over twitter links column
  var linksTwitter = document.getElementById('links-twitter');
  applyTextOnHover(linksTwitter, linksHeaderText, 'mouseover', 'Twitter');

  // hover over hackerrank links column
  var linksHackerRank = document.getElementById('links-hackerrank');
  applyTextOnHover(linksHackerRank, linksHeaderText, 'mouseover', 'HackerRank');

  // hover over email links column
  var linksEmail = document.getElementById('links-email');
  applyTextOnHover(linksEmail, linksHeaderText, 'mouseover', 'Email');

  // hover over email links column
  var linksCV= document.getElementById('links-cv');
  applyTextOnHover(linksCV, linksHeaderText, 'mouseover', 'CV');

  // no hover
  var linksColumns = document.getElementsByClassName('links-col');
  for(var i = 0; i < linksColumns.length; i++) {
    applyTextOnHover(linksColumns[i], linksHeaderText, 'mouseout', 'links');
  }

})();
