/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ricardo Landim",
  title: "Hi all, I'm Ricardo",
  subTitle: emoji(
    "I'm a physicist and data scientist with 10+ years' experience in theoretical/mathematical modeling, problem solving, programming, data analysis and advanced statistical methods, applied to the areas of cosmology, astrophysics, particle physics, medical physics, neuroscience and radio astronomy. Have working experience in five different countries (United Kingdom, Germany, United States, Portugal and Brazil)."
  ),
//  resumeLink:
  //  " ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ricardoclandim",
  linkedin: "https://www.linkedin.com/in/ricardo-landim/",
  gmail: "ricardo.landim@port.ac.uk",
 // scholar: "https://scholar.google.com/citations?user=4GymsfIAAAAJ&hl=en",
//  gitlab: "https://gitlab.com/saadpasta",
//  facebook: "https://www.facebook.com/saad.pasta7",
//  medium: "https://medium.com/@saadpasta",
//  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  //subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "● Use mathematical modeling, statistics and problem solving skills to deal with large datasets")
  	,
    emoji(
      "● Design and implement mathematical models to explain dark energy and dark matter"),
 
    emoji(
      "● Forecast capabilities of datasets 5 years into the future, helping optimize the strategy of upcoming million dollar astronomical surveys")
  	],
  	

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
     {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
     {
      schoolName: "University of Sao Paulo",
      logo: require("./assets/images/usp.png"),
      subHeader: "PhD in Physics",
      duration: "March 2013 - February 2017",
      desc: "Developed research in Cosmology and published 8 papers. Second place for the  Brazilian Physical Society Thesis Award 2016/2017",
      descBullets: [
        "Developed theoretical models in cosmology and astrophysics.",
        "Awarded the most prestigious Brazilian scholarship (FAPESP), granted to top 3% of all STEM students.",
        "Teaching assistant for 4 graduate and undergraduate courses."
      ]
    },
    {
      schoolName: "University of Campinas",
      logo: require("./assets/images/unicamp.png"),
      subHeader: "Master of Science in Physics",
      duration: "August 2011 - March 2013",
      desc: "Developed research in neuroscience and published 3 papers.",
      descBullets: [
        "Used magnetic resonance spectroscopy to investigate variation of different substances in the human brain under visual stimulation. Analysis  made through Matlab.",
        "Awarded the most prestigious Brazilian scholarship (FAPESP), granted to top 3% of all STEM students.",
        "Teaching assistant for 1 undergraduate course."
      ]
    },
    {
      schoolName: "Sao Paulo State University",
      logo: require("./assets/images/unesp.png"),
      subHeader: "Bachelor of Science & Licenciate in Physics ",
      duration: "February 2004 - December 2008",
      desc: "Licentiate is a Brazilian degree to teach physics in elementary and high schools.",
          }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Research & Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mathematical modeling",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming & Data analysis",
      progressPercentage: "70%"
    },
    {
      Stack: "Problem solving & Analytical thinking",
      progressPercentage: "80%"
    },
    {
      Stack: "Team management",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Fellow",
      company: "Univ. of Portsmouth",
      companylogo: require("./assets/images/u-port.png"),
      date: "November 2022 – Present",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Uses large data sets and advanced statistical analysis (Monte Carlo sampling and Bayesian) to test cosmological models, producing the state-of-the-art analysis and constraints for a class of models.",
        "Wrote a Python code to analyse galaxy velocities, representing data through graphics and extracting information through advanced statistical methods."
      ]
    },
    {
      role: "Postdoc Researcher",
      company: "Tech. Univ. of Munich",
      companylogo: require("./assets/images/tum.png"),
      date: "May 2019 – October 2022",
      desc: "Awarded the most prestigious fellowship in Germany  for top international young researchers by the Alexander von Humboldt Foundation.",
      descBullets: [
        "Developed theoretical models in particle physics to explain the neutrino masses.",
        "Used big experimental data sets to constrain cosmological models, coded in C and Python.",
        "Led project and  group of 10 scientists to forecast capabilities of the BINGO radio telescope to detect the astrophysical phenomenon fast radio bursts,  conducting weekly meetings for the BINGO collaboration, with small (~ 10) and large (> 30) group of scientists and students (Apr. 2020 -- Dec. 2022)."
      ]
    },
     {
      role: "Postdoc Researcher",
      company: "SLAC Laboratory",
      companylogo: require("./assets/images/slac.webp"),
      date: "June 2018 – January 2019",
      desc: "Used models from theoretical physics to build a solution for unexplained issues in experimental data.",
    },
    {
      role: "Postdoc Visitor",
      company: "University of Porto",
      companylogo: require("./assets/images/porto.jpg"),
      date: "October 2017 – February 2018",
      desc: "Used astrophysical data to obtain the most stringent constraint on one physical principle.",
    },
    {
      role: "Postdoc Researcher",
      company: "Univ. of Sao Paulo",
      companylogo: require("./assets/images/usp.jpg"),
      date: "March 2017 – May 2018",
      desc: "Developed models and used dynamical analysis theory to solve issues in the field of theoretical physics applied to cosmology/astronomy, especially related to dark energy.",
    },
    {
      role: "Coordinator",
      company: "Museum of Energy",
      companylogo: require("./assets/images/museu.jpeg"),
      date: "April 2009 – March 2011",
      desc: "The science museum provided  guided visits for university, elementary and high school students, exhibiting the  hydroelectric plant, machinery, and educational physics experiments.",
     descBullets: [
        "Designed and built didactic experiments. Developed material (and taught) for a course  on Fundamentals of Physics.",
        "Performed several administrative activities and organized events and conferences for the local community."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Publications",
  subtitle: "Some publications using data science skills",
  projects: [
    {
      image: require("./assets/images/nirvana.png"),
      projectName: "Testing screened modified gravity with SDSS-IV-MaNGA",
      projectDesc: "Used large dataset to obtain state-of-art constraints on a theoretical model in cosmology",
      footerLink: [
        {
          name: "Coming soon",
          url: "https://arxiv.org/search/?searchtype=author&query=Landim%2C+R+G"
        }
      ]},
    {
      image: require("./assets/images/BINGOsite_artistic.jpg"),
      projectName: "BINGO radio telescope",
      projectDesc: "First paper of a series showing forecasts for the BINGO radio telescope",
      footerLink: [
        {
          name: "Check here",
          url: "https://doi.org/10.1051/0004-6361/202140883"
        }
      ]},
      {
      image: require("./assets/images/mrs.jpg"),
      projectName: "Investigation of NAA and NAAG dynamics underlying visual stimulation",
      projectDesc: "Result of Master's thesis showing variation of two substances in the human brain. ",
      footerLink: [
        {
          name: "Check here",
          url: "https://doi.org/10.1016/j.mri.2015.10.038"
        }
      ]},
    {
      image: require("./assets/images/scholar.png"),
      projectName: "Google scholar",
      projectDesc: "38 published scientific articles",
      footerLink: [
        {
          name: "Check here all my papers!",
          url: "https://scholar.google.com/citations?user=4GymsfIAAAAJ&hl=en"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards And Certifications"),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "IBM Data Science Specialization",
    //  subtitle:
    //    "",
      image: require("./assets/images/ibm.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/4L3VDTYQDUPM"
        },
      
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Media",
  //subtitle:
//    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://phys.org/news/2024-02-bingo-radio-telescope-brightest-energy.html",
      title: "BINGO radio telescope will be able to detect and locate the brightest bursts of energy, says study",
      description:
        "Published at phys.org. Monthly Visitors: 14,667,377 (United Kingdom)"
    },
    {
      url: "https://www.port.ac.uk/news-events-and-blogs/news/radio-telescope-will-detect-and-locate-the-brightest-bursts-of-energy",
      title: "Radio telescope will detect and locate the brightest bursts of energy",
      description:
        "Material publised at Uni Portsmouth website."
    },
     {
      url: "https://www.satelliteevolution.com/post/radio-telescope-will-detect-and-locate-the-brightest-bursts-of-energy",
      title: "Radio telescope will detect and locate the brightest bursts of energy",
      description:
        "Republised at Satellite Evolution Asia (United Kingdom)."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Talks Sections

const talkSection = {
  title: "Talks",
 subtitle: emoji(
    "20+ seminars/talks at international conferences or universities. Here is one example:"
  ),

  talks: [
    {
      title: "Constraints on Dark Energy",
      subtitle: "Talk at COSMO 23",
      slides_url: "https://drive.google.com/file/d/1xqOue5DKLWvuIZqHzoDFlr-OAhdg87dN/view?usp=sharing",
      event_url: "https://workshops.ift.uam-csic.es/COSMO23"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "ricardo.landim@port.ac.uk",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
