import { useSelector } from "react-redux";
import { useState } from "react";
import { modalStyle, accountButtonStyle } from "../../../styles/budget/modalStyle.js";
import { useHandleScreenSize, useHandleModalWidth } from "../../../helpers/screenSizeHelper.js";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";


function DeleteAccountModal({isModalOpen, handleDelete, closeModal}) {
  const theme = useSelector((state) => state.theme.theme);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [modalWidth, setModalWidth] = useState(400);

  // Custom hook to handle screen size
  useHandleScreenSize({screenWidth, setScreenWidth});

  // Custom hook to handle modal width
  useHandleModalWidth({screenWidth, setModalWidth});

  // Modal style
  const style = modalStyle(theme, modalWidth);
  console.log(style);
  
  // Buttons style
  const buttonStyle = accountButtonStyle;

  if (!isModalOpen) {
    return null;
  }
  return (
      <Modal
        open={isModalOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <p className={`parent-modal-title ${theme==='dark' ? 'parent-modal-title-dark' : '' }`}>Delete Account</p>
          <p id="parent-modal-description">
            Are you sure you want to delete your account ?
          </p>
          <p id="parent-modal-second-description">This will permanently delete all your data and you will not be able to recover it.</p>
          
          <Button 
                sx={buttonStyle}
                className="delete-account-button"
                onClick={handleDelete}
                color = "error"
                variant = {theme === "dark" ? "outlined" : "contained"}
            >PERMANENTLY DELETE ACCOUNT AND DATA</Button>
          <Button 
                sx={buttonStyle}
                className="cancel-delete-account-button"
                variant= {theme === "dark" ? "outlined" : "contained"}
                onClick={closeModal}>Cancel</Button>
        </Box>
      </Modal>
  );
}

export default DeleteAccountModal;

DeleteAccountModal.propTypes = {
    isModalOpen: PropTypes.bool,
    handleDelete: PropTypes.func,
    closeModal: PropTypes.func,
}
