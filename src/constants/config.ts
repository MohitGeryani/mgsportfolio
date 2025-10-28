type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Mohit Geryani",
    fullName: "Mohit Geryani",
    email: "mohitgeryani@gmail.com",
  },
  hero: {
    name: "Mohit Geryani",
    p: ["A Full Stack Engineer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "About Me",
      content: `I’m a Full Stack Developer with a strong focus on building meaningful and user-driven digital experiences. Over the past 1.5 years, I’ve worked with companies like Cprime (A Goldman Sachs & Everstone Company) , INRY, and Celebal Technologies, contributing to real-world projects for clients such as CHN, SABIC, DIR, Danaher, & more. I enjoy creating applications that feel intuitive, perform seamlessly, and solve real problems, from complex enterprise systems to AI-powered chatbots that can generate and edit presentations. \n Beyond coding, I’m passionate about design and storytelling. I love photo and video editing, graphic design, and content creation, which add a creative perspective to my technical work. I believe a great product isn’t just developed, it’s thoughtfully crafted with imagination, clarity, and purpose.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
