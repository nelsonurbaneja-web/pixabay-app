import Swal from 'sweetalert2';
  
const alerta = (image) => (
  Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: image,
    imageWidth: 1000,
    imageHeight: 1000,
    imageAlt: 'Custom image',
  })
  // .then(rest => {
  //   if(rest.isConfirmed) {
  //     setView(false)
  //     console.log('se cerro')
  //   } else {
  //     setView(false)
  //     console.log('se cerro')
  //   }
  // })
)

export default alerta
