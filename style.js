function scrollDown() {
  //bruges til at rulle dokumentet nedad:
  window.scrollBy({
    //returnerer højden af browserens vindue.
    top: window.innerHeight,
    //giver en smidig og jævn rulning.
    behavior: "smooth",
  });
}
