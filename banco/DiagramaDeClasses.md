classDiagram
direction TB

class Usuario {
  -int id_Usuario
  -String nome
  -String email
  -String senha
  -String tipoUsuario
  -boolean ativo
}
class Modalidade {
  -int id_Modalidade
  -String nome
  -String descricao
  -int minAtleta
  -int maxAtleta
  -int maxModalidadesAtleta
}
class Partida {
  -int id_Partida
  -Date data
  -Time horario
  -String local
  -String status
}
class PartidaEquipe {
  -String papel
  -int placar
}
class Equipe {
  -int id_Equipe
  -String nome
  -boolean ativa
}
class Turma {
  -int id_Turma
  -String nome
  -int ano
  -String serie
  -String turno
}
class Atleta {
  -int id_Atleta
  -String nome
  -String matricula
  -Date dataNascimento
  -boolean ativo
}
class Inscricao {
  -int id_Inscricao
  -Date dataInscricao
  -String status
}

Usuario "1" --> "0..*" Partida : cadastra
Modalidade "1" --> "0..*" Partida : pertence
Partida "1" *-- "1..*" PartidaEquipe : contem
Equipe "1" --> "0..*" PartidaEquipe : disputa
Modalidade "1" --> "0..*" Equipe : possui
Turma "1" --> "0..*" Equipe : forma
Turma "1" --> "0..*" Atleta : possui
Equipe "1" --> "0..*" Inscricao : recebe
Atleta "1" --> "0..*" Inscricao : realiza