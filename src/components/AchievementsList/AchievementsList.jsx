import { Card, Button, Row, Col } from "react-bootstrap";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function AchievementsList({ achievements, onEdit, onDelete }) {
  return (
    <Card className="achievements__card mb-4">
      <Card.Body>
        <Row>
          {achievements.map((achievement) => (
            <Col key={achievement.id} sm={6} md={4}>
              <Card className="achievements__card-body mb-3">
                <Card.Body>
                  <Card.Title className="achievements__title">
                    {achievement.name}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {achievement.type}
                  </Card.Subtitle>
                  <Card.Text>{achievement.description}</Card.Text>
                  <Card.Text>
                    <small>{achievement.date}</small>
                  </Card.Text>
                  <div className="achievements__buttons">
                    <img
                      className="achievements__icon"
                      src={editIcon}
                      alt="Edit icon"
                      onClick={() => onEdit(achievement)}
                    />
                    <img
                      className="achievements__icon"
                      src={deleteIcon}
                      alt="Delete icon"
                      onClick={() => onDelete(achievement.id)}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AchievementsList;
