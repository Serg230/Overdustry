const oxidation = extendContent(StatusEffect, "oxidation", {

    init(){
                this.opposite(StatusEffects.freezing, StatusEffects.lasted)
            }
            }
   healthMultiplier: 0.9,
   reloadMultiplier: 0.8,
   buildSpeedMultiplier: 0.8,
   transitionDamage: 6,
   effect: Fx.none,
   effectChance: 1,

color: Color.valueOf("db5e3b");
})

exports.oxidation = oxidation
