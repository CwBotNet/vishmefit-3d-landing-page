import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-around p-4">
                <div className="flex items-center">
                    <Image src={"/images/logo.png"} width={480} height={480} alt="" className="w-24" />
                </div>
                <div className="flex gap-12 capitalize">
                    <Link href={""}>home</Link>
                    <Link href={""}>store</Link>
                    <Link href={""}>Contact</Link>
                </div>
                <div className="flex gap-x-8">
                    <button>
                        <Link href={""}>Login</Link>
                    </button>
                    <button>
                        <Link href={""}>signup</Link>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;