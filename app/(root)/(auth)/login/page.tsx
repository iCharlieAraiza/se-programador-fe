import Link from "next/link";
import GoogleSvg from "../components/ui/GoogleSvg";

export default function LogIn() {
    return (
        <>
            <div className="text-center">
                <h1 className="font-semibold text-4xl">Iniciar Sesión</h1>
                <p>Para acceder a tu cuente, accede con cualquiera de los métodos disponibles.</p>
                <section className="mt-8">
                    <Link href="/google-auth" className="cursor-pointer px-6 py-2 rounded-sm hover:bg-white border hover:border-[#937723] transition duration-300 font-medium flex items-center gap-4 w-full max-w-[500px] justify-between mx-auto">
                        <GoogleSvg />
                        <span>
                            Iniciar sesión con Google
                        </span>
                        <div className=""></div>
                    </Link>
                </section>
            </div>
        </>
    )
}


