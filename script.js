$(document).ready(() => {
  // full section coordinates
  let fullSectionCoords = {
    A: "171,154,201,177,370,372,334,396,312,392,297,365,269,323,233,280,194,239,145,183,114,144,146,148",
    B: "282,177,263,174,248,177,241,187,244,198,243,203,251,211,263,224,280,243,375,361,391,361,455,306,331,171",
    C: "355,183,457,294,466,294,521,246,519,236,512,226,452,159,445,151,432,150,410,151,388,159,365,167,355,174",
    D: "476,100,475,148,447,145,393,149,368,154,335,158,309,162,248,165,129,139,139,98,191,100,238,99,283,99,303,98,339,93,371,92,408,89,452,92",
    E: "473,147,553,177,609,205,681,238,731,264,743,265,753,262,757,254,767,235,769,226,766,215,760,206,678,166,616,137,577,121,528,108,501,99,475,98",
    F: "492,187,495,173,502,169,512,171,597,210,724,271,731,277,734,284,734,291,721,329,707,362,695,373,685,379,672,379,659,372",
    G: "525,258,535,258,544,261,672,401,677,408,677,415,677,423,649,476,641,479,632,479,620,470,482,320,479,310,481,299",
    H: "443,329,456,324,465,324,473,329,482,337,619,487,623,497,623,506,618,513,613,523,606,532,596,539,587,545,576,546,566,546,557,539,482,465,419,399,400,376,400,367,407,360,420,349",
    I: "378,366,336,395,424,480,651,732,685,701",
    J: "636,517,643,514,654,523,740,616,742,625,742,632,701,680,694,685,682,681,610,602,603,587,605,573,606,556,612,544,619,533",
    K: "675,449,684,443,691,442,700,442,710,443,835,577,841,586,838,592,819,605,801,615,788,621,778,625,767,625,756,616,675,528,658,511,654,500,659,487",
    L: "749,294,757,290,805,310,816,316,828,323,838,330,850,341,860,349,870,359,880,368,889,377,878,390,871,400,865,408,860,417,858,424,855,433,851,444,850,453,848,460,848,467,847,476,848,483,848,493,850,500,853,508,855,518,858,528,863,535,867,545,870,554,873,561,877,567,867,577,858,580,850,578,815,538,770,492,708,424,700,413,700,400,710,385",
    M: "770,278,769,268,772,255,775,244,783,235,789,226,796,220,808,213,825,212,834,212,847,209,864,206,877,206,894,199,906,196,917,190,933,187,949,183,965,179,981,170,1001,166,1018,160,1036,153,1046,148,1051,156,1056,169,1056,184,1056,197,1056,197,1047,210,1017,226,985,238,930,261,896,275,863,287,845,294,832,297,821,297,808,297,796,294,783,288",
    N: "850,304,844,313,848,318,893,366,900,366,913,360,922,356,930,352,938,349,946,346,955,343,962,342,969,340,977,339,985,339,994,339,1002,340,1011,340,1020,343,1028,344,1036,347,1044,350,1051,353,1059,357,1066,363,1073,367,1080,372,1088,372,1093,365,1100,359,1103,349,1108,340,1109,329,1111,317,1111,305,1111,295,1109,282,1103,268,1098,251,1093,236,1092,228,1086,220,1076,216,1066,215,1051,220,1023,232,992,246,961,259,907,281",
    O: "1315,251,1302,247,1291,240,1271,218,1259,201,1245,183,1233,168,1217,147,1222,137,1237,124,1253,113,1265,106,1276,98,1289,93,1299,91,1310,93,1317,97,1327,101,1333,107,1338,113,1344,120,1347,127,1348,139,1348,152,1347,166,1344,185,1341,201,1337,222,1333,231,1330,241,1325,251",
    P: "1240,374,1249,377,1256,371,1271,350,1284,328,1291,311,1297,298,1305,286,1308,275,1308,266,1301,259,1289,250,1279,240,1268,229,1250,204,1236,187,1224,170,1213,157,1203,154,1193,155,1178,161,1165,165,1155,171,1142,180,1131,187,1119,193,1105,203,1095,206,1096,214,1100,224,1103,232,1105,242,1108,253,1112,265,1116,275,1125,282,1134,285,1142,289,1148,296,1158,305,1171,311,1230,367,1223,360,1214,351,1207,342,1197,335,1188,327,1178,319",
    Q: "1121,309,1131,305,1139,305,1147,306,1161,316,1178,330,1201,352,1216,364,1226,372,1235,379,1243,388,1248,398,1250,407,1252,415,1253,426,1256,436,1258,447,1259,460,1255,473,1253,486,1249,502,1245,518,1242,529,1237,545,1235,558,1232,573,1226,590,1219,600,1213,610,1206,619,1196,626,1187,633,1180,639,1170,645,1160,649,1151,646,1142,639,1134,629,1126,620,1119,611,1108,601,1099,591,1089,583,1088,574,1093,568,1099,562,1105,554,1112,547,1116,535,1119,525,1122,515,1125,502,1125,489,1126,475,1124,464,1122,453,1119,440,1116,428,1111,417,1106,405,1100,397,1098,388,1099,378,1102,368,1109,362,1112,354,1115,345,1118,336,1118,326,1119,316",
    R: "1144,653,1147,661,1147,674,1144,683,1137,696,1129,706,1116,715,1103,723,1089,731,1072,732,1059,732,1044,732,1031,731,1015,729,1000,726,984,722,968,718,953,712,940,708,927,702,912,695,900,690,889,683,878,677,867,669,855,664,845,657,835,654,824,647,814,643,811,634,814,624,822,617,834,611,842,605,855,597,864,591,873,586,884,585,893,586,903,591,912,595,920,601,935,605,946,610,953,611,961,612,969,615,979,617,988,617,995,617,1004,617,1013,614,1021,612,1030,610,1040,607,1047,604,1056,599,1063,595,1072,591,1080,592,1088,597,1096,604,1105,611,1115,622,1132,640",
    S: "894,569,893,576,900,581,909,584,919,589,930,595,940,598,951,604,962,605,971,605,981,607,991,608,1000,607,1010,605,1020,604,1030,601,1039,595,1047,592,1056,588,1063,582,1069,575,1063,566,1057,559,1049,549,1039,537,1030,532,1020,526,1010,527,1002,532,991,530,979,530,971,530,961,529,952,526,942,522,935,530,926,540,912,553,894,569",
    T: "887,561,912,542,920,534,930,522,933,512,933,498,932,488,932,476,933,466,936,456,938,444,936,436,933,428,926,420,919,411,910,400,904,392,896,384,890,390,883,398,874,410,868,423,863,434,860,444,857,456,855,464,854,475,857,485,857,493,858,503,860,512,863,524,868,531,878,545",
    U: "902,377,939,423,946,428,959,428,968,426,981,424,995,424,1004,424,1015,430,1023,434,1044,421,1064,401,1075,390,1070,379,1053,368,1041,361,1030,356,1014,351,1000,349,989,348,975,348,956,351,935,358,919,366",
    V: "1030,439,1034,451,1037,460,1037,471,1039,481,1039,490,1036,500,1033,510,1034,519,1040,526,1046,532,1050,537,1054,545,1059,550,1063,558,1069,565,1076,569,1083,563,1092,556,1100,543,1105,536,1108,526,1115,516,1116,506,1118,494,1118,481,1118,468,1116,460,1113,448,1109,437,1106,425,1102,415,1098,405,1090,398,1082,393,1075,399,1066,411,1053,421,1037,432",
    W: "984,475,45", // circle
    X: "828,857,759,768,814,773,891,717,1020,739,915,860,876,819",
    Y: "677,704,687,708,697,711,815,863,756,864,656,730,656,724,665,714,656,730,656,724"
  };
  
  // loading dots
  let dotCount = 1;
  setInterval(() => {
    $("#loading-text").html("Loading" + ".".repeat(dotCount));
    dotCount += 1;
    if (dotCount > 3) {
      dotCount = 1;
    }
  }, 500);

  // unhighlight current section
  let currentHighlight = "";

  function unhighlight() {
    if (currentHighlight !== "") {
      if (typeof currentHighlight === "string") {
        $(`area[title|="${currentHighlight}" i]`).data('maphilight', {'alwaysOn': false, 'fillColor': 'f24141', 'fillOpacity': '0.3', 'strokeColor': 'a61728', 'shadow': true, 'shadowColor': 'f24141', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
      } else {
        currentHighlight.data('maphilight', {'alwaysOn': false, 'fillColor': 'f24141', 'fillOpacity': '0.3', 'strokeColor': 'a61728', 'shadow': true, 'shadowColor': 'f24141', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
        currentHighlight.remove();
      }
    }

    currentHighlight = "";
  }

  
  let title = "";
  let apiData = {
    sga: [],
    main: []
  };
  
  // load map
  $("#map").maphilight();

  // setup sections
  new Promise(async (resolve, reject) => {
    $("map").load("areas.html", () => {
      // fountain
      $('area[title|="fountain" i]').data('maphilight', {'alwaysOn': true, 'fillColor': '1058c4', 'fillOpacity': '0.4', 'strokeColor': '1058c4', 'shadow': true, 'shadowColor': '1058c4', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
      $('area[title|="fountain" i]').mousemove(function (event) {landmark("fountain", event)});
      $('area[title|="fountain" i]').mouseout(function (event) {stopLandmark()});
      
      // entrance
      $('area[title|="entrance" i]').data('maphilight', {'alwaysOn': true, 'fillColor': '1058c4', 'fillOpacity': '0.4', 'strokeColor': '1058c4', 'shadow': true, 'shadowColor': '1058c4', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
      $('area[title|="entrance" i]').mousemove(function (event) {landmark("entrance", event)});
      $('area[title|="entrance" i]').mouseout(function (event) {stopLandmark()});
      
      // chapel
      $('area[title|="chapel" i]').data('maphilight', {'alwaysOn': true, 'fillColor': '1058c4', 'fillOpacity': '0.4', 'strokeColor': '1058c4', 'shadow': true, 'shadowColor': '1058c4', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
      $('area[title|="chapel" i]').mousemove(function (event) {landmark("chapel", event)});
      $('area[title|="chapel" i]').mouseout(function (event) {stopLandmark()});
      
      // see lot details
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
      
          if (Math.abs(e.pageX - x) < 5 && Math.abs(e.pageY - y) < 5 && apiData) {
            elmnt.mouseout();
      
            // hide person data
            $("#person-data-container").hide();
            $("#plot-data").css("display", "flex");
            $("#plot-name").text(elmnt.attr("title"));
      
            $("#plot-inhabitants").html(null);
            $("#plot-inhabitants").css("height", "auto");
            let location = elmnt.attr('title');

            // list inhabitatns
            for (let i = 0; i < apiData.main.length; i++) {
              if (apiData.main[i][4].trim() + apiData.main[i][5].trim() === location) {
                let name = 
                  (apiData.main[i][0] ? apiData.main[i][0].trim() + " " : "") + // first name
                  (apiData.main[i][1] ? apiData.main[i][1].trim() + " " : "") + // middle name
                  (apiData.main[i][2] ? apiData.main[i][2].trim() : ""); // last name
      
                let inhabitant = $(`<li class="plot-inhabitant">${name}</li>`);
      
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

            // unhighlight current section
            unhighlight();
      
            // highlighting
            title = location;
            elmnt.data('maphilight', {'alwaysOn': true, 'fillColor': 'f5fc23', 'fillOpacity': '0.4', 'strokeColor': 'f5fc23', 'shadow': true, 'shadowColor': 'f5fc23', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
            currentHighlight = title;
          }
        });
      });
    });

    resolve();
  })
  .then(async () => {
    // fetch single grave data
    await fetch("https://woodlandcemeteryapi.illusion705.repl.co/data/single_graves")
      .then(response => response.json())
      .then(data => {
        apiData.sga = data;
      });
    
    // fetch main data
    await fetch("https://woodlandcemeteryapi.illusion705.repl.co/data/regular_lots")
      .then(response => response.json())
      .then(data => {
        apiData.main = data;
      });

    // names that have already been added to prevent duplicates
    let alreadyAdded = [];

    // HTML for select
    let nameListHTML = "";

    // add main graves
    for (let i = 0; i < apiData.main.length; i++) {
      // get value to display as option
      let searchDisplayVal = 
        (apiData.main[i][0] ? apiData.main[i][0].trim() + " " : "") + // first name
        (apiData.main[i][1] ? apiData.main[i][1].trim() + " " : "") + // middle name
        (apiData.main[i][2] ? apiData.main[i][2].trim() + " " : "") + // last name
        ("(" + apiData.main[i][4].trim() + apiData.main[i][5].trim() + ")"); // section and lot number

      // add to HTML if not duplicate
      if (!alreadyAdded.includes(searchDisplayVal)) {
        nameListHTML += ('<option value="' + searchDisplayVal + '"></option>').replaceAll(/  */g, " "); // regex to replace multiple spaces in a row with one space
        alreadyAdded.push(searchDisplayVal);
      }
    }

    // add single graves
    for (let i = 0; i < apiData.sga.length; i++) {
      // get value to display as option
      let searchDisplayVal = 
        (apiData.sga[i][0] ? apiData.sga[i][0].trim() + " " : "") + // first name
        (apiData.sga[i][1] ? apiData.sga[i][1].trim() + " " : "") + // middle name
        (apiData.sga[i][2] ? apiData.sga[i][2].trim() + " " : "") + // last name
        ("(" + apiData.sga[i][4].trim() + ")"); // section

      // add to HTML if not duplicate
      if (!alreadyAdded.includes(searchDisplayVal)) {
        nameListHTML += ('<option value="' + searchDisplayVal + '"></option>');
        alreadyAdded.push(searchDisplayVal);
      }
    }

    // add html
    document.getElementById('name-list').innerHTML = nameListHTML;

    // show search form
    $("#search-form").fadeIn();
    $('#loading').fadeOut();
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

  $("#zoom-in").click(zoomIn);
  
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

  $("#zoom-out").click(zoomOut);
  
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

  // find person
  function find(name = null, theirSection = null) {
    // get name from input
    if (!name) {
      name = $("#name-input").val();
    }

    // exit if no name
    if (name === "") {
      return;
    }

    // parse input for name and section
    if (name.indexOf("(") != -1) {
      theirSection = name.substring(name.indexOf('(') + 1, name.length - 1);
      name = name.substring(0, name.indexOf('(') - 1);
    }

    // list of matched people
    let matches = [];

    // search main data
    for (let i = 0; i < apiData.main.length; i++) {
      let checkName = 
        (apiData.main[i][0] ? apiData.main[i][0].trim() + " " : "") + // first name
        (apiData.main[i][1] ? apiData.main[i][1].trim() + " " : "") + // middle name
        (apiData.main[i][2] ? apiData.main[i][2].trim() : ""); // last name
      
      // get name matches
      if (name.trim() === checkName && theirSection.trim() === apiData.main[i][4].trim() + apiData.main[i][5].trim()) {      
        matches.push({
          section: apiData.main[i][4].trim(),
          lot: apiData.main[i][5] ? apiData.main[i][5].trim() : "",
          name: (apiData.main[i][0] ? apiData.main[i][0].trim() + " " : "") + // first name
                (apiData.main[i][1] ? apiData.main[i][1].trim() + " " : "") + // middle name
                (apiData.main[i][2] ? apiData.main[i][2].trim() : ""), // last name
          firstName: apiData.main[i][0] ? apiData.main[i][0].trim() : null,
          middleName: apiData.main[i][1] ? apiData.main[i][1].trim() : null,
          lastName: apiData.main[i][2] ? apiData.main[i][2].trim() : null,
          title: apiData.main[i][3] ? apiData.main[i][3].trim() : "N/A",
          graveNum: apiData.main[i][6] ? apiData.main[i][6].trim() : "N/A",
          death: apiData.main[i][7] ? apiData.main[i][7].trim() : "N/A",
          findAGraveId: apiData.main[i][9] ? apiData.main[i][9].trim() : null,
          sketchfabId: apiData.main[i][10] ? apiData.main[i][10].trim() : null
        });

        // add notes
        if (apiData.main[i].length === 12) {
          matches[matches.length - 1].notes = !apiData.main[i][11] ? "N/A" : apiData.main[i][11].trim();
        }
      }
    }

    // search single grave data
    for (let i = 0; i < apiData.sga.length; i++) {
      let checkName = 
        (apiData.sga[i][0] ? apiData.sga[i][0].trim() + " " : "") + // first name
        (apiData.sga[i][1] ? apiData.sga[i][1].trim() + " " : "") + // middle name
        (apiData.sga[i][2] ? apiData.sga[i][2].trim() : ""); // last name
      
      // get name matches
      if (name.trim() === checkName && theirSection.trim() === apiData.sga[i][4].trim()) {
        matches.push({
          section: apiData.sga[i][4].trim(),
          lot: "Single Grave",
          name: (apiData.sga[i][0] ? apiData.sga[i][0].trim() + " " : "") + // first name
                (apiData.sga[i][1] ? apiData.sga[i][1].trim() + " " : "") + // middle name
                (apiData.sga[i][2] ? apiData.sga[i][2].trim() : ""), // last name
          firstName: apiData.sga[i][0] ? apiData.sga[i][0].trim() : null,
          middleName: apiData.sga[i][1] ? apiData.sga[i][1].trim() : null,
          lastName: apiData.sga[i][2] ? apiData.sga[i][2].trim() : null,
          title: apiData.sga[i][3] ? apiData.sga[i][3].trim() : "N/A",
          graveNum: apiData.sga[i][6] ? apiData.sga[i][6].trim() : "N/A",
          death: apiData.sga[i][7] ? apiData.sga[i][7].trim() : "N/A",
          findAGraveId: apiData.sga[i][9] ? apiData.sga[i][9].trim() : null,
          sketchfabId: apiData.sga[i][10] ? apiData.sga[i][10].trim() : null
        });

        // add notes
        console.log(apiData.sga[i]);
        if (apiData.sga[i].length === 11) {
          matches[matches.length - 1].notes = !apiData.sga[i][10] ? "N/A" : apiData.sga[i][10].trim();
        }
      }
    }

    // display person data container
    $("#person-data-container").css("display", "flex");
    $("#plot-data").hide();

    // set matches found
    $("#person-matches-found").text(matches.length + (matches.length !== 1 ? " matches" : " match") + " found");

    // display matches
    $("#person-records").html(null);
    for (let match of matches) {
      // create record
      let record = $("<div></div>").html($("#person-data-record-template").html());

      // update record data
      record.find(".person-name").text(match.name);
      record.find(".person-section").text("Section: " + match.section);
      record.find(".person-lot-num").text("Lot Number: " + match.lot);
      record.find(".person-title").text("Title: " + match.title);
      record.find(".person-grave-number").text("Grave Number: " + match.graveNum);
      record.find(".person-death-date").text("Death Date: " + match.death);

      // notes
      if (match.notes !== undefined) {
        record.find(".person-notes").css("display", "block").text("Notes: " + match.notes);
      }

      // FindAGrave link
      if (match.findAGraveId) {
        record.find(".find-a-grave-link")
          .css("display", "block")
          .attr("href", `https://www.findagrave.com/memorial/${match.findAGraveId}/`);
      }

      // sketchfab view button
      if (match.sketchfabId) {
        record.find(".sketchfab-view-container").css("display", "flex");

        record.find(".sketchfab-view").click(() => {
          showSketchfab(match.name, match.sketchfabId);
        });
      }
      
      // add record to DOM
      $("#person-records").append(record);
    }

    // reset search input
    $('#name-input').val("");

    // unhighlight current section
    unhighlight();
    
    // highlight section
    section = matches[0].section.toLowerCase() + matches[0].lot;

    if ($("area[title|=\"" + section + "\" i]").length > 0) {
      // highlight lot
      $(`area[title|="${section}" i]`).data('maphilight', {'alwaysOn': true, 'fillColor': 'f5fc23', 'fillOpacity': '0.4', 'strokeColor': 'f5fc23', 'shadow': true, 'shadowColor': 'f5fc23', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');
      currentHighlight = section;
    } else if (fullSectionCoords[matches[0].section.toUpperCase()]) {
      // highlight full section
      let sectionName = matches[0].section.toUpperCase();
      let fullArea = $(`<area target="" alt="${sectionName}" title="${sectionName}" href="" coords="${fullSectionCoords[sectionName]}" shape="${sectionName === "W" ? "circle" : "poly"}"></area>`);
      $("map").append(fullArea);
      fullArea.data('maphilight', {'alwaysOn': true, 'fillColor': 'f5fc23', 'fillOpacity': '0.4', 'strokeColor': 'f5fc23', 'shadow': true, 'shadowColor': 'f5fc23', 'shadowOpacity': 0.7, 'shadowY': 3, 'shadowPosition': 'outside'}).trigger('alwaysOn.maphilight');

      currentHighlight = fullArea;
    }
  }

  // submit search form
  $("#submit-search-form").click(() => find());
  
  // remove links on sections
  const map = document.querySelector("map");
  
  map.onclick = e => {
    e.preventDefault();
  }

  // sketchfab embed
  function showSketchfab(name, id) {
    // hide admin login
    $("#admin-login-container").hide();
    
    // show sketchfab model
    $("#sketchfab-embed-container").css("display", "flex");

    $("#sketchfab-embed")
      .attr("title", name + " gravestone")
      .attr("src", `https://sketchfab.com/models/${id}/embed`);

    $("#sketchfab-title").text(name + " Gravestone");
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
    unhighlight();
  });

  // hide person data
  $("#person-data-hide").click(() => {
    $("#person-data-container").hide();
    unhighlight();
  });
  
  // notable burials
  $("#show-notable-burials").click(() => {
    $("#person-data-container").hide();
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
    unhighlight();
  });

  // password authentication
  function checkPassword(input) { 
    // loading animation
    const loadingAnimation = new LoadingAnimation($("#submit-admin-password"));
    loadingAnimation.start();

    // disable input
    $("#admin-password").attr("disabled", true);
    
    // send password
    const data = {
      password: input
    };
    
    fetch("https://woodlandcemeteryapi.illusion705.repl.co/data/admin_notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      // end loading animation
      loadingAnimation.end();

      // enable input
      $("#admin-password").attr("disabled", false);

      // check password
      if (data.msg === "valid password") {
        // clear password input
        $("#admin-password").val(null);

        // hide admin password panel and button
        $("#admin-login-container").hide();
        $("#open-admin-login").hide();

        // show successful login message
        const message = new HeaderMessage("Successfully logged in as admin.", "green", 2);
        message.display();

        // add main grave notes to data
        for (let i = 0; i < apiData.main.length; i++) {
          apiData.main[i].push(data.notes.main[i]);
        }

        // add single grave notes to data
        for (let i = 0; i < apiData.sga.length; i++) {
          apiData.sga[i].push(data.notes.sga[i]);
        }
      } else {
        // show admin alert
        $("#admin-alert").show();
      }
    });
  }

  // submit admin password
  $("#submit-admin-password-container").click(() => {
    checkPassword($("#admin-password").val());
  });
  
  // show admin password form
  $("#open-admin-login").click(() => {
    $("#admin-login-container").css("display", "flex");

    // hide sketchfab model
    $("#sketchfab-embed-container").hide();
  });

  // hide admin password form
  $("#admin-login-hide").click(() => {
    $("#admin-login-container").hide();
  });

  // hide sketchfab model
  $("#sketchfab-hide").click(() => {
    $("#sketchfab-embed-container").hide();
  });
});

// loading button animation
class LoadingAnimation {
  constructor(element, size = 20, thickness = 2) {
    this.element = element;
    this.thickness = thickness;
    this.initialHeight = element.outerHeight();
    this.initialWidth = element.outerWidth();
    this.initialPadding = (element.innerWidth() - element.width()) / 2;
    this.initialDisplay = element.css("display");
    this.text = element.text();
    this.size = size;
  }

  start() {
    const loadingCircle = $("<div id=\"loading-circle\"></div>");
    this.element.css("height", this.initialHeight + "px");
    this.element.css("width", this.initialWidth + "px");
    this.element.css("display", "flex");
    this.element.css("justify-content", "center");
    this.element.css("align-items", "center");
    this.element.css("padding", "0");
    loadingCircle.css("border-top", this.thickness + "px solid white");
    loadingCircle.css("border-bottom", this.thickness + "px solid white");
    loadingCircle.css("border-left", this.thickness + "px solid transparent");
    loadingCircle.css("border-right", this.thickness + "px solid transparent");
    this.element.empty();
    this.element.append(loadingCircle);

    if (this.size != 20) {
      this.element.children().css("height", this.size + "px");
      this.element.children().css("width", this.size + "px");
    }
  }

  end() {
    this.element.empty();
    this.element.text(this.text);
    this.element.css("padding", this.initialPadding);
    this.element.css("display", this.initialDisplay);
  }
}

// header message
class HeaderMessage {
  constructor(message, color, time = null) {
    this.message = message;

    if (color === "red") {
      this.color = "#e35b5b";
    } else {
      this.color = "#8acf8b";
    }

    this.time = time;
  }

  display() {
    const headerMessage = $("#header-message");
    const headerMessageText = $("#header-message-text");
    const headerMessageHide = $("#header-message-hide");
    
    headerMessageText.text(this.message);
    headerMessage.css("background", this.color);
    headerMessage.css("opacity", "1.0");
    headerMessage.css("display", "flex");

    if (this.time) {
      this.timeout = setTimeout(() => {
        let i = 0;
        this.interval = setInterval(() => {
          headerMessage.css("opacity", (1.0 - i * 0.02).toString());

          if (i === 99) {
            headerMessage.hide();
            clearInterval(this.interval);
          }

          i++;
        }, 1);
      }, this.time * 1000);
    }

    headerMessageHide.click(() => {
      headerMessage.hide();
      clearTimeout(this.timeout);
      clearInterval(this.interval);
    });
  }
}