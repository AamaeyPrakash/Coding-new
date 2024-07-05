const movieData={
    "movieTitle": "Frozen",
    "releaseYear": 2013,
    "characters": [
      {
        "name": "Elsa",
        "species": "Human",
        "voiceActor": "Idina Menzel",
        "traits": ["Reserved", "Regal", "Powerful"]
      },
      {
        "name": "Anna",
        "species": "Human",
        "voiceActor": "Kristen Bell",
        "traits": ["Optimistic", "Kind-hearted", "Adventurous"]
      },
      {
        "name": "Olaf",
        "species": "Snowman",
        "voiceActor": "Josh Gad",
        "traits": ["Funny", "Innocent", "Loyal"]
      },
      {
        "name": "Kristoff",
        "species": "Human",
        "voiceActor": "Jonathan Groff",
        "traits": ["Brave", "Loyal", "Independent"]
      },
      {
        "name": "Sven",
        "species": "Reindeer",
        "voiceActor": "Jonathan Groff",
        "traits": ["Loyal", "Playful", "Caring"]
      }
    ]  
}


for(var i=0;i<movieData.characters.length;i++)
{
    var characterName = movieData.characters[i].name;
    var charSpecies = movieData.characters[i].species;
    var charActor = movieData.characters[i].voiceActor;
    var charTraits= movieData.characters[i].traits;
    var Moviediv = `<div id="movieContainer">
        <div id=>
            <h3 id="cName"> ${characterName} </h3>
            <h5 id="cSpecies"> (${charSpecies}) </h5>
        </div>
        <h4 id="vActor"> ${charActor} </h4>
        <button onclick="viewTraits()"> <h4 id="cTraits"> Character Traits </h4> </button>
        </div>`;
    document.body.innerHTML+=Moviediv;

    function viewTraits() {
        var paragraph = document.getElementById("cTraits");
        paragraph.innerHTML=charTraits;
        console.log(charTraits);
    }
}


