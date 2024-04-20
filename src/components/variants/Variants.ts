export const titlevariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7
        }
    }
}

export const paragraphVariants = {
    initial: {
        opacity: 0,
        y: 10
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            staggerChildren: 1,
            delay: 0.8
        }
    }
}

export const buttonVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.7
        }
    }
}


export const heroImgVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 1
        }
    }
}