function type_writer_1() {
  let tw_element_1 = document.getElementById("welcome-tw");

  let typewriter = new Typewriter(tw_element_1, {
    loop: true,
  });

  typewriter
    .typeString("Hello World!")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Schön dich kennen zu lernen!")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Ich bin Devcodino!")
    .pauseFor(500)
    .deleteChars(10)
    .typeString("Markus!")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Du brauchst ne Website oder ein Design?")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Scrolle nach oben")
    .pauseFor(500)
    .deleteChars(4)
    .typeString("unten!")
    .pauseFor(2500)
    .start();
}
type_writer_1();

function type_writer_2() {
  let tw_element_2 = document.getElementById("cta-mail");
  let typewriter2 = new Typewriter(tw_element_2, {
    loop: true,
  });

  typewriter2
    .typeString("Schreibe mir eine Mail")
    .pauseFor(500)
    .deleteChars(4)
    .typeString("E-Mail")
    .pauseFor(500)
    .deleteAll()
    .typeString("oder...")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Schicke mir eine Eule!")
    .pauseFor(1000)
    .start();
}
type_writer_2();
