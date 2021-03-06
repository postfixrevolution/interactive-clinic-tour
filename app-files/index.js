/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };
  
  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Register the custom control method.
  var deviceOrientationControlMethod = new DeviceOrientationControlMethod();
  var controls = viewer.controls();
  controls.registerMethod('deviceOrientation', deviceOrientationControlMethod);

  // Create scenes.
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function(hotspot) {
      if ( hotspot.type == "info" ) {
        var element = createInfoHotspotElement(hotspot);
      }
      else if ( hotspot.type == "hoverspot" ) {
        var element = createHoverHotspotElement(hotspot);
      }
      else if ( hotspot.type == "expand" ) {
        var element = createExpandHotspotElement(hotspot);
      }
      else if ( hotspot.type == "hint" ) {
        var element = createHintHotspotElement(hotspot);
      }
      else if ( hotspot.type == "generic" ) {
        var element = createOldInfoHotspotElement(hotspot);
      }
      else if ( hotspot.type == "textoverlay" ) {
        var element = createTextOverlay(hotspot);
      }
      else if ( hotspot.type == "reveal" ) {
        var element = createRevealHotspotElement(hotspot);
      }
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  //if (data.settings.autorotateEnabled) {
  //  autorotateToggleElement.classList.add('enabled');
  //}

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    screenfull.on('change', function() {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  /*
  // Start with the scene list open on desktop.
  if (!document.body.classList.contains('mobile')) {
    showSceneList();
  }
  */

  // Set handler for scene switch.
  scenes.forEach(function(scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function() {
      switchScene(scene);
      // On mobile, hide scene list after selecting a scene.
      if (document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  // DOM elements for view controls.
  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  // Dynamic parameters for controls.
  var velocity = 0.7;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  // device orientation stuff
  var enabled = false;

  function requestPermissionForIOS() {
    window.DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          enableDeviceOrientation()
        }
      }).catch((e) => {
        console.error(e)
      })
  }

  function enableDeviceOrientation() {
    deviceOrientationControlMethod.getPitch(function (err, pitch) {
      if (!err) {
        view.setPitch(pitch);
      }
    });
    controls.enableMethod('deviceOrientation');
    enabled = true;
    //autorotateToggleElement.className = 'icon on';
    autorotateToggleElement.classList.add('enabled');
  }

  function enable() {
    if (window.DeviceOrientationEvent) {
      if (typeof (window.DeviceOrientationEvent.requestPermission) == 'function') {
        requestPermissionForIOS()
      } else {
        enableDeviceOrientation()
      }
    }
  }

  function disable() {
    controls.disableMethod('deviceOrientation');
    enabled = false;
    //autorotateToggleElement.className = 'icon off';
    autorotateToggleElement.classList.remove('enabled');
  }

  function toggleAutorotate() {
    if (enabled) {
      disable();
    } else {
      enable();
    }
  }

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }


  function createHoverHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.setAttribute("id",hotspot.id); 
    wrapper.classList.add(hotspot.type);

   
    // Create hotspot header.
    var header = document.createElement('div');
    header.classList.add('hotspot');

    // Create button rings element.
    var out = document.createElement('div');
    out.classList.add('out');
    var In = document.createElement('div');
    In.classList.add('in');

    header.appendChild(out);
    header.appendChild(In);


    // Create text element. 
    var text = document.createElement('div');
    text.classList.add('hover-hotspot-text'); 
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }


  function createExpandHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.setAttribute("id",hotspot.id); // yeah....maybe?
    wrapper.classList.add(hotspot.type);

    // Create hotspot/tooltip header.
    var header = document.createElement('h1');
    header.classList.add('title');
    header.innerHTML = hotspot.title;
  

    // Create text element. *****
    var text = document.createElement('p');
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  function createHintHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.setAttribute("id",hotspot.id); 
    wrapper.classList.add(hotspot.type);

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('icon_wrapper');

    var icon = document.createElement('div');
    icon.classList.add('icon');

    var innerIcon = document.createElement('div');
    innerIcon.setAttribute("id","inner_icon")
    innerIcon.classList.add('inner_icon');

    var icon1 = document.createElement('div');
    icon1.classList.add('icon1');
    var icon2 = document.createElement('div');
    icon2.classList.add('icon2');
    innerIcon.appendChild(icon1);
    innerIcon.appendChild(icon2);

    icon.appendChild(innerIcon);
    iconWrapper.appendChild(icon);

    var tip = document.createElement('div');
    tip.classList.add('tip');
    tip.innerHTML = hotspot.title;

    var content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(iconWrapper);
    wrapper.appendChild(tip);
    wrapper.appendChild(content);

    // Toggle content when icon is clicked.
    wrapper.querySelector('.icon_wrapper').addEventListener('click', () => {
      document.querySelector("#" + hotspot.id).classList.toggle('expanded');
    
      document.querySelector("#" + hotspot.id + " .inner-icon").classList.toggle('closeIcon');
    });

  
    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {

   // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.setAttribute("id",hotspot.id); 
    wrapper.classList.add(hotspot.type);

   
    // Create hotspot header.
    var header = document.createElement('div');
    header.classList.add('hotspot');

    var tbox = document.createElement('div');
    tbox.classList.add('text-box');

    var closebutton = document.createElement('img');
    closebutton.src = 'img/close.png';
    closebutton.classList.add('close-button');
    tbox.appendChild(closebutton);

    var title = document.createElement('h1');
    title.innerHTML = hotspot.title;
    var text = document.createElement('p');
    text.innerHTML = hotspot.text;
    tbox.appendChild(title);
    tbox.appendChild(text);
    wrapper.appendChild(tbox);

    // Create button outline element.
    var out = document.createElement('div');
    out.classList.add('out');

    var icon = document.createElement('img');
    icon.src = 'img/info.png';
    icon.classList.add('info-icon');
    out.appendChild(icon);

    header.appendChild(out);


    // Create pop up title element. 
    var text = document.createElement('div');
    text.classList.add('info-title'); 
    text.innerHTML = hotspot.title;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // create text box for mobile
    var modal = document.createElement('div');
    modal.classList.add('mobile-info-modal');
    modal.innerHTML = tbox.innerHTML;
    document.body.appendChild(modal);

    
    // event listener for clicking hotspot to expand
    wrapper.querySelector('.info-icon').addEventListener('click', () => {
      document.querySelector("#" + hotspot.id + " .info-title").classList.toggle('info-title-expanded');
      document.querySelector("#" + hotspot.id + " .text-box").classList.toggle('text-box-clicked');
      modal.classList.toggle('mobile-modal-open');
    });

    wrapper.querySelector('.close-button').addEventListener('click', () => {
      document.querySelector("#" + hotspot.id + " .info-title").classList.toggle('info-title-expanded');
      document.querySelector("#" + hotspot.id + " .text-box").classList.toggle('text-box-clicked');
    });

    modal.querySelector('.close-button').addEventListener('click', () => {
      modal.classList.toggle('mobile-modal-open');
    });
    

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  function createRevealHotspotElement(hotspot) {

    // Create wrapper element to hold icon and hotspot.
    var wrapper = document.createElement('div');
    wrapper.setAttribute("id",hotspot.id); 
    wrapper.classList.add(hotspot.type);
  
    var icon = document.createElement('img');
    icon.src = 'img/photo.png';
    wrapper.appendChild(icon);
   
    // Create content to be revealed on hover.
    var content = document.createElement('div');
    content.classList.add('reveal-content');
    var contentImg = document.createElement('img');
    contentImg.src = hotspot.title;
    var text = document.createElement('p');
    text.innerHTML = hotspot.text;
  
    content.appendChild(contentImg);
    content.appendChild(text);
  
    // add revealed content to hotspot
    wrapper.appendChild(content);
  
    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);
  
    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  // Display the initial scene.
  var querystring = window.location.search;
  console.log(querystring);
  const urlParams = new URLSearchParams(querystring);
  const sceneurl = urlParams.get('scene')

  if(sceneurl){
     var newscene = findSceneById(sceneurl);
     switchScene(newscene);
  }
  else{
	  // Display the initial scene.
	  switchScene(scenes[0]);
  }

}



)();


function createTextOverlay(hotspot) {

  // Create wrapper element to hold icon and tooltip.
  var wrapper = document.createElement('div');
  wrapper.setAttribute("id",hotspot.id); 
  wrapper.classList.add(hotspot.type);

 
  // Create hotspot header.
  var header = document.createElement('div');
  header.classList.add('hotspot');


  // Create pop up title element. 
  var text = document.createElement('div');
  text.classList.add('text'); 
  text.innerHTML = hotspot.text;

  // Place header and text into wrapper element.
  wrapper.appendChild(header);
  wrapper.appendChild(text);

  return wrapper;
}