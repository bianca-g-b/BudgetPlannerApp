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
  border: '1px solid #58585d',
  boxShadow: 24,
  borderRadius: 3,
  pt: 2,
  px: 4,
  pb: 3,
  textAlign: 'center',
};

const buttonStyle = {
    width: '100%',
    marginBottom: '4%',
}

function DeleteAccountModal({isModalOpen, handleDelete, closeModal}) {
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
          <h2 id="parent-modal-title">Delete Account</h2>
          <p id="parent-modal-description">
            Are you sure you want to delete your account ?
          </p>
          <p id="parent-modal-second-description">This will permanently delete all your data and you will not be able to recover it.</p>
          
          <Button 
                sx={buttonStyle}
                className="delete-account-button"
                onClick={handleDelete}
                color = "error"
                variant = "contained"
            >PERMANENTLY DELETE ACCOUNT AND DATA</Button>
          <Button 
                sx={buttonStyle}
                className="cancel-delete-account-button"
                variant="contained"
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
