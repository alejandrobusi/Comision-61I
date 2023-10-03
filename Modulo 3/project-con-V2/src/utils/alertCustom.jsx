import Swal from 'sweetalert2';

export const alertGeneric = (message, title, icon, action) => {
  Swal.fire({
    title,
    text: message,
    icon,
    confirmButtonColor: '#3085d6',
  }).then((result) => {
    if (result.isConfirmed) {
      if (typeof action === 'function') {
        action();
      }
    }
  });
};

