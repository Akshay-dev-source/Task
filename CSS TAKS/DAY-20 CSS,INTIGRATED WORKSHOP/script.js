gsap.to("#gsapbox",{
    x:1000,
    duration:2,
    dealy:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    repeat:-1,
    yoyo:true,
})
gsap.from("#gsap1",{
    x:1000,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true
})
gsap.from(".gsapp1",{
opacity:0,
duration:1,
delay:1,
y:20,
repeat:-1,
stagger:1,
yoyo:true
})

// timeline
var tl = gsap.timeline()

tl.to(".line",{
    x:1000,
    duration:2,
    delay:1
})
tl.to(".line1",{
    x:1000,
    duration:2,
    delay:1
})
tl.to(".line2",{
    x:1000,
    duration:2,
    delay:1
})