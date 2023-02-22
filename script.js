$(document).ready(() => {
  let inter = 1;
  setInterval(function () {
    $('#loading-text').html('Loading' + '.'.repeat(inter));
    inter += 1;
    if (inter > 3) {
      inter = 1;
    }
  }, 500);
  let old = '';
  let title = '';
  let names;
  // load map
  $('#map').maphilight();
  //All
  $('area').each(function () {$(this).data('maphilight', {'alwaysOn': false, 'fillColor': 'f24141', 'fillOpacity': '0.3', 'strokeColor': 'a61728', 'shadow': true, 'shadowColor': 'f24141', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight')});
  //Fountain
  $('area[title|="fountain" i]').data('maphilight', {'alwaysOn': true, 'fillColor': '1058c4', 'fillOpacity': '0.4', 'strokeColor': '1058c4', 'shadow': true, 'shadowColor': '1058c4', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
  $('area[title|="fountain" i]').mousemove(function (event) {landmark("fountain", event)});
  $('area[title|="fountain" i]').mouseout(function (event) {stopLandmark()});
  //Entrance
  $('area[title|="entrance" i]').data('maphilight', {'alwaysOn': true, 'fillColor': '1058c4', 'fillOpacity': '0.4', 'strokeColor': '1058c4', 'shadow': true, 'shadowColor': '1058c4', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
  $('area[title|="entrance" i]').mousemove(function (event) {landmark("entrance", event)});
  $('area[title|="entrance" i]').mouseout(function (event) {stopLandmark()});
  //Chapel
  $('area[title|="chapel" i]').data('maphilight', {'alwaysOn': true, 'fillColor': '1058c4', 'fillOpacity': '0.4', 'strokeColor': '1058c4', 'shadow': true, 'shadowColor': '1058c4', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
  $('area[title|="chapel" i]').mousemove(function (event) {landmark("chapel", event)});
  $('area[title|="chapel" i]').mouseout(function (event) {stopLandmark()});
  // See lot details
  $("area").each((i, elmnt) => {
    let x = 0;
    let y = 0;
    elmnt = $(elmnt);
  
    elmnt.mousedown(e => {
      if (elmnt.attr('title') === "Chapel" || elmnt.attr('title') === "Fountain" || elmnt.attr('title') === "Entrance") {
        return;
      }
      x = e.pageX;
      y = e.pageY;
    });
  
    elmnt.mouseup(e => {
      if (elmnt.attr('title') === "Chapel" || elmnt.attr('title') === "Fountain" || elmnt.attr('title') === "Entrance") {
        return;
      }
  
      if (Math.abs(e.pageX - x) < 5 && Math.abs(e.pageY - y) < 5 && names) {
        elmnt.mouseout();
  
        // hide person data
        $("#person-data").hide();
        $("#plot-data").css("display", "flex");
        $("#plot-name").text(elmnt.attr("title"));
  
        $("#plot-inhabitants").html(null);
        $("#plot-inhabitants").css("height", "auto");
        let location = elmnt.attr('title');
        for (let i = 0; i < names.length; i++) {
          if (names[i][4].replace(' ', '') + names[i][5].replace(' ', '') === location) {
            let middle = names[i][1];
            let fname = names[i][0];
            let lname = names[i][2];
  
            let inhabitant = $(`<li class="plot-inhabitant">${(fname + ' ' + middle + ' ' + lname).replace(null, '').replace(null, '').replace('  ', ' ').replace('  ', ' ')}</li>`);
  
            inhabitant.click(() => {
              find(inhabitant.text(), location);
            });
  
            $("#plot-inhabitants").append(inhabitant);
          }
        }
  
        // add scroll bar
        if ($("#plot-inhabitants").height() > $(window).height() - 220) {
          $("#plot-inhabitants").css("overflow-y", "scroll");
          $("#plot-inhabitants").height($(window).height() - 220);
        } else {
          $("#plot-inhabitants").css("overflow-y", "hidden");
          $("#plot-inhabitants").css("height", "auto");
        }
  
        // highlighting
        title = location;
        if (old != '') {
          $('area[title|="' + old + '" i]').data('maphilight', {'alwaysOn': false, 'fillColor': 'f24141', 'fillOpacity': '0.3', 'strokeColor': 'a61728', 'shadow': true, 'shadowColor': 'f24141', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
        }
        elmnt.data('maphilight', {'alwaysOn': true, 'fillColor': 'f5fc23', 'fillOpacity': '0.4', 'strokeColor': 'f5fc23', 'shadow': true, 'shadowColor': 'f5fc23', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
        old = title;
      }
    });
  });
  // zoom
  var zoom = 1;
  function scale(amount) {
    $('.map').css({'transform': `scale(${amount}, ${amount})`});
    $('#map').css({'transform': 'scale(1, 1)'});
    zoom = amount;
  }
  
  // zoom buttons
  var zooming = false;
  function zoomIn() {
    if (zooming == true || zoom >= 3) {
      return;
    }
    zooming = true;
    let i = 0;
    let interval = setInterval(() => {
      if (i >= 0.3 || zoom >= 3) {
        zooming = false;
        clearInterval(interval);
        return;
      } else {
        scale(zoom + 0.01);
        i += 0.01;
      }
    }, 10);
  }
  function zoomOut() {
    if (zooming == true || zoom <= 1) {
      return;
    }
    zooming = true;
    let changeX;
    let changeY;
    changeX = -img.offsetLeft / 30;
    changeY = -img.offsetTop / 30;
    let x = 0;
    interval = setInterval(() => {
      if (x >= 0.3 || zoom <= 1) {
        zooming = false;
        img.style.top = '0px';
        img.style.left = '0px';
        clearInterval(interval);
        return;
      }
      else {
        scale(zoom - 0.01);
        x += 0.01;
        img.style.top = img.offsetTop + changeY + 'px';
        img.style.left = img.offsetLeft + changeX + 'px';
      }
    }, 10);
  }
  function landmark(name, event) {
    $('#landmark-info').css({'display': 'flex'});
    let left = event.pageX + 5;
    let top = event.pageY - 30 * zoom;
    if (name === 'fountain') {
      $('#landmark-info').css({'top': top + 'px', 'left': left + 'px', 'font-size': 17 * zoom + 'px'});
      $('#landmark-name').html("Fountain");
    }
    else if (name === 'chapel') {
      $('#landmark-info').css({'top': top + 'px', 'left': left + 'px', 'font-size': 17 * zoom + 'px'});
      $('#landmark-name').html("Chapel");
    }
    else {
      $('#landmark-info').css({'top': top + 'px', 'left': left + 'px', 'font-size': 17 * zoom + 'px'});
      $('#landmark-name').html("Entrance");
    }
  }
  function stopLandmark() {
    $('#landmark-info').css({'display': 'none'});
  }
  
  $("form").submit(function (e) {
    e.preventDefault();
  });
  
  $("#person-data-hide").click(() => {
    $("#person-data").hide();
    $('area[title|="' + old + '" i]').data('maphilight', {'alwaysOn': false, 'fillColor': 'f24141', 'fillOpacity': '0.3', 'strokeColor': 'a61728', 'shadow': true, 'shadowColor': 'f24141', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
    old = '';
  });
  
  // fetch data
  fetch("https://woodlandcemeteryapi.illusion705.repl.co/data/regular_lots")
    .then(response => response.json())
    .then(data => {
      names = data;
  
      let str = '';
  
      for (let i = 0; i < names.length; i++) {
        if (names[i][1] != '') {
          str += ('<option value="' + names[i][0] + ' ' + names[i][1] + ' ' + names[i][2] + ' (' + names[i][4] + names[i][5] + ')' + '"></option>').replace(null, '').replace(null, '').replace('  ', ' ').replace('  ', ' ');
        } else {
          str += ('<option value="' + names[i][0] + ' ' + names[i][2] + ' (' + names[i][4] + names[i][5] + ')' + '"></option>').replace(null, '').replace(null, '').replace('  ', ' ').replace('  ', ' ');
        }
      }
      document.getElementById('name-list').innerHTML = str;
  
      // show search form
      $("#search-form").fadeIn();
      $('#loading').fadeOut();
    });
  
  let theirSection = '';
  function find(name = null, theirSection = null) {
    if (!name) {
      name = $('input[name="name"]').val();
    }
    if (name === '') {
      return;
    }
    if (name.indexOf('(') != -1) {
      theirSection = name.substring(name.indexOf('(') + 1, name.length - 1);
      name = name.substring(0, name.indexOf('(') - 1);
    }
    
    let section = '';
    let lot = '';
    let middle = '';
    let tit = '';
    let graveNum = '';
    let death = '';
    let lname = '';
    let fname = '';
    let findAGraveId = null;
    
    // google sheets stuff
    for (let i = 0; i < names.length; i++) {
      let checkName = '';
      if (names[i][1] != '') {
        checkName = (names[i][0] + ' ' + names[i][1] + ' ' + names[i][2]).replace(null, '').replace(null, '').replace('  ', ' ').replace('  ', ' ');
      } else {
        checkName = (names[i][0] + ' ' + names[i][2]).replace(null, '').replace(null, '').replace('  ', ' ').replace('  ', ' ');
      }
      if (name === checkName) {
        section = names[i][4].replace(' ', '');
        lot = names[i][5].replace(' ', '');
        if (theirSection != (section + lot) && theirSection != '') {
          continue;
        }
        middle = names[i][1];
        tit = names[i][3];
        graveNum = names[i][6];
        death = names[i][7];
        fname = names[i][0];
        lname = names[i][2];
        findAGraveId = names[i][9];
        if (tit === null || tit === '') {
          tit = 'N/A';
        }
        if (graveNum === null || graveNum === '') {
          graveNum = 'N/A';
        }
        if (death === null || death === '') {
          death = 'N/A';
        }
        $("#person-data").css("display", "flex");
        $("#plot-data").hide();
        break;
      }
    }
    
    document.getElementById('person-name').innerHTML = (fname + ' ' + middle + ' ' + lname).replace(null, '').replace(null, '').replace('  ', ' ').replace('  ', ' ');
    document.getElementById('person-section').innerHTML = ('Section: ' + section.toUpperCase()).replace(null, '');
    document.getElementById('person-lot-num').innerHTML = ('Lot Number: ' + lot).replace(null, '');
    document.getElementById('person-tit').innerHTML = ('Title: ' + tit).replace(null, '');
    document.getElementById('grave-number').innerHTML = ('Grave Number: ' + graveNum).replace(null, '');
    document.getElementById('death-date').innerHTML = ('Death Date: ' + death).replace(null, '');
    title = (section.toLowerCase() + lot).toString();
    $('input[name="name"]').val('');
  
    if (old != '') {
      $('area[title|="' + old + '" i]').data('maphilight', {'alwaysOn': false, 'fillColor': 'f24141', 'fillOpacity': '0.3', 'strokeColor': 'a61728', 'shadow': true, 'shadowColor': 'f24141', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
    }
  
    $('area[title|="' + title + '" i]').data('maphilight', {'alwaysOn': true, 'fillColor': 'f5fc23', 'fillOpacity': '0.4', 'strokeColor': 'f5fc23', 'shadow': true, 'shadowColor': 'f5fc23', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
    old = title;

    // FindAGrave link
    if (findAGraveId) {
      $("#find-a-grave-link").show();
      $("#find-a-grave-link").attr("href", `https://www.findagrave.com/memorial/${findAGraveId}/`);
    } else {
      $("#find-a-grave-link").hide();
    }
  }

  // submit search form
  $("#submit-search-form").click(() => find());
  
  // remove links on sections
  const map = document.querySelector("map");
  
  map.onclick = e => {
    e.preventDefault();
  }
  
  // map dragging
  // code from: https://www.w3schools.com/howto/howto_js_draggable.asp
  const img = document.querySelector(".center");
  dragElement(img);
  dragElement(map);
  
  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
  
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
  
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
  
      // set the element's new position:
      if (!(img.offsetTop - pos2 > 0 + ((zoom - 1) * 433)) && !(img.offsetTop - pos2 < -255 - ((zoom - 1) * 433))) {
        img.style.top = (img.offsetTop - pos2) + 'px';
      }
      if (!(img.offsetLeft - pos1 > 0 + ((zoom - 1) * 816)) && !(img.offsetLeft - pos1 < -340 - ((zoom - 1) * 816))) {
        img.style.left = (img.offsetLeft - pos1) + 'px';
      }
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  
  // hide plot data
  $("#plot-data-hide").click(() => {
    $("#plot-data").hide();
  
    // remove highlight
    $('area[title|="' + old + '" i]').data('maphilight', {'alwaysOn': false, 'fillColor': 'f24141', 'fillOpacity': '0.3', 'strokeColor': 'a61728', 'shadow': true, 'shadowColor': 'f24141', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
    old = '';
  });
  
  // notable burials
  $("#show-notable-burials").click(() => {
    $("#person-data").hide();
    $("#plot-data").css("display", "flex");
    $("#plot-name").text("Notable Burials");
  
    $("#plot-inhabitants").html(null);
    $("#plot-inhabitants").css("height", "auto");
  
    let notableBurials = [{
      fname: "Arthur",
      mname: "Robert",
      lname: "Ashe",
      section: "M",
      lot: "11"
    }, {
      fname: "John",
      lname: "Jasper",
      section: "R",
      lot: "1"
    }, {
      fname: "Arthur",
      mname: "Lee",
      lname: "Gardner",
      section: "V",
      lot: "26"
    }, {
      fname: "Charles",
      mname: "T.",
      lname: "Russell",
      section: "W",
      lot: "13"
    }, {
      fname: "Augustus",
      lname: "Brown",
      section: "R",
      lot: "67"
    }, {
      fname: "Christopher",
      mname: "French",
      lname: "Foster",
      section: "T",
      lot: "23"
    }, {
      fname: "Lucy",
      lname: "Foster",
      section: "T",
      lot: "23"
    }, {
      fname: "Annie",
      lname: "Cofer",
      section: "H",
      lot: "50"
    }, {
      fname: "Dawson",
      lname: "Cofer",
      section: "H",
      lot: "50"
    }, {
      fname: "Florence",
      lname: "Walker",
      section: "H",
      lot: "14"
    }, {
      fname: "Hattie",
      lname: "Jefferson",
      section: "S",
      lot: "3"
    }, {
      fname: "Henry",
      mname: "J.",
      lname: "Moore",
      section: "U",
      lot: "23"
    }, {
      fname: "I.",
      mname: "Lincoln",
      lname: "Bailey",
      section: "U",
      lot: "16"
    }, {
      fname: "Thomas",
      lname: "Crump",
      section: "R",
      lot: "35"
    }, {
      fname: "William",
      lname: "Browne",
      section: "J",
      lot: "20"
    }, {
      fname: "Zenobia",
      mname: "G.",
      lname: "Gilpin",
      section: "F",
      lot: "53"
    }, {
      fname: "Marietta",
      lname: "Chiles",
      section: "W",
      lot: "16"
    }, {
      fname: "John",
      lname: "Hewin",
      section: "W",
      lot: "17"
    }, {
      fname: "Elizabeth",
      lname: "Gaiters",
      section: "G",
      lot: "102"
    }, {
      fname: "Leslie",
      lname: "Bolling",
      section: "T",
      lot: "15"
    }, {
      fname: "Robert",
      lname: "Pharr",
      section: "K",
      lot: "1"
    }, {
      fname: "Martha",
      lname: "Anderson",
      section: "C",
      lot: "21"
    }, {
      fname: "Clarence",
      mname: "P.",
      lname: "Hayes",
      section: "T",
      lot: "27"
    }];
  
    for (let person of notableBurials) {
      let inhabitant = $(`<li class="plot-inhabitant">${(person.fname + ' ' + (person.mname ? (person.mname + " ") : null) + person.lname + " (" + person.section + person.lot + ")").replace(null, '').replace(null, '').replace('  ', ' ').replace('  ', ' ')}</li>`);
  
      inhabitant.click(() => {
        find(inhabitant.text(), person.section + person.lot);
      });
  
      $("#plot-inhabitants").append(inhabitant);
    }
  
    // add scroll bar
    if ($("#plot-inhabitants").height() > $(window).height() - 220) {
      $("#plot-inhabitants").css("overflow-y", "scroll");
      $("#plot-inhabitants").height($(window).height() - 220);
    } else {
      $("#plot-inhabitants").css("overflow-y", "hidden");
      $("#plot-inhabitants").css("height", "auto");
    }
  
    // remove highlighting
    if (old != '') {
      $('area[title|="' + old + '" i]').data('maphilight', {'alwaysOn': false, 'fillColor': 'f24141', 'fillOpacity': '0.3', 'strokeColor': 'a61728', 'shadow': true, 'shadowColor': 'f24141', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
    }
  });
});