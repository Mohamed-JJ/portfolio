import cert1 from "public/certs/cert-1.png";
import cert2 from "public/certs/cert-2.png";
import cert3 from "public/certs/cert-3.png";
import cert4 from "public/certs/cert-4.png";
import sidefolioAceternity from "public/images/sidefolio-aceternity.png";
import tetris1 from "public/images/tetris1.png";
import tetris2 from "public/images/tetris2.png";
import pong1 from "public/images/pingpong1.png";
import taqa1 from "public/images/taqa1.png";
import taqa2 from "public/images/taqa2.png";
import taqa3 from "public/images/taqa3.png";
import pong2 from "public/images/pingpong2.png";
import pong3 from "public/images/pingpong3.png";
import pong4 from "public/images/pingpong4.png";
import override1 from "public/images/override1.png";
import cloud1 from "public/images/cloud1.png";
import cloud2 from "public/images/cloud2.png";
import orchestrator1 from "public/images/orchestrator1.png";
import orchestrator2 from "public/images/orchestrator2.png";
import orchestrator3 from "public/images/orchestrator3.png";
import override2 from "public/images/override2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://github.com/abdelhamidbouazi/red-tetris.git",
    title: "snowtris",
    description:
      "A design and developement of a tetris game website with players being able to play over a network.",
    thumbnail: tetris2,
    images: [tetris2, tetris1],
    stack: ["Nextjs", "Tailwindcss", "NestJs", "postgresql"],
    slug: "snow-tetris",
    content: (
      <div>
        <p>
          Everyone knows the game Tetris, and everyone knows JavaScript. All
          that’s left is to build a Tetris game in JavaScript. Yes, but... My
          Tetris game will be online and multiplayer. It will allow others to
          disrupt intergalactic gaming sessions during your late-night study
          sessions. (There are still some WiFi issues on certain planets.){" "}
        </p>
        <p>
          My Tetris leverages cutting-edge JavaScript technologies, which are at
          the core of a fierce intellectual, industrial, and financial
          competition between Facebook and Google in their quest for global
          dominance.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://paddles.arbaoui.me",
    title: "pingpong",
    description: "PingPong themed Fullstack entertainment application.",
    thumbnail: pong1,
    images: [pong1, pong2, pong3, pong4],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "pong",
    content: (
      <div>
        <p>
          The pingpong project is the final web development project in the 42
          curriculum, designed to bring together all the skills students have
          learned throughout their training. Its main goal is to build a fully
          functional, secure, and responsive web application of the classic Pong
          game. Beyond just gameplay, the project requires implementing a range
          of modern web development concepts such as authentication, real-time
          communication, user management, multiplayer matchmaking, leaderboards,
          chat systems, and responsive UI/UX design. This ensures that students
          not only revisit fundamental programming concepts but also gain
          hands-on experience with full-stack development in a professional-like
          environment.{" "}
        </p>
        <p>
          One of the most important aspects of ft_transcendence is the focus on
          integration and deployment. Students must apply DevOps practices such
          as containerization with Docker, managing environments, and deploying
          the application in a reliable and scalable way. The project also
          emphasizes security, requiring the use of techniques like OAuth2 for
          authentication and encrypted connections to protect user data. By
          combining front-end, back-end, and DevOps knowledge, ft_transcendence
          acts as a capstone project that prepares students to face real-world
          challenges in software engineering.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/Mohamed-JJ/taqa-product.git",
    title: "taqathon",
    description:
      "Anomaly detection application, powered by nodejs, python, and will.",
    thumbnail: taqa1,
    images: [taqa1, taqa2, taqa3],
    stack: ["reactjs", "Tailwindcss", "Fastapi", "NestJs"],
    slug: "taqathon",
    content: (
      <div>
        <p>
          this project aims to detect anomalies in a system after a data
          collection from the machines after being treated by intermidiate.{" "}
        </p>
        <p>
          the end result was to show the analysis done by the trained model
          classified by criticality of the anomaly and a status report, a rex
          system, and an advanced filtering system.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/Mohamed-JJ/42-override.git",
    title: "overRide",
    description:
      "CTF like challenges where an attacker has to exploit a vulnarble binary to retrieve the flag",
    thumbnail: override1,
    images: [override1, override2],
    stack: ["low level security", "binary exploit"],
    slug: "override",
    content: (
      <div>
        <p>
          As a developer, you might have to work on software that will be used
          by hundreds of people. You have learned to develop more or less
          complex programs without taking security into account.{" "}
        </p>
        <p>
          With this project, you will quickly realize it’s rather easy to
          exploit issues that can be very easily avoided. Once you’re through
          with this project, you will have a clearer understanding of the RAM.
          And this will really help you design a bugless program
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/yassine-khadiri/Inception-of-things.git",
    title: "Orchestrator",
    description: "System admin project with focus on kubernetes and gitops",
    thumbnail: orchestrator1,
    images: [orchestrator1, orchestrator2, orchestrator3],
    stack: ["k3s", "vagrant", "bash", "gitlab"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          This project aims to deepen our knowledge by making us use K3d and K3s
          with Vagrant.{" "}
        </p>
        <p>
          We learned how to set up a personal virtual machine with Vagrant and
          the distribution of our choice. Then, we learned how to use K3s and
          its Ingress. Last but not least, we discovered discover K3d that will
          simplify our life.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/Mohamed-JJ/42-cloud-1.git",
    title: "Deployment infra",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: cloud1,
    images: [cloud1, cloud2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          in this project it was required to deploy a wordpress application with
          all it&apos;s dependencies from the wordpress image, to databace, to
          an nginx webserver.{" "}
        </p>
        <p>
          the end result would be an automated deployment to a virtual machine
          with configuring the vm before running the app there, while following
          the modern standards of using ansible, managing secrets, and infra
          configuration
        </p>{" "}
      </div>
    ),
  },
];

export const certifications = [
  {
    href: "https://coursera.org/share/a55cf2351e3105078cc6596e1e32db01",
    title: "Meta backend developer",
    description:
      "Backend and Database driven course with focus on building logical thinking and system design skills.",
    thumbnail: cert1,
    images: [cert1, cert2],
    stack: ["python", "django", "drf"],
    slug: "meta-backend",
    content: (
      <div>
        <p>
          I completed the Meta Backend Developer specialization on Coursera,
          where I gained a solid foundation in backend engineering through
          practical coding projects and hands-on exercises. The program equipped
          me with technical expertise in Python programming, Linux commands, Git
          and version control, SQL, APIs, JSON, XML, and cloud hosting.
          Alongside mastering these technologies, I developed the ability to
          build and manage server-side logic, work with databases, and integrate
          modern backend systems.{" "}
        </p>
        <p>
          Through this training, I built a portfolio of projects that highlight
          my ability to solve real-world problems using code and backend
          technologies. I also received structured guidance on preparing for
          engineering interviews, including both technical and behavioral
          aspects. This experience has strengthened my ability to design,
          develop, and deploy scalable backend solutions while giving me the
          confidence to apply these skills in professional environments.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://www.coursera.org/account/accomplishments/verify/ZBCS5MM9ZYBK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    title: "Introduction To DevOps",
    description:
      "Introduction of DevOps methodologies, practices, case studies, and best cases that require DevOps methodologies.",
    thumbnail: cert3,
    images: [cert3, cert4],
    stack: ["Devops", "agile", "CI/CD"],
    slug: "ibm-devops",
    content: (
      <div>
        <p>
          I completed structured training in DevOps engineering, where I
          explored the essential characteristics that define modern DevOps
          practices. The program emphasized the importance of building a culture
          of shared responsibility, transparency, and learning from failure as
          key drivers for innovation and collaboration. I gained a strong
          understanding of Continuous Integration (CI), Continuous Delivery
          (CD), Infrastructure as Code (IaC), Test Driven Development (TDD), and
          Behavior Driven Development (BDD), applying these concepts to create
          more efficient and reliable development workflows.{" "}
        </p>
        <p>
          Throughout the training, I developed hands-on skills in cloud-native
          microservices, automated continuous deployments, resilient code
          design, and modern software engineering practices. Beyond the
          technical aspects, I also learned the organizational impact of
          DevOps—breaking down silos, working effectively in cross-functional
          teams, and fostering shared ownership across the software development
          lifecycle. This combination of technical expertise and cultural
          principles has strengthened my ability to contribute to
          high-performing DevOps environments.
        </p>{" "}
      </div>
    ),
  },
];
