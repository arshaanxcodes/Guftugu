/* Guftugu Cafe — Wandering cats animation */

(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Default orientation: cat faces RIGHT (head on the right, tail curls up on the left).
  function catSVG(fur, stripe){
    var shade = 'rgba(0,0,0,0.18)';
    return '<svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">' +
      '<g>' +
        // tail (drawn first so body overlaps its base)
        '<g class="tail" style="transform-origin:12px 21px;">' +
          '<path d="M12 21 Q3 20 4 10 Q4.5 4 10 3" stroke="'+fur+'" stroke-width="4.6" fill="none" stroke-linecap="round"/>' +
        '</g>' +
        // hind leg (back)
        '<ellipse cx="13" cy="27.5" rx="3.4" ry="3.2" fill="'+fur+'"/>' +
        // body
        '<ellipse cx="24" cy="21" rx="15.5" ry="8.5" fill="'+fur+'"/>' +
        // front legs
        '<rect x="19" y="24" width="3.4" height="7" rx="1.7" fill="'+fur+'"/>' +
        '<rect x="32" y="24" width="3.4" height="7" rx="1.7" fill="'+fur+'"/>' +
        // back stripes
        '<path d="M14 16 Q19 13.5 24 16" stroke="'+stripe+'" stroke-width="1.7" fill="none" opacity="0.6" stroke-linecap="round"/>' +
        '<path d="M16 20 Q21 17.8 26 20" stroke="'+stripe+'" stroke-width="1.7" fill="none" opacity="0.6" stroke-linecap="round"/>' +
        // head
        '<circle cx="39" cy="14" r="8.6" fill="'+fur+'"/>' +
        // ears
        '<path d="M33.5 8.5 L31.5 1.5 L39 6.5 Z" fill="'+fur+'"/>' +
        '<path d="M43.5 7.5 L47 1 L44.5 8.8 Z" fill="'+fur+'"/>' +
        '<path d="M34.3 7 L33 3 L36.8 6.2 Z" fill="'+shade+'"/>' +
        '<path d="M43.7 6.6 L45.3 3 L44.2 7.4 Z" fill="'+shade+'"/>' +
        // face
        '<circle cx="42.3" cy="12.4" r="1.25" fill="#241208"/>' +
        '<circle cx="37.6" cy="12.1" r="1.25" fill="#241208"/>' +
        '<path d="M46 15 L48 14.3 L46 16" fill="#e8b7a0"/>' +
        '<path d="M43.5 16.4 Q41.5 18.3 39.5 16.4" stroke="#241208" stroke-width="0.9" fill="none" stroke-linecap="round"/>' +
        // whiskers
        '<path d="M43 15.2 L48.5 14" stroke="#241208" stroke-width="0.6" opacity="0.5" stroke-linecap="round"/>' +
        '<path d="M43 16.6 L48.5 17.2" stroke="#241208" stroke-width="0.6" opacity="0.5" stroke-linecap="round"/>' +
      '</g>' +
    '</svg>';
  }

  function makeCat(el, fur, stripe, opts){
    el.innerHTML = catSVG(fur, stripe);
    var tail = el.querySelector('.tail');

    var state = {
      progress: opts.startProgress,   // 0..1 along perimeter
      dir: 1,                         // 1 = clockwise, -1 = counter-clockwise
      speed: opts.speed,              // fraction of perimeter per second
      paused: false,
      pauseUntil: 0,
      nextEventAt: performance.now() + 1000 + Math.random()*3000
    };

    function perimeterPoint(t, w, h){
      // walk clockwise starting at top-left, inset from edges
      var inset = 14;
      var W = w - inset*2, H = h - inset*2;
      var per = 2*(W+H);
      var d = ((t % 1) + 1) % 1 * per;

      if (d < W){ return { x: inset + d, y: inset, edge:'top' }; }
      d -= W;
      if (d < H){ return { x: w - inset, y: inset + d, edge:'right' }; }
      d -= H;
      if (d < W){ return { x: w - inset - d, y: h - inset, edge:'bottom' }; }
      d -= W;
      return { x: inset, y: h - inset - d, edge:'left' };
    }

    var last = performance.now();

    function frame(now){
      var dt = Math.min((now - last)/1000, 0.1);
      last = now;

      if (now > state.nextEventAt){
        var roll = Math.random();
        if (roll < 0.3){
          state.paused = true;
          state.pauseUntil = now + 900 + Math.random()*2200;
        } else if (roll < 0.55){
          state.dir *= -1;
        } else {
          state.speed = opts.speedMin + Math.random()*(opts.speedMax - opts.speedMin);
        }
        state.nextEventAt = now + 1800 + Math.random()*3500;
      }
      if (state.paused && now > state.pauseUntil){ state.paused = false; }

      if (!reduceMotion && !state.paused){
        state.progress += state.dir * state.speed * dt;
      }

      var w = window.innerWidth, h = window.innerHeight;
      var p = perimeterPoint(state.progress, w, h);
      // Sample a point slightly ahead along the actual direction of travel
      // (this always points the cat the way it is really moving, on every edge).
      var pNext = perimeterPoint(state.progress + state.dir*0.004, w, h);

      var dx = pNext.x - p.x, dy = pNext.y - p.y;
      var angle = 0;
      if (Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001){
        angle = Math.atan2(dy, dx) * 180 / Math.PI;
        state.lastAngle = angle;
      } else if (typeof state.lastAngle === 'number'){
        angle = state.lastAngle;
      }

      var bob = state.paused ? Math.sin(now/220)*1.2 : Math.sin(now/140)*1.6;

      el.style.transform =
        'translate(' + (p.x - 24) + 'px,' + (p.y - 16 + bob) + 'px) ' +
        'rotate(' + angle + 'deg)';

      if (tail){
        var tailAngle = state.paused ? Math.sin(now/260)*10 : Math.sin(now/110)*5;
        tail.style.transform = 'rotate(' + tailAngle + 'deg)';
      }

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  makeCat(document.getElementById('cat1'), '#D98B3E', '#B5661E', {
    startProgress: 0.05, speed: 0.014, speedMin: 0.01, speedMax: 0.022
  });
  makeCat(document.getElementById('cat2'), '#8B8E96', '#5F6169', {
    startProgress: 0.55, speed: 0.011, speedMin: 0.008, speedMax: 0.02
  });
})();
