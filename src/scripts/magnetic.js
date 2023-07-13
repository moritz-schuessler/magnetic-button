import { gsap } from "gsap";

const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        let x = ((e.offsetX - button.clientWidth / 2) / button.clientWidth / 2) * 150;
        let y = ((e.offsetY - button.clientHeight / 2) / button.clientHeight / 2) * 150;

        gsap.to(button, {
            duration: .75,
            ease: "power3.out",
            transform: `translate(${x + 'px'}, ${y + 'px'})`
        })

        gsap.to(button.children, {
            duration: .75,
            ease: "power3.out",
            transform: `translate(${x/3 + 'px'}, ${y/3 + 'px'})`
        })
    })

    button.addEventListener("mouseenter", async () => {
        await gsap.set(button, {
            overwrite: true,
            '--top': '100%',
        })

        await gsap.to(button, {
            duration: .5,
            delay: .25,
            ease: "power3.out",
            '--top': '0%',
        })
    })

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            duration: 1.5,
            ease: "elastic.out",
            transform: `translate(0px, 0px)`
        })

        gsap.to(button.children, {
            duration: 2,
            ease: "elastic.out",
            transform: `translate(0px, 0px)`
        })

        gsap.to(button, {
            duration: .5,
            delay: .25,
            ease: "power3.out",
            '--top': '-100%',
        })
    })
})