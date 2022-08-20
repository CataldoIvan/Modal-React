import Modal from "../Modal/Modal";
import './modalHome.css'
import { useModal } from "../../hook/useModal";

const ModalHome = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  return (
    <>
      <section>
        <h2>MODALES</h2>
        <button className="open-buttom" onClick={openModal1}>Modal de Animales</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h3>Modal </h3>
          <p>Imagen sobre Animales</p>
          <img
            src="https://placeimg.com/400/400/animals"
            alt="Animals"
            style={{ borderRadius: "50%" }}
          />
        </Modal>
        <button  className="open-buttom" onClick={openModal2}>Modal de Tecnologia</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <h3>Modal </h3>
          <p>Imagen sobre Tecnologia</p>
          <img
            src="https://placeimg.com/400/400/tech"
            alt="tech"
            style={{ borderRadius: "50%" }}
          />
        </Modal>
      </section>
    </>
  );
};

export default ModalHome;
