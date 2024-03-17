import AnswerModel from "../../../model/answer"
import QuestionModel from "../../../model/question"

const questions: QuestionModel[] = [
  new QuestionModel(1, "Quem é a mais velha no BlackPink?", [
    AnswerModel.incorrect("Jennie"),
    AnswerModel.incorrect("Lisa"),
    AnswerModel.incorrect("Rosé"),
    AnswerModel.correct("Jissoo")
  ]),
  new QuestionModel(2, "Em que ano o Le Sserafim debutou?", [
    AnswerModel.incorrect("2021"),
    AnswerModel.incorrect("2023"),
    AnswerModel.incorrect("2020"),
    AnswerModel.correct("2022")
  ]),
  new QuestionModel(3, "Qual foi a música de debut do BTS?", [
    AnswerModel.incorrect("Dope"),
    AnswerModel.incorrect("N.O."),
    AnswerModel.incorrect("Butter"),
    AnswerModel.correct("No More Dream")
  ]),
  new QuestionModel(4, "Quem canta a música Gangnam Style?", [
    AnswerModel.incorrect("Zico"),
    AnswerModel.incorrect("D.O."),
    AnswerModel.incorrect("JYP"),
    AnswerModel.correct("Psy")
  ]),
  new QuestionModel(5, "Qual é o nome do fandom do AESPA?", [
    AnswerModel.incorrect("ReVeluv"),
    AnswerModel.incorrect("Once"),
    AnswerModel.incorrect("Forever"),
    AnswerModel.correct("MY")
  ]),
  new QuestionModel(6, "Qual é a data de debut do TXT?", [
    AnswerModel.incorrect("30/11/2020"),
    AnswerModel.incorrect("11/02/2019"),
    AnswerModel.incorrect("01/09/2020"),
    AnswerModel.correct("04/03/2019")
  ]),
  new QuestionModel(7, "Quem foi a 1ª integrante do Twice a lançar um álbum solo?", [
    AnswerModel.incorrect("Momo"),
    AnswerModel.incorrect("Mina"),
    AnswerModel.incorrect("Jihio"),
    AnswerModel.correct("Nayeon")
  ]),
  new QuestionModel(8, "Quem é considerado o rapper mais rápido do kpop?", [
    AnswerModel.incorrect("Bobby"),
    AnswerModel.incorrect("G Dragon"),
    AnswerModel.incorrect("Suga/Agust D"),
    AnswerModel.correct("Changbin")
  ]),
  new QuestionModel(9, "Quem canta a música Obsession?", [
    AnswerModel.incorrect("Mamamoo"),
    AnswerModel.incorrect("WayV"),
    AnswerModel.incorrect("NCT 127"),
    AnswerModel.correct("EXO")
  ]),
  new QuestionModel(10, "O SKZOO de pintinho é de qual membro do Stray Kids?", [
    AnswerModel.incorrect("Bang Chan"),
    AnswerModel.incorrect("Lee Know"),
    AnswerModel.incorrect("Han"),
    AnswerModel.correct("Feliz")
  ]),
  new QuestionModel(11, "Qual é o nome verdadeiro do Kai (EXO)?", [
    AnswerModel.incorrect("Kai Kamal Huening"),
    AnswerModel.incorrect("Lee Je No"),
    AnswerModel.incorrect("Hwang Hyun Jin"),
    AnswerModel.correct("Kim Jong In")
  ]),
  new QuestionModel(12, "Quem é Universe é fã do?", [
    AnswerModel.incorrect("NCT"),
    AnswerModel.incorrect("Astro"),
    AnswerModel.incorrect("Everglow"),
    AnswerModel.correct("Pentagon")
  ]),
  new QuestionModel(13, "Qual era a cor do cabelo do RM no MV de Dynamite?", [
    AnswerModel.incorrect("Preto"),
    AnswerModel.incorrect("Castanho"),
    AnswerModel.incorrect("Rosa"),
    AnswerModel.correct("Azul")
  ]),
  new QuestionModel(14, "O grupo SF9 é de qual empresa?", [
    AnswerModel.incorrect("JYP"),
    AnswerModel.incorrect("Fantagio"),
    AnswerModel.incorrect("YG"),
    AnswerModel.correct("FNC")
  ]),
  new QuestionModel(15, "Essa parte: (Cause it's you, you're the one that I want, you, everything that I want) é de qual música?", [
    AnswerModel.incorrect("Daisy (PENTAGON)"),
    AnswerModel.incorrect("The Feels (TWICE)"),
    AnswerModel.incorrect("Dynamite (BTS)"),
    AnswerModel.correct("Blue Hour (TXT)")
  ]),
  new QuestionModel(16, "Quantos integrantes o NCT tem?", [
    AnswerModel.incorrect("18"),
    AnswerModel.incorrect("20"),
    AnswerModel.incorrect("25"),
    AnswerModel.correct("23")
  ]),
  new QuestionModel(17, "Qual integrante do Blackpink fez uma participação especial na apresentação do iKON no KINGDOM?", [
    AnswerModel.incorrect("Rosé"),
    AnswerModel.incorrect("Jennie"),
    AnswerModel.incorrect("Jisoo"),
    AnswerModel.correct("Lisa")
  ]),
  new QuestionModel(18, "Choi Ji Su é o nome de nascimento de qual idol?", [
    AnswerModel.incorrect("Karina (AESPA)"),
    AnswerModel.incorrect("Aisha (EVERGLOW)"),
    AnswerModel.incorrect("Monday (WEEEKLY)"),
    AnswerModel.correct("Lia (ITZY)")
  ]),
  new QuestionModel(19, "Qual idol(h) tem 1,64 de altura?", [
    AnswerModel.incorrect("Changbin (STRAY KIDS)"),
    AnswerModel.incorrect("TaeHyun (TXT)"),
    AnswerModel.incorrect("Jimin (BTS)"),
    AnswerModel.correct("Woozi (SEVENTEEN)")
  ]),
  new QuestionModel(20, "O grupo Oneus é da mesma empresa desse grupo:", [
    AnswerModel.incorrect("Le Sserafim"),
    AnswerModel.incorrect("Red Velvet"),
    AnswerModel.incorrect("Twice"),
    AnswerModel.correct("Mamamoo")
  ]),
  new QuestionModel(21, "Quantos japoneses o grupo Treasure tem?", [
    AnswerModel.incorrect("1"),
    AnswerModel.incorrect("2"),
    AnswerModel.incorrect("3"),
    AnswerModel.correct("4")
  ]),
  new QuestionModel(22, "Qual o nome verdadeiro de J.Seph (KARD)", [
    AnswerModel.incorrect("Kang Chan Hee"),
    AnswerModel.incorrect("Yang Jeong In"),
    AnswerModel.incorrect("Sim Jae Yun"),
    AnswerModel.correct("Kim Taehyung")
  ]),
  new QuestionModel(23, "Em qual ano o Ateez teve seu debut?", [
    AnswerModel.incorrect("2021"),
    AnswerModel.incorrect("2019"),
    AnswerModel.incorrect("2020"),
    AnswerModel.correct("2018")
  ]),
  new QuestionModel(24, "A solista CL fazia parte de qual grupo?", [
    AnswerModel.incorrect("Iz*one"),
    AnswerModel.incorrect("4Minute"),
    AnswerModel.incorrect("Wonder Girls"),
    AnswerModel.correct("2NE1")
  ]),
  new QuestionModel(25, "Qual o nome do programa que formou o Enhypen?", [
    AnswerModel.incorrect("YG Treasure Box"),
    AnswerModel.incorrect("Queendom"),
    AnswerModel.incorrect("Kingdom"),
    AnswerModel.correct("I Land")
  ]),
  new QuestionModel(26, "Qual dessas músicas do TXT é totalmente em inglês?", [
    AnswerModel.incorrect("CatDog"),
    AnswerModel.incorrect("Frost"),
    AnswerModel.incorrect("Puma"),
    AnswerModel.correct("Magic")
  ]),
  new QuestionModel(27, "Quem são os dois australianos no Stray Kids?", [
    AnswerModel.incorrect("Lee Know e Changbin"),
    AnswerModel.incorrect("Bang Chan e I.N"),
    AnswerModel.incorrect("I.N e Felix"),
    AnswerModel.correct("Bang Chan e Felix")
  ]),
  new QuestionModel(28, "Qual integrante do Stray Kids a Nayeon chamou para cantar uma música junto com ela do álbum dela?", [
    AnswerModel.incorrect("Han"),
    AnswerModel.incorrect("Bang Chan"),
    AnswerModel.incorrect("I.N"),
    AnswerModel.correct("Felix")
  ]),
  new QuestionModel(29, "Qual foi o primeiro grupo a ter uma lightstick?", [
    AnswerModel.incorrect("2NE1"),
    AnswerModel.incorrect("BTS"),
    AnswerModel.incorrect("Super Junior"),
    AnswerModel.correct("BigBang")
  ]),
  new QuestionModel(30, "Qual integrante do BTS tem o braço todo coberto por tatuagens?", [
    AnswerModel.incorrect("Jin"),
    AnswerModel.incorrect("RM"),
    AnswerModel.incorrect("Jimin"),
    AnswerModel.correct("Jungkook")
  ]),
  new QuestionModel(31, "Qual foi o primeiro grupo a ter uma J line (Integrantes japoneses)?", [
    AnswerModel.incorrect("EXO"),
    AnswerModel.incorrect("Le Sserafim"),
    AnswerModel.incorrect("Enhypen"),
    AnswerModel.correct("Twice")
  ]),
  new QuestionModel(32, "Qual a nacionalidade da Lisa (BLACKPINK)?", [
    AnswerModel.incorrect("Japonesa"),
    AnswerModel.incorrect("Australiana"),
    AnswerModel.incorrect("Americana"),
    AnswerModel.correct("Tailandesa")
  ]),
  new QuestionModel(33, "'I purple you' é a frase de qual grupo?", [
    AnswerModel.incorrect("TXT"),
    AnswerModel.incorrect("Astro"),
    AnswerModel.incorrect("Enhypen"),
    AnswerModel.correct("BTS")
  ]),
  new QuestionModel(34, "Qual integrante do Mamamoo canta a música Maria?", [
    AnswerModel.incorrect("Moonbyul"),
    AnswerModel.incorrect("Wheein"),
    AnswerModel.incorrect("Solar"),
    AnswerModel.correct("Hwasa")
  ]),
  new QuestionModel(35, "Qual a música de debut de Le Sserafim?", [
    AnswerModel.incorrect("2021"),
    AnswerModel.incorrect("2023"),
    AnswerModel.incorrect("2020"),
    AnswerModel.correct("Fearless")
  ]),
  new QuestionModel(36, "Qual música chegou ao 1 bilhão de views primeiro no youtube?", [
    AnswerModel.incorrect("Boy whit luv (BTS)"),
    AnswerModel.incorrect("Dynamite (BTS)"),
    AnswerModel.incorrect("Kill this love (BLACKPINK)"),
    AnswerModel.correct("Gangnam Style (PSY)")
  ]),
  new QuestionModel(37, "Qual é o nome do líder do GOT7", [
    AnswerModel.incorrect("Jackson"),
    AnswerModel.incorrect("BamBam"),
    AnswerModel.incorrect("Mark"),
    AnswerModel.correct("JB")
  ]),
  new QuestionModel(38, "Qual é o nome do programa de sobrevivência que deu origem ao grupo Twice?", [
    AnswerModel.incorrect("Produce 48"),
    AnswerModel.incorrect("Produce 101"),
    AnswerModel.incorrect("Queendom"),
    AnswerModel.correct("Sixteen")
  ]),
  new QuestionModel(39, "Qual é o nome do líder do grupo BTS?", [
    AnswerModel.incorrect("J-Hope"),
    AnswerModel.incorrect("Jin"),
    AnswerModel.incorrect("Suga/Agust D"),
    AnswerModel.correct("RM")
  ]),
  new QuestionModel(40, "Quem é o líder do grupo de Kpop Red Velvet?", [
    AnswerModel.incorrect("Joy"),
    AnswerModel.incorrect("Yeri"),
    AnswerModel.incorrect("Wendy"),
    AnswerModel.correct("Irene")
  ]),
]

export default questions