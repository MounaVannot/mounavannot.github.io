// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Online CV coming soon!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-my-erasmus-in-bordeaux",
        
          title: "My Erasmus in Bordeaux",
        
        description: "A reflection on my exchange semester in Bordeaux",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Bordeaux/";
          
        },
      },{id: "post-did-you-ever-want-to-be-a-reporter-at-tomorrowland",
        
          title: "Did you ever want to be a reporter at Tomorrowland?",
        
        description: "Interviewing with techno beats on the background",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/OneWorldRadio/";
          
        },
      },{id: "post-meeting-journalists-from-all-over-the-world-in-perugia",
        
          title: "Meeting journalists from all over the world in Perugia",
        
        description: "Amazed by intercultural exchanges",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Perugia/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6F%75%6E%61.%76%61%6E%6E%6F%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
