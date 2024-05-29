import Mission from "./Mission";

export default function List() {
    const inputStyle = {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "12px",
    };
    const inputs = {
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        boxShadow: "0px 0px 4px   var(--mainColor)",
    };

    const timerStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItmes: "center",
        marginBlock: "12px",
    };
    const mainStyle = {
        border: "1px solid #333",
        padding: "8px",
        borderRadius: "12px",
        marginBlock:"12px",
        
    };
    const btnStyle = {
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "12px",
        backgroundColor: "#ffc300",
    };
    return (
        <>
            <div style={mainStyle}>
                <div style={inputStyle}>
                    <input
                        style={inputs}
                        placeholder="The title of the mission"
                    ></input>
                    <div style={timerStyle}>
                        <label htmlFor="From">From</label>
                        <input
                            style={{ ...inputs, border: "none" }}
                            type="time"
                            name=""
                            id="From"
                        />
                        <label htmlFor="To">To</label>
                        <input
                            style={{ ...inputs, border: "none" }}
                            type="time"
                            name=""
                            id="To"
                        />
                    </div>
                </div>
                <div >
                    <button style={btnStyle}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>

            <Mission/>
            <Mission/>
        </>
    );
}
