const refeicoes = {
    perder: {
      segunda: {
        cafe: ["Vitamina com aveia (200 ml de leite, 2 colheres de sopa de aveia, 1 banana)", "Torradas com abacate (2 fatias de pão integral + ½ abacate pequeno)", "Ovo cozido (2 unidades) com chá (1 xícara, sem açúcar)"],
  
        macroNutrientesCafeSegunda: [
        "Proteínas: ~24 g",
        "Carboidratos: ~56 g", 
        "Gorduras: ~29 g", 
        "Calorias: ~600 kcal"],
  
        almoco: ["Frango grelhado com salada (150g de peito de frango grelhado + salada de folhas verdes, tomate, pepino e cenoura)", "Peixe com legumes (150g de peixe grelhado + legumes cozidos como brócolis, abobrinha e cenoura)", "Omelete com folhas verdes (2 ovos + 1 xícara de folhas verdes como espinafre ou alface)"],
  
        macroNutrientesAlmocoSegunda: [
        "Proteínas: ~79 g",
        "Carboidratos: ~30 g", 
        "Gorduras: ~30 g", 
        "Calorias: ~800 kcal"],
  
        lanche: ["Fruta fresca (ex: 1 maçã média ou 1 banana média)", "Iogurte light (1 copo – 170g) (semi-desnatado ou desnatado, sem açúcar)", "Mix de castanhas  (30g – 1 punhado)(castanha-do-pará, amêndoas, nozes, etc.)"],
  
        macroNutrientesLancheSegunda:[
        "Proteínas: ~11.5 g",
        "Carboidratos: ~34 g", 
        "Gorduras: ~16.3 g", 
        "Calorias: ~330 kcal"],
  
        janta: ["Sopa leve (1 prato de sopa de legumes com pouco óleo, sem macarrão, base de caldo natural)", "Salada com atum (folhas verdes + 1/2 lata de atum em água + tomate, cenoura, azeite leve)", "Wrap integral de frango (1 wrap com pão integral + 100g de frango grelhado + vegetais)"],

        macroNutrientesJantaSegunda:[
            "Proteínas: ~43 g",
            "Carboidratos: ~46 g", 
            "Gorduras: ~18 g", 
            "Calorias: ~560 kcal"],
      },

      terca: {
        cafe: ["Chá verde com biscoito integral (1 xícara de chá verde sem açúcar + 3 unidades de biscoito integral)", "Tapioca com chia (2 colheres de sopa de tapioca + 1 colher de chá de chia)", "Banana com aveia  (1 banana média + 1 colher de sopa de aveia)"],
        
        macroNutrientesCafeTerca: [
          "Proteínas: ~7 g",
          "Carboidratos: ~76 g", 
          "Gorduras: ~9 g", 
          "Calorias: ~420 kcal"],

        almoco: [
          "Quinoa com frango (1 xícara de quinoa cozida + 100 g de peito de frango grelhado)",
          "Salada de grão-de-bico (1/2 xícara de grão-de-bico cozido + legumes variados)",
          "Legumes no vapor com peixe (1 xícara de legumes no vapor + 100 g de filé de peixe grelhado)"
        ]
        ,

        macroNutrientesAlmocoTerca: [
          "Proteínas: ~32 g",
          "Carboidratos: ~45 g", 
          "Gorduras: ~9 g", 
          "Calorias: ~550 kcal"],

        lanche: [
          "Maçã (1 unidade média)",
          "Suco detox (1 copo – couve, limão e gengibre)",
          "Iogurte desnatado (1 pote – 170 g)"
        
        ],

        macroNutrientesLancheTerca: [
          "Proteínas: ~12 g",
          "Carboidratos: ~45 g", 
          "Gorduras: ~3 g", 
          "Calorias: ~250 kcal"],


        janta:[
          "Crepioca com legumes (2 colheres de sopa de tapioca + 1 ovo + legumes variados)",
          "Caldo verde light (1 xícara de caldo verde com couve, batata-doce e frango desfiado)",
          "Omelete com tomate (2 ovos + 1 tomate picado)"
        ],

        macroNutrientesJantaTerca: [
          "Proteínas: ~37 g",
          "Carboidratos: ~56 g", 
          "Gorduras: ~25 g", 
          "Calorias: ~610 kcal"],
      },

      quarta: {
        cafe:[
          "Iogurte com chia (1 potinho de iogurte natural + 1 colher de sopa de chia)",
          "Pão integral com queijo branco (1 fatia de pão integral + 1 fatia de queijo branco)",
          "Smoothie verde (1 porção de espinafre + 1/2 maçã + 1/2 pepino + 1 colher de sopa de linhaça + água ou água de coco)"
          ],

        macroNutrientesCafeQuarta: [
          "Proteínas: ~23 g",
          "Carboidratos: ~53 g", 
          "Gorduras: ~23 g", 
          "Calorias: ~490 kcal"],

        almoco:[
          "Arroz integral, brócolis e frango (Arroz integral: ~1/2 xícara + Brócolis: ~1/2 xícara + Frango: ~100 g)",
          "Salada com ovo cozido (Ovo cozido: ~1 unidade + Alface e vegetais: ~1 xícara)",
          "Panqueca de aveia com frango (Aveia: ~1/4 xícara + Frango: ~100 g)"
        ]
        ,

        macroNutrientesAlmocoQuarta: [
          "Proteínas: ~75 g",
          "Carboidratos: ~85 g", 
          "Gorduras: ~28 g", 
          "Calorias: ~950 kcal"],

        lanche: [
          "Barra de cereal light (~1 unidade)",
          "Suco natural (~1 copo)",
          "Frutas com linhaça (~1 porção de frutas + 1 colher de sopa de linhaça)"
        ],
        
        macroNutrientesLancheQuarta: [
          "Proteínas: ~5 g",
          "Carboidratos: ~55 g", 
          "Gorduras: ~8 g", 
          "Calorias: ~300 kcal"],


        janta: [
          "Sopa de legumes (~1 xícara de sopa)",
          "Wrap leve (~1 unidade de wrap + legumes variados)",
          "Omelete de claras (~4 claras de ovo)"
          ]
        ,

        macroNutrientesJantaQuarta: [
          "Proteínas: ~27 g",
          "Carboidratos: ~51 g", 
          "Gorduras: ~15 g", 
          "Calorias: ~450 kcal"],
      },

      quinta:{
        
          cafe: [
            "Vitamina detox (~1 copo de vitamina com frutas e água de coco)",
            "Frutas com granola (~1 porção de frutas + 2 colheres de sopa de granola)",
            "Chá com torrada integral (~1 xícara de chá + 1 fatia de torrada integral)"
          ],
          
          macroNutrientesCafeQuinta: [
            "Proteínas: ~7 g",
            "Carboidratos: ~40 g", 
            "Gorduras: ~10 g", 
            "Calorias: ~250 kcal"
          ],
        
          almoco: [
            "Carne magra com legumes (~100 g de carne magra + 1/2 xícara de legumes variados)",
            "Salada colorida com atum (~1 xícara de alface, cenoura, tomate + 1/2 lata de atum)",
            "Quinoa com cogumelos (~1/2 xícara de quinoa + 1/2 xícara de cogumelos)"
          ],
        
          macroNutrientesAlmocoQuinta: [
            "Proteínas: ~45 g",
            "Carboidratos: ~50 g", 
            "Gorduras: ~20 g", 
            "Calorias: ~600 kcal"
          ],
        
          lanche: [
            "Iogurte leve (~1 potinho de iogurte natural light)",
            "Salada de frutas (~1 porção de frutas variadas)",
            "Suco com gengibre (~1 copo de suco natural com gengibre)"
          ],
        
          macroNutrientesLancheQuinta: [
            "Proteínas: ~8 g",
            "Carboidratos: ~40 g", 
            "Gorduras: ~3 g", 
            "Calorias: ~200 kcal"
          ],
        
          janta: [
            "Sopa leve (~1 xícara de sopa de legumes)",
            "Salada com peito de frango (~1 xícara de salada com 100 g de peito de frango grelhado)",
            "Tapioca com recheio leve (~1 tapioca com 1 colher de sopa de recheio saudável)"
          ],
        
          macroNutrientesJantaQuinta: [
            "Proteínas: ~30 g",
            "Carboidratos: ~40 g", 
            "Gorduras: ~12 g", 
            "Calorias: ~400 kcal"
          ]
        },
            
        sexta: {
        
          cafe: [
            "Tapioca com cottage (~1 tapioca + 2 colheres de sopa de cottage)",
            "Chá com banana (~1 xícara de chá + 1 banana)",
            "Iogurte com aveia (~1 potinho de iogurte natural + 2 colheres de sopa de aveia)"
          ],
        
          macroNutrientesCafeSexta: [
            "Proteínas: ~15 g",
            "Carboidratos: ~40 g", 
            "Gorduras: ~8 g", 
            "Calorias: ~300 kcal"
          ],
        
          almoco: [
            "Frango grelhado com salada (~100 g de frango + 1 xícara de salada variada)",
            "Omelete com espinafre (~2 ovos + 1/2 xícara de espinafre)",
            "Peixe assado com brócolis (~100 g de peixe + 1/2 xícara de brócolis)"
          ],
        
          macroNutrientesAlmocoSexta: [
            "Proteínas: ~40 g",
            "Carboidratos: ~20 g", 
            "Gorduras: ~15 g", 
            "Calorias: ~450 kcal"
          ],
        
          lanche: [
            "Frutas secas (~1/4 xícara de frutas secas variadas)",
            "Suco verde (~1 copo de suco verde natural)",
            "Iogurte light (~1 potinho de iogurte natural light)"
          ],
        
          macroNutrientesLancheSexta: [
            "Proteínas: ~8 g",
            "Carboidratos: ~30 g", 
            "Gorduras: ~8 g", 
            "Calorias: ~200 kcal"
          ],
        
          janta: [
            "Sopa de legumes (~1 xícara de sopa)",
            "Omelete com tomate (~2 ovos + 1 tomate picado)",
            "Wrap de frango leve (~1 wrap + 100 g de peito de frango + legumes)"
          ],
        
          macroNutrientesJantaSexta: [
            "Proteínas: ~30 g",
            "Carboidratos: ~25 g", 
            "Gorduras: ~12 g", 
            "Calorias: ~350 kcal"
          ]  
      },

      sabado: {
        
          cafe: [
            "Chá com biscoito integral (~1 xícara de chá + 2 biscoitos integrais)",
            "Cuscuz com ovo (~1/2 xícara de cuscuz + 1 ovo)",
            "Smoothie detox (~1 porção de espinafre + 1/2 maçã + 1 colher de sopa de linhaça + 1 copo de água)"
          ],
        
          macroNutrientesCafeSabado: [
            "Proteínas: ~10 g",
            "Carboidratos: ~30 g", 
            "Gorduras: ~8 g", 
            "Calorias: ~250 kcal"
          ],
        
          almoco: [
            "Peito de frango com salada (~100 g de frango + 1 xícara de salada variada)",
            "Legumes grelhados (~1 xícara de legumes variados grelhados)",
            "Carne magra com couve-flor (~100 g de carne magra + 1/2 xícara de couve-flor)"
          ],
        
          macroNutrientesAlmocoSabado: [
            "Proteínas: ~45 g",
            "Carboidratos: ~20 g", 
            "Gorduras: ~15 g", 
            "Calorias: ~450 kcal"
          ],
        
          lanche: [
            "Frutas (~1 porção de frutas variadas)",
            "Barra light (~1 unidade)",
            "Iogurte desnatado (~1 potinho de iogurte desnatado)"
          ],
        
          macroNutrientesLancheSabado: [
            "Proteínas: ~8 g",
            "Carboidratos: ~35 g", 
            "Gorduras: ~4 g", 
            "Calorias: ~200 kcal"
          ],
        
          janta: [
            "Caldo leve (~1 xícara de caldo de legumes)",
            "Salada com atum (~1 xícara de salada + 1/2 lata de atum)",
            "Crepioca com legumes (~2 colheres de sopa de tapioca + 1 ovo + legumes variados)"
          ],
        
          macroNutrientesJantaSabado: [
            "Proteínas: ~30 g",
            "Carboidratos: ~25 g", 
            "Gorduras: ~12 g", 
            "Calorias: ~350 kcal"
          ]
      },

      domingo: {
        
          cafe: [
            "Vitamina verde (~1 copo de vitamina com espinafre, maçã e água de coco)",
            "Ovos mexidos com espinafre (~2 ovos + 1/2 xícara de espinafre)",
            "Torrada integral com chá (~1 fatia de torrada integral + 1 xícara de chá)"
          ],
        
          macroNutrientesCafeDomingo: [
            "Proteínas: ~18 g",
            "Carboidratos: ~30 g", 
            "Gorduras: ~15 g", 
            "Calorias: ~300 kcal"
          ],
        
          almoco: [
            "Assado magro com salada (~100 g de carne magra assada + 1 xícara de salada variada)",
            "Arroz integral com legumes (~1/2 xícara de arroz integral + 1/2 xícara de legumes)",
            "Frango ao forno com brócolis (~100 g de frango ao forno + 1/2 xícara de brócolis)"
          ],
        
          macroNutrientesAlmocoDomingo: [
            "Proteínas: ~45 g",
            "Carboidratos: ~40 g", 
            "Gorduras: ~15 g", 
            "Calorias: ~500 kcal"
          ],
        
          lanche: [
            "Fruta (~1 porção de frutas variadas)",
            "Suco natural (~1 copo de suco natural)",
            "Mix de sementes (~2 colheres de sopa de sementes variadas)"
          ],
        
          macroNutrientesLancheDomingo: [
            "Proteínas: ~5 g",
            "Carboidratos: ~30 g", 
            "Gorduras: ~8 g", 
            "Calorias: ~180 kcal"
          ],
        
          janta: [
            "Sopa de frango leve (~1 xícara de sopa de frango com legumes)",
            "Salada com ovos (~1 xícara de salada com 2 ovos cozidos)",
            "Wrap de legumes (~1 wrap + legumes variados)"
          ],
        
          macroNutrientesJantaDomingo: [
            "Proteínas: ~30 g",
            "Carboidratos: ~25 g", 
            "Gorduras: ~12 g", 
            "Calorias: ~350 kcal"
          ]
      }
    },
    manter:{
      segunda: {
        cafe: [
          "Omelete com queijo branco (2 ovos + 1 fatia de queijo branco)",
          "Torrada integral com ricota (2 fatias de pão integral + 2 colheres de sopa de ricota)",
          "Suco de laranja natural (1 copo)"
        ],
        macroNutrientesCafeSegunda: [
          "Proteínas: ~28 g",
          "Carboidratos: ~40 g",
          "Gorduras: ~22 g",
          "Calorias: ~500 kcal"
        ],
        almoco: [
          "Frango grelhado com arroz integral (150g de frango + 1/2 xícara de arroz integral)",
          "Salada de folhas verdes com azeite (1 xícara de folhas + 1 colher de chá de azeite)",
          "Purê de batata doce (1/2 xícara)"
        ],
        macroNutrientesAlmocoSegunda: [
          "Proteínas: ~55 g",
          "Carboidratos: ~50 g",
          "Gorduras: ~20 g",
          "Calorias: ~650 kcal"
        ],
        lanche: [
          "Iogurte natural com mel (1 copo de iogurte + 1 colher de chá de mel)",
          "Mix de castanhas (30g)",
          "Banana"
        ],
        macroNutrientesLancheSegunda: [
          "Proteínas: ~12 g",
          "Carboidratos: ~30 g",
          "Gorduras: ~14 g",
          "Calorias: ~300 kcal"
        ],
        janta: [
          "Sopa de legumes com frango (1 prato médio)",
          "Tapioca com queijo (2 colheres de sopa de tapioca + 1 fatia de queijo)",
          "Salada leve (folhas verdes + tomate)"
        ],
        macroNutrientesJantaSegunda: [
          "Proteínas: ~35 g",
          "Carboidratos: ~40 g",
          "Gorduras: ~15 g",
          "Calorias: ~450 kcal"
        ]
      },
        terca: {
          cafe: [
            "Pão integral com ovo mexido (1 fatia de pão integral + 2 ovos mexidos)",
            "Iogurte natural com mel e granola (1 pote de iogurte natural + 1 colher de chá de mel + 2 colheres de sopa de granola)",
            "Vitamina de frutas vermelhas (1 copo com morango, banana, leite e chia)"
          ],
      
          macroNutrientesCafeTerca: [
            "Proteínas: ~18 g",
            "Carboidratos: ~50 g",
            "Gorduras: ~12 g",
            "Calorias: ~400 kcal"
          ],
      
          almoco: [
            "Frango grelhado com arroz integral e salada (150g de frango + 1/2 xícara de arroz integral + salada de folhas verdes)",
            "Peixe assado com purê de batata-doce (150g de peixe + 1/2 xícara de purê)",
            "Carne magra com legumes cozidos (120g de carne + 1 xícara de legumes variados)"
          ],
      
          macroNutrientesAlmocoTerca: [
            "Proteínas: ~50 g",
            "Carboidratos: ~55 g",
            "Gorduras: ~18 g",
            "Calorias: ~600 kcal"
          ],
      
          lanche: [
            "Banana com pasta de amendoim (1 banana média + 1 colher de sopa de pasta de amendoim)",
            "Iogurte grego natural (1 potinho)",
            "Torradas integrais com queijo branco (2 torradas + 2 fatias de queijo branco)"
          ],
      
          macroNutrientesLancheTerca: [
            "Proteínas: ~12 g",
            "Carboidratos: ~30 g",
            "Gorduras: ~10 g",
            "Calorias: ~300 kcal"
          ],
      
          janta: [
            "Omelete de frango (2 ovos + 50g de frango desfiado + legumes)",
            "Sopa de legumes com quinoa (1 prato fundo de sopa)",
            "Salada completa (folhas verdes + ovo cozido + atum + azeite leve)"
          ],
      
          macroNutrientesJantaTerca: [
            "Proteínas: ~30 g",
            "Carboidratos: ~40 g",
            "Gorduras: ~15 g",
            "Calorias: ~450 kcal"
          ]
        },
        quarta: {
          cafe: [
            "Tapioca com queijo branco (2 colheres de sopa de goma de tapioca + 2 fatias de queijo branco)",
            "Smoothie de banana e aveia (1 banana + 1 colher de sopa de aveia + 1 copo de leite ou bebida vegetal)",
            "Pão integral com cottage (1 fatia de pão integral + 2 colheres de sopa de cottage)"
          ],
        
          macroNutrientesCafeQuarta: [
            "Proteínas: ~17 g",
            "Carboidratos: ~45 g",
            "Gorduras: ~10 g",
            "Calorias: ~380 kcal"
          ],
        
          almoco: [
            "Peito de frango grelhado com batata-doce (150g de frango + 1 batata-doce média assada)",
            "Salmão grelhado com legumes (150g de salmão + 1 xícara de legumes no vapor)",
            "Carne moída magra com arroz integral e salada (120g de carne moída + 1/2 xícara de arroz integral + folhas verdes)"
          ],
        
          macroNutrientesAlmocoQuarta: [
            "Proteínas: ~50 g",
            "Carboidratos: ~60 g",
            "Gorduras: ~20 g",
            "Calorias: ~650 kcal"
          ],
        
          lanche: [
            "Iogurte natural com castanhas (1 pote de iogurte + 1 colher de sopa de castanhas picadas)",
            "Barra de proteína (opção caseira ou industrializada, preferir baixo açúcar)",
            "Frutas picadas com chia (1 tigela de frutas + 1 colher de sopa de chia)"
          ],
        
          macroNutrientesLancheQuarta: [
            "Proteínas: ~13 g",
            "Carboidratos: ~28 g",
            "Gorduras: ~11 g",
            "Calorias: ~290 kcal"
          ],
        
          janta: [
            "Omelete de legumes (2 ovos + legumes variados como espinafre, tomate e cebola)",
            "Salada com frango desfiado (folhas verdes + 80g de frango + azeite leve)",
            "Wrap integral de atum (1 wrap integral + 1/2 lata de atum + salada)"
          ],
        
          macroNutrientesJantaQuarta: [
            "Proteínas: ~28 g",
            "Carboidratos: ~35 g",
            "Gorduras: ~14 g",
            "Calorias: ~430 kcal"
          ]
        },
        quinta: {
          cafe: [
            "Pão integral com ovo mexido (1 fatia de pão integral + 2 ovos mexidos)",
            "Iogurte grego com granola (1 pote de iogurte grego + 2 colheres de sopa de granola)",
            "Vitamina de frutas (1 banana + 1/2 mamão + 1 copo de leite ou bebida vegetal)"
          ],
        
          macroNutrientesCafeQuinta: [
            "Proteínas: ~18 g",
            "Carboidratos: ~40 g",
            "Gorduras: ~12 g",
            "Calorias: ~390 kcal"
          ],
        
          almoco: [
            "Filé de peixe assado com arroz integral e brócolis (150g de peixe + 1/2 xícara de arroz + 1/2 xícara de brócolis)",
            "Frango ao curry com arroz (150g de frango ao curry + 1/2 xícara de arroz branco)",
            "Tofu grelhado com legumes (150g de tofu + 1 xícara de legumes variados)"
          ],
        
          macroNutrientesAlmocoQuinta: [
            "Proteínas: ~48 g",
            "Carboidratos: ~58 g",
            "Gorduras: ~18 g",
            "Calorias: ~630 kcal"
          ],
        
          lanche: [
            "Mix de frutas secas (1 punhado pequeno)",
            "Pão integral com pasta de amendoim (1 fatia de pão integral + 1 colher de sopa de pasta de amendoim)",
            "Biscoitos de arroz com queijo branco (2 biscoitos de arroz + 2 fatias de queijo branco)"
          ],
        
          macroNutrientesLancheQuinta: [
            "Proteínas: ~12 g",
            "Carboidratos: ~30 g",
            "Gorduras: ~13 g",
            "Calorias: ~300 kcal"
          ],
        
          janta: [
            "Sopa de legumes com frango desfiado (1 prato fundo)",
            "Salada completa com ovo cozido (folhas verdes + 2 ovos cozidos + azeite leve)",
            "Cuscuz nordestino com ovo (1 porção média de cuscuz + 1 ovo cozido)"
          ],
        
          macroNutrientesJantaQuinta: [
            "Proteínas: ~27 g",
            "Carboidratos: ~33 g",
            "Gorduras: ~13 g",
            "Calorias: ~420 kcal"
          ]
        },
        sexta: {
          cafe: [
            "Omelete com queijo e tomate (2 ovos + 1 fatia de queijo + rodelas de tomate)",
            "Tapioca com pasta de amendoim (1 tapioca média + 1 colher de sopa de pasta de amendoim)",
            "Smoothie de frutas vermelhas (1 copo de frutas vermelhas + 1 copo de iogurte natural)"
          ],
        
          macroNutrientesCafeSexta: [
            "Proteínas: ~20 g",
            "Carboidratos: ~35 g",
            "Gorduras: ~14 g",
            "Calorias: ~400 kcal"
          ],
        
          almoco: [
            "Bife grelhado com purê de batata e couve refogada (150g de carne + 1/2 xícara de purê + 1/2 xícara de couve)",
            "Peito de frango grelhado com arroz integral e abobrinha (150g de frango + 1/2 xícara de arroz + 1/2 xícara de abobrinha)",
            "Omelete de forno com legumes (2 ovos + legumes variados)"
          ],
        
          macroNutrientesAlmocoSexta: [
            "Proteínas: ~45 g",
            "Carboidratos: ~55 g",
            "Gorduras: ~20 g",
            "Calorias: ~640 kcal"
          ],
        
          lanche: [
            "Banana com pasta de amendoim (1 banana + 1 colher de sopa de pasta de amendoim)",
            "Iogurte proteico (1 pote pequeno)",
            "Barrinha de proteína (1 unidade)"
          ],
        
          macroNutrientesLancheSexta: [
            "Proteínas: ~15 g",
            "Carboidratos: ~25 g",
            "Gorduras: ~10 g",
            "Calorias: ~280 kcal"
          ],
        
          janta: [
            "Salada de atum (folhas verdes + 1 lata de atum em água + cenoura ralada)",
            "Ovos mexidos com espinafre (2 ovos + 1/2 xícara de espinafre refogado)",
            "Wrap integral de frango (1 wrap integral + 100g de frango desfiado + salada)"
          ],
        
          macroNutrientesJantaSexta: [
            "Proteínas: ~28 g",
            "Carboidratos: ~30 g",
            "Gorduras: ~12 g",
            "Calorias: ~410 kcal"
          ]
        },
        sabado: {
          cafe: [
            "Panqueca integral com mel (2 panquecas médias + 1 colher de sopa de mel)",
            "Smoothie verde com iogurte (1 porção de espinafre + 1/2 maçã + 1 copo de iogurte natural)",
            "Torrada integral com abacate (1 fatia de pão integral + 1/2 abacate)"
          ],
        
          macroNutrientesCafeSabado: [
            "Proteínas: ~18 g",
            "Carboidratos: ~45 g",
            "Gorduras: ~15 g",
            "Calorias: ~370 kcal"
          ],
        
          almoco: [
            "Frango grelhado com arroz integral e brócolis (150g de frango + 1/2 xícara de arroz + 1/2 xícara de brócolis)",
            "Quinoa com legumes e peito de frango (1 xícara de quinoa + 150g de frango grelhado + legumes variados)",
            "Salada com atum e grão-de-bico (folhas verdes + 1/2 lata de atum + 1/2 xícara de grão-de-bico cozido)"
          ],
        
          macroNutrientesAlmocoSabado: [
            "Proteínas: ~45 g",
            "Carboidratos: ~60 g",
            "Gorduras: ~20 g",
            "Calorias: ~650 kcal"
          ],
        
          lanche: [
            "Iogurte natural com granola (1 copo de iogurte + 2 colheres de sopa de granola)",
            "Fruta (1 maçã ou 1 banana)",
            "Nozes (30g)"
          ],
        
          macroNutrientesLancheSabado: [
            "Proteínas: ~12 g",
            "Carboidratos: ~35 g",
            "Gorduras: ~14 g",
            "Calorias: ~320 kcal"
          ],
        
          janta: [
            "Sopa de legumes com frango (1 xícara de sopa de legumes + 100g de frango desfiado)",
            "Salada com tomate e queijo feta (folhas verdes + 1/2 tomate + 30g de queijo feta)",
            "Wrap de peito de frango com vegetais (1 wrap integral + 100g de frango grelhado + vegetais variados)"
          ],
        
          macroNutrientesJantaSabado: [
            "Proteínas: ~35 g",
            "Carboidratos: ~35 g",
            "Gorduras: ~15 g",
            "Calorias: ~450 kcal"
          ]
        },
        domingo: {
          cafe: [
            "Ovos mexidos com espinafre (2 ovos + 1/2 xícara de espinafre)",
            "Smoothie de frutas vermelhas (1/2 xícara de frutas vermelhas + 1/2 banana + 1 copo de leite de amêndoas)",
            "Torrada integral com pasta de amendoim (1 fatia de torrada integral + 1 colher de sopa de pasta de amendoim)"
          ],
        
          macroNutrientesCafeDomingo: [
            "Proteínas: ~18 g",
            "Carboidratos: ~30 g",
            "Gorduras: ~20 g",
            "Calorias: ~350 kcal"
          ],
        
          almoco: [
            "Frango assado com batata-doce (150g de frango assado + 1/2 batata-doce)",
            "Arroz integral com legumes e carne magra (1/2 xícara de arroz integral + 100g de carne magra + legumes variados)",
            "Salada de quinoa com grão-de-bico (1 xícara de quinoa + 1/2 xícara de grão-de-bico + legumes)"
          ],
        
          macroNutrientesAlmocoDomingo: [
            "Proteínas: ~45 g",
            "Carboidratos: ~60 g",
            "Gorduras: ~18 g",
            "Calorias: ~650 kcal"
          ],
        
          lanche: [
            "Iogurte natural com granola (1 copo de iogurte + 2 colheres de sopa de granola)",
            "Fruta (1 maçã ou 1 banana)",
            "Castanhas (30g)"
          ],
        
          macroNutrientesLancheDomingo: [
            "Proteínas: ~10 g",
            "Carboidratos: ~30 g",
            "Gorduras: ~15 g",
            "Calorias: ~300 kcal"
          ],
        
          janta: [
            "Sopa de legumes com frango (1 xícara de sopa de legumes + 100g de frango desfiado)",
            "Salada com pepino, tomate e queijo cottage (folhas verdes + pepino + 30g de queijo cottage)",
            "Wrap integral com legumes (1 wrap integral + legumes variados)"
          ],
        
          macroNutrientesJantaDomingo: [
            "Proteínas: ~30 g",
            "Carboidratos: ~35 g",
            "Gorduras: ~12 g",
            "Calorias: ~400 kcal"
          ]
        },                                              
  },
  
  ganhar: {
    segunda: {
      cafe: [
        "Omelete com queijo cheddar (2 ovos + 2 fatias de queijo cheddar)",
        "Pão integral com pasta de amendoim (2 fatias de pão integral + 2 colheres de sopa de pasta de amendoim)",
        "Vitamina de banana com leite e aveia (1 banana + 1 copo de leite + 2 colheres de sopa de aveia)"
      ],
      macroNutrientesCafeSegunda: [
        "Proteínas: ~28 g",
        "Carboidratos: ~55 g",
        "Gorduras: ~25 g",
        "Calorias: ~600 kcal"
      ],
      almoco: [
        "Filé de peito de frango grelhado com arroz integral e feijão (200g de frango + 1 xícara de arroz integral + 1/2 xícara de feijão)",
        "Bife de carne vermelha com batata-doce (200g de carne magra + 1 batata-doce média assada)",
        "Salmão grelhado com brócolis e quinoa (150g de salmão + 1/2 xícara de brócolis + 1/2 xícara de quinoa)"
      ],
      macroNutrientesAlmocoSegunda: [
        "Proteínas: ~60 g",
        "Carboidratos: ~70 g",
        "Gorduras: ~30 g",
        "Calorias: ~750 kcal"
      ],
      lanche: [
        "Iogurte grego com mel e granola (1 pote de iogurte grego + 1 colher de chá de mel + 2 colheres de sopa de granola)",
        "Banana com pasta de amendoim (1 banana + 1 colher de sopa de pasta de amendoim)",
        "Mix de castanhas (30g)"
      ],
      macroNutrientesLancheSegunda: [
        "Proteínas: ~15 g",
        "Carboidratos: ~40 g",
        "Gorduras: ~20 g",
        "Calorias: ~450 kcal"
      ],
      janta: [
        "Sopa de lentilha com carne (1 prato médio)",
        "Arroz integral com frango desfiado e vegetais (1 xícara de arroz + 150g de frango desfiado + vegetais variados)",
        "Sanduíche integral com peito de peru, queijo e abacate (2 fatias de pão integral + 80g de peito de peru + 1 fatia de queijo + 1/2 abacate)"
      ],
      macroNutrientesJantaSegunda: [
        "Proteínas: ~40 g",
        "Carboidratos: ~60 g",
        "Gorduras: ~25 g",
        "Calorias: ~600 kcal"
      ]
    },
    terca: {
      cafe: [
        "Tapioca com queijo coalho e presunto (2 colheres de sopa de goma de tapioca + 2 fatias de queijo coalho + 2 fatias de presunto)",
        "Ovos mexidos com espinafre (2 ovos + 1/2 xícara de espinafre refogado)",
        "Vitamina de abacate com leite e mel (1/2 abacate + 1 copo de leite + 1 colher de chá de mel)"
      ],
      macroNutrientesCafeTerca: [
        "Proteínas: ~24 g",
        "Carboidratos: ~50 g",
        "Gorduras: ~28 g",
        "Calorias: ~650 kcal"
      ],
      almoco: [
        "Bife de frango ao molho com arroz integral e brócolis (200g de frango + 1/2 xícara de arroz integral + 1/2 xícara de brócolis)",
        "Filé de peixe grelhado com purê de batata (200g de peixe + 1/2 xícara de purê de batata)",
        "Omelete com carne moída e queijo (3 ovos + 120g de carne moída + 2 fatias de queijo)"
      ],
      macroNutrientesAlmocoTerca: [
        "Proteínas: ~55 g",
        "Carboidratos: ~65 g",
        "Gorduras: ~35 g",
        "Calorias: ~800 kcal"
      ],
      lanche: [
        "Shake de proteína com banana (1 scoop de proteína + 1 banana + 1 copo de leite)",
        "Muffin integral com pasta de amendoim (1 muffin + 2 colheres de sopa de pasta de amendoim)",
        "Iogurte grego com granola (1 pote de iogurte + 2 colheres de sopa de granola)"
      ],
      macroNutrientesLancheTerca: [
        "Proteínas: ~25 g",
        "Carboidratos: ~45 g",
        "Gorduras: ~18 g",
        "Calorias: ~550 kcal"
      ],
      janta: [
        "Arroz de frango com legumes (1 xícara de arroz + 150g de frango + legumes variados)",
        "Salada com abacate, frango e feijão (folhas verdes + 150g de frango + 1/2 abacate + 1/2 xícara de feijão)",
        "Wrap integral com carne de boi e vegetais (1 wrap integral + 150g de carne magra + vegetais)"
      ],
      macroNutrientesJantaTerca: [
        "Proteínas: ~40 g",
        "Carboidratos: ~55 g",
        "Gorduras: ~30 g",
        "Calorias: ~700 kcal"
      ]
    },
    quarta: {
      cafe: [
        "Pão integral com ovos mexidos e abacate (2 fatias de pão integral + 2 ovos mexidos + 1/2 abacate)",
        "Smoothie de frutas vermelhas com aveia (1 copo de frutas vermelhas + 2 colheres de sopa de aveia + 1 copo de leite)",
        "Tapioca com queijo e peito de frango (2 colheres de sopa de goma de tapioca + 2 fatias de queijo + 100g de frango desfiado)"
      ],
      macroNutrientesCafeQuarta: [
        "Proteínas: ~30 g",
        "Carboidratos: ~50 g",
        "Gorduras: ~25 g",
        "Calorias: ~700 kcal"
      ],
      almoco: [
        "Filé de peito de frango grelhado com quinoa e legumes (200g de frango + 1 xícara de quinoa + 1/2 xícara de legumes no vapor)",
        "Peixe grelhado com arroz integral e legumes (200g de peixe + 1/2 xícara de arroz integral + 1/2 xícara de legumes)",
        "Bife de carne de boi com batata-doce (200g de carne + 1 batata-doce média)"
      ],
      macroNutrientesAlmocoQuarta: [
        "Proteínas: ~60 g",
        "Carboidratos: ~75 g",
        "Gorduras: ~35 g",
        "Calorias: ~850 kcal"
      ],
      lanche: [
        "Iogurte grego com frutas e granola (1 pote de iogurte + 1/2 xícara de frutas + 2 colheres de sopa de granola)",
        "Barra de proteína (1 unidade)",
        "Frutas secas (1 punhado)"
      ],
      macroNutrientesLancheQuarta: [
        "Proteínas: ~20 g",
        "Carboidratos: ~40 g",
        "Gorduras: ~15 g",
        "Calorias: ~550 kcal"
      ],
      janta: [
        "Arroz integral com carne moída e legumes (1/2 xícara de arroz + 120g de carne moída + legumes variados)",
        "Sopa de feijão com carne e arroz (1 prato fundo de sopa)",
        "Wrap de peito de frango com vegetais e queijo (1 wrap integral + 150g de frango + vegetais + queijo)"
      ],
      macroNutrientesJantaQuarta: [
        "Proteínas: ~40 g",
        "Carboidratos: ~60 g",
        "Gorduras: ~25 g",
        "Calorias: ~750 kcal"
      ]
    },
  
      quinta: {
        cafe: [
          "Crepioca com queijo e presunto (2 colheres de sopa de goma de tapioca + 1 fatia de queijo + 2 fatias de presunto)",
          "Vitamina de morango com leite e aveia (1 xícara de morango + 1 copo de leite + 2 colheres de sopa de aveia)",
          "Ovos mexidos com espinafre e tomate (3 ovos + 1/2 xícara de espinafre + 1 tomate)"
        ],
        macroNutrientesCafeQuinta: [
          "Proteínas: ~28 g",
          "Carboidratos: ~50 g",
          "Gorduras: ~22 g",
          "Calorias: ~600 kcal"
        ],
        almoco: [
          "Peito de frango grelhado com batata-doce e brócolis (200g de frango + 1 batata-doce média + 1/2 xícara de brócolis)",
          "Almôndegas de carne com arroz integral (150g de carne moída + 1 xícara de arroz integral)",
          "Tilápia grelhada com quinoa e legumes (200g de tilápia + 1/2 xícara de quinoa + legumes)"
        ],
        macroNutrientesAlmocoQuinta: [
          "Proteínas: ~55 g",
          "Carboidratos: ~70 g",
          "Gorduras: ~30 g",
          "Calorias: ~750 kcal"
        ],
        lanche: [
          "Iogurte grego com granola e frutas (1 pote de iogurte grego + 2 colheres de sopa de granola + 1/2 xícara de frutas)",
          "Barra de proteína (1 unidade)",
          "Mix de castanhas (30g)"
        ],
        macroNutrientesLancheQuinta: [
          "Proteínas: ~18 g",
          "Carboidratos: ~40 g",
          "Gorduras: ~22 g",
          "Calorias: ~500 kcal"
        ],
        janta: [
          "Frango assado com arroz integral e salada (200g de frango assado + 1/2 xícara de arroz integral + salada)",
          "Taco de carne com queijo e guacamole (1 taco integral + 150g de carne moída + queijo + 1/2 abacate)",
          "Sopa de legumes com carne de boi (1 prato fundo)"
        ],
        macroNutrientesJantaQuinta: [
          "Proteínas: ~45 g",
          "Carboidratos: ~55 g",
          "Gorduras: ~28 g",
          "Calorias: ~650 kcal"
        ]
      },
      sexta: {
        cafe: [
          "Pão integral com manteiga de amendoim e banana (2 fatias de pão integral + 2 colheres de sopa de manteiga de amendoim + 1 banana)",
          "Crepioca com presunto e queijo (2 colheres de sopa de goma de tapioca + 2 fatias de presunto + 2 fatias de queijo)",
          "Ovos cozidos com abacate e tomate (2 ovos cozidos + 1/2 abacate + 1 tomate)"
        ],
        macroNutrientesCafeSexta: [
          "Proteínas: ~25 g",
          "Carboidratos: ~45 g",
          "Gorduras: ~30 g",
          "Calorias: ~600 kcal"
        ],
        almoco: [
          "Filé de peito de frango com arroz integral e legumes (200g de frango + 1/2 xícara de arroz integral + legumes)",
          "Salmão grelhado com purê de batata (200g de salmão + 1/2 xícara de purê de batata)",
          "Almôndega de carne com espaguete integral (200g de carne moída + 1 xícara de espaguete integral)"
        ],
        macroNutrientesAlmocoSexta: [
          "Proteínas: ~55 g",
          "Carboidratos: ~65 g",
          "Gorduras: ~35 g",
          "Calorias: ~750 kcal"
        ],
        lanche: [
          "Shake de proteína com banana e aveia (1 scoop de proteína + 1 banana + 2 colheres de sopa de aveia)",
          "Barra de proteína (1 unidade)",
          "Iogurte grego com mel e granola (1 pote de iogurte grego + 1 colher de chá de mel + 2 colheres de sopa de granola)"
        ],
        macroNutrientesLancheSexta: [
          "Proteínas: ~25 g",
          "Carboidratos: ~45 g",
          "Gorduras: ~18 g",
          "Calorias: ~550 kcal"
        ],
        janta: [
          "Wrap de frango com vegetais e queijo (1 wrap integral + 150g de frango + vegetais + queijo)",
          "Arroz integral com carne de boi e legumes (1/2 xícara de arroz integral + 150g de carne de boi + 1/2 xícara de legumes)",
          "Sopa de lentilha com carne (1 prato fundo)"
        ],
        macroNutrientesJantaSexta: [
          "Proteínas: ~45 g",
          "Carboidratos: ~55 g",
          "Gorduras: ~25 g",
          "Calorias: ~700 kcal"
        ]
      },
      sabado: {
        cafe: [
          "Omelete com queijo e presunto (3 ovos + 2 fatias de presunto + 2 fatias de queijo)",
          "Pão integral com manteiga de amendoim e geleia (2 fatias de pão integral + 2 colheres de sopa de manteiga de amendoim + 1 colher de sopa de geleia)",
          "Smoothie de abacate com leite e aveia (1/2 abacate + 1 copo de leite + 2 colheres de sopa de aveia)"
        ],
        macroNutrientesCafeSabado: [
          "Proteínas: ~30 g",
          "Carboidratos: ~50 g",
          "Gorduras: ~35 g",
          "Calorias: ~700 kcal"
        ],
        almoco: [
          "Filé de peito de frango com batata-doce e brócolis (200g de frango + 1 batata-doce média + 1/2 xícara de brócolis)",
          "Bife de carne com arroz integral e feijão (200g de carne magra + 1/2 xícara de arroz integral + 1/2 xícara de feijão)",
          "Salmão grelhado com quinoa e legumes (200g de salmão + 1/2 xícara de quinoa + legumes variados)"
        ],
        macroNutrientesAlmocoSabado: [
          "Proteínas: ~60 g",
          "Carboidratos: ~70 g",
          "Gorduras: ~40 g",
          "Calorias: ~800 kcal"
        ],
        lanche: [
          "Iogurte grego com granola e morango (1 pote de iogurte grego + 2 colheres de sopa de granola + 1/2 xícara de morango)",
          "Muffin de banana com aveia (1 muffin + 1 banana)",
          "Castanhas de caju (30g)"
        ],
        macroNutrientesLancheSabado: [
          "Proteínas: ~15 g",
          "Carboidratos: ~40 g",
          "Gorduras: ~20 g",
          "Calorias: ~500 kcal"
        ],
        janta: [
          "Arroz integral com carne moída e feijão (1/2 xícara de arroz + 150g de carne moída + 1/2 xícara de feijão)",
          "Wrap de peito de frango com abacate e queijo (1 wrap integral + 150g de frango + 1/2 abacate + 1 fatia de queijo)",
          "Sopa de legumes com carne e arroz (1 prato fundo)"
        ],
        macroNutrientesJantaSabado: [
          "Proteínas: ~40 g",
          "Carboidratos: ~60 g",
          "Gorduras: ~25 g",
          "Calorias: ~700 kcal"
        ]
      },
      domingo: {
        cafe: [
          "Pão integral com queijo e presunto (2 fatias de pão integral + 2 fatias de presunto + 2 fatias de queijo)",
          "Ovos mexidos com abacate (3 ovos + 1/2 abacate)",
          "Smoothie de frutas tropicais com aveia (1/2 xícara de abacaxi + 1/2 xícara de manga + 2 colheres de sopa de aveia + 1 copo de leite)"
        ],
        macroNutrientesCafeDomingo: [
          "Proteínas: ~30 g",
          "Carboidratos: ~50 g",
          "Gorduras: ~28 g",
          "Calorias: ~650 kcal"
        ],
        almoco: [
          "Peito de frango grelhado com arroz integral e legumes (200g de frango + 1/2 xícara de arroz integral + legumes)",
          "Almôndega de carne com espaguete integral (200g de carne moída + 1 xícara de espaguete integral)",
          "Tilápia grelhada com purê de batata (200g de tilápia + 1/2 xícara de purê de batata)"
        ],
        macroNutrientesAlmocoDomingo: [
          "Proteínas: ~55 g",
          "Carboidratos: ~65 g",
          "Gorduras: ~30 g",
          "Calorias: ~750 kcal"
        ],
        lanche: [
          "Shake de proteína com leite e banana (1 scoop de proteína + 1 banana + 1 copo de leite)",
          "Barra de proteína (1 unidade)",
          "Iogurte grego com mel e frutas (1 pote de iogurte grego + 1 colher de chá de mel + 1/2 xícara de frutas)"
        ],
        macroNutrientesLancheDomingo: [
          "Proteínas: ~25 g",
          "Carboidratos: ~40 g",
          "Gorduras: ~20 g",
          "Calorias: ~550 kcal"
        ],
        janta: [
          "Sopa de lentilha com carne de boi (1 prato fundo)",
          "Arroz de frango com legumes (1 xícara de arroz + 150g de frango + legumes variados)",
          "Wrap integral com carne magra e vegetais (1 wrap integral + 150g de carne magra + vegetais)"
        ],
        macroNutrientesJantaDomingo: [
          "Proteínas: ~40 g",
          "Carboidratos: ~55 g",
          "Gorduras: ~25 g",
          "Calorias: ~700 kcal"
        ]
    }    
  }
  
  };
//SEGUNDA 

export default refeicoes;