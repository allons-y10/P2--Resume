'Use Strict';

var bio = {
  "name": "Jesse Harrison",
  "role": "Front-End Developer",
  "contacts": {
    "mobile": "(636)544-2028",
    "email": "harrisonj.jesse@gmail.com",
    "twitter": "@jj_harrison",
    "location": "St. Louis, MO",
    "linkedin": "https://www.linkedin.com/in/harrisonjesse",
    "github": "https://github.com/allons-y10"
  },
  "welcomeMessage": "Welcome to my site. Yes, it is all about me. Feel free to browse around the site and find out all the things you need to know to hire me. One thing to know is I love adventure. I incorporate that into my work. I'm not afraid to learn new things. Infact, I enjoy learning. I've learned a variety of skills including audio/video engineering and web site design. What do I bring to the table you ask? Well along with my positive atmosphere I bring imagination and thoughtfulness. Thanks for stopping by!",
  "age": 28,
  "skills": [
    "Learning", "Design", "JS", "HTML & CSS", "Adaptability", "MS Suite", "Protools", "Final Cut Pro", "Avid Media Composer", "Photshop", "Illustrator", ""
  ],
  "biopic": "images/me.jpg"

};

var work = {
  "jobs": [{
    "employer": "Hollywood Casino",
    "title": "Facilities Coordinator",
    "dates": "2007-present",
    "location": "Maryland Heights, MO",
    "description": "Coordinating vendors, placing work orders, sourcing materials and vendors, General and Preventative maintenance, lawn care, forklift operations, snow removal, Project planning, meeting deadlines in a timely manner, event planning, and help overseeing the budget, Managing a small group of employees, coaching and training fellow employees, Daily interaction with clients, phone skills, and ability to work well with other employees"
  }, {
    "employer": "Self-Employed",
    "title": "Freelance Media Designer",
    "dates": "2012-present",
    "location": "St. Louis, MO",
    "description": "Logo design, ability to make promotional videos, film (exp. With HD camera) and photo editing, Ability to connect with clients to help develop what they want/have envisioned, Branding and creative media"
  }, {
    "employer": "Journey Church",
    "title": "Creative Media Director",
    "dates": "2009-2011",
    "location": "Troy, MO",
    "description": "Lead creative sessions, coordinate events, direct and produce live performances on a weekly basis, Develop the brand for the church, illustrations, podcasts, and work with social media platforms ,Film, edit, and direct promotional videos, and record live music artists, Speak publicly in front of large groups and oversee a group of twenty or more individuals on a  weekly basis"
  }]
};

var education = {
  "schools": [{
    "name": "Lindenwood University",
    "location": "St. Charles, MO, US",
    "degree": "BA",
    "dates": "2012",
    "url": "http://www.lindenwood.edu",
    "majors": ["Communications"]
  }, {
    "name": "Recording Connection",
    "location": "St. Louis, MO, US",
    "degree": "Certificate",
    "dates": "2009",
    "url": "http://www.recordingconnection.com",
    "majors": ["Audio Engineering"]
  }],
  "onlineCourses": [{
    "title": "Front-End Web Developer Nanondegree",
    "school": "Udacity",
    "location": "St. Louis, MO, US",
    "degree": "Nanodegree",
    "dates": "2016",
    "url": "https://www.udacity.com",
    "majors": ["Front-End Development"]
  }]
};

var projects = {
  "projects": [{
    "title": "Bebop",
    "dates": "2015",
    "description": "A Photoshop project base on the popular anime series Cowboy Bebop",
    "images": ["images/Spike.png"]
  }, {
    "title": "KLK",
    "dates": "2015",
    "description": "A Photoshop design based on the anime series Kill La Kill",
    "images": ["images/klk3.jpg"]
  }]
};

//Uses jQuery plugin "Sticky" to stick the top navigation to the top of the page when scrolling down, and unsticks when scroll up
$(document).ready(function() {
  $("#nav").sticky({
    topSpacing: 0
  });
});

//Automatically scrolls to element when clicked on the top navigation
$('a[href^="#"]').on('click', function(event) {

  var target = $($(this).attr('href'));

  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }

});

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
  $("#header").append(HTMLskillsStart);

  for (var skill in bio.skills) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkills);
  }

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedLinkedin = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedLinkedin, formattedGithub, formattedMobile, formattedTwitter, formattedEmail);
  $("#footerContacts").append(formattedLinkedin, formattedEmail);
};

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
  var formals = education.schools;

  var onlines = education.onlineCourses;

  var name, degree, dates, location, major, title, school, url;

  formals.forEach(addFormalSchool);

  $('#education').append(HTMLonlineClasses);

  onlines.forEach(addOnlineCourse);

  function addFormalSchool(school) {
    name = HTMLschoolName.replace('%data%', school.name);
    degree = HTMLschoolDegree.replace('%data%', school.degree);
    dates = HTMLschoolDates.replace('%data%', school.dates);
    location = HTMLschoolLocation.replace('%data%', school.location);
    major = HTMLschoolMajor.replace('%data%', school.major);

    $('#education').append(HTMLschoolStart);

    $('.education-entry:last').append(name + degree);

    $('.education-entry:last').append(dates);

    $('.education-entry:last').append(location);

    $('.education-entry:last').append(major);
  }

  function addOnlineCourse(course) {
    title = HTMLonlineTitle.replace('%data%', course.title);
    school = HTMLonlineSchool.replace('%data%', course.school);
    dates = HTMLonlineDates.replace('%data%', course.dates);
    url = HTMLonlineURL.replace('%data%', course.url);

    $('#education').append(HTMLschoolStart);

    $('.education-entry:last').append(title + school);

    $('.education-entry:last').append(dates);

    //$('.education-entry:last').append(url);
  }
};
work.display = function() {
  var occupation = work.jobs;

  var employer, title, dates, description, location;

  occupation.forEach(addOccupation);

  function addOccupation(job) {
    employer = HTMLworkEmployer.replace("%data%", job.employer);
    title = HTMLworkTitle.replace("%data%", job.title);
    dates = HTMLworkDates.replace("%data%", job.dates);
    description = HTMLworkDescription.replace("%data", job.description);
    location = HTMLworkLocation.replace("%data%", job.location);

    $("#workExperience").append(HTMLworkStart);

    $(".work-entry:last").append(employer + title);

    //$(".work-entry:last").append(title);

    $(".work-entry:last").append(dates);

    $(".work-entry:last").append(description);
  }
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
};

//click tracking
$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});
//last name uppercase
function inName(name) {
  var name = $("#name").html();
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() +
    name[0].slice(1).toLowerCase();
  var intName = name[0] + " " + name[1];

  return intName;
}

bio.display();
education.display();
work.display();
projects.display();

//$("#main").append(internationalizeButton);
//adding the map
$("#mapDiv").append(googleMap);