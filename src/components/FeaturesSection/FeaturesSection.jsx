import FeatureCard from "../FeatureCard/FeatureCard";
import skillTracker from "../../assets/images/skill_tracking.jpg";
import goal from "../../assets/images/goal.jpg";
import dashboard from "../../assets/images/dashboard.jpg";

const FeaturesSection = () => {
  const features = [
    {
      imgSrc: skillTracker,
      imgAlt: 'vector image of skill tracking',
      title: 'Skill & Achievement Tracking',
      description: 'Log and showcase your skills with detailed progress and achievements.',
    },
    {
      imgSrc: goal,
      imgAlt: 'vector image of goal visualization',
      title: 'Goal Visualization',
      description: 'Set, track, and visualize personal and educational milestones.',
    },
    {
      imgSrc: dashboard,
      imgAlt: 'vector image of dashboard visualization',
      title: 'Custom Dashboards',
      description: 'Monitor your journey with intuitive charts and insights.',
    },
  ];

  return (
    <section className="features__container">
      <h3 className="features__title">Features</h3>
      <div className="features__cards">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            imgSrc={feature.imgSrc}
            imgAlt={feature.imgAlt}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
