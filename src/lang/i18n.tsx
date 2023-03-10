import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        homeNav: "HOME",
        aboutNav: "ABOUT",
        skillsNav: "SKILLS",
        projectsNav: "PROJECTS",
        contactNav: "CONTACT",
        resumeNav: "RESUME",
        hiMessage: "Hi, my name is",
        description:
          "I have knowledge of technologies and tools used to create web applications, both on the front-end and back-end. I am able to design and create applications from start to finish, from prototyping the user interface, through implementing server-side functionality, to deploying the application on a server.",
        contactButton: "Contact Me!",
        about: "About Me",
        aboutAdditional: "In short",
        aboutDescriptionFirst:
          "I have completed my undergraduate studies in Electrical Engineering, with a focus on computer science and control systems. In high school, I began to intensively develop my passion for programming and telecommunications systems. In my free time, I try to improve my second passion, which is learning about human anatomy from a strength training and body shaping perspective. During my studies, I participated in a research project",
        aboutDescriptionSecond:
          "Currently, I am working as a tester in a project implemented using Scrum methodology. My main task is to ensure the quality of software and automate tests for a post-sales customer support project. I am responsible for identifying and reporting bugs found during testing. I value self-improvement and good time management, so effective use of time is the foundation of a successful day for me.",
        firstCounter:
          "The number of years since I first came into contact with code",
        secondCounter:
          "The number of lines of code I have written in the last month",
        thirdCounter: "The number of bugs I have fixed in the last month",
        fourthCounter:
          "The number of hours in the last month that I have dedicated to writing code",
        skills: "My Skills",
        skillsAdditional: "It describes me",
        learning: "Learning",
        learningDescription:
          "I am always open to new technologies and working methods, I am able to learn quickly and implement new solutions in my work.",
        creativity: "Creativity",
        creativityDescription:
          "I possess high creative abilities and am able to come up with new solutions and ideas for improving my software.",
        teamWork: "Team Work",
        teamWorkDescription:
          "I am able to collaborate with other team members, share my knowledge, and help others solve problems.",
        troubleshooting: "Troubleshooting",
        troubleshootingDescription:
          "I can solve problems related to software that I create, with a strong emphasis on debugging and testing.",
        accuracy: "Accuracy",
        accuracyDescription:
          "I pay attention to detail and accuracy in my work, which allows me to create high-quality software.",
        analyticalThinking: "Analytical thinking",
        analyticalThinkingDescription:
          "I am able to think analytically and logically, which enables me to solve problems and create effective solutions.",
        projects: "My Projects",
        projectsAdditional: "I can boast",
        contact: "Contact Me",
        contactAdditional: "Write something from yourself",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        mailLabel: "Your e-mail",
        mailPlaceholder: "your.email@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Hello, world!",
        sendButton: "Send Message!",
        location: "Warsaw",
        modalTitle: "Message sent!",
        modalMessage: "Thank you for sending a message!",
        modalErrorTitle: "Error occurred!",
        modalErrorMessage: "Something went wrong, please try again later.",
        modalErrorEmpty: "All fields are required.",
        modalErrorEmail: "Invalid email address.",
        modalButton: "Close",
      },
    },
    pl: {
      translation: {
        homeNav: "START",
        aboutNav: "O MNIE",
        skillsNav: "UMIEJ??TNO??CI",
        projectsNav: "PROJEKTY",
        contactNav: "KONTAKT",
        resumeNav: "??YCIORYS",
        hiMessage: "Cze????, nazywam si??",
        description:
          "Posiadam znajomo???? technologii i narz??dzi u??ywanych do tworzenia aplikacji internetowych zar??wno po stronie front-end, jak i back-end. Potrafi?? projektowa?? i tworzy?? aplikacje od pocz??tku do ko??ca, od prototypowania interfejsu u??ytkownika, przez implementacj?? funkcjonalno??ci po stronie serwera, a?? po wdro??enie aplikacji na serwerze.",
        contactButton: "Kontakt!",
        about: "O Mnie",
        aboutAdditional: "W skr??cie",
        aboutDescriptionFirst:
          "Uko??czy??em studia pierwszego stopnia na kierunku elektrotechnika z zakresu informatyki i system??w sterowania. W szkole ??redniej rozpocz????em intensywnie rozwija?? swoj?? pasj?? do programowania i system??w teleinformatycznych. Podczas studi??w uczestniczy??em w projekcie naukowo-badawczym",
        aboutDescriptionSecond:
          "Obecnie pe??ni?? funkcj?? testera w projekcie realizowanym z wykorzystaniem metodyki Scrum. Moim g????wnym zadaniem jest dbanie o jako???? oprogramowania oraz automatyzacja test??w w ramach projektu zajmuj??cego si?? posprzeda??ow?? obs??ug?? klienta. Jestem odpowiedzialny za identyfikowanie i raportowanie b????d??w znalezionych podczas test??w. Bardzo ceni?? sobie samodoskonalenie oraz dobre gospodarowanie czasem, dlatego efektywne wykorzystywanie czasu jest dla mnie podstaw?? udanego dnia.",
        firstCounter: "Ilo???? lat od kiedy mia??em pierwsz?? styczno???? z kodem",
        secondCounter: "Liczba linii kodu, kt??re napisa??em w ostatnim miesi??cu",
        thirdCounter: "Liczba b????d??w, kt??re naprawi??em w ostatnim miesi??cu",
        fourthCounter:
          "Liczba godzin w ostatnim miesi??cu, kt??re po??wieci??em na pisanie kodu",
        skills: "Moje Umiej??tno??ci",
        skillsAdditional: "To mnie opisuje",
        learning: "Nauka",
        learningDescription:
          "Jestem ci??gle otwarty na nowe technologie i metody pracy, potrafi?? szybko si?? uczy?? i wdra??a?? nowe rozwi??zania w swojej pracy.",
        creativity: "Kreatywno????",
        creativityDescription:
          "Posiadam wysokie zdolno??ci tw??rcze i potrafi?? wymy??la?? nowe rozwi??zania i pomys??y na ulepszenie swojego oprogramowania.",
        teamWork: "Praca zespo??owa",
        teamWorkDescription:
          "Potrafi?? wsp????pracowa?? z innymi cz??onkami zespo??u, dziel?? si?? swoj?? wiedz?? i pomagam innym w rozwi??zywaniu problem??w.",
        troubleshooting: "Rozwi??zywanie problem??w",
        troubleshootingDescription:
          "Potrafi?? rozwi??zywa?? problemy zwi??zane z tworzonym przeze mnie oprogramowaniem, du??y nacisk k??ad?? na debugowanie i testowanie.",
        accuracy: "Dok??adno????",
        accuracyDescription:
          "Dbam o szczeg????y oraz dok??adno???? swojej pracy, dzi??ki czemu mog?? tworzy?? wysokiej jako??ci oprogramowanie.",
        analyticalThinking: "Analityczne my??lenie",
        analyticalThinkingDescription:
          "Potrafi?? my??le?? w spos??b analiczny i logiczny, dzi??ki czemu mog?? rozwi??zywa?? problemy oraz tworzy?? skuteczne rozwi??zania.",
        projects: "Moje projekty",
        projectsAdditional: "Tym mog?? si?? pochwali??",
        contact: "Skontaktuj si??",
        contactAdditional: "Napisz co?? od siebie",
        nameLabel: "Imi??",
        namePlaceholder: "Twoje imi??",
        mailLabel: "Tw??j e-mail",
        mailPlaceholder: "tw??j.email@example.com",
        messageLabel: "Wiadomo????",
        messagePlaceholder: "Hello, world!",
        sendButton: "Wy??lij wiadomo????!",
        location: "Warszawa",
        modalTitle: "Wiadomo???? wys??ana!",
        modalMessage: "Dzi??kuj?? za wys??anie wiadomo??ci!",
        modalErrorTitle: "Wyst??pi?? b????d!",
        modalErrorMessage: "Co?? posz??o nie tak, spr??buj ponownie p????niej.",
        modalErrorEmpty: "Wszystkie pola s?? wymagane.",
        modalErrorEmail: "Niepoprawny adres e-mail.",
        modalButton: "Zamknij",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
