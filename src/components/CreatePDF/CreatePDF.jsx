import { jsPDF } from "jspdf";

function PDFdownload({ userDetails, achievements, skills }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20); //the title
    doc.text("User Profile", 14, 20);

    doc.setFontSize(14);
    doc.text(`Name: ${userDetails.name}`, 14, 40); //the name
    doc.text(`Email: ${userDetails.email}`, 14, 50); //email

    doc.text("Skills:", 14, 60);
    skills.forEach((skill, index) => {
      doc.text(
        `${index + 1}.${skill.skill_name} - Proficiency: ${
          skill.proficiency_level
        }`,
        14,
        70 + index * 10
      );
    });

    doc.text("Achievements:", 14, 100 + skills.length * 10);
    achievements.forEach((achievement, index) => {
      doc.text(
        `${index + 1}. ${achievement.achievement_name} - ${
          achievement.description
        }`,
        14,
        110 + index * 10
      );
      doc.text(
        `Date: ${new Date(achievement.date).toLocaleDateString()}`,
        14,
        120 + index * 10
      );
    });

    doc.save("user-profile.pdf");
  };
  return (
    <div>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
}
