import React from 'react';

import { AiFillInfoCircle } from 'react-icons/ai';
import Modal from 'react-modal';
import colors from 'styles/colors';

import './InfoBox.scss';

const InfoBox = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const customStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.4)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: '3px',
      padding: '60px 80px'
    },
  }

  return (
    <div className='InfoBox'>
      <AiFillInfoCircle className='AiFillInfoCircle' color='#4286f4' size='22px' onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 style={{
          fontSize: '16px',
          marginBottom: '30px',
          color: colors.purple_3,
        }}
        >안내사항</h2>

        <ol style={{
          fontSize: '14px',
          color: '#808080',
        }}>
          <li style={{
            padding: '10px',
          }}>대구소프트웨어고등학교 재학생 혹은 졸업생 대상입니다</li>
          <li style={{
            padding: '10px',
          }}>사용자 정보 추가, 수정 및 삭제는 <a href="http://facebook.com/ChoiJinwoo03/">제작자</a>로 요청해주세요</li>
          <li style={{
            padding: '10px',
          }}>자세한 등록 사항은 <a href="https://github.com/Choi-Jinwoo/dgsw-character-dictionary/blob/master/README.md">이곳</a>을 참고해주세요</li>
        </ol>
      </Modal>
    </div>
  )
}

export default InfoBox;
