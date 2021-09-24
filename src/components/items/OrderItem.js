import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";
import Container from "../common/Container";
import IImage from "../common/IImage";
import IText from "../common/IText";
import Row from "../common/Row";

const OrderItem = ({ order }) => {
  const { order: products, status, createdAt, id, restaurant } = order;
  return (
    <Container>
      <Row justifyContent="space-between" mX={10}>
        <Container>
          <IText>{`Order id is : #${id}`}</IText>
          <IText>{`From restaurant : ${products[0].restaurant.name}`}</IText>
          <IText>{`Created at : ${new Date(
            createdAt
          ).toLocaleString()}`}</IText>
          <IText>{`Status : ${status}`}</IText>
        </Container>
        <Container style={{ width: 150, height: 150 }}>
          <Row style={{ flexWrap: "wrap" }}>
            {products.slice(0, 4).map((item, index) => (
              <Container>
                <IImage
                  source={{ uri: item.product.image }}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 20,
                    margin: 2,
                    borderWidth: 1,
                    borderColor: colors.grayLight1,
                  }}
                />
                {products.length > 4 && index === 3 && (
                  <Container
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 20,
                      margin: 2,
                      position: "absolute",
                      backgroundColor: "#00000080",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <IText color="white" bold fontSize={20}>
                      {`+${products.length - 4}`}
                    </IText>
                  </Container>
                )}
              </Container>
            ))}
          </Row>
        </Container>
      </Row>
      <Container style={{ height: 4, backgroundColor: colors.grayLight1 }} />
    </Container>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
