import React from "react";
import Modal from "react-modal";

class AddExpense extends React.Component {
    state = {
        error: undefined
    }
    handleAddExpense = (e) => {
        e.preventDefault();

        if (e.target.elements["expense"].value) {
            const values = [
                parseFloat(e.target.elements["expense"].value),
                e.target.elements["place"].value
            ];

            this.setState(() => ({ error: undefined }));

            this.props.handleAddExpense(values);
            this.props.handleToggleModal();
        } else {
            this.setState(() => ({ error: "Musisz podać jakąś cene!" }))
        }
    }
    render() {
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={this.props.handleToggleModal}
                contentLabel="Add expense"
                closeTimeoutMS={0}
                className="add-modal"
            >
                <h3 className="add-modal__title">Dodaj wydatek</h3>

                <form onSubmit={this.handleAddExpense} className="add-modal__body">
                    <div>
                        <input className="add-modal__input" name="expense" type="number" step="0.01" />
                        <input className="add-modal__input" name="place" type="text" />
                    </div>

                    {this.state.error ? <p className="add-modal__error-msg">{this.state.error}</p> : undefined}

                    <div className="add-modal__buttons">
                        <button className="add-modal__button">Dodaj</button>
                        <button className="add-modal__button" onClick={(e) => {
                            e.preventDefault();
                            this.setState(() => ({ error: undefined }));
                            this.props.handleToggleModal();
                        }}>
                            Wyjdź
                        </button>
                    </div>
                </form>
            </Modal>
        );
    }
}

Modal.setAppElement('#app');

export default AddExpense;