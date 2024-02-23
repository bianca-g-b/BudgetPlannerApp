import { useSelector } from "react-redux";
import { useState } from "react";
import { modalStyle } from "../../../styles/budget/modalStyle.js";
import { useHandleScreenSize, useHandleModalWidth } from "../../../helpers/screenSizeHelper.js";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";


function DeleteModal({isModalOpen, handleDelete, closeModal, dateFrom, dateTo}) {
  const theme = useSelector((state) => state.theme.theme);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [modalWidth, setModalWidth] = useState(400);

  // Custom hook to handle screen size
  useHandleScreenSize({screenWidth, setScreenWidth});

 // Custom hook to handle modal width
  useHandleModalWidth({screenWidth, setModalWidth});

  // Modal style
  const style = modalStyle(theme, modalWidth);


  if (!isModalOpen) {
    return null;
  }
  return (
      <Modal
        open={isModalOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="delete-modal-container" sx={{ ...style}}>
          <h2 className={`parent-modal-title ${theme==='dark' ? 'parent-modal-title-dark' : '' }`}>Delete Budget</h2>
          <p id="parent-modal-description">
            Are you sure you want to permanently delete this budget?
          </p>
          <p id="parent-modal-description-dates"><span className={`date-delete-modal ${theme==='dark' ? 'date-delete-modal-dark' : '' }`}>{`${dateFrom.split('/').join('-')}`}</span> to <span className={`date-delete-modal ${theme==='dark' ? 'date-delete-modal-dark' : '' }`}>{`${dateTo.split('/').join('-')}`}</span></p>
          <div className="budget-modal-buttons-div">
            <Button 
                sx = {{width: '40%'}}
                color="error"
                variant= {theme === "dark" ? "outlined" : "contained"}
                onClick={handleDelete}>Delete
            </Button>

            <Button 
                sx = {{width: '40%'}}
                variant= {theme === "dark" ? "outlined" : "contained"}
                onClick={closeModal}>Cancel
            </Button>
          </div>
        </Box>
      </Modal>
  );
}

export default DeleteModal;

DeleteModal.propTypes = {
    isModalOpen: PropTypes.bool,
    handleDelete: PropTypes.func,
    closeModal: PropTypes.func,
    dateFrom: PropTypes.string,
    dateTo: PropTypes.string,
}

