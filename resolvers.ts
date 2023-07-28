// Array de dinossauros simulado apenas para fins de exemplo.
const dinosaurs = [
  {
    name: "Aardonyx",
    description: "An early stage in the evolution of sauropods.",
  },
  {
    name: "Abelisaurus",
    description: '"Abel\'s lizard" has been reconstructed from a single skull.',
  },
]

// Objeto de resolvers para as operações de consulta definidas no esquema GraphQL.
export const resolvers = {
  Query: {
    // Resolver para a operação 'dinosaurs'.
    dinosaurs: () => dinosaurs,
    // Resolver para a operação 'dinosaur'.
    dinosaur: (_: any, args: any) => {
      // Procura um dinossauro no array 'dinosaurs' pelo nome fornecido no argumento 'name'.
      return dinosaurs.find((dinosaur) => dinosaur.name === args.name)
    },
  },
}
