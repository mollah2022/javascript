import { useState } from "react";

function SetList() {
  const tasks = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      description:
        "JavaScript is a versatile programming language commonly used in web development. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS. With JavaScript, developers can create interactive elements such as sliders, pop-ups, animations, form validations, and much more.",
    },
    {
      id: 2,
      title: "Understanding React Components",
      description:
        "React components are the building blocks of any React application. They let you split the UI into independent, reusable pieces that can be processed separately. Components can be class-based or function-based, and they help manage the user interface more effectively.",
    },
    {
      id: 3,
      title: "Node.js for Backend Development",
      description:
        "Node.js is a runtime environment that lets developers use JavaScript on the server side. It's built on Chrome’s V8 engine and enables fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient for backend services.",
    },
    {
      id: 4,
      title: "CSS Flexbox and Grid Layouts",
      description:
        "CSS Flexbox and Grid are powerful layout systems. Flexbox is best for arranging items in a single direction (row or column), while CSS Grid allows for two-dimensional layouts, ideal for designing complex responsive web pages. Mastering both is essential for modern front-end development.",
    },
    {
      id: 5,
      title: "APIs and RESTful Services",
      description:
        "APIs (Application Programming Interfaces) allow different software systems to communicate. REST (Representational State Transfer) is a popular architecture for building web services. RESTful APIs use standard HTTP methods like GET, POST, PUT, and DELETE to interact with data.",
    },
    {
      id: 6,
      title: "Machine Learning Basics",
      description:
        "Machine learning is a branch of artificial intelligence that allows systems to learn and improve from experience without being explicitly programmed. Common ML tasks include classification, regression, clustering, and recommendation. Algorithms like linear regression, decision trees, and neural networks are widely used.",
    },
    {
      id: 7,
      title: "Version Control with Git",
      description:
        "Git is a distributed version control system that helps developers track changes in source code during software development. It allows multiple developers to work on the same project simultaneously, merge code changes, resolve conflicts, and maintain code history efficiently.",
    },
    {
      id: 8,
      title: "Database Fundamentals",
      description:
        "Databases store and organize large amounts of data. Relational databases like MySQL and PostgreSQL use structured schemas and SQL, while NoSQL databases like MongoDB are schema-less and good for handling unstructured data. Understanding both types is crucial for backend development.",
    },
  ];
  const moreTasks = [
    {
      id: 9,
      title: "Web Security Essentials",
      description:
        "Web security is a critical aspect of web development that involves protecting websites and applications from various cyber threats. Common vulnerabilities include Cross-Site Scripting (XSS), SQL Injection, and Cross-Site Request Forgery (CSRF). Developers should follow best practices such as input validation, secure authentication, HTTPS usage, and regular security audits to ensure that web systems remain safe from attacks.",
    },
    {
      id: 10,
      title: "Responsive Web Design",
      description:
        "Responsive web design allows websites to adapt to different screen sizes and devices. This technique uses CSS media queries, flexible grids, and fluid images to create a consistent and optimized user experience across desktops, tablets, and smartphones. It ensures that content remains accessible and readable regardless of screen resolution, which is essential in today’s mobile-first world.",
    },
    {
      id: 11,
      title: "DevOps and CI/CD",
      description:
        "DevOps is a set of practices that bridge the gap between software development and IT operations. It emphasizes collaboration, automation, and continuous improvement. Continuous Integration (CI) and Continuous Deployment (CD) pipelines automate testing, building, and deployment processes, leading to faster and more reliable software delivery. Tools like Jenkins, GitHub Actions, and Docker are often used in CI/CD workflows.",
    },
    {
      id: 12,
      title: "Cloud Computing Basics",
      description:
        "Cloud computing provides on-demand access to computing resources such as servers, databases, storage, and applications via the internet. Major cloud platforms include Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). It offers scalability, flexibility, and cost-efficiency, allowing businesses to focus on innovation without worrying about infrastructure management.",
    },
    {
      id: 13,
      title: "TypeScript for Scalable JavaScript",
      description:
        "TypeScript is a superset of JavaScript that introduces static typing. It helps developers catch errors early during development, improves code maintainability, and supports modern features like interfaces, generics, and advanced tooling. TypeScript is widely used in large-scale applications, especially in frameworks like Angular and even React projects.",
    },
    {
      id: 14,
      title: "Authentication and Authorization",
      description:
        "Authentication verifies the identity of a user, while authorization determines what resources the user can access. These concepts are essential for securing web applications. Techniques include sessions, tokens (like JWT), OAuth, and multi-factor authentication (MFA). Implementing secure auth systems protects sensitive data and enhances user trust.",
    },
    {
      id: 15,
      title: "Performance Optimization in Web Apps",
      description:
        "Performance optimization improves the speed and responsiveness of web applications. Key strategies include minimizing HTTP requests, lazy loading, image compression, using CDNs, and reducing JavaScript bundle sizes. Tools like Lighthouse and WebPageTest help identify performance bottlenecks and suggest improvements.",
    },
    {
      id: 16,
      title: "GraphQL vs REST APIs",
      description:
        "GraphQL is a query language for APIs that allows clients to request exactly the data they need. Unlike REST, which has fixed endpoints, GraphQL provides a flexible schema and single endpoint for all operations. It reduces over-fetching and under-fetching of data, making it suitable for complex or dynamic frontend requirements.",
    },
    {
      id: 17,
      title: "Docker and Containerization",
      description:
        "Docker is a platform that enables developers to package applications and their dependencies into containers. Containers are lightweight, portable, and consistent across different environments. They solve the 'it works on my machine' problem and are widely used in CI/CD pipelines, microservices, and cloud-native applications.",
    },
    {
      id: 18,
      title: "Agile Methodologies and Scrum",
      description:
        "Agile is a software development methodology that promotes iterative development, collaboration, and customer feedback. Scrum is a popular Agile framework that divides development into sprints, with roles like Scrum Master, Product Owner, and Development Team. Agile helps teams deliver better software faster, with more flexibility and adaptability to changing requirements.",
    },
  ];

  const [values, setValue] = useState([]);
  function handleChnage() {
    setValue(tasks);
  }
  function handleChnageMore() {
    setValue([...tasks, ...moreTasks]);
  }
  return (
    <>
      <h1>Display all Data :.................</h1>
      <ul>
        {values.map((value) => (
          <li key={value.id}>{value.title}</li>
        ))}
      </ul>
      <button onClick={handleChnage}>Display</button>
      <button onClick={handleChnageMore}>MoreDisplay</button>
    </>
  );
}
export default SetList;
