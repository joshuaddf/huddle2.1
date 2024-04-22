import Logo3 from "/public/images/logo3.svg"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = () => {
    return (
        <AnimatePresence>
            <motion.div
            key="loader"
                initial={{ opacity: 0, height: '0px', borderRadius: '0px' }}
                animate={{ opacity: 1, height: '100vh' }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0,height: '0px' }}
                className="bg-veryDarkCyan w-screen h-screen flex items-center justify-center text-7xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.4}}
                        exit={{ opacity: 0 }}
                        className="">
                        <Image
                            src={Logo3}
                            alt="Logo"
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    )
}