import { useEffect, useState } from "react";
import axios from "axios";
import { endPoints } from "../../utils/endPoints";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalUpdateUser = ({ show, handleClose, userId }) => {
  const [formValues, setFormValues] = useState(null);

  useEffect(() => {
    if (userId) {
      traerUsuario();
    }
  }, [userId]);

  const traerUsuario = async () => {
    try {
      const { data } = await axios.get(endPoints.user + "/" + userId);
      setFormValues(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(endPoints.user + "/" + userId, formValues);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Usuario</Modal.Title>
      </Modal.Header>
      {formValues && (
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            {/* formulario con los datos del usuario  */}
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              value={formValues.name}
              onChange={handleChange}
              name="name"
              require="true"
            />
            <label>Apellido</label>
            <input
              type="text"
              className="form-control"
              value={formValues.lastName}
              onChange={handleChange}
              name="lastName"
              require="true"
            />
            <label>Correo</label>
            <input
              type="email"
              className="form-control"
              value={formValues.email}
              onChange={handleChange}
              name="email"
              require="true"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Modal.Footer>
        </form>
      )}
    </Modal>
  );
};

export default ModalUpdateUser;
