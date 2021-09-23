import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect, useDispatch } from "react-redux";
import { setCartModal } from "../../redux/actions/cartModal";
import { getLog } from "../../utils";
import Container from "../common/Container";
import IBottomSheet from "../common/IBottomSheet";
import IText from "../common/IText";

const CartModal = memo(
  ({ cartModal, carts, ...prp }) => {
    getLog("Cart Modal");
    const dispatch = useDispatch();

    const handleClose = () => {
      dispatch(setCartModal(false));
    };

    return (
      <IBottomSheet visible={cartModal} onClose={handleClose}>
        <Container backgroundColor="white">
          {carts.map((item) => (
            <IText key={item.product?.title}>{item.product?.title}</IText>
          ))}
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
