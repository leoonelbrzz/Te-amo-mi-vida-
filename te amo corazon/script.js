(function(){
  var field = document.getElementById('flowerfield');
  var petalsWrap = document.getElementById('petals');
  var n = 26;
  for (var i=0;i<n;i++){
    var top = 62 + Math.random()*34; // % dentro del área del prado
    var depth = (top-62)/34; // 0 fondo .. 1 frente
    var size = 26 + depth*38 + Math.random()*10;
    var left = 2 + Math.random()*94;
    var opacity = 0.5 + depth*0.5;
    var swayDur = (3.5 + Math.random()*2.5).toFixed(2);
    var color = Math.random() > 0.5 ? 'var(--petal-a)' : 'var(--petal-b)';

    var f = document.createElement('div');
    f.className = 'flower';
    f.style.left = left + '%';
    f.style.top = top + '%';
    f.style.width = size + 'px';
    f.style.height = size + 'px';
    f.style.setProperty('--fop', opacity.toFixed(2));
    f.style.setProperty('--sdur', swayDur + 's');
    f.style.setProperty('--sdelay', (Math.random()*3).toFixed(2) + 's');
    f.style.zIndex = String(Math.round(depth*10)+2);
    f.style.transitionDelay = (i*0.035) + 's';

    var sway = document.createElement('div');
    sway.className = 'sway';
    for (var p=1;p<=6;p++){
      var petal = document.createElement('div');
      petal.className = 'petal p'+p;
      petal.style.setProperty('--pcolor', color);
      sway.appendChild(petal);
    }
    var center = document.createElement('div');
    center.className = 'fcenter';
    sway.appendChild(center);
    f.appendChild(sway);
    field.appendChild(f);
  }

  var pn = 7;
  for (var j=0;j<pn;j++){
    var pf = document.createElement('div');
    pf.className = 'petal-fall';
    pf.style.left = (Math.random()*100) + '%';
    pf.style.animationDuration = (7 + Math.random()*5).toFixed(2) + 's';
    pf.style.animationDelay = (Math.random()*8).toFixed(2) + 's';
    petalsWrap.appendChild(pf);
  }

  function reveal(){
    document.querySelectorAll('.flower').forEach(function(el){ el.classList.add('in'); });
    document.getElementById('panel').classList.add('in');
    document.getElementById('hero-flower').classList.add('in');
  }
  window.requestAnimationFrame(function(){ setTimeout(reveal, 60); });

  var hero = document.getElementById('hero-flower');
  var overlay = document.getElementById('overlay');
  var closeBtn = document.getElementById('closeBtn');
  var heartsWrap = document.getElementById('hearts');

  function spawnHearts(){
    for (var k=0;k<6;k++){
      var h = document.createElement('span');
      h.className = 'heart';
      h.textContent = '💛';
      h.style.left = (40 + Math.random()*20) + '%';
      h.style.setProperty('--hx', (Math.random()*60-30) + 'px');
      h.style.animationDelay = (k*0.08) + 's';
      heartsWrap.appendChild(h);
      (function(node){ setTimeout(function(){ node.remove(); }, 1300); })(h);
    }
  }

  hero.addEventListener('click', function(){
    hero.classList.toggle('open');
    spawnHearts();
    overlay.classList.add('visible');
  });
  closeBtn.addEventListener('click', function(){ overlay.classList.remove('visible'); });
  overlay.addEventListener('click', function(e){
    if (e.target === overlay) overlay.classList.remove('visible');
  });
})();