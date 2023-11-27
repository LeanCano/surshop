import Button from "../components/Form/Button"
import Layout from "../components/Form/Layout"
import SocialButton from "../components/Form/SocialButton"
import TextInput from "../components/Form/TextInput"
import { FaGoogle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

const page = () => {
    return (
        <Layout>
            <h1 className="text-center font-bold mb-12">Regístrate para ser usuario</h1>
            <TextInput name="Nombres" required />
            <TextInput name="Apellidos" required />
            <TextInput name="Email" type="email" required />
            <TextInput name="Contraseña" type="password" required />
            <TextInput name="Confirmar contraseña" type="password" required />
            <div className="mb-4">
                <label className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                    He leido y acepto los términos de servicio y nuestra politica de privacidad
                </label>
            </div>
            <Button >Crear cuenta</Button>
            <SocialButton> <p className="flex items-center justify-center"><FaGoogle className="mr-2" /> Continuar con Google</p> </SocialButton>
            <SocialButton> <p className="flex items-center justify-center"><MdFacebook className="mr-2"/>Continuar con Facebook</p></SocialButton>
            <p className="text-center mt-4">
                    ¿Ya tienes contraseña? <a href="#">Ingresa</a>
            </p>
        </Layout>
    )
}
export default page