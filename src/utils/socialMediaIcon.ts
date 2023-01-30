type IconName = "logo-github" | "logo-facebook" | "logo-linkedin";

type SocialMediaIcon = {
  name: IconName;
  link: string;
};

export const socialMediaIcon: SocialMediaIcon[] = [
  { name: "logo-github", link: "https://github.com/JanChrzan" },
  { name: "logo-facebook", link: "https://www.facebook.com/" },
  { name: "logo-linkedin", link: "https://pl.linkedin.com/" },
];
