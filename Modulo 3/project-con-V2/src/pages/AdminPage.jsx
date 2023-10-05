import React, { useEffect, useState } from "react";
import axios from "axios";
import { endPoints } from "../utils/endPoints";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";
import ModalUpdateUser from "../components/modalUpdateUser/ModalUpdateUser";

const AdminPage = () => {
  //estado del componente
  const [users, setUsers] = useState(null);
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    traerUsuarios();
  }, []);

  const handleClose = () => {
    setUserId(null);
    setShow(false);
    traerUsuarios();
  };
  const handleShow = () => setShow(true);

  const traerUsuarios = async () => {
    //pedir a la bd todos los usuarios
    /*  GET  POST  PUT  DELETE  */
    try {
      const { data } = await axios.get(endPoints.user);
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const borrarUsuarios = async (id) => {
    console.log(id);
    try {
      //preguntar ¿Está seguro/a?
      const validar = confirm("Está seguro que quiere borrar el usuario");

      if (validar) {
        await axios.delete(endPoints.user + "/" + id);
        traerUsuarios();
      }
    } catch (error) {
      console.log(error);
      // throw new Error('No se realizó la petición')
    }
  };

  const modalActualizacion = (id) => {
    // guardar ese id
    setUserId(id);
    handleShow();
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Administración</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3>Usuarios</h3>
        </div>
        <div className="col-12 col-md-8">
          {users ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* mostrar los datos  */}
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => borrarUsuarios(user.id)}
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => modalActualizacion(user.id)}
                        >
                          <i
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <LoadingScreen />
          )}
        </div>
        <ModalUpdateUser
          show={show}
          handleClose={handleClose}
          userId={userId}
        />
      </div>
      <div className="row">{/* Productos  */}</div>
    </div>
  );
};

export default AdminPage;
