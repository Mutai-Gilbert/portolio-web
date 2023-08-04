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
  username: "Mutai Gilbert",
  title: "Hi all, I'm Mutai",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with a love for JavaScript, Ruby, Ruby on Rails, Redux, SQL, PostgreSQL, C, React. Open Source Contributor. Open to new opportunities."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1KkdEQv1CopFRnLgGtSMJyl8mYlx8299VvpVds9Ypiu4/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mutai-Gilbert",
  linkedin: "https://www.linkedin.com/in/mutai-kipkoech/",
  gmail: "mutaigilbert85@gmail.com",
  twitter: "https://mobile.twitter.com/Nerdmutai",
  stackoverflow: "https://stackoverflow.com/users/18264454/gilbert-mutai",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Web Developer | Entrepreneurial Mindset | Dedicated to Crafting Innovative Solutions and Building Dynamic Teams",
  skills: [
    emoji(
      "⚡ Full-stack development, where I excel in using technologies such as Ruby on Rails, React & Redux, Next.js, Tailwind Css, Bootstrap, SQL , PostgreSQL, HTML/CSS."
    ),
    emoji("⚡ With Agile Software Development, Object-Oriented Programming, and Test-driven development, I foster a collaborative and efficient development process."),
    emoji(
      "⚡ Working with diverse remote teams across cultures and countries, my strong communication skills have been instrumental in achieving successful project outcomes."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "ruby",
      fontAwesomeClassname: "fab fa-ruby"
    },
    {
      skillName: "rails",
      fontAwesomeClassname: "fab fa-rails"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fab fa-postgresql"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dedan Kimathi University",
      logo: require("./assets/images/dekut.jpeg"),
      subHeader: "Bachelor of Science in Actuarial Science",
      duration: "September 2014 - April 2018",
      desc: "The program is designed to prepare students for a career as an actuary, which involves using mathematical and statistical models to assess financial risks and develop strategies to minimize them.",
    },
    {
      schoolName: "Coursera",
      logo: require("./assets/images/coursera.png"),
      subHeader: "Introduction to Web Development with HTML, CSS, JavaScript",
      duration: "July 2022",
      desc: "Ranked top 10% in the program. Took courses about css3, html5, javascript, bootstrap, git...",
      descBullets: ["An online non-credit course authorized by IBM Skills Network and offered through Coursera."]    },
    {
      schoolName: "Coursera",
      logo: require("./assets/images/coursera.png"),
      subHeader: "Introduction to Cloud Computing",
      duration: "July 2022",
      desc: "Ranked top 10% in the program. Took courses about Cloud Native, Devops, Hybrid MultiCloud, Cloud Computing, Iaas, PaaS, SaaS, ...",
      descBullets: ["An online non-credit course authorized by IBM and offered through Coursera"]
    },
    {
      schoolName: "Microverse",
      logo: require("./assets/images/javaScript.png"),
      subHeader: "Microverse JavaScript Module",
      duration: "March 2023",
      desc: "Took courses about JavaScript.",
      descBullets: ["Students earn this credential after demonstrating understanding and mastery of JavaScript. During the course of this module, they build several projects using JavaScript while pair-programming remotely with an international team of software developers."]
    },
    {
      schoolName: "Microverse",
      logo: require("./assets/images/reactRedux.png"),
      subHeader: "Microverse React & Redux Module",
      duration: "April 2023",
      desc: "Took courses about React, Redux, JavaScript, Frond End Web Development.",
      descBullets: ["Students earn this credential after demonstrating thorough understanding and mastery of React and Redux. Over the course of this module, students build and develop multiple projects using React and Redux, working both independently and while remotely pair-programming."]
    },
    {
      schoolName: "Microverse",
      logo: require("./assets/images/rubydatabases.png"),
      subHeader: "Microverse Ruby/Databases Module",
      duration: "4th June 2023",
      desc: "Took courses about Ruby/Databases, Back End Web Development.",
      descBullets: ["Students earn this credential after demonstrating thorough understanding and mastery of Ruby/Databases. Over the course of this module, students build and develop multiple projects using Ruby/Databases, working both independently and while remotely pair-programming."]
    },
    {
      schoolName: "Microverse",
      logo: require("./assets/images/rubyonrails.png"),
      subHeader: "Microverse Ruby on Rails Module",
      duration: "9th July 2023",
      desc: "Took courses about Ruby on Rails, Back End Web Development.",
      descBullets: ["Students earn this credential after demonstrating thorough understanding and mastery of Ruby on Rails. Over the course of this module, students build and develop multiple projects using Ruby on Rails, working both independently and while remotely pair-programming"]
    },
    {
      schoolName: "Microverse",
      logo: require("./assets/images/finalcapstone.png"),
      subHeader: "Microverse Final Capstone Module",
      duration: "30th July 2023",
      desc: "Took courses about React, Redux, JavaScript, Front End Web Development and connecting Back End Web Development using Ruby on Rails.",
      descBullets: ["Students earn this credential after demonstrating thorough understanding and mastery of React, Redux, JavaScript, Front End Web Development and connecting Back End Web Development using Ruby on Rails. Over the course of this module, students build and develop multiple projects using React, Redux, JavaScript, Front End Web Development and connecting Back End Web Development using Ruby on Rails, working both independently and while remotely pair-programming."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "20%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Managing Director",
      company: "Kanga Feeds Ltd",
      companylogo: require("./assets/images/kangafeedslogo.jpg"),
      date: "Jan 2020 – Jan 2022",
      desc: "Managing Director Kanga Feeds Ltd",
      descBullets: [
        "Successfully managed and supervised all financial operations and functions of a company.",
        "Implemented and maintained efficient accounting systems to ensure accurate and up-to-date financial records.",
        "Demonstrated exceptional leadership skills in leading and developing staff within the accounts department."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "The Tech-Gaa Hub",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Jan 2023 – Present",
      desc: "Easily Adaptable · Networking · React.js · Leadership · Problem Solving · JavaScript.",
      descBullets: [
        "Develop web applications and websites using front-end and back-end technologies.",
        "Design, develop, and maintain databases using database management systems.",
        "Collaborate with other developers, designers, and project managers to complete projects.."
      ]
    },
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
  title: "Github Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/bookstore.png"),
      projectName: "Bookstore",
      projectDesc: "The Bookstore project built with Redux is designed to help users keep track of their progress in reading books.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://book-store-ten-blush.vercel.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/reactDiseases.png"),
      projectName: "React Diseases",
      projectDesc: "COVID-19-Reports is a web application hosted on GitHub that delivers accurate and up-to-date COVID-19 statistics sourced from trustworthy health organizations. This user-friendly platform provides users with a seamless experience to track data by country or region, with an added feature of historical data analysis.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://react-diseases.onrender.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@mutaigilbert85/transitioning-from-an-entrepreneur-to-a-react-developer-49ade780fbe7",
      title: "Transitioning From an Entrepreneur to a React Developer.",
      description:
        "#mytechjourney"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254703252051",
  email_address: "mutaigilbert85@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "iam_pkoech", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable
};
