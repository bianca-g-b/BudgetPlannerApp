import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";


function DeleteModal({isModalOpen, handleDelete, closeModal, dateFrom, dateTo}) {
  const theme = useSelector((state) => state.theme.theme);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: theme === "dark" ? 'black' : 'white',
    color: theme === "dark" ?  'white' : 'black',
    border: theme === "dark" ? '1px solid #3f8be2a3' : '1px solid rgba(1, 115, 113, 0.144)',
    boxShadow: theme === "dark" ? '0 0 10px   #3f8be25a' : '0 0 10px #0173714a',
    borderRadius: '10px',
    pt: 2,
    px: 4,
    pb: 3,
    textAlign: 'center',
  };

  if (!isModalOpen) {
    return null;
  }
  return (
      <Modal
        open={isModalOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
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

