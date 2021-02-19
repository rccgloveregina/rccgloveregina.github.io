var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1DDExu0nSLjqvP_5DCdBOWy3__BprsYa844eKQ4IWiFg/pubhtml';


function init() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo
       // order: 'event-date'
       ///simpleSheet: true
    });
}

function showInfo(data, tabletop) {
    //alert('Successfully processe9d!');
  $("body").hide();
    var dataevent = tabletop.sheets('events').elements; 
    var datagen = tabletop.sheets('general-info').elements;
    var dataservces = tabletop.sheets('services').elements;
    //console.log(dataservces);

    for (var i = 0; i < datagen.length; i++) {
        var address = datagen[i]['address'];
        var country = datagen[i]['country'];
        var email = datagen[i]['email'];
        var tel = datagen[i]['telephone'];
        var inst = datagen[i]['instagram-link'];
        var fb = datagen[i]['facebook-link'];
        var twitt = datagen[i]['twitter-link'];
        var yout = datagen[i]['youtube-link'];

        var praydesc = datagen[i]['prayer-description'];
        var prayertagline = datagen[i]['prayer-tagline'];
        var prayeraudio = datagen[i]['prayer-audio-calc'];
        var logourl = datagen[i]['logo-url-calc'];
        var logowidth = datagen[i]['logo-width'];
        var bannertopbackground = datagen[i]['top-banner-color'];
        
         var slideoneimg = datagen[i]['slide-one-img-calc'];
        var slidetwoimg = datagen[i]['slide-two-img-calc'];
        var slidethreeimg = datagen[i]['slide-three-img-calc'];
        
         var servicesdocurl = datagen[i]['services-doc-url-calc'];
            

        var givedesc = datagen[i]['giving-description'];
        var interacdesc = datagen[i]['interac-description'];
        var contactdesc = datagen[i]['contact-description'];
        var givingtagline = datagen[i]['giving-tagline'];
        var logotitle2 = datagen[i]['logo-title'];
        var livebroadcast = datagen[i]['live-broadcast'];


        //alert(interacdesc + "hh" + givingtagline );

        var mandatequote = datagen[i]['mandate-quote'];
        var mandateauthor = datagen[i]['mandate-author'];


        var aboutdesc = datagen[i]['about-description'];
        var abouttagline = datagen[i]['about-tagline'];
        var sitetitle = datagen[i]['site-title'] + ' ' + datagen[i]['city'] + ', ' + datagen[i]['country-abbr'];


        var announcementtitle = datagen[i]['announcement-title'];
        var announcementdescription = datagen[i]['announcement-description'];
        var announcementtagline = datagen[i]['announcement-tagline'];
        var announcementurl = datagen[i]['announcement-url'];
        var announcementdate = datagen[i]['announcement-date'];
        
        
     

        $('.announcementtitle').html(announcementtitle);
        $('.announcementdescription').html(announcementdescription);
        $('.announcementtagline').html(announcementtagline);
        $('.announcementurl').html(announcementurl);
        $('.announcementdate').html('Last updated: '+ announcementdate);



       

        $('.aboutdesc').html(aboutdesc);
        $('.abouttagline').html(abouttagline);
        $('.sitetitle').html(sitetitle);

        $('#broadcast-sermon').html(livebroadcast);

        $('.address').html(address);
        $('.email').html(email);
        $('.tel').html(tel);

        $('.inst').attr('href', inst);
        $('.fb').attr('href', fb);
        $('.twitt').attr('href', twitt);
        $('.yout').attr('href', yout);

        $('#praydesc').html(praydesc);
            $('.logo-title').html(logotitle2);
        

        $('#prayertagline').html(prayertagline);
        $('.prayeraudio').attr('src', prayeraudio);
        $('.logo img').attr('src', logourl);
        $('.logo img').css('width', logowidth + 'px');
        $('.header-top').css('background', bannertopbackground);
        console.log(slideoneimg);
         $('.rccg1-img').attr('data-thumb', slideoneimg);
         $('.rccg1-img img').attr('src', slideoneimg);
        
         $('.rccg2-img').attr('data-thumb', slidetwoimg);
         $('.rccg2-img img').attr('src', slidetwoimg);
        
         $('.rccg3-img').attr('data-thumb', slidethreeimg);
         $('.rccg3-img img').attr('src', slidethreeimg);
      
         $('.servicesdoc a').attr('href', servicesdocurl);
              

        $('#givedesc').html(givedesc);
        //alert(interacdesc);
        $('.interacdesc').html(interacdesc);
        $('#contactdesc').html(contactdesc);

        $('#givingtagline').html(givingtagline);

        $('.country').html(country);
        $('#mandatequote').html(mandatequote);
        $('#mandateauthor').html(mandateauthor);

       $('body').show(); 
    }

    var soutput;
    var soutput2;
    var soutputW;
    var soutputM;
    var soutputO;
    $('.usl-services').empty();
    $('#services-sec').empty();
    $('#usl-services-w').empty();
    $('#usl-services-m').empty();
    $('#usl-services-o').empty();
    
    var sdataservces = dataservces.filter(function (service) {
        return service['days-of-week'] === 'Sunday' && service['recurring'] === 'Weekly';
    });


    var sdataservcesW = dataservces.filter(function (service) {
        return service['recurring'] === 'Weekly' && service['days-of-week'] !== 'Sunday';
    });

    var sdataservcesM = dataservces.filter(function (service) {
        return service['recurring'] === 'Monthly';
    });

    var sdataservcesO = dataservces.filter(function (service) {
        return service['recurring'] === 'Other';
    });

    //console.log(sdataservcesW);

    for (var i = 0; i < sdataservces.length; i++) {
      
        soutput = '<li><span>' + sdataservces[i]['service-title'] + ': ' + sdataservces[i]['start-time'] + ' - ' + sdataservces[i]['end-time'] + '</span></li >';
        //alert(soutput);

        soutput2 = '<h5 class="title color-black fw-b oo_mt co_mb ttu"><span>' + sdataservces[i]['service-title'] + ': ' + sdataservces[i]['start-time'] + ' - ' + sdataservces[i]['end-time'] + '</span></h5>';

        $('.usl-services').append(soutput);
        $('#services-sec').append(soutput2);
        

    }

    for (var i = 0; i < sdataservcesW.length; i++) {

        soutputW = '<li><span>' + sdataservcesW[i]['service-title'] + ': ' + sdataservcesW[i]['start-time'] + ' - ' + sdataservcesW[i]['end-time'] + ' every ' + sdataservcesW[i]['days-of-week'] + '</span></li >';

        $('#usl-services-w').append(soutputW);

    }


    for (var i = 0; i < sdataservcesM.length; i++) {

        soutputM = '<li><span>' + sdataservcesM[i]['service-title'] + ': ' + sdataservcesM[i]['start-time'] + ' - ' + sdataservcesM[i]['end-time'] + '</span><p>' + sdataservcesM[i]['service-description'] + '</p></li >';

        $('#usl-services-m').append(soutputM);

    }


    for (var i = 0; i < sdataservcesO.length; i++) {

        soutputO = '<li><span>' + sdataservcesO[i]['service-title'] + ': ' + sdataservcesO[i]['start-time'] + ' - ' + sdataservcesO[i]['end-time'] + '</span><p>' + sdataservcesO[i]['service-description'] + '</p></li >';

        $('#usl-services-o').append(soutputO);

    }








    var evoutput;
    $('#result-events').empty();
   
    var today = new Date();
    var date = today.getTime();
    
    var edataevent = dataevent.filter(function (event) {
        return new Date(event['event-date']).getTime() >= date;
    });

    if (edataevent.length === 0) {
        $('#result-events').html("<p style='text-align:center'>There are no upcoming events to display at this time.</p>");
    }

    //console.log(edataevent);

    var edataevent2 = edataevent.sort(function (a, b) {
        return new Date(a['event-date']).getTime() - new Date(b['event-date']).getTime();
    });

   // console.log(edataevent2);

    for (var i = 0; i < edataevent2.length; i++) {
     
        evoutput = '<div class="col-md-4 col-sm-6"> <a href="' + edataevent2[i]['event-image'] + '" style="padding:0px; margin:0px"><div class="card"> <img class="card-img-top" src="' + edataevent2[i]['event-image'] + '" alt="Card image" style="width:100%;height:412px;margin-bottom:0"><div class="card-body"> <h4 class="card-title" >' + edataevent2[i]['event-title'] + '</h4><p class="card-text"><span class="fa fa-clock-o fa-fw" style="margin-right:10px"></span>' + edataevent2[i]['event-date'] + ' ' + edataevent2[i]['start-time'] + ' - ' + edataevent[i]['end-time'] + '</p><p class="card-text" > <span class="fa fa-map-o fa-fw" style="margin-right:10px"></span>' + edataevent2[i]['event-location'] + '</p> </div ></div ></a></div > ';
        $('#result-events').append(evoutput);

    }
    
    
}

window.addEventListener('DOMContentLoaded', init);


function loadsermons() {

    $('#result-sermon').empty();
    $('#result-sermon').html('<img src="images/photos/preloader.GIF"/>');
    $('.push-body').css('overflow', 'hidden');
    loadlatestsermon();

}


function loadlatestevent(data, tabletop) {
  
   var data2 = tabletop.sheets('events').elements;
    var evoutput;
    $('#result-events').empty();
    if (data2.length == 0) {
        $('#result-events').html("<p style='text-align:center'>There are no upcoming events to display at this time.</p>");
    }
    //console.log(data2);
   
    for (var i = 0; i < data2.length; i++) {
        var datecust = data2[i]['event-date'];
        var datecust2 = data2[i]['event-date'];
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        alert(date);
        alert(datecust2);




        evoutput = '<div class="col-md-4 col-sm-6"> <a href="images/events/' + data2[i]['event-image'] + '" style="padding:0px; margin:0px"><div class="card"> <img class="card-img-top" src="./images/events/' + data2[i]['event-image'] + '" alt="Card image" style="width:100%;height:230px;margin-bottom:0"><div class="card-body"> <h4 class="card-title" >' + data2[i]['event-title'] + '</h4><p class="card-text"><span class="fa fa-clock-o fa-fw" style="margin-right:10px"></span>' + data2[i]['event-date'] + ' ' + data2[i]['start-time'] + ' - ' + data2[i]['end-time'] + '</p><p class="card-text" > <span class="fa fa-map-o fa-fw" style="margin-right:10px"></span>' + data2[i]['event-location'] + '</p> </div ></div ></a></div > ';
        $('#result-events').append(evoutput);

    }

}



function Sermons() {
    document.getElementById("sermons").style.width = "100%";
    $('#result-sermon').empty();
    $('#result-sermon').html('<img src="images/photos/preloader.GIF"/>');
    $('.push-body').css('overflow', 'hidden');
    loadlatestsermon();
}


function Events() {
    document.getElementById("events").style.width = "100%";
    //$('#result-events').empty();
    //$('#result-events').html('<img src="images/photos/preloader.GIF"/>');
    $('.push-body').css('overflow', 'hidden');
   // init();
   // loadlatestevent();

}


function Media() {
    document.getElementById("media").style.width = "100%";
    //$('#result-events').empty();
    //$('#result-events').html('<img src="images/photos/preloader.GIF"/>');
    $('.push-body').css('overflow', 'hidden');
    // init();
    // loadlatestevent();

}

function Prayer() {
    document.getElementById("pray").style.width = "100%";
    //$('#result-events').empty();
    //$('#result-events').html('<img src="images/photos/preloader.GIF"/>');
    $('.push-body').css('overflow', 'hidden');
    // init();
    // loadlatestevent();

}

function Give() {
    document.getElementById("give").style.width = "100%";
    //$('#result-events').empty();
    //$('#result-events').html('<img src="images/photos/preloader.GIF"/>');
    $('.push-body').css('overflow', 'hidden');
    // init();
    // loadlatestevent();

}


function Contact() {
    document.getElementById("contact").style.width = "100%";
    //$('#result-events').empty();
    //$('#result-events').html('<img src="images/photos/preloader.GIF"/>');
    $('.push-body').css('overflow', 'hidden');
    // init();
    // loadlatestevent();

}



function Services() {
    document.getElementById("services").style.width = "100%";
    //$('#result-events').empty();
    //$('#result-events').html('<img src="images/photos/preloader.GIF"/>');
    $('.push-body').css('overflow', 'hidden');
    // init();
    // loadlatestevent();

}

function About() {
    document.getElementById("about").style.width = "100%";
    //$('#result-events').empty();
    //$('#result-events').html('<img src="images/photos/preloader.GIF"/>');
    $('.push-body').css('overflow', 'hidden');
    // init();
    // loadlatestevent();

}

function Announcement() {
    document.getElementById("announcement").style.width = "100%";
    //$('#result-events').empty();
    //$('#result-events').html('<img src="images/photos/preloader.GIF"/>');
    $('.push-body').css('overflow', 'hidden');
    // init();
    // loadlatestevent();

}





function closeNav() {
    //document.getElementByClassName("overlaypages").style.width = "0%";
    $(".overlaypages").css("width", "0%");
    $(".push-body").css("overflow", "visible");
}


//Sermons Videos

function loadlatestsermon() {
    
    var channelId = 'UCNTiRBQNyfd64dGakU_Zg-Q';
    var channelIds = 'UCHp4qCAPmz7-5BJ601FDFnA';
    var channelName = '';
    var pid;
    var videoTitle;
    var videoId;
    var vidResult = 6;
    var vidWidth = 387;
    var vidHeight = 218;

  //  $(document).ready(function () {
        $.get(
            "https://www.googleapis.com/youtube/v3/channels", {
                part: 'contentDetails',
                id: channelIds,
                key: 'AIzaSyB-PeMZY-XZo4yWigfWVhl8-D3bxptW1j4'
            },
            function (data) {
                $.each(data.items, function (i, item) {
                    console.log(item);
                    pid = item.contentDetails.relatedPlaylists.uploads;
                    getVids(pid);
                });
            }
        );

        function getVids() {
            $.get(
                "https://www.googleapis.com/youtube/v3/playlistItems", {
                    part: 'snippet',
                    maxResults: vidResult,
                    playlistId: pid,
                    key: 'AIzaSyB-PeMZY-XZo4yWigfWVhl8-D3bxptW1j4'
                },
                function (data) {
                    var output;
                    $('#result-sermon').empty();

                    if (data.items.length == 0) {
                        $('#result-sermon').html("<p>There are no sermons to display at this time.</p>");
                    }
                    $.each(data.items, function (i, item) {
                        console.log(item);
                        videoTitle = item.snippet.title;
                        videoId = item.snippet.resourceId.videoId;
                        output = '<div class="col-md-4 col-sm-6"><div class="embed-responsive embed-responsive-16by9"><iframe lass="embed-responsive-item" width="' + vidWidth + '" height="' + vidHeight + '" fullscreen src=\"//www.youtube.com/embed/' + videoId + '\" frameborder="0" allowfullscreen></iframe></div></div>';

                        $('#result-sermon').append(output);

                    });
                   
                }
            );
    }

   // });

    localStorage.removeItem("data");
    localStorage.setItem("data", $('#result-sermon').html());
    console.log(localStorage.getItem("data"));
}



