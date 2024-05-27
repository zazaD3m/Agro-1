import HomePageBlogCarousel from "../components/HomePageBlogCarousel";
import { cn } from "@/lib/utils";

const HomePageBlogPosts = ({ className }) => {
  const blogs = [
    {
      title: "პომიდვრის მენაღმე ჩრჩილის მონიტორინგი და კონტროლი სათბურში",
      description:
        "Tuta absoluta, პომიდვრის მენაღმე ჩრჩილი, ფართოდ გავრცელებული მავნებელია. ჩრჩილის ეს სახეობა სწრაფად აზიანებს პომიდვრის ნათესებს, ზოგ შემთხვევაში, 80%-ზე მეტ ფართობზე.",
      createdAt: new Date(),
      img: "",
    },
    {
      title: "პომიდვრის მენაღმე ჩრჩილის მონიტორინგი და კონტროლი სათბურში",
      description:
        "Tuta absoluta, პომიდვრის მენაღმე ჩრჩილი, ფართოდ გავრცელებული მავნებელია. ჩრჩილის ეს სახეობა სწრაფად აზიანებს პომიდვრის ნათესებს, ზოგ შემთხვევაში, 80%-ზე მეტ ფართობზე.",
      createdAt: new Date(),
      img: "",
    },
    {
      title: "პომიდვრის მენაღმე ჩრჩილის მონიტორინგი და კონტროლი სათბურში",
      description:
        "Tuta absoluta, პომიდვრის მენაღმე ჩრჩილი, ფართოდ გავრცელებული მავნებელია. ჩრჩილის ეს სახეობა სწრაფად აზიანებს პომიდვრის ნათესებს, ზოგ შემთხვევაში, 80%-ზე მეტ ფართობზე.",
      createdAt: new Date(),
      img: "",
    },
    {
      title: "პომიდვრის მენაღმე ჩრჩილის მონიტორინგი და კონტროლი სათბურში",
      description:
        "Tuta absoluta, პომიდვრის მენაღმე ჩრჩილი, ფართოდ გავრცელებული მავნებელია. ჩრჩილის ეს სახეობა სწრაფად აზიანებს პომიდვრის ნათესებს, ზოგ შემთხვევაში, 80%-ზე მეტ ფართობზე.",
      createdAt: new Date(),
      img: "",
    },
    {
      title: "პომიდვრის მენაღმე ჩრჩილის მონიტორინგი და კონტროლი სათბურში",
      description:
        "Tuta absoluta, პომიდვრის მენაღმე ჩრჩილი, ფართოდ გავრცელებული მავნებელია. ჩრჩილის ეს სახეობა სწრაფად აზიანებს პომიდვრის ნათესებს, ზოგ შემთხვევაში, 80%-ზე მეტ ფართობზე.",
      createdAt: new Date(),
      img: "",
    },
    {
      title: "პომიდვრის მენაღმე ჩრჩილის მონიტორინგი და კონტროლი სათბურში",
      description:
        "Tuta absoluta, პომიდვრის მენაღმე ჩრჩილი, ფართოდ გავრცელებული მავნებელია. ჩრჩილის ეს სახეობა სწრაფად აზიანებს პომიდვრის ნათესებს, ზოგ შემთხვევაში, 80%-ზე მეტ ფართობზე.",
      createdAt: new Date(),
      img: "",
    },
  ];
  return (
    <div className={cn("", className)}>
      <HomePageBlogCarousel blogs={blogs} />
    </div>
  );
};

export default HomePageBlogPosts;