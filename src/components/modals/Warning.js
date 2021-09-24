import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { connect, useDispatch } from "react-redux";
import { setWarningModal } from "../../redux/actions/warning";
import colors from "../../styles/colors";
import { getLog } from "../../utils";
import Container from "../common/Container";
import IBottomSheet from "../common/IBottomSheet";
import IText from "../common/IText";

import IButton from "../items/IButton";

const WarningModal = memo(
  ({ warningModal }) => {
    getLog("Warning Modal");
    const {
      visible,
      message,
      yesText = "Yes",
      noText = "No",
      title,
      onPressYes,
    } = warningModal;
    const dispatch = useDispatch();

    const handleYesPress = (params) => {
      handleClose();
      setTimeout(() => {
        onPressYes();
      }, 50);
    };

    const handleClose = (params) => {
      dispatch(setWarningModal({ visible: false }));
    };

    return (
      <IBottomSheet visible={visible} onClose={handleClose}>
        <Container mX={5}>
          <Container
            style={{
              borderRadius: 15,
              backgroundColor: "white",
              paddingHorizontal: 10,
            }}>
            <IText
              style={{ textAlign: "center", marginVertical: 5 }}
              fontSize={18}>
              {title}
            </IText>
            <IText
              style={{ textAlign: "center" }}
              color={colors.gray1}
              fontSize={16}>
              {message}
            </IText>
            <IButton
              onPress={handleYesPress}
              style={{ marginVertical: 10 }}
              textStyle={{
                color: colors.blue,
                fontSize: 20,
                marginVertical: 15,
              }}>
              {yesText}
            </IButton>
          </Container>
          <IButton
            onPress={handleClose}
            style={{ marginVertical: 10, backgroundColor: "white" }}
            textStyle={{
              color: colors.blue,
              fontSize: 20,
              marginVertical: 15,
            }}>
            {noText}
          </IButton>
        </Container>
      </IBottomSheet>
    );
  },
  (pre, next) => pre.warningModal.visible === next.warningModal.visible
);

const mapStateToProps = (state) => ({
  warningModal: state.warningModal,
});

export default connect(mapStateToProps, null)(WarningModal);

const styles = StyleSheet.create({});
