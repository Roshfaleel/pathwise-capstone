import { jsPDF } from "jspdf";
import { Button } from "react-bootstrap";

function PDFdownload({ userDetails, achievements, skills }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20); //the title
    doc.text("PathWise User Profile", 14, 10);

    let yPosition = 30;

    doc.setFontSize(14);
    doc.text(`Name: ${userDetails.name}`, 14, yPosition); //the name
    yPosition += 10;
    doc.text(`Email: ${userDetails.email}`, 14, yPosition); //email
    yPosition += 20;

    doc.text("Skills:", 14, yPosition);
    yPosition += 10; 
    skills.forEach((skill, index) => {
      doc.text(
        `${index + 1}. ${skill.skill_name} - Proficiency: ${
          skill.proficiency_level
        }`,
        14,
        yPosition
      );
      yPosition += 15; 
    });

    doc.text("Achievements:", 14, yPosition);
    yPosition += 10; 
    achievements.forEach((achievement, index) => {
      doc.text(
        `${index + 1}. ${achievement.achievement_name} - ${
          achievement.description
        }`,
        14,
        yPosition
      );
      yPosition += 10; 
      doc.text(
        `Date: ${new Date(achievement.date).toLocaleDateString()}`,
        14,
        yPosition
      );
      yPosition += 15; 
    });

    doc.save("user-profile.pdf");
  };
  return (
    <div>
      <Button onClick={generatePDF}>Download PDF</Button>
    </div>
  );
}
export default PDFdownload;
