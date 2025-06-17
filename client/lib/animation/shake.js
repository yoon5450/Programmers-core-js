

export default function shake(t) {
  const tween = gsap.fromTo(
    "#nameField",
    { x: -10 },
    {
      duration: 0.1,
      x: 0,
      repeat: 5,
      yoyo: true,
    }
  );

  return tween;
}
