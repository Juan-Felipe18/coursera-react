import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import DishDetail from "./ DishdetailComponent";

export default function MenuComponent(props) {
  const { dishes } = props;

  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelected = (dish) => {
    setSelectedDish(dish);
  };

  const renderDish = function (dish) {
    if (dish != null) {
      return <DishDetail dishDetails={dish} />;
    } else {
      return <div></div>;
    }
  };

  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={() => onDishSelected(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div>{renderDish(selectedDish)}</div>
    </div>
  );
}
