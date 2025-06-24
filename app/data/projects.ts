// app/data/projects.ts
export interface Project {
  id: number
  title: string
  tag: string
  video?: string
  image?: string
  description: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FeasTapp: Object Detection using YoloV8 and Mask R-CNN for Ingredient Recognition and Dish Recommendation via Generative AI API Integration",
    tag: 'Thesis Project • WVSU',
    video: '/images/feastapp.mp4',
    description:
      "FeasTapp is an innovative mobile application that leverages advanced AI technologies to " +
      "simplify meal planning and enhance the cooking experience. By utilizing YOLOv8 and Mask R-CNN for " +
      "ingredient recognition and integrating GPT-based models for personalized dish recommendations, " +
      "FeasTapp empowers users to create meals from available ingredients while promoting sustainability " +
      "and reducing food waste. This system supports diverse dietary needs, includes recipes from global cuisines, " +
      "and showcases the practical application of AI in everyday life. FeasTapp demonstrates how artificial " +
      "intelligence can address real-world challenges, inspiring creativity and efficiency in the kitchen.",
  },
  {
    id: 2,
    title: 'CharGee: Solar-Powered Mobile Charging Station',
    tag: 'Startup Project • Charlie Co.',
    video: '/images/chargee.mp4',
    description:
      "CharGee is a startup project by Charlie Co., a team of Computer Science students from " +
      "West Visayas State University, specializing in AI and innovation. Designed to address " +
      "power accessibility during emergencies, CharGee features a solar panel with a smart solar " +
      "tracking system, weatherproof compartments, and coin-operated charging slots. This " +
      "sustainable solution supports up to three devices simultaneously, offering a practical " +
      "and eco-friendly way to stay connected while promoting renewable energy use.",
  },
  {
    id: 3,
    title: 'Get Stuff Done: A To-Do List Web Application',
    tag: 'Coursework • WVSU',
    video: '/images/getstuffdone.mp4',
    description:
    "Get Stuff Done is a user-friendly web application designed to help individuals stay" +
    "organized, boost productivity, and manage their daily tasks effectively. With its intuitive " + 
    "interface, users can effortlessly create, organize, and track to-do items or deadlines." +
    "The app empowers users to prioritize activities and achieve their goals, making it an " +
    "essential tool for anyone looking to streamline their workflow and enhance time management.",
  },
]
