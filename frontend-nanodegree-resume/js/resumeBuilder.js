var formattedName = HTMLheaderName.replace("%data%","Jesse Harrison");

var role = "Front-End Developer"

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//var skills =
//["Learning -", " Design -", " JS -", " HTML & CSS"];

var bio = {
    "name" : "Jesse Harrison",
    "role" : "Front-End Developer",
    "contacts" : {
        "mobile" : "(636)544-2028",
        "email" : "harrisonj.jesse@gmail.com",
        "twitter" : "@jj_harrison",
        "location" : "St. Louis"
    },
    "welcomeMessage" : "This is my site. Feel free to get lost in my work",
    "age" : 28,
    "skills" : [
    "Learning", "Design", "JS", "HTML & CSS"
    ],
    "bioPic" : "images/fry.jpg"

};

//$("main").append(bio.skills.length);
//$("#main").append(bio.skills);
//$("#main").append(bio.contacts.mobile);
//$("#main").append(bio.contacts.email);
//$("#main").append(bio.skills[3]);
//$("#main").prepend(bio.welcomeMessage);
//$("#main").prepend(bio.bioPic);

var work = {
    "jobs": [
    {
        "employer": "Hollywood Casino",
        "title": "Facilities Coordinator",
        "dates": "2007-present",
        "location": "Maryland Heights, MO",
        "description": "Helping the department plan projects, budgets, and inventory."
    },
    {
        "employer": "Journey Church",
        "title": "Creative Media Director",
        "dates": "2009-2011",
        "location": "Troy, MO",
        "description": "Implement overall brand, videos, audio projects, and live performance managment."
    }
  ]
};

var education = {
    "schools": [
      {
        "name": "Lindenwood University",
        "city": "St. Charles, MO, US",
        "degree": "BA",
        "graduated": "2012",
        "major": "Communications"
      },
      {
        "name": "Recording Connection",
        "city": "St. Louis, MO, US",
        "degree": "Certificate",
        "graduated": "2009",
        "major": ["Audio Engineering"]
      },
      {
        "name": "Udacity",
        "city": "St. Louis, MO, US",
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
        "image": "images/Spike.png"
      },
      {
        "title": "KLK",
        "dates": "2015",
        "description": "A Photoshop design based on the anime series Kill La Kill",
        "image": "images/KLK3.jpg"
      }
    ]
};


//$("#main").append(work["position"]);
//$("#main").append(education.schools.name);
//$("#main").append(bio.skills.length);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};

function displaywork() {
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


displaywork();

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name) {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
      name[0].slice(1).toLowerCase();
    var intName =  name[0] +" "+name[1];

    return intName;
};

$("#main").append(internationalizeButton);

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}