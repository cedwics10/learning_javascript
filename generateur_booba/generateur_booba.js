function getRandomItem (arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)

  // get random item
  const item = arr[randomIndex]

  return item
}

const citations_booba = [
  'Ne fais pas trop de bien ou tu seras cloué sur une croix.',
  "J'préfère avoir un ennemi que la moitié d'un poto.",
  "Si tu cherches l'échec, tu demandes à Kaaris.",
  "C'est pas qu'j'aime pas me mélanger, mais disons simplement qu'les aigles ne volent pas avec les pigeons !",
  "Tu n'peux que gagner quand t'as rien à perdre.",
  'Si les meilleurs partent en premier, pourquoi suis-je toujours en vie ?',
  "La vie c'est dur, ça fait mal dès qu'ça commence, c'est pour ça qu'on pleure tous à la naissance.",
  "Si t'as pas de raison de vivre, trouve une raison de crever.",
  "L'argent n'fait pas l'bonheur, bonheur remplit pas l'assiette.",
  "J'voulais savoir pourquoi l'Afrique vit malement, du CP à la seconde ils m'parlent d'la Joconde et des Allemands.",
  "C'est pas la rue mais l'être humain qui m'attriste, comment leur faire confiance, ils ont tué le Christ.",
  "Y'a que ma mère qui peut me marcher dessus car le paradis est sous ses pieds.",
  "J'ai craché sur ton sol, j'n'y mettrai jamais l'genou.",
  "J't'explique la scène, qui veut ma peau perdra la sienne.",
  "Quand mon heure sonnera, personne ne me sauvera. Prends ce que t'as à prendre car personne te le donnera.",
  "Quand j'ai la clé j'm'en sers pour casser l'carreau.",
  "Je boxe avec les mots, Muhammad Ali m'a couronné.",
  "Chercher Booba à la boutique Ünkut c'est comme chercher Ronald chez McDonald.",
  "J'y ai cru quand j'ai vu, j'ai appris quand j'ai lu.",
  "J'ai demandé ma route au mur, il m'a dit d'aller tout droit.",

  "J'aime l'argent mais je préfère avoir le temps, tu as l'arme, encore faut-il avoir le cran.",
  'Comment ne pas être un pitbull quand la vie est une chienne ?',
  "Des fois j'me dope comme un coureur cycliste. Quand se réveillent mes cicatrices, j'me sens si seul et si triste.",
  'Le savoir est une arme, je suis calibré, je lis pas de bouquin.',
  'Je vais te traiter comme mon oseille, je vais te jeter par la fenêtre.',
  "J'ai fait la guerre pour habiter rue de la paix.",
  "J'ai des pics sur le coeur comme sur une paire de Louboutin.",
  "J'ai toujours le mauvais rôle mais je joue que les meilleurs films.",
  "Ils disent que l'amour rend aveugle mais il t'a redonné la vue.",
  "À l'école de la rue j'ai fait Harvard.",
  "Tout le monde peut s'en sortir, aucune cité n'a de barreaux.",
  "Tellement d'ennemis, si peu d'alliés. Et les seuls qui m'entourent sont pratiquement tous fous à lier.",
  "Jésus dit de tendre la joue mais je n'suis pas pratiquant.",
  "Ma question préférée : qu'est-ce que j'vais faire de tout cet oseille ?",
  'On est venus cracher notre haine moi et ceux derrière, ma première parole sera la dernière.',
  "C'est sur le béton qu'on pousse c'est a Fleury qu'on fane.",
  "Je suis trop en avance pour leur demander l'heure.",
  "J'ai couronne sur la tête pourtant c'est le voisin qui a eu la fève.",
  "J'n'ai plus d'besoins que des envies."
]

function afficher_citation () {
  const result = (document.getElementById('citation').textContent =
    getRandomItem(citations_booba));
  console.log(result);
}
