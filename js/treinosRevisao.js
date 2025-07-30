/*const treinos = {
    perder: {
      segunda: ["Supino reto (3x12)", "Desenvolvimento com halteres (3x12)", "Tríceps pulley (3x12)"],
      terca: ["Puxada frente (3x12)", "Remada baixa (3x12)", "Rosca direta (3x15)"],
      quarta: ["Agachamento (3x15)", "Leg press (3x15)", "Mesa flexora (3x15)", "Cadeira extensora (3x15)", "Panturrilha em pé (3x20)"],
      quinta: ["Elevação lateral (3x15)", "Elevação frontal (3x12)", "Encolhimento (3x20)"],
      sexta: ["Rosca alternada (3x12)", "Tríceps testa (3x12)", "Rosca martelo (3x12)"],
      sabado: ["Cardio leve (40min)", "Descanso"],
      domingo: ["Cardio leve (30min)", "Descanso"],
    },
    manter: {
      segunda: ["Supino reto (4x10)", "Desenvolvimento com barra (4x10)", "Tríceps corda (4x12)"],
      terca: ["Puxada aberta (4x12)", "Remada curvada (4x12)", "Rosca direta (4x12)"],
      quarta: ["Agachamento livre (4x10)", "Leg press (4x12)", "Stiff (4x12)", "Cadeira extensora (4x12)", "Panturrilha sentada (4x20)"],
      quinta: ["Desenvolvimento unilateral (4x10)", "Elevação lateral (4x15)", "Encolhimento (4x20)"],
      sexta: ["Rosca martelo (4x12)", "Tríceps francês (4x12)", "Rosca concentrada (4x10)"],
      sabado: ["Cardio moderado (30min)", "Descanso"],
      domingo: ["Caminhada ou bike (40min)", "Descanso"],
    },
    ganhar: {
      segunda: ["Supino reto (5x10)", "Desenvolvimento militar (5x10)", "Tríceps testa (4x12)"],
      terca: ["Remada curvada (5x10)", "Puxada frente (5x12)", "Rosca direta (4x12)"],
      quarta: ["Agachamento livre (5x10)", "Leg press (5x12)", "Mesa flexora (4x12)", "Cadeira extensora (4x12)", "Panturrilha (5x20)"],
      quinta: ["Desenvolvimento com halteres (4x10)", "Elevação lateral (4x12)", "Encolhimento com barra (4x20)"],
      sexta: ["Rosca alternada (4x10)", "Tríceps corda (4x12)", "Rosca scott (4x12)"],
      sabado: ["Cardio leve (20min)", "Alongamento ativo"],
      domingo: ["Cardio leve ou descanso total"],
    }
  }; 
  */

  const treinosPerder = {
    perder: {
      segunda:{
      peito: [
          "Supino Reto com halteres: 3x12",
          "Crucifixo reto: 3x15 ( Peito )",
        ],
        ombro: [
          "Elevação lateral: 3x15",
          "Desenvolvimento com halteres: 3x12 ( Ombro )"
        ],
        triceps: [
          "Tríceps polia: 3x15",
          "Tríceps coice: 3x15 ( Tríceps )"
        ]
      },
      terca: {
        costas: [
          "Remada baixa: 3x12 ",
          "Puxada frontal: 3x15 ( Costas )"
        ],
        biceps: [
          "Rosca direta: 3x15 ",
          "Rosca martelo: 3x15 ( Biceps )"
        ]
      },
      quarta: {
        pernaCompleto: [
          "Agachamento livre: 3x12",
          "Leg press: 3x15",
          "Cadeira extensora: 3x15",
          "Flexora: 3x15",
          "Panturrilha: 3x20"
        ]
      },
      quinta: {
        ombroIsolado: [
          "Elevação lateral: 3x15",
          "Elevação frontal: 3x15",
          "Crucifixo inverso: 3x15"
        ]
      },
      sexta: {
        biceps: [
          "Rosca direta com barra: 3x15",
          "Rosca concentrada: 3x12 ( Biceps )"
        ],
        triceps: [
          "Tríceps testa: 3x15",
          "Mergulho em banco: 3x15 ( Tríceps )"
        ]
      }
    },
  
    manter: {
      segunda: {
        peito: [
          "Supino Reto: 3x10",
          "Supino Inclinado: 3x10",
          "Crucifixo Inclinado: 3x12"
        ],
        ombro: [
          "Desenvolvimento: 3x10",
          "Elevação Lateral: 3x12"
        ],
        triceps: [
          "Tríceps polia: 3x12",
          "Tríceps francês: 3x10"
        ]
      },
      terca: {
        costas: [
          "Puxada na frente: 3x10",
          "Remada curvada: 3x10"
        ],
        biceps: [
          "Rosca direta: 3x10",
          "Rosca alternada: 3x12"
        ]
      },
      quarta: {
        pernaCompleto: [
          "Agachamento: 3x10",
          "Avanço com halteres: 3x12 cada perna",
          "Leg press: 3x12",
          "Extensora e Flexora: 3x12",
          "Panturrilha: 3x20"
        ]
      },
      quinta: {
        ombroIsolado: [
          "Elevação lateral: 3x12",
          "Elevação frontal: 3x12",
          "Desenvolvimento unilateral: 3x10"
        ]
      },
      sexta: {
        biceps: [
          "Rosca direta: 3x10",
          "Rosca martelo: 3x12"
        ],
        triceps: [
          "Tríceps testa: 3x10",
          "Tríceps banco: 3x12"
        ]
      }
    },
  
    ganhar: {
      segunda: {
        peito: [
          "Supino Reto com barra: 4x8",
          "Supino Inclinado: 4x8",
          "Crossover: 4x10"
        ],
        ombro: [
          "Desenvolvimento com barra: 4x10",
          "Elevação lateral: 4x12"
        ],
        triceps: [
          "Tríceps polia: 4x12",
          "Tríceps corda: 4x12"
        ]
      },
      terca: {
        costas: [
          "Puxada na frente: 4x10",
          "Remada curvada: 4x10",
          "Pulldown: 4x12"
        ],
        biceps: [
          "Rosca direta com barra: 4x10",
          "Rosca concentrada: 4x12"
        ]
      },
      quarta: {
        pernaCompleto: [
          "Agachamento livre: 4x10",
          "Leg press pesado: 4x12",
          "Cadeira extensora: 4x12",
          "Flexora: 4x12",
          "Stiff com halteres: 4x10",
          "Panturrilha: 4x20"
        ]
      },
      quinta: {
        ombroIsolado: [
          "Desenvolvimento Arnold: 4x10",
          "Elevação lateral: 4x12",
          "Crucifixo inverso: 4x12",
          "Remada alta: 4x10"
        ]
      },
      sexta: {
        biceps: [
          "Rosca direta: 4x10",
          "Rosca 21: 3x",
          "Rosca martelo: 4x10"
        ],
        triceps: [
          "Tríceps testa: 4x10",
          "Tríceps banco: 4x12",
          "Tríceps polia com corda: 4x12"
        ]
      }
    }
  };  
export default treinos;