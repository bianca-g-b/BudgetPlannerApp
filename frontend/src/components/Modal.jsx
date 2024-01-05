import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


function DeleteModal({isModalOpen, handleDelete, closeModal, dateFrom, dateTo}) {
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
          <h2 id="parent-modal-title">Delete Budget</h2>
          <p id="parent-modal-description">
            Are you sure you want to permanently delete this budget?
          </p>
          <p id="parent-modal-description">{`${dateFrom} to ${dateTo}`}</p>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={closeModal}>Cancel</Button>
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

