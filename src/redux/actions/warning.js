import { reduxTypes } from "../../constant";

/**
 *
 * @param {object} params - params of warning modal
 * @param {string} params.message - message
 * @param {string} params.title - title
 * @param {string} params.noText - no text
 * @param {string} params.yesText - yes text
 * @param {boolean} params.visible - visibility
 * @param {Function} params.onPressYes - onPressYes
 * @returns
 */
export const setWarningModal = ({
  visible,
  message,
  yesText,
  noText,
  title,
  onPressYes,
}) => ({
  type: reduxTypes.warningModal,
  payload: { visible, message, yesText, noText, title, onPressYes },
});
