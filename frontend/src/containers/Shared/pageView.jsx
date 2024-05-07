import Header from './header';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import getPlantsPhoto from '../Shared/plantPhoto';

const pageView = props => {
  const name = sessionStorage.getItem('name');
  const index = sessionStorage.getItem('index');

  return (
    <div className="card_layout">
      <div className="card">
        <Header variant="card-title" />
        <div className="card-body">
          <span className="card-caption">{name}</span>
          <Row>
            <Col>
              <img className="card__images" src={getPlantsPhoto[index][0]} alt="" />
              <div className="card__add">
                <span className="card__add-text">Внешний вид</span>
              </div>
            </Col>
            <Col>
              <img className="card__images" src={getPlantsPhoto[index][1]} alt="" />
              <div className="card__add">
                {/* <span className="card__add-title">{name}</span>
                <br /> */}
                <span className="card__add-text">Увеличение х400</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default pageView;
