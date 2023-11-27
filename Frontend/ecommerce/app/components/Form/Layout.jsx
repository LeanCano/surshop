import Button from "./Button"
import TextInput from "./TextInput"


const Layout = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Columna del logo */}
            <div className="w-1/2 bg-primary flex items-center justify-center">
                <div className=" flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Logo</h1>
                </div>
            </div>

            {/* Columna del formulario */}
            <div className="w-1/2 flex items-center justify-center bg-white ">
                <form className="w-1/2">
                    {children}
                </form>
            </div>
        </div>
    )
}
export default Layout