import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavaSvg from "@/public/icons/java.svg";
import CppSvg from "@/public/icons/c.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import AngularSvg from "@/public/icons/angular-icon.svg";
import NextSvg from "@/public/icons/next-js.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import DjangoSvg from "@/public/icons/django.svg";
import PhpSvg from "@/public/icons/php.svg";
import LaravelSvg from "@/public/icons/laravel.svg";
import CodeigniterSvg from "@/public/icons/codeigniter.svg";

// Database and ORMS
import MysqlSvg from "@/public/icons/mysql.svg";
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import XamppSvg from "@/public/icons/xampp.svg";
import TerraformSvg from "@/public/icons/terraform.svg";
import SshSvg from "@/public/icons/ssh.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "JavaScript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Java",
        icon: JavaSvg,
      },
      {
        name: "C++",
        icon: CppSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "ReactJS",
        icon: ReactjsSvg,
      },
      {
        name: "Angular",
        icon: AngularSvg,
      },
      {
        name: "Next.js",
        icon: NextSvg,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "TailwindCSS",
        icon: TailwindcssSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "NodeJS",
        icon: NodejsSvg,
      },
      {
        name: "ExpressJS",
        icon: SiExpress,
      },
      {
        name: "Django",
        icon: DjangoSvg,
      },
      {
        name: "PHP",
        icon: PhpSvg,
      },
      {
        name: "Laravel",
        icon: LaravelSvg,
      },
      {
        name: "CodeIgniter",
        icon: CodeigniterSvg,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MySQL",
        icon: MysqlSvg,
      },
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "XAMPP",
        icon: XamppSvg,
      },
      {
        name: "Terraform",
        icon: TerraformSvg,
      },
      {
        name: "SSH",
        icon: SshSvg,
      },
    ],
  },
];
