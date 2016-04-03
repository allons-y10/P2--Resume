//var formattedName = HTMLheaderName.replace("%data%","Jesse Harrison");

//var role = "Front-End Developer"

//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

//var skills =
//["Learning -", " Design -", " JS -", " HTML & CSS"];

var bio = {
    "name" : "Jesse Harrison",
    "role" : "Front-End Developer",
    "contacts" : {
        "mobile" : "(636)544-2028",
        "email" : "harrisonj.jesse@gmail.com",
        "twitter" : "@jj_harrison",
        "location" : "St. Louis, MO",
        "linkedin" : "https://www.linkedin.com/in/harrisonjesse",
        "github" : "https://github.com/allons-y10"
    },
    "welcomeMessage" : "Welcome to my site. Yes, it is all about me. Feel free to browse around the site and find out all the things you need to know to hire me. One thing to know is I love adventure. I incorporate that into my work. I'm not afraid to learn new things. Infact, I enjoy learning. I've learned a variety of skills including audio/video engineering and web site design. What do I bring to the table you ask? Well along with my positive atmosphere I bring imagination and thoughtfulness. Thanks for stopping by!",
    "age" : 28,
    "skills" : [
    "Learning", "Design", "JS", "HTML & CSS", "Adaptability", "MS Suite", "Protools", "Final Cut Pro", "Avid Media Composer", "Photshop", "Illustrator", ""
    ],
    "image" : "images/me.jpg"

};

//var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

//$("#header").append(formattedPic);

var work = {
    "jobs": [
    {
        "employer" : "Hollywood Casino",
        "title" : "Facilities Coordinator",
        "dates" : "2007-present",
        "location" : "Maryland Heights, MO",
        "description" : "Coordinating vendors, placing work orders, sourcing materials and vendors, General and Preventative maintenance, lawn care, forklift operations, snow removal, Project planning, meeting deadlines in a timely manner, event planning, and help overseeing the budget, Managing a small group of employees, coaching and training fellow employees, Daily interaction with clients, phone skills, and ability to work well with other employees"
    },
    {
        "employer" : "Self-Employed",
        "title" : "Freelance Media Designer",
        "dates" : "2012-present",
        "location" : "St. Louis, MO",
        "description" : "Logo design, ability to make promotional videos, film (exp. With HD camera) and photo editing, Ability to connect with clients to help develop what they want/have envisioned, Branding and creative media"
    },
    {
        "employer" : "Journey Church",
        "title" : "Creative Media Director",
        "dates" : "2009-2011",
        "location" : "Troy, MO",
        "description" : "Lead creative sessions, coordinate events, direct and produce live performances on a weekly basis, Develop the brand for the church, illustrations, podcasts, and work with social media platforms ,Film, edit, and direct promotional videos, and record live music artists, Speak publicly in front of large groups and oversee a group of twenty or more individuals on a  weekly basis"
    }
  ]
};

var education = {
    "schools": [
      {
        "name": "Lindenwood University",
        "location": "St. Charles, MO, US",
        "degree": "BA",
        "graduated": "2012",
        "major": "Communications"
      },
      {
        "name": "Recording Connection",
        "location": "St. Louis, MO, US",
        "degree": "Certificate",
        "graduated": "2009",
        "major": ["Audio Engineering"]
      },
      {
        "name": "Udacity",
        "location": "St. Louis, MO, US",
        "degree": "Nanodegree",
        "graduated": "2016",
        "major": ["Front-End Development"]
      }
    ]
};

var projects = {
    "projects":[
      {
        "title": "Bebop",
        "dates": "2015",
        "description": "A Photoshop project base on the popular anime series Cowboy Bebop",
        "images": ["images/Spike.png"]
      },
      {
        "title": "KLK",
        "dates": "2015",
        "description": "A Photoshop design based on the anime series Kill La Kill",
        "images": ["images/KLK3.jpg"]
      }
    ]
};

//Uses jQuery plugin "Sticky" to stick the top navigation to the top of the page when scrolling down, and unsticks when scroll up
 $(document).ready(function() {
    $("#nav").sticky({topSpacing:0});
 });

 //Automatically scrolls to element when clicked on the top navigation
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.image);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    };

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedLinkedin = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedLinkedin, formattedGithub, formattedMobile, formattedTwitter, formattedEmail);
};
//$("#main").append(work["position"]);
//$("#main").append(education.schools.name);
//$("#main").append(bio.skills.length);

//if (bio.skills.length > 0) {
//    $("#header").append(HTMLskillsStart);

//    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//    $("#skills").append(formattedSkill);
//    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//    $("#skills").append(formattedSkill);
//    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
//    $("#skills").append(formattedSkill);
//    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
//    $("#skills").append(formattedSkill);
//};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedGrad = HTMLschoolDates.replace("%data%", education.schools[school].graduated);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchool + formattedDegree, formattedGrad, formattedLocation, formattedMajor);
    }
};

work.display = function() {
  for (job in work.jobs) {
    //creating new div for work experience
    $("#workExperience").append(HTMLworkStart);
    //concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDesciption = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDesciption);
  };
};

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

//click tracking
$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
//last name uppercase
function inName(name) {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
      name[0].slice(1).toLowerCase();
    var intName =  name[0] +" "+name[1];

    return intName;
};

bio.display();
education.display();
work.display();
projects.display();

//$("#main").append(internationalizeButton);
//adding the map
$("#mapDiv").append(googleMap);