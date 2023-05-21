import { html, Component } from './js/standalone.module.js'

class Modal extends Component {
  state = { isOpen: false }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  closeModal = () => {
    this.setState({ isOpen: false })
  }

  render({ content }) {
    const { isOpen } = this.state

    const modalStyle = {
      display: isOpen ? 'block' : 'none',
      position: 'fixed',
      zIndex: 1,
      paddingTop: '100px',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      overflow: 'auto',
      backgroundColor: 'rgba(0,0,0,0.4)'
    }

    const modalContentStyle = {
      backgroundColor: '#fefefe',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #888',
      width: '80%'
    }

    const closeButtonStyle = {
      color: '#aaaaaa',
      float: 'right',
      fontSize: '28px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }

    return html`
            <div>
              <button onClick=${this.openModal}>Open Modal</button>
              <div style=${modalStyle}>
                <div style=${modalContentStyle}>
                  <span style=${closeButtonStyle} onClick=${this.closeModal}
                    >${'\u00D7'}</span
                  >
                  <p>${content}</p>
                </div>
              </div>
            </div>
          `
  }
}

export default Modal