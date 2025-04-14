// src/data/repositories.ts
export interface Repo {
    title: string;
    description: string;
    link: string;
    category: string;
  }
  
  export const repositories: { [key: string]: Repo[] } = {
    'web development': [
      {
        title: 'Web Developer Roadmap',
        description: 'A comprehensive guide to becoming a proficient web developer.',
        link: 'https://github.com/kamranahmedse/developer-roadmap',
        category: 'web development',
      },
      {
        title: '30 Seconds of Code',
        description: 'Short JavaScript code snippets for common programming tasks.',
        link: 'https://github.com/30-seconds/30-seconds-of-code',
        category: 'web development',
      },
      {
        title: 'Awesome Cheatsheets',
        description: 'Cheat sheets for various languages and frameworks.',
        link: 'https://github.com/LeCoupa/awesome-cheatsheets',
        category: 'web development',
      },
      {
        title: 'Tips and Tricks',
        description: 'CSS tricks and JavaScript hacks for dev workflow.',
        link: 'https://github.com/AllThingsSmitty/css-protips',
        category: 'web development',
      },
      {
        title: 'Front-End-Checklist',
        description: 'The perfect Front-End Checklist for modern websites and meticulous developers.',
        link: 'https://github.com/thedaviddias/Front-End-Checklist',
        category: 'web development',
      },
    ],
    'app development': [
      {
        title: 'Flutter Samples',
        description: 'Best practice open-source samples for Flutter apps.',
        link: 'https://github.com/flutter/samples',
        category: 'app development',
      },
      {
        title: 'Awesome Android',
        description: 'Curated list of awesome Android libraries and tools.',
        link: 'https://github.com/JStumpp/awesome-android',
        category: 'app development',
      },
      {
        title: 'Awesome iOS',
        description: 'A curated list of awesome iOS ecosystem libraries, resources and shiny things.',
        link: 'https://github.com/vsouza/awesome-ios',
        category: 'app development',
      },
      {
        title: 'React Native Elements',
        description: 'React Native UI Toolkit.',
        link: 'https://github.com/react-native-elements/react-native-elements',
        category: 'app development',
      },
      {
        title: 'Awesome React Native',
        description: 'A collection of awesome things regarding React Native.',
        link: 'https://github.com/jondot/awesome-react-native',
        category: 'app development',
      },
    ],
    'data science': [
      {
        title: 'Python Data Science Handbook',
        description: 'Comprehensive guide to data science with Python.',
        link: 'https://github.com/jakevdp/PythonDataScienceHandbook',
        category: 'data science',
      },
      {
        title: 'Awesome Machine Learning',
        description: 'Curated list of machine learning frameworks and tools.',
        link: 'https://github.com/josephmisiti/awesome-machine-learning',
        category: 'data science',
      },
      {
        title: 'Awesome Data Science',
        description: 'A curated list of awesome Data Science resources.',
        link: 'https://github.com/academic/awesome-datascience',
        category: 'data science',
      },
      {
        title: 'Data Science from Scratch',
        description: 'First principles approach to data science.',
        link: 'https://github.com/joelgrus/data-science-from-scratch',
        category: 'data science',
      },
      {
        title: 'Data Science for Beginners',
        description: '100 data science lessons.',
        link: 'https://github.com/donnemartin/data-science-ipython-notebooks',
        category: 'data science',
      },
      {
        title: 'Hands-On Machine Learning',
        description: 'A machine learning book with code examples and notebooks.',
        link: 'https://github.com/ageron/handson-ml2',
        category: 'data science',
      },
    ],
    'devops': [
      {
        title: 'Awesome DevOps',
        description: 'A curated list of awesome DevOps platforms, tools, practices and resources.',
        link: 'https://github.com/wmariuss/awesome-devops',
        category: 'devops',
      },
      {
        title: 'DevOps Resources',
        description: 'DevOps resources - Linux, Jenkins, AWS, SRE, Prometheus, Docker, Python, Ansible, Git, Kubernetes, Terraform, ...',
        link: 'https://github.com/bregman-arie/devops-resources',
        category: 'devops',
      },
      {
        title: 'Awesome Kubernetes',
        description: 'A curated list of awesome Kubernetes resources.',
        link: 'https://github.com/ramitsurana/awesome-kubernetes',
        category: 'devops',
      },
    ],
    'game development': [
      {
        title: 'Awesome Gamedev',
        description: 'A collection of free software and free culture resources for making amazing games.',
        link: 'https://github.com/Calinou/awesome-gamedev',
        category: 'game development',
      },
      {
        title: 'Games on GitHub',
        description: 'A list of popular/awesome video games, add-ons, maps, etc. hosted on GitHub.',
        link: 'https://github.com/leereilly/games',
        category: 'game development',
      },
      {
        title: 'GameDev Resources',
        description: 'A wonderful list of Game Development resources.',
        link: 'https://github.com/Kavex/GameDev-Resources',
        category: 'game development',
      },
    ],
    'blockchain': [
      {
        title: 'Awesome Blockchain',
        description: 'Curated list of resources for the development and applications of blockchain.',
        link: 'https://github.com/yjjnls/awesome-blockchain',
        category: 'blockchain',
      },
      {
        title: 'Best of Crypto',
        description: 'A ranked list of awesome open-source crypto projects.',
        link: 'https://github.com/lukasmasuch/best-of-crypto',
        category: 'blockchain',
      },
      {
        title: 'Awesome Blockchains',
        description: 'A collection about awesome blockchains - open distributed public databases w/ crypto hashes incl. git.',
        link: 'https://github.com/openblockchains/awesome-blockchains',
        category: 'blockchain',
      },
    ],
  };
  
  export const allRepos: Repo[] = Object.values(repositories).flat();