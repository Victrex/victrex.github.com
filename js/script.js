let t0 = gsap.timeline({
    scrollTrigger:{
        trigger: '.descripcion',
        start:"center bottom"
    }
})

t0.from(".des_h2",{y:-100, opacity:0, duration:1.5})
    .from(".desp_p",{y:-100, opacity:0, duration: 1}, "-=1")

let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.dark',
        start:"center bottom"
    }
});

t1.from(".photo", {x:200, opacity:0, duration: 1.5 })
    .from(".content",{y:300, opacity: 0, duration: 1}, "-=0.5")
    .from(".skills",{y:300, opacity:0, duration:1}, "-=0.3")

let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.made',
        start: "center bottom"
    }
});

t3.from(".made h2",{ rotationX:90, y:-50, z:10, opacity:0, duration: 0.5}, "=0.10")
t3.from(".md1",{rotationX:90, y:-40, z:10, opacity:0, duration: 0.5})
t3.from(".md2",{rotationX:90, y:-40, z:10, opacity:0, duration: 0.5})
t3.from(".md3",{rotationX:90, y:-40, z:10, opacity:0, duration: 0.5})
t3.from(".md4",{rotationX:90, y:-40, z:10, opacity:0, duration: 0.5})
t3.from(".md5",{rotationX:90, y:-40, z:10, opacity:0, duration: 0.5})
t3.from(".md6",{rotationX:90, y:-40, z:10, opacity:0, duration: 0.5})


let t4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.made',
        start: "center bottom"
    }
});


t4.from(".ab1",{rotationX:90, y:-40, z:10, opacity:0, duration: 0.5})
t4.from(".ab2",{rotationX:90, y:-40, z:10, opacity:0, duration: 0.5})
t4.from(".ab3",{rotationX:90, y:-40, z:10, opacity:0, duration: 0.5})
t4.from(".ab4",{rotationX:90, y:-40, z:10, opacity:0, duration: 0.5})
t4.from(".ab5",{rotationX:90, y:-40, z:10, opacity:0, duration: 0.5})
t4.from(".ab6",{x:-200, rotationY:-90,  opacity:0, duration: 1.5})
t4.from(".ab7",{rotationX:90, y:-40, z:10, opacity:0, duration: 1.5}, "-=0.5")

