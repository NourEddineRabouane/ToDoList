

export default function Mission() {
    const taskStyle = {
        display: "flex",
        marginBlock: "12px",
        border:"none",
        borderRadius:"12px",
        padding:"8px",
        justifyContent:"space-between",
        alignItems:"center",
        boxShadow : "0px 0px 4px   var(--mainColor)"
    };

    const btnSt = {
        borderRadius: "50%",
        border: "1px solid #555",
        width: "30px",
        height: "30px",
        backgroundColor: "transparent",
        cursor: "pointer",
        marginInline:"8px",
        color:"var(--secondColor)"

    };
    const taskinfo = {
        borderLeft : "3px solid",
        paddingLeft: "8px",
        borderRadius:"3px"
        
    }
    return (
        <>
            <div className="task" style={taskStyle}>
                <div style={taskinfo}>
                    <p style={{fontWeight:"bold"}}>learn English</p>
                    <span style={{fontSize:"small"}}>12:30 - 14:00</span>
                </div>
                <div >
                    <button style={btnSt}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    <button style={btnSt}>
                        <i className="fa-solid fa-pencil"></i>
                    </button>
                    <button style={btnSt}>
                        <i className="fa-solid fa-check"></i>
                    </button>
                </div>
            </div>
        </>
    );
}
