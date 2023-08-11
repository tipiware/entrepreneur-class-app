import { BenefitType } from "src/utility/types";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const BenefitsData: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-8 w-3" />,
    title: "Fostering Leadership and Networking:",
    description:
      "Successful entrepreneurs are often exemplary leaders who can motivate and guide teams toward a common vision. Entrepreneurship classes emphasize leadership skills, effective communication, and team dynamics. Moreover, these classes provide a unique networking opportunity, connecting students with like-minded individuals, mentors, and industry professionals. Building a strong network can open doors to partnerships, collaborations, and potential investors.",
  },
  {
    icon: <UserGroupIcon className="h-8 w-4" />,
    title: "Ethics and Social Responsibility",
    description:
      "Entrepreneurship isn't solely about profits; it's also about creating value for society. A responsible entrepreneur considers the ethical implications of their actions and strives to make a positive impact on their community. Entrepreneurship classes underscore the importance of ethical decision-making, social responsibility, and sustainable business practices.",
  },
  {
    icon: <AcademicCapIcon className="h-8 w-4" />,
    title: "Pitching and Presentation Skills",
    description:
      "An integral aspect of entrepreneurship is the ability to pitch ideas convincingly to investors, partners, and customers. Entrepreneurship classes often include training in effective communication and presentation techniques. Students learn how to craft compelling pitches, create persuasive business plans, and articulate their vision with clarity and confidence.",
  },
];

export default BenefitsData;
