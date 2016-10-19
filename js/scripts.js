$(function() {
  $("#blanks form").submit(function(event) {
    var pluralNounInput = $("input#pluralNoun").val();
    var countryInput = $("input#country").val();
    var noun1Input = $("input#noun1").val();
    var pluralNoun2Input = $("input#pluralNoun2").val();
    var pluralNoun3Input = $("input#pluralNoun3").val();
    var verbInput = $("input#verb").val();
    var noun2Input = $("input#noun2").val();

    $(".pluralNoun").text(pluralNounInput);
    $(".country").text(countryInput);
    $(".noun1").text(noun1Input);
    $(".pluralNoun2").text(pluralNoun2Input);
    $(".pluralNoun3").text(pluralNoun3Input);
    $(".verb").text(verbInput);
    $(".noun2").text(noun2Input);

    $("#story").show();

    event.preventDefault();
  });
});
