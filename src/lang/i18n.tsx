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
        skillsNav: "UMIEJĘTNOŚCI",
        projectsNav: "PROJEKTY",
        contactNav: "KONTAKT",
        resumeNav: "ŻYCIORYS",
        hiMessage: "Cześć, nazywam się",
        description:
          "Posiadam znajomość technologii i narzędzi używanych do tworzenia aplikacji internetowych zarówno po stronie front-end, jak i back-end. Potrafię projektować i tworzyć aplikacje od początku do końca, od prototypowania interfejsu użytkownika, przez implementację funkcjonalności po stronie serwera, aż po wdrożenie aplikacji na serwerze.",
        contactButton: "Kontakt!",
        about: "O Mnie",
        aboutAdditional: "W skrócie",
        aboutDescriptionFirst:
          "Ukończyłem studia pierwszego stopnia na kierunku elektrotechnika z zakresu informatyki i systemów sterowania. W szkole średniej rozpocząłem intensywnie rozwijać swoją pasję do programowania i systemów teleinformatycznych. Podczas studiów uczestniczyłem w projekcie naukowo-badawczym",
        aboutDescriptionSecond:
          "Obecnie pełnię funkcję testera w projekcie realizowanym z wykorzystaniem metodyki Scrum. Moim głównym zadaniem jest dbanie o jakość oprogramowania oraz automatyzacja testów w ramach projektu zajmującego się posprzedażową obsługą klienta. Jestem odpowiedzialny za identyfikowanie i raportowanie błędów znalezionych podczas testów. Bardzo cenię sobie samodoskonalenie oraz dobre gospodarowanie czasem, dlatego efektywne wykorzystywanie czasu jest dla mnie podstawą udanego dnia.",
        firstCounter: "Ilość lat od kiedy miałem pierwszą styczność z kodem",
        secondCounter: "Liczba linii kodu, które napisałem w ostatnim miesiącu",
        thirdCounter: "Liczba błędów, które naprawiłem w ostatnim miesiącu",
        fourthCounter:
          "Liczba godzin w ostatnim miesiącu, które poświeciłem na pisanie kodu",
        skills: "Moje Umiejętności",
        skillsAdditional: "To mnie opisuje",
        learning: "Nauka",
        learningDescription:
          "Jestem ciągle otwarty na nowe technologie i metody pracy, potrafię szybko się uczyć i wdrażać nowe rozwiązania w swojej pracy.",
        creativity: "Kreatywność",
        creativityDescription:
          "Posiadam wysokie zdolności twórcze i potrafię wymyślać nowe rozwiązania i pomysły na ulepszenie swojego oprogramowania.",
        teamWork: "Praca zespołowa",
        teamWorkDescription:
          "Potrafię współpracować z innymi członkami zespołu, dzielę się swoją wiedzą i pomagam innym w rozwiązywaniu problemów.",
        troubleshooting: "Rozwiązywanie problemów",
        troubleshootingDescription:
          "Potrafię rozwiązywać problemy związane z tworzonym przeze mnie oprogramowaniem, duży nacisk kładę na debugowanie i testowanie.",
        accuracy: "Dokładność",
        accuracyDescription:
          "Dbam o szczegóły oraz dokładność swojej pracy, dzięki czemu mogę tworzyć wysokiej jakości oprogramowanie.",
        analyticalThinking: "Analityczne myślenie",
        analyticalThinkingDescription:
          "Potrafię myśleć w sposób analiczny i logiczny, dzięki czemu mogę rozwiązywać problemy oraz tworzyć skuteczne rozwiązania.",
        projects: "Moje projekty",
        projectsAdditional: "Tym mogę się pochwalić",
        contact: "Skontaktuj się",
        contactAdditional: "Napisz coś od siebie",
        nameLabel: "Imię",
        namePlaceholder: "Twoje imię",
        mailLabel: "Twój e-mail",
        mailPlaceholder: "twój.email@example.com",
        messageLabel: "Wiadomość",
        messagePlaceholder: "Hello, world!",
        sendButton: "Wyślij wiadomość!",
        location: "Warszawa",
        modalTitle: "Wiadomość wysłana!",
        modalMessage: "Dziękuję za wysłanie wiadomości!",
        modalErrorTitle: "Wystąpił błąd!",
        modalErrorMessage: "Coś poszło nie tak, spróbuj ponownie później.",
        modalErrorEmpty: "Wszystkie pola są wymagane.",
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
