import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.scss"



function Timeline({ achievements, skills }) {
  return (
    <div>
      <h2 className="timeline__header">Activity Timeline</h2>
      <VerticalTimeline>
        {achievements.map((achievement) => {
          const formattedDate = new Date(achievement.date).toLocaleDateString(); // Format the date
          return (
            <VerticalTimelineElement
              key={achievement.achievement_id}
              date={formattedDate} // Use the formatted date
              icon={<i className="fa fa-trophy" />}
              contentStyle={{ background: "#f9f9f9", color: "#000" }}
            >
              <h3 className="timeline__subheader">{achievement.achievement_name}</h3>
              <p className="timeline__content">{achievement.description}</p>
            </VerticalTimelineElement>
          );
        })}
        {skills.map((skill) => (
          <VerticalTimelineElement
            key={skill.skill_id}
            date="Skill Acquired"
            icon={<i className="fa fa-star" />}
          >
            <h3 className="timeline__subheader">{skill.skill_name}</h3>
            <p>Proficiency: {skill.proficiency_level}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
