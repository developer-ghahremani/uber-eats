import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect, useDispatch } from "react-redux";
import { setCartModal } from "../../redux/actions/cartModal";
import colors from "../../styles/colors";
import { getLog, getRandomString } from "../../utils";
import Container from "../common/Container";
import IBottomSheet from "../common/IBottomSheet";
import CartItem from "../items/Cart";
import IButton from "../items/IButton";
import { firestore, auth } from "./../../firebase";

const CartModal = memo(
  ({ cartModal, carts, ...prp }) => {
    getLog("Cart Modal");
    const dispatch = useDispatch();

    const handleClose = () => {
      dispatch(setCartModal(false));
    };

    const onCheckout = async () => {
      if (!auth.currentUser) return handleLogin();

      try {
        await firestore.collection("Orders").add({
          name: "Reza Ghahremani",
          order: carts,
          status: "Created",
          id: getRandomString(5),
        });
      } catch (error) {
        console.log(error.message, "error");
      }
    };

    return (
      <IBottomSheet visible={cartModal} onClose={handleClose}>
        <Container backgroundColor="white">
          {carts.map((item) => (
            <CartItem cart={item} key={item.product.title} />
          ))}
          <Container mX={25} mY={20}>
            <IButton
              style={{ backgroundColor: colors.black, borderRadius: 25 }}
              textStyle={{
                marginVertical: 10,
                color: colors.white,
                fontSize: 20,
              }}
              onPress={onCheckout}>
              Checkout
            </IButton>
          </Container>
        </Container>
      </IBottomSheet>
    );
  },
  (prev, next) => prev.cartModal === next.cartModal
);

const mapStateToProps = (state) => ({
  cartModal: state.cartModal,
  carts: state.carts,
});

export default connect(mapStateToProps, null)(CartModal);

const styles = StyleSheet.create({});
