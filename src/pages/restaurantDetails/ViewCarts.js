import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import Container from "../../components/common/Container";
import IText from "../../components/common/IText";
import ITouchable from "../../components/common/ITouchable";
import Row from "../../components/common/Row";
import { setCartModal } from "../../redux/actions/cartModal";
import colors from "../../styles/colors";
import { getLog } from "../../utils";

const ViewCarts = memo(
  ({ carts }) => {
    getLog("View Cart BUtton");
    const dispatch = useDispatch();

    const handleCartModal = (params) => {
      dispatch(setCartModal(true));
    };
    return (
      <Container style={styles.container}>
        <ITouchable onPress={handleCartModal} style={styles.cartButton}>
          <Container alignItems="center">
            <Row
              justifyContent="space-between"
              style={{
                width: "100%",
                paddingHorizontal: 10,
                alignItems: "center",
              }}>
              <View style={{ width: 40 }} />
              <IText fontSize={16} color={colors.white}>
                View Carts
              </IText>
              <IText fontSize={16} color={colors.white}>
                {`$${carts.reduce(
                  (pre, currentValue) => pre + currentValue.product.price,
                  0
                )}`}
              </IText>
            </Row>
          </Container>
        </ITouchable>
      </Container>
    );
  },
  (pre, next) => pre.carts === next.carts
);

const mapStateToProps = (state) => ({ carts: state.carts });

export default connect(mapStateToProps, null)(ViewCarts);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
  cartButton: {
    backgroundColor: colors.black,
    borderRadius: 25,
    width: "80%",
    paddingVertical: 15,
  },
});
