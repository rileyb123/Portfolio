// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import javaIcon from "./images/java.svg"
import CIcon from "./images/icons8-c++.svg"
import gitIcon from "./images/git.svg"
import saylessIcon from "./images/chat.png"
import pythonIcon from "./images/icons8-python.svg"
import linkedin from "./images/iconmonstr-linkedin-3.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "riley",
  headerTagline: [
    //Line 1 For Header
    "Full Stack ",
    //Line 2 For Header
     "Developer",
    //Line 3 For Header
    // "Temp Data",
  ],
  //   Header Paragraph
  headerParagraph:
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”-Mahatma Gandhi",

  //Contact Email
  contactEmail: "rileyburc@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Sayless", //Project Title - Add Your Project Title Here
      para:
        "A simple web chat app that emphasises saying less. Find users you don'y know and start up a converstaion. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "https://images.unsplash.com/photo-1611496855330-190c8113536d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      //Project URL - Add Your Project Url Here
      url: "http://sayless.azurewebsites.net/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "CodeNames", //Project Title - Add Your Project Title Here
      para:
        "The classic board game code names. Uses the variant to be played with 2-3 players.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1595601332599-557ac269a952?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/rileyb123/CodeNames",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Transfer Protocols", //Project Title - Add Your Project Title Here
      para:
        "Implementation of 3 transfer protocols Alternating Bit, Go Back N, and Slective Repeat.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1611449344119-74f8e726fcab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/rileyb123/ReliableTransferProtocols",
    },
    // {
    //   id: 4, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Four", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   id: 5, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Five", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   id: 6, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Six", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "My name is riley burczynski a computer science graduate from University at Buffalo. When I'm not working on a project or learning a new technology,I enjoy spending time with my dogs, playing video games, and bowling with friends and family.",
  aboutParaTwo:
    "I have experience working with a variety of technologies and working with all kinds of team members. I am currently learning React JS through building a simple path finding visalization website. I am also working with a teammate to learn several other technolgies to build a dummy bank website.",
  aboutParaThree:
    "",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "CSS",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "Javscript",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "React",
    },
    {
      id: 5,
      img: CIcon,
      para:
        "C/C++",
    },
    {
      id: 6,
      img: pythonIcon,
      para:
        "Python",
    },
    {
      id: 7,
      img: javaIcon,
      para:
        "Java",
    },
    {
      id: 8,
      img: gitIcon,
      para:
        "git",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Resume",
  promotionPara:
    "https://pdfhost.io/v/ZbT4mBpY._quiz_cheat_sheetpdf.pdf",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Reach out to me with questions at",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/rileyb123" },
    {
      img: linkedin,
      url: "https://www.linkedin.com/in/riley-burczynski-2b88a8173/",
    },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}


