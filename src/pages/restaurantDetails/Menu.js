import { useRoute } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect, useDispatch } from "react-redux";
import IScrollView from "../../components/common/IScrollView";
import MenuItem from "../../components/items/MenuItem";
import { foods } from "../../constant";
import { toggleCart } from "../../redux/actions/carts";
import { getLog } from "../../utils";

const Menu = ({ carts }) => {
  const { params } = useRoute();
  const dispatch = useDispatch();
  getLog("Restaurant Menu");

  const handleToggleCart = (menu) => {
    dispatch(toggleCart(menu, params.restaurant));
  };

  return (
    <IScrollView>
      {foods.map((item) => (
        <MenuItem
          isSelected={!!carts.find((cart) => cart.product.id === item.id)}
          onPress={handleToggleCart}
          menu={item}
          key={item.title}
        />
      ))}
    </IScrollView>
  );
};

const mapStateToProps = (state) => ({ carts: state.carts });

export default connect(mapStateToProps)(Menu);

const styles = StyleSheet.create({});
