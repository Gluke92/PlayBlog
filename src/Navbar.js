const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>Treeline</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/Create" 
            // style={{
            //     color: "white",
            //     backgroundColor: "#57ec77",
            //     borderRadius: '9px'
            // }}
            >Create</a>
            {/* <a href="/">Home</a> */}
        </div>
    </nav>);
}
 
export default Navbar;