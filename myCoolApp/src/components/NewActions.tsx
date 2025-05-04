import './NewActions.css'; 

const NewActions = () => {
    return (
        <div className="new-actions">
            <h2>What’s interesting you today?</h2>
            <div className="button-container">
                <button className="action-button">Add new thought</button>
                <button className="action-button">Request an update</button>
            </div>
        </div>
    );
};

export default NewActions;
