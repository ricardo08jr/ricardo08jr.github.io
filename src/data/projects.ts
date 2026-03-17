import type { Project } from "../types";
import KingLogo from "../assets/kingofmath.jpeg"
import WebEstoque from "../assets/webEstoque.jpg"
const projects: Project[] = [
  {
    id: "p1",
    title: "projects.restaurant.title",
    description: `projects.restaurant.description`,
    image: WebEstoque,
    tech: [ "C# ASP.NET", "MySQL","Ionic Angular", "TypeScript"],
    video: "https://youtu.be/7jo9zVUW0-0",
    repo: "https://github.com/ricardo08jr/restaurant-management-system?tab=readme-ov-file#sum%C3%A1rio",
    details: "projects.restaurant.details"
  },
  {
    id: "p2",
    title: "projects.kingOfMath.title",
    description: `projects.kingOfMath.description`,
    image: KingLogo,
    tech: ["Ionic Framework","Angular","projects.kingOfMath.downloads"],
    demo: "https://play.google.com/store/apps/details?id=com.kingssoftware.kingofmath&pcampaignid=web_share&pli=1",
    repo: "",
    video: "https://www.youtube.com/watch?v=R6BOlvQ1uR0",
    details: `projects.kingOfMath.details`
  },
  {
    id: "p3",
    title: "projects.loanManager.title",
    description: `projects.loanManager.description`,
    tech: ["Java","Android Studio","Gradle"],
    repo: "https://github.com/ricardo08jr/borrow-manager",
    video: "https://youtu.be/YzbFRiyJ7Wg",
    details: `projects.loanManager.details`
  }
];

export default projects;
