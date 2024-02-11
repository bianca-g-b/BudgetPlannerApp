import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";


function DeleteAccountModal({isModalOpen, handleDelete, closeModal}) {
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
  
  const buttonStyle = {
      width: '100%',
      marginBottom: '4%',
  }

  if (!isModalOpen) {
    return null;
  }
  return (
      <Modal
        open={isModalOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, }}>
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
