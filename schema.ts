// O comentário "GraphQL" habilita o syntax highlighting.
export const typeDefs = /* GraphQL */ `
# Definição do tipo 'Dinosaur'
  type Dinosaur {
    # Propriedade 'name' do tipo 'String' que representa o nome do dinossauro.
    name: String
    # Propriedade 'description' do tipo 'String' que representa a descrição do dinossauro.
    description: String
  }

  # Definição do tipo 'Query'
  type Query {
    # Operação de consulta para obter uma lista de dinossauros.
    # O retorno é uma lista de objetos do tipo 'Dinosaur'.
    dinosaurs: [Dinosaur]
        # Operação de consulta para obter um dinossauro específico pelo nome.
        # Argumento 'name' é do tipo 'String' e é usado para especificar o nome do dinossauro desejado.
        # O retorno é um objeto do tipo 'Dinosaur'.
        dinosaur(name: String): Dinosaur
  }
`
