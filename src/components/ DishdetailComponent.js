import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

export default function DishDetail(props) {
  const { dishDetails } = props;

  const renderDish = (dish) => {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="1000px" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  };

  const renderComments = (dish) => {
    if (dish != null) {
      return dish.comments.map((elm) => (
        <div key={elm.id}>
          <ul className="list-unstyled">
            <li className="text-left">{elm.comment}</li>
            <br />
            <li className="text-left">
              -- {elm.author}, {elm.date}
            </li>
          </ul>
        </div>
      ));
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">{renderDish(dishDetails)}</div>
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {renderComments(dishDetails)}
      </div>
    </div>
  );
}
