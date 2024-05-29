const Header = () => {
    const toggleMode = (tar) => {
        tar.checked ? lightMode() : darkMode();
    };

    const lightMode = () => {
        document.documentElement.style.setProperty(
            "--mainColor",
            "rgba(255, 255, 255, 0.87)"
        );
        document.documentElement.style.setProperty("--fontColor", "#242424");
        document.documentElement.style.setProperty("--secondColor", "#d6d6d6");
    };
    const darkMode = () => {
        document.documentElement.style.setProperty("--mainColor", "#242424");
        document.documentElement.style.setProperty("--secondColor", "#202020");
        document.documentElement.style.setProperty(
            "--fontColor",
            "rgba(255, 255, 255, 0.87)"
        );
    };

    return (
        <>
            <header>
                <h2>ToDoList</h2>
                <label className="switch">
                    <input
                        type="checkbox"
                        onChange ={(event) => {
                            toggleMode(event.target);
                        }}
                    />
                    <span className="slider round"></span>
                </label>
            </header>
        </>
    );
};

export default Header;
