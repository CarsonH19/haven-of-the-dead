// ==============================================================
//                         ACTIONS
// ==============================================================

function writeToLogActions(logType, narrate, dataOne) {
  let newEntry = document.createElement("li");
  let narration = Math.floor(Math.random() * 10) + 1;
  let monsterName;

  if (currentRoom.contents.monsters.length > 0) {
    monsterName = currentRoom.contents.monsters[0].name;
  }

  switch (logType) {
    // ===============================
    //     Player Attack Logs
    // ===============================

    case LOG_PLAYER_ATTACK:
      // if (heroChoice === "PALADIN") {
      //   if (narration === 1) {
      //     narration = `You swing your greatsword in a wide arc, the blade gleaming with radiant energy as it cleaves through the ${monsterName}'s defenses.`;
      //   } else if (narration === 2) {
      //     narration = `With a powerful thrust, your greatsword pierces through the ${monsterName}'s armor, leaving a trail of holy light in its wake.`;
      //   } else if (narration === 3) {
      //     narration = `You channel your righteous fury, delivering a punishing overhead strike that sends shockwaves of holy energy rippling through the air.`;
      //   } else if (narration === 4) {
      //     narration = `With a swift and precise motion, you sweep your greatsword in a graceful arc, leaving a trail of radiant energy that burns the ${monsterName}.`;
      //   } else if (narration === 5) {
      //     narration = `You lunge forward, your greatsword leading the way like a beacon of purity, piercing through the ${monsterName}.`;
      //   } else if (narration === 6) {
      //     narration = `You whirl your greatsword in a frenzied dance of light and steel, striking the ${monsterName} with a fervent determination.`;
      //   } else if (narration === 7) {
      //     narration = `You charge forward, greatsword held high, delivering a relentless assault that leaves no room for the ${monsterName} to counter.`;
      //   } else if (narration === 8) {
      //     narration = `Your greatsword pulses with intense light as you unleash a flurry of strikes, each blow carrying the weight of divine justice.`;
      //   } else if (narration === 9) {
      //     narration = `Your blade glows with an ethereal light, and as it strikes, imparting a profound sense of justice upon the ${monsterName}.`;
      //   } else {
      //     narration = `Your strike is infused with the power of the heavens, rending through the ${monsterName}'s defenses with celestial force.`;
      //   }
      // } else if (heroChoice === "ROGUE") {
      //   if (narration === 1) {
      //     narration = `Your dagger seems to meld with the darkness, striking the ${monsterName} with a stealthy grace that belies its deadly intent.`;
      //   } else if (narration === 2) {
      //     narration = `Your dagger moves like a phantom through the shadows, leaving behind a trail of obsidian-hued energy.`;
      //   } else if (narration === 3) {
      //     narration = `Your daggers move in perfect harmony, their edges infused with the essence of shadows, creating a stealthy and deadly pincer movement.`;
      //   } else if (narration === 4) {
      //     narration = `You disappear into the shadows, only to reemerge in a sudden, unexpected strike, catching the ${monsterName} off guard.`;
      //   } else if (narration === 5) {
      //     narration = `Your dagger’s blade seems to whisper through the air, striking the ${monsterName} with uncanny precision as if guided by the shadows themselves.`;
      //   } else if (narration === 6) {
      //     narration = `Your movements are a graceful dance of shadow and steel, leaving behind a sense of foreboding darkness in their wake.`;
      //   } else if (narration === 7) {
      //     narration = `With the speed of nightfall, you dart in to deliver a swift, calculated strike before melting back into the shadows.`;
      //   } else if (narration === 8) {
      //     narration = `Your dagger becomes a conduit for the encroaching twilight, striking with a shadowy force that seems to wrap around the ${monsterName}.`;
      //   } else if (narration === 9) {
      //     narration = `Your dagger appears from the shadows, striking before the ${monsterName} even registers their presence.`;
      //   } else {
      //     narration = `You shroud the ${monsterName} in a veil of shadow, making them believe they've dodged the strike, only to realize too late that they were deceived.`;
      //   }
      // } else if (heroChoice === "PRIESTESS") {
      //   if (narration === 1) {
      //     narration = `You conjure a beam of pure light, directing it towards the ${monsterName} with unwavering faith.`;
      //   } else if (narration === 2) {
      //     narration = `A radiant halo manifests around you, expanding outward to strike the ${monsterName} with a burst of celestial energy.`;
      //   } else if (narration === 3) {
      //     narration = `You call upon the power of the heavens to unleash a radiant explosion, engulfing the ${monsterName} in brilliant light.`;
      //   } else if (narration === 4) {
      //     narration = `A spear of golden light materializes in your hand, hurtling towards the ${monsterName} with divine precision.`;
      //   } else if (narration === 5) {
      //     narration = `You release a burst of concentrated light energy, illuminating the area as it engulfs the ${monsterName}.`;
      //   } else if (narration === 6) {
      //     narration = `A swirling orb of ethereal light forms, pulsating with power before launching towards the ${monsterName} in a blinding flash.`;
      //   } else if (narration === 7) {
      //     narration = `You weave a tapestry of light, shaping it into a focused beam that pierces through the ${monsterName}'s defenses.`;
      //   } else if (narration === 8) {
      //     narration = `You summon a protective shield of radiant energy, using it to bash into the ${monsterName} with a forceful strike.`;
      //   } else if (narration === 9) {
      //     narration = `Beams of light rain down upon the ${monsterName}, creating a cascade of radiant energy that engulfs them in brilliance.`;
      //   } else {
      //     narration = `You channel the essence of a guiding beacon, directing its luminous energy towards the ${monsterName} in a searing strike`;
      //   }
      // }

      newEntry.textContent = `ATTACK: You deal ${dataOne} damage to the ${monsterName}!`;
      break;

    // ===============================
    //      Critical Hit Events
    // ===============================

    case LOG_PLAYER_CRITICAL:
      if (heroChoice === "PALADIN") {
        if (narration === 1) {
          narration = `Your greatsword radiates with an overwhelming brilliance, annihilating the ${monsterName}'s resistance and leaving nothing but the purifying aftermath of radiant light.`;
        } else if (narration === 2) {
          narration = `With a masterful flourish, your greatsword cleaves through the ${monsterName} with unparalleled precision, leaving them bathed in the pure radiance of vanquishing light.`;
        } else if (narration === 3) {
          narration = `Your greatsword becomes an unstoppable force, a torrent of holy energy crashing down upon the ${monsterName}, leaving them shattered and defeated in the divine glow.`;
        } else if (narration === 4) {
          narration = `Your strike reaches its zenith, a culmination of righteousness and power, leaving the ${monsterName} in awe of the unwavering force of radiant judgment they face.`;
        } else if (narration === 5) {
          narration = `Your greatsword's blade seems to transcend reality, creating a rift of celestial energy that engulfs the ${monsterName} in a brilliant explosion of cleansing light.`;
        } else if (narration === 6) {
          narration = `Your greatsword dances through the battlefield, leaving a wake of divine devastation as it strikes true with impeccable precision, illuminating the path to victory.`;
        } else if (narration === 7) {
          narration = `Your greatsword's edge becomes an extension of the heavens themselves, effortlessly rending through the ${monsterName} and leaving them in awe of their impending fate in the radiance of celestial light.`;
        } else if (narration === 8) {
          narration = `With divine fury, your greatsword cleaves through the ${monsterName}, leaving a trail of searing radiance that engulfs them in a cleansing fire of celestial wrath.`;
        } else if (narration === 9) {
          narration = `Your strike is a reckoning, a surge of purifying energy that obliterates all traces of malevolence, leaving the ${monsterName} bathed in the divine glow of redemption.`;
        } else {
          narration = `Your greatsword descends like a falling star, leaving behind a wake of divine devastation that reverberates throughout the catacomb, illuminating the shadows with radiant light.`;
        }

        if (narration === 8) {
          narration = `With divine fury, your greatsword cleaves through the ${monsterName}, leaving a trail of searing radiance that engulfs them in a cleansing fire of celestial wrath.`;
        }
      } else if (heroChoice === "ROGUE") {
        if (narration === 1) {
          narration = `Your dagger plunges into the ${monsterName} with an abyssal force, leaving a wound that devours the surrounding light, sowing darkness with every strike.`;
        } else if (narration === 2) {
          narration = `Daggers dance in a relentless onslaught, a storm of shadow-infused strikes overwhelming the ${monsterName}, the ebon glow intensifying with each lethal blow.`;
        } else if (narration === 3) {
          narration = `Each strike is a relentless assault, a torrent of shadows that tears through the ${monsterName}'s defenses with merciless precision, ensuring its inevitable demise.`;
        } else if (narration === 4) {
          narration = `Your movements weave a tapestry of disorienting shadows, an onslaught of illusions that blinds and confounds the ${monsterName}, leaving it defenseless.`;
        } else if (narration === 5) {
          narration = `You meld into the shadows, reemerging behind the ${monsterName} in an explosive surge, daggers poised to strike with brutal force, a manifestation of lethal stealth.`;
        } else if (narration === 6) {
          narration = `A blur of shadow and finesse, your onslaught leaves a wake of chaos, afterimages of death trailing each strike, the lethal artistry overwhelming the ${monsterName} in shadows.`;
        } else if (narration === 7) {
          narration = `Daggers strike with serpentine precision, exploiting the ${monsterName}'s weaknesses with ruthless cunning, shrouded in the suffocating darkness of twilight.`;
        } else if (narration === 8) {
          narration = `Strikes are accompanied by an ethereal play of midnight shadows, rendering the ${monsterName} unable to discern reality from illusion, a relentless barrage of darkness.`;
        } else if (narration === 9) {
          narration = `Your dagger carries the weight of the midnight hour, each strike plunging into the ${monsterName}'s soul, a darkness that envelopes and consumes, leaving only shadows in its wake.`;
        } else {
          narration = `A relentless storm of strikes ensues, each blow accompanied by disorienting illusions, overwhelming the ${monsterName}'s senses in an unyielding torrent of shadow.`;
        }
      } else if (heroChoice === "PRIESTESS") {
        if (narration === 1) {
          narration = `Your magical flames intensify, emanating from the enchanted candle you wield, engulfing the ${monsterName} with a scorching surge of cleansing fire, searing away all shadows.`;
        } else if (narration === 2) {
          narration = `You channel the full might of infernal power, unleashing a cataclysmic explosion of fiery energy from the sacred candle upon the ${monsterName}.`;
        } else if (narration === 3) {
          narration = `Wings of fire unfurl behind you as you summon a devastating strike from the flame-infused candle, leaving behind a trail of incandescent devastation.`;
        } else if (narration === 4) {
          narration = `You conjure a swirling vortex of concentrated flames, drawing the ${monsterName} into its center before unleashing its scorching power from the mystical candle.`;
        } else if (narration === 5) {
          narration = `Your strike is guided by the first flames of dawn, emanating from the sacred candle, bringing with it a force that incinerates the ${monsterName}'s defenses.`;
        } else if (narration === 6) {
          narration = `Your magic converges with beams of brilliant fire, creating a cataclysmic explosion that consumes the ${monsterName}, fueled by the sacred candle.`;
        } else if (narration === 7) {
          narration = `You conjure the power of the bonfire from your enchanted candle, unleashing a surge of radiant energy that incinerates all darkness in its path.`;
        } else if (narration === 8) {
          narration = `You call upon the ultimate forge of infernal power, sending forth a beam of fire from the sacred candle that scorches the ${monsterName}, leaving them consumed by its brilliance.`;
        } else if (narration === 9) {
          narration = `You raise your arms, conjuring a torrent of fiery energy from the mystical candle that surges towards the ${monsterName}, sweeping them away in a torrent of brilliance.`;
        } else {
          narration = `A wave of pure fire, emanating from the sacred candle you wield, washes over the ${monsterName}, purging them of shadows and leaving behind a realm of untouched inferno.`;
        }
      }

      newEntry.textContent = `ATTACK: You deal ${dataOne} damage to the ${monsterName}!`;
      break;

    // ===============================
    //     Player Miss Event
    // ===============================

    case LOG_PLAYER_MISS:
      newEntry.textContent = `ATTACK: You fail to attack the ${monsterName}!`;
      break;

    // ===============================
    //              Guard
    // ===============================

    case LOG_GUARD:
      if (heroChoice === "PALADIN") {
        if (narration === 1) {
          narration = `With the weight of your greatsword held firm, you stand like an unyielding sentinel, ready to meet the ${monsterName}'s assault head-on.`;
        } else if (narration === 2) {
          narration = `As the ${monsterName} closes in, you steady your stance, drawing upon the boundless power of the divine to fortify your defenses.`;
        } else if (narration === 3) {
          narration = `The greatsword in your grasp becomes an extension of your resolve, an unbreakable bulwark against the impending onslaught.`;
        } else if (narration === 4) {
          narration = `With a deft maneuver, you position your greatsword in a defensive arc, creating an aura of invincibility that daunts even the boldest foe.`;
        } else if (narration === 5) {
          narration = `The edge of your greatsword gleams with an inner light, radiating an aura of protection that wards off the encroaching darkness.`;
        } else if (narration === 6) {
          narration = `With each calculated step, you align your greatsword with precision, establishing an impenetrable barrier that defies the ${monsterName}'s advance.`;
        } else if (narration === 7) {
          narration = `The divine essence within you resonates through your greatsword, creating a palpable forcefield that stands resolute against all threats.`;
        } else if (narration === 8) {
          narration = `With unwavering determination, you brandish your greatsword, the sheer presence of the blade warding off the ${monsterName}'s intent.`;
        } else if (narration === 9) {
          narration = `As the ${monsterName}'s strike nears, you grip your greatsword with unyielding strength, transforming it into an insurmountable fortress of defense.`;
        } else {
          narration = `The aura of your greatsword shimmers with an ethereal light, projecting an unbreakable shield that rebuffs the force of the ${monsterName}'s attack.`;
        }
      } else if (heroChoice === "ROGUE") {
        if (narration === 1) {
          narration = `Your form seems to blur and meld with the shadows, as they deflect the brunt of the attack with a swift, expert maneuver, leaving only a glancing strike.`;
        } else if (narration === 2) {
          narration = `With an uncanny instinct, you use a well-placed dagger to parry and absorb the force of the attack, dissipating its impact.`;
        } else if (narration === 3) {
          narration = `With a flick of your concealed dagger, you redirect the incoming blow into the catacomb wall.`;
        } else if (narration === 4) {
          narration = `As the ${monsterName}'s strike, your dagger moves in a mesmerizing dance, dispersing its potency in a shadowy veil,`;
        } else if (narration === 5) {
          narration = `In a display of nimbleness, you sidestep the oncoming attack, your dagger deflecting the force and redirecting it into the shadows,`;
        } else if (narration === 6) {
          narration = `You seamlessly weave your dagger into the path of the ${monsterName}'s attack, redirecting its energy`;
        } else if (narration === 7) {
          narration = `Your dagger becomes an extension of yourself and you skillfully parry the ${monsterName}'s attack using the blade to disperse its force`;
        } else if (narration === 8) {
          narration = `With a swift, calculated movement, you use your dagger to intercept the strike.`;
        } else if (narration === 9) {
          narration = `You meld into the shadows, making yourself an elusive target.`;
        } else {
          narration = `You absorb the incoming blow with your concealed dagger.`;
        }
      } else if (heroChoice === "PRIESTESS") {
        if (narration === 1) {
          narration = `With a whispered prayer, you raise a protective barrier of divine energy, deflecting the ${monsterName}'s assault with a shimmering glow.`;
        } else if (narration === 2) {
          narration = `You channel the sacred power within, creating a barrier of light that stands as an impenetrable shield against the ${monsterName}'s attack.`;
        } else if (narration === 3) {
          narration = `As the ${name}'s strike approaches, you raise your hand, conjuring a protective ward that absorbs the blow with a gentle shimmer.`;
        } else if (narration === 4) {
          narration = `Your aura seems to expand, creating a protective field that nullifies the ${monsterName}'s assault.`;
        } else if (narration === 5) {
          narration = `With a graceful motion, you summon a radiant shield that seems to repel the ${monsterName}'s strike with a gentle force.`;
        } else if (narration === 6) {
          narration = `Your presence seems to radiate a soothing energy, creating a protective aura that envelopes you.`;
        } else if (narration === 7) {
          narration = `With a serene gesture, you conjure a barrier of light, deflecting the ${monsterName}'s attack with a gentle force.`;
        } else if (narration === 8) {
          narration = `You shimmer with a divine light, repelling the ${monsterName}'s strike with a gentle but unyielding force.`;
        } else if (narration === 9) {
          narration = `With a focused gaze, you channel the sacred energy within, forming a protective barrier that nullifies the ${monsterName}'s assault.`;
        } else {
          narration = `As the ${monsterName}'s strike approaches, you raise your hand, creating a barrier of light that absorbs the blow with a gentle but resolute force.`;
        }
      }
      newEntry.textContent = `GUARD: You guard ${dataOne} damage from the ${monsterName}!`;
      break;

    case LOG_GUARD_FAIL:
      newEntry.textContent = `GUARD: You fail to guard the ${monsterName}'s attack!`;
      break;

    // ===============================
    //            Potion
    // ===============================

    case LOG_POTION:
      if (heroChoice === "PALADIN") {
        if (narration === 1) {
          narration = `"With each drop, I feel the light of restoration coursing through me, renewing my vigor."`;
        } else if (narration === 2) {
          narration = `"This elixir is a beacon of healing, a balm for my battle-worn soul."`;
        } else if (narration === 3) {
          narration = `"In this potion, I find the vitality to press on, a testament to the resilience of the righteous."`;
        } else if (narration === 4) {
          narration = `"As the potion's magic soothes my wounds, I am reminded of the unwavering support of the divine."`;
        } else if (narration === 5) {
          narration = `"With each sip, I am infused with the essence of renewal, ready to face the darkness anew."`;
        } else if (narration === 6) {
          narration = `"This elixir is a gift from the heavens, a wellspring of vitality in my time of need."`;
        } else if (narration === 7) {
          narration = `"In this vial, lies the power to heal and restore, a testament to the boundless grace of the holy."`;
        } else if (narration === 8) {
          narration = `"With gratitude, I partake in this elixir, knowing it is a testament to the benevolence of the divine."`;
        } else if (narration === 9) {
          narration = `"As I drink, I am reminded that even in the midst of battle, there is solace in restoration."`;
        } else {
          narration = `"This potion is a beacon of hope, a reminder that even in the darkest hour, there is light."`;
        }
      } else if (heroChoice === "ROGUE") {
        if (narration === 1) {
          narration = `"With each sip, I feel the surge of vitality, a secret elixir for a rogue's swift return."`;
        } else if (narration === 2) {
          narration = `"This elixir is a whisper of rejuvenation, a balm for a rogue's agile soul."`;
        } else if (narration === 3) {
          narration = `"In this potion, I find the strength to slip away, a testament to the cunning of the unseen."`;
        } else if (narration === 4) {
          narration = `"As the potion's magic soothes my wounds, I am reminded of the resilience of the rogue's artistry."`;
        } else if (narration === 5) {
          narration = `"With each drop, I am infused with the essence of stealth, ready to vanish into the shadows."`;
        } else if (narration === 6) {
          narration = `"This elixir is a secret ally, a wellspring of agility in my time of need."`;
        } else if (narration === 7) {
          narration = `"In this vial, lies the power to evade and escape, a testament to the wily nature of the rogue."`;
        } else if (narration === 8) {
          narration = `"With gratitude, I partake in this elixir, knowing it is a testament to the craftiness of the elusive."`;
        } else if (narration === 9) {
          narration = `"As I drink, I am reminded that even in the midst of danger, there is refuge in the shadows."`;
        } else {
          narration = `"This potion is a tool of the trade, a reminder that in the rogue's path, there is always an escape."`;
        }
      } else if (heroChoice === "PRIESTESS") {
        if (narration === 1) {
          narration = `"With each sip, I feel the warmth of divine grace, a soothing balm for a healer's soul."`;
        } else if (narration === 2) {
          narration = `"This elixir is a vessel of healing, a gift to mend and restore, a testament to the compassion of the faithful."`;
        } else if (narration === 3) {
          narration = `"In this potion, I find the strength to mend wounds, a testament to the power of a priestess's touch."`;
        } else if (narration === 4) {
          narration = `"As the potion's magic soothes my wounds, I am reminded of the boundless grace of the divine."`;
        } else if (narration === 5) {
          narration = `"With each drop, I am infused with the essence of healing, ready to bring solace to the wounded."`;
        } else if (narration === 6) {
          narration = `"This elixir is a conduit of the sacred, a wellspring of restoration in my time of need."`;
        } else if (narration === 7) {
          narration = `"In this flask, lies the power to mend and heal, a testament to the nurturing nature of a priestess."`;
        } else if (narration === 8) {
          narration = `"With gratitude, I partake in this elixir, knowing it is a testament to the selfless service of the faithful."`;
        } else if (narration === 9) {
          narration = `"As I drink, I am reminded that even in the midst of pain, there is solace in the embrace of healing."`;
        } else {
          narration = `"This potion is a symbol of hope, a reminder that in the hands of a priestess, there is always comfort."`;
        }
      }

      newEntry.textContent = `POTION: You drink a potion and restore ${dataOne} health!`;
      break;

    // ===============================
    //             Flee
    // ===============================

    case LOG_FLEE:
      if (heroChoice === "PALADIN" && dataOne === "SUCCESS") {
        if (narration === 1) {
          narration = `"Retreat is a tactical decision, not a sign of weakness. We shall regroup and return with renewed resolve."`;
        } else if (narration === 2) {
          narration = `"Live to fight another day, for the light will guide our path back to victory."`;
        } else if (narration === 3) {
          narration = `"There are battles best fought another time. We shall withdraw, but our purpose remains unwavering."`;
        } else if (narration === 4) {
          narration = `"In the face of overwhelming odds, wisdom dictates a strategic withdrawal. Our mission is not yet finished."`;
        } else if (narration === 5) {
          narration = `"To retreat is not to admit defeat, but to preserve our strength for the battles yet to come."`;
        } else if (narration === 6) {
          narration = `"Even the bravest must know when to step back. We shall return, stronger and more determined."`;
        } else if (narration === 7) {
          narration = `"The path of valor sometimes leads to the wisdom of retreat. We shall regroup and return, stronger than ever."`;
        } else if (narration === 8) {
          narration = `"In stepping back, we make way for a more opportune moment. The light shall guide us to victory in due time."`;
        } else if (narration === 9) {
          narration = `"To flee is to choose survival, and through survival, we shall find the strength to triumph."`;
        } else {
          narration = `"A tactical retreat is the mark of a wise leader. We shall live to fight for the light another day."`;
        }
      } else if (heroChoice === "ROGUE" && dataOne === "SUCCESS") {
        if (narration === 1) {
          narration = `"In shadows, we find refuge. Retreat now, strike later."`;
        } else if (narration === 2) {
          narration = `"Stealth is our greatest ally. We slip away, leaving the enemy in confusion."`;
        } else if (narration === 3) {
          narration = `"The night conceals our movements. We vanish, awaiting the opportune moment to strike again."`;
        } else if (narration === 4) {
          narration = `"The art of the rogue is knowing when to step back. We shall return, shadows sharper than ever."`;
        } else if (narration === 5) {
          narration = `"To disappear is to survive, and through survival, we shall emerge stronger and more deadly."`;
        } else if (narration === 6) {
          narration = `"In the dance of shadows, retreat is but a strategic maneuver. We shall return, unseen and lethal."`;
        } else if (narration === 7) {
          narration = `"The rogue's path is one of adaptability. We shall fade into the night, only to reemerge when the time is right."`;
        } else if (narration === 8) {
          narration = `"In the shadows, we regroup, waiting for the perfect moment to reclaim the advantage."`;
        } else if (narration === 9) {
          narration = `"To flee is to choose life, and through life, we shall find the cunning to triumph."`;
        } else {
          narration = `"Wisdom lies in knowing when to slip away. We shall return, shadows wrapped in deadlier resolve."`;
        }
      } else if (heroChoice === "PRIESTESS" && dataOne === "SUCCESS") {
        if (narration === 1) {
          narration = `"In retreat, we seek to heal and regroup. The light will guide us back to victory."`;
        } else if (narration === 2) {
          narration = `"To step back is to honor the sanctity of life. We shall return, renewed in our purpose."`;
        } else if (narration === 3) {
          narration = `"The path of compassion sometimes requires a tactical retreat. We shall return, stronger in our healing."`;
        } else if (narration === 4) {
          narration = `"In the face of overwhelming darkness, we step back to let the light grow brighter. Our mission is not yet finished."`;
        } else if (narration === 5) {
          narration = `"Even the healers must know when to seek sanctuary. We shall return, hands and hearts ready to mend."`;
        } else if (narration === 6) {
          narration = `"In the light's embrace, we find solace. We retreat, but our resolve remains unshaken."`;
        } else if (narration === 7) {
          narration = `"The priestess knows when to step back and seek divine guidance. We shall return, our healing touch more potent than ever."`;
        } else if (narration === 8) {
          narration = `"In stepping back, we make way for a more opportune moment. The light shall guide us to victory in due time."`;
        } else if (narration === 9) {
          narration = `"To retreat is to choose preservation, and through preservation, we shall find the strength to heal and triumph."`;
        } else {
          narration = `"A tactical retreat is the mark of a wise healer. We shall live to mend and restore another day."`;
        }
      }

      if (dataOne === "FAILURE") {
        newEntry.textContent = `FLEE: You fail to flee from the ${currentRoom.contents.monsters[0].name}.`;
      } else if (dataOne === "SUCCESS") {
        newEntry.textContent = `FLEE: You flee from the ${currentRoom.roomName}!`;
      }
      break;
  }

  if (
    (narrate === "YES" && dataOne === "SUCCESS") ||
    typeof narration !== "number"
  ) {
    writeToNarrative(narration);
  }

  log.insertBefore(newEntry, log.firstChild);
  const newEntryClone = newEntry.cloneNode(true);
  logModalList.insertBefore(newEntryClone, logModalList.firstChild);

  checkLogSize();
}

// ==============================================================
//                         MONSTERS
// ==============================================================

function writeToLogMonster(logType, narrate, dataOne) {
  // dataOne = damage
  let logText;
  let newEntry = document.createElement("li");
  let monsterName = currentRoom.contents.monsters[0].name;
  let narration = Math.round(Math.random() * 9);

  switch (logType) {
    // ===============================
    //      Monster Attack Log
    // ===============================

    case LOG_MONSTER_ATTACK:
      newEntry.textContent = `The ${monsterName} deals ${dataOne} damage to you!`;
      break;

    // ===============================
    //      Monster Miss Log
    // ===============================

    case LOG_MONSTER_MISS:
      newEntry.textContent = `The ${monsterName} fails to attack you!`;
      break;

    // ===============================
    //      Monster Ability Log
    // ===============================

    case LOG_MONSTER_ABILITY:
      if (monsterName === "Crypt Crawler") {
        if (dataOne === "ATTACK") {
          newEntry.textContent = `The ${monsterName}'s attacks you, while you struggle to escape its web.`;
        } else if (dataOne === "BROKE FREE") {
          newEntry.textContent = `You break free from the ${monsterName}'s web.`;
        } else {
          newEntry.textContent = `Sticky webs constrict around you as the ${monsterName}'s web claims you, ensnaring you in its silken trap.`;
        }
      } else if (monsterName === "Broodmother") {
        newEntry.textContent = `An egg hatches from the Broodmother, releasing a ravenous spawn that scuttles forth.`;
      } else if (monsterName === "Bone Titan") {
        newEntry.textContent = `The Bone Titan crumbles, yielding to a heap of bones. Three Decrepit Skeletons emerge, rising ominously from the fractured remains.`;
      } else if (monsterName === "Blazing Skeleton") {
        newEntry.textContent = `The Blazing Skeleton detonates, engulfing you in searing flames.`;
      } else if (monsterName === "Draugr") {
        newEntry.textContent = `The Draugr's icy touch envelops you in an otherworldly frost. Leaving you shivering in the wake of its dark magic.`;
      } else if (monsterName === "Flood of Bones") {
        newEntry.textContent = `As the undead tide cascades, skeletal remnants reanimate in the wake of the bone-laden deluge.`;
      } else if (monsterName === "Baron of Bone") {
        newEntry.textContent = `The Baron of Bone's dark magic withers your body and soul.`;
      } else if (dataOne === "WARBAND BROKEN") {
        newEntry.textContent = `The Undying Warband's formation is broken.`;
      } else if (monsterName === "Undying Warband") {
        newEntry.textContent = `The warband unleash a flurry of thrusts and slashes.`;
      } else if (monsterName === "Ivan the Scoundrel") {
        newEntry.textContent = `Ivan stumbles back, shoving one of his henchmen towards you. With a sly grin, he swiftly consumes a potion, mending his wounds.`;
      } else if (monsterName === "Riven, Shadow of the Baron") {
        newEntry.textContent = `Riven unleashes a violent flurry of shadow and steel, striking with otherworldly precision.`;
      } else if (monsterName === "The Unholy Flame, Liheth") {
        newEntry.textContent = `Liheth's chants resonate through the throne room and a surge of unholy fire envelops her, mending her wounds.`;
      } else if (monsterName === "Death Knight Siggurd") {
        newEntry.textContent = `Siggurd's greatsword bursts into emerald flames, ablaze with malicious ferocity.`;
      } else if (monsterName === `Bonevault Demon`) {
        newEntry.textContent = `The Bonevault Demon, a nightmarish behemoth, rises menacingly. Sinewy muscles coil, and its massive claws gleam ominously as it prepares to unleash a devastating swipe.`;
      }
      break;
  }

  if (narrate === "YES") {
    writeToNarrative(newEntry.textContent);
  }

  logText = newEntry.textContent;
  newEntry.textContent = `ENEMY: ${logText}`;
  log.insertBefore(newEntry, log.firstChild);
  const newEntryClone = newEntry.cloneNode(true);
  logModalList.insertBefore(newEntryClone, logModalList.firstChild);

  checkLogSize();
}

// ==============================================================
//                         HEROES
// ==============================================================

function writeToLogHero(logType, narrate, dataOne, dataTwo) {
  // dataOne =
  // dataTwo =

  let newEntry = document.createElement("li");
  let narration = Math.floor(Math.random() * 10) + 1;

  switch (logType) {
    // ===============================
    //           Level Up
    // ===============================

    case LOG_LEVEL:
      if (heroChoice === "PALADIN") {
        if (narration === 1) {
          narration = `"With each victory, my resolve strengthens. I am forged in the fires of righteousness."`;
        } else if (narration === 2) {
          narration = `"The light within me grows brighter, illuminating the path to greater purpose."`;
        } else if (narration === 3) {
          narration = `"I am a beacon of hope, shining even brighter in the face of darkness."`;
        } else if (narration === 4) {
          narration = `"My faith has been rewarded, and I stand taller, a champion of the divine."`;
        } else if (narration === 5) {
          narration = `"In the eyes of adversity, I find strength. I am a paladin, unwavering and resolute."`;
        } else if (narration === 6) {
          narration = `"With each step, I draw closer to becoming the embodiment of the Divine's will."`;
        } else if (narration === 7) {
          narration = `"The bonds between me and the heavens grow stronger, and with it, my power."`;
        } else if (narration === 8) {
          narration = `"I am the sword of the righteous, tempered by trials, and honed in the fires of duty."`;
        } else if (narration === 9) {
          narration = `"The path of the paladin is not without sacrifice, but it is one of boundless purpose."`;
        } else {
          narration = `"With this newfound power, I shall vanquish even the darkest of foes."`;
        }
      } else if (heroChoice === "ROGUE") {
        if (narration === 1) {
          narration = `"In the shadows, I find strength. With each step, I become one with the night."`;
        } else if (narration === 2) {
          narration = `"Every challenge faced is a step closer to becoming the master of shadows."`;
        } else if (narration === 3) {
          narration = `"Stealth is my ally, and with it, I am an unstoppable force, unseen and lethal."`;
        } else if (narration === 4) {
          narration = `"In the dance of blades and shadows, I emerge as the true maestro."`;
        } else if (narration === 5) {
          narration = `"With each victory, my skills become more honed, my instincts sharper."`;
        } else if (narration === 6) {
          narration = `"I am the whisper in the dark, the unseen hand that shapes the fate of my enemies."`;
        } else if (narration === 7) {
          narration = `"Every mark on my path is a testament to my growth, a tribute to my cunning."`;
        } else if (narration === 8) {
          narration = `"In shadows deep and silent, my power grows, a force to be reckoned with."`;
        } else if (narration === 9) {
          narration = `"The night is my canvas, and with each stroke, I paint a masterpiece of cunning and guile."`;
        } else {
          narration = `"As the shadows envelop me, I emerge stronger, a true rogue, master of my destiny."`;
        }
      } else if (heroChoice === "PRIESTESS") {
        if (narration === 1) {
          narration = `"With every prayer, my connection to the divine deepens, and my purpose strengthens."`;
        } else if (narration === 2) {
          narration = `"I am a vessel of light, and with every step, I walk a path of greater illumination."`;
        } else if (narration === 3) {
          narration = `"The power of faith courses through me, a beacon of hope in a world of shadows."`;
        } else if (narration === 4) {
          narration = `"In the service of the divine, I grow, an instrument of their boundless grace."`;
        } else if (narration === 5) {
          narration = `"With each trial faced, I emerge as a beacon of unwavering faith and boundless compassion."`;
        } else if (narration === 6) {
          narration = `"The light within me expands, touching every corner of the world with its radiance."`;
        } else if (narration === 7) {
          narration = `"I am a guardian of the sacred, and with each level, my resolve is further fortified."`;
        } else if (narration === 8) {
          narration = `"The realms of faith are boundless, and I am but a vessel for their boundless power."`;
        } else if (narration === 9) {
          narration = `"In every act of healing and grace, I draw closer to the true embodiment of divine purpose."`;
        } else {
          narration = `"With this newfound strength, I shall be a force of healing and light, a true priestess of the divine."`;
        }
      }

      if (dataOne === "STRENGTH") {
        if (strengthBoonRank === 4) {
          newEntry.textContent = `BOON: You've chosen the Boon of Strength. Your base Strength has increased to ${baseStrength}. Additionally, your Attack is increased by an amount equal to your Strength.`;
        } else {
          newEntry.textContent = `BOON: You've chosen the Boon of Strength. Your base Strength has increased to ${baseStrength}.`;
        }
      } else if (dataOne === "DEXTERITY") {
        if (dexterityBoonRank === 4) {
          newEntry.textContent = `BOON: You've chosen the Boon of Dexterity. Your base Dexterity has increased to ${baseDexterity}. Additionally, damage received from enemies is reduced by an amount equal to your Dexterity.`;
        } else {
          newEntry.textContent = `BOON: You've chosen the Boon of Dexterity. Your base Dexterity has increased to ${baseDexterity}.`;
        }
      } else if (dataOne === "FAITH") {
        if (faithBoonRank === 4) {
          newEntry.textContent = `BOON: You've chosen the Boon of Faith. Your base Faith has increased to ${baseFaith}. Additionally, the duration of candles is doubled and it takes less time for wisps to guide you.`;
        } else {
          newEntry.textContent = `BOON: You've chosen the Boon of Faith. Your base Faith has increased to ${baseFaith}.`;
        }
      }

      if (dataOne === "SPECIAL") {
        if (heroChoice === "PALADIN") {
          if (specialAbilityBoonRank === 4) {
            newEntry.textContent = `BOON: You've chosen Holy Smite. Your Holy Smite now always deals maximum damage.`;
          } else {
            newEntry.textContent = `BOON: You've chosen Holy Smite. Your Holy Smite now deals ${
              holySmiteTracker * 100
            }% damage.`;
          }
        } else if (heroChoice === "ROGUE") {
          if (specialAbilityBoonRank === 4) {
            newEntry.textContent = `BOON: You've chosen Umbral Assault. Your Umbral Assault now deals extra damage based off your Dexterity.`;
          } else {
            newEntry.textContent = `BOON: You've chosen Umbral Assault. You now make ${umbralAssaultTracker} attacks with Umbral Assault.`;
          }
        } else if (heroChoice === "PRIESTESS") {
          if (specialAbilityBoonRank === 4) {
            newEntry.textContent = `BOON: You've chosen Cleansing Flame. Your Cleansing Flame now also removes one harmful condition affecting you.`;
          } else {
            newEntry.textContent = `BOON: You've chosen Cleansing Flame. Your Cleansing Flame now recovers ${cleansingFlameTracker}HP.`;
          }
        }
      }
      break;

    case LOG_STAT_INCREASE:
      let hero = heroChecker();
      newEntry.textContent = `LEVEL UP: You've reached level ${hero.level}! Your attacks deal and additional 2 damage and your base health increased by 10HP. Additionally, a Guiding Light has come to aid you on your journey.`;
      break;

    // ===============================
    //         Paladin Logs
    // ===============================

    // Paladin Ability
    case LOG_SMITE:
      if (narration === 1) {
        narration = `"In the name of the divine, you shall know the burning light!"`;
      } else if (narration === 2) {
        narration = `"With righteous fury, my smite purges all evil."`;
      } else if (narration === 3) {
        narration = `"May the heavens guide my strike!"`;
      } else if (narration === 4) {
        narration = `A blinding radiance erupts as your smite pierces the darkness.`;
      } else if (narration === 5) {
        narration = `The darkness recoils in the face of your holy onslaught.`;
      } else if (narration === 6) {
        narration = `"Behold the power of the sacred, as it lays waste to the unholy!"`;
      } else if (narration === 7) {
        narration = `"With each swing, the smite of righteousness carves a path of purity."`;
      } else if (narration === 8) {
        narration = `The echoes of angels resonate as your smite strikes true.`;
      } else if (narration === 9) {
        narration = `"The unholy tremble as the light of righteousness descends upon them."`;
      } else {
        narration = `"Through the strength of faith, my smite brings judgment upon the wicked."`;
      }

      newEntry.textContent = `SPECIAL: Your Holy Smite deals ${dataOne} damage to the ${currentRoom.contents.monsters[0].name}!`;
      break;

    case LOG_SMITE_CRITICAL:
      if (narration === 1) {
        narration =
          "In the blazing name of the sun, I smite you, let its fire cleanse your soul!";
      } else if (narration === 2) {
        narration =
          "By the searing light of the sun, I reduce your wickedness to cinders!";
      } else if (narration === 3) {
        narration = "The sun's wrath is an inferno, and you shall be consumed!";
      } else if (narration === 4) {
        narration =
          "May the sun's fire consume your wickedness, leaving only ashes!";
      } else if (narration === 5) {
        narration = "By the sun's radiant might, I sear your malevolence!";
      } else if (narration === 6) {
        narration =
          "Feel the scorching embrace of the sun's fury, wretched foe!";
      } else if (narration === 7) {
        narration =
          "In the sun's brilliant embrace, I strike you down, leaving only embers!";
      } else if (narration === 8) {
        narration =
          "By the fiery embrace of the sun, I brand you with holy fury!";
      } else if (narration === 9) {
        narration =
          "In the name of the sun, I command you to burn in righteous fire!";
      } else {
        narration =
          "From the sun's heart, a torrent of flames to consume your wickedness!";
      }
      newEntry.textContent = `SPECIAL: Your Holy Smite deals ${dataOne} damage to the ${currentRoom.contents.monsters[0].name}!`;
      break;

    // Paladin Passive
    case LOG_RADIANT_AURA:
      newEntry.textContent = `PASSIVE: The ${currentRoom.contents.monsters[0].name} burns in the pressence of your Radiant Aura taking ${radiantAuraTracker} damage.`;
      break;

    // ===============================
    //         Rogue Logs
    // ===============================

    // Rogue Ability
    case LOG_UMBRAL_ASSAULT:
      if (narration === 1) {
        narration = `“Embrace the shadows, for they shall be your silent accomplice.”`;
      } else if (narration === 2) {
        narration = `“From the darkness I strike, a phantom in the night.”`;
      } else if (narration === 3) {
        narration = `“Witness the dance of shadows, and despair.”`;
      } else if (narration === 4) {
        narration = `“In shadows we find our strength, in silence we claim our victory.”`;
      } else if (narration === 5) {
        narration = `“The night is my ally, and together we shall prevail.”`;
      } else if (narration === 6) {
        narration = `“Fade into shadow, emerge in triumph.”`;
      } else if (narration === 7) {
        narration = `“They'll never see it coming… until it's too late.”`;
      } else if (narration === 8) {
        narration = `“Where there is shadow, there is opportunity.”`;
      } else if (narration === 9) {
        narration = `“From the depths of darkness, I arise to strike!”`;
      } else {
        narration = `“In the heart of the night, I am the unseen blade.”`;
      }

      newEntry.textContent = `SPECIAL: You unleash an Umbral Assault on the ${currentRoom.contents.monsters[0].name}, making ${umbralAssaultTracker} against it.`;
      break;

    // Rogue Passive
    case LOG_DARKENED_REPRISAL:
      if (dataOne === "ACTIVE") {
        narration = `Darkened Reprisal envelops you in an ephemeral shroud of shadows, enhancing your Dexterity.`;
      } else if (dataOne === "DISABLE") {
        narration = `The shadows surrounding you fade as Darkened Reprisal ends.`;
      }

      break;

    // ===============================
    //        Priestess Logs
    // ===============================

    // Priestess Ability
    case LOG_CLEANSING_FLAME:
      if (narration === 1) {
        narration =
          "As your voice resonates, a surge of healing fire envelops you.";
      } else if (narration === 2) {
        narration =
          "With devout grace, you channel divine energy, mending your wounds.";
      } else if (narration === 3) {
        narration =
          "The air shimmers with a warm aura, knitting flesh and spirit together.";
      } else if (narration === 4) {
        narration =
          "In a sacred incantation, you bestow renewed vitality upon yourself.";
      } else if (narration === 5) {
        narration =
          "Your Cleansing Flame envelops you, revitalizing your weakened state.";
      } else if (narration === 6) {
        narration =
          "With unwavering faith, you mend your wounds, banishing pain and despair.";
      } else if (narration === 7) {
        narration =
          "A gentle heat emanates from your hands, filling the room with a gentle warmth.";
      } else if (narration === 8) {
        narration =
          "As you pray fervently, your wounds close and your strength is restored.";
      } else if (narration === 9) {
        narration =
          "The echoes of your prayer reverberate through the catacomb, bringing you comfort and warmth.";
      } else {
        narration =
          "Through your sacred incantation, you invoke a torrent of Cleansing Flame.";
      }

      newEntry.textContent = `SPECIAL: Your Cleansing Flame restores ${dataOne} health!`;
      break;

    // Priestess Passive
    case LOG_BURNING_DEVOTION:
      newEntry.textContent = `PASSIVE: Your Burning Devotion guides your attack. You deal ${dataOne} damage to the ${currentRoom.contents.monsters[0].name}!`;
      break;
  }

  if (narrate === "YES") {
    writeToNarrative(narration);
  }

  if (logType === LOG_DARKENED_REPRISAL) {
    logText = narration;
    newEntry.textContent = `PASSIVE: ${logText}`;
  }

  log.insertBefore(newEntry, log.firstChild);
  const newEntryClone = newEntry.cloneNode(true);
  logModalList.insertBefore(newEntryClone, logModalList.firstChild);

  checkLogSize();
}

// ==============================================================
//                         EVENTS
// ==============================================================

function writeToLogEvent(logType, narrate, dataOne, dataTwo) {
  // dataOne =
  // dataTwo =

  let newEntry = document.createElement("li");
  let narration = Math.round(Math.random() * 9);
  let event = currentRoom.contents.events;
  let pauseEventDescription = null;

  switch (logType) {
    // ===============================
    //     SAFE ROOM EVENT LOGS
    // ===============================

    case LOG_SAFE_ROOM:
      newEntry.textContent = `${SAFE_ROOM.description}`;
      narration = newEntry.textContent;
      break;

    // ===============================
    //  TRAP EVENT DESCRIPTIONS LOGS
    // ===============================

    case LOG_TRAP_DESCRIPTION:
      newEntry.textContent = `${event.description}`;
      narration = newEntry.textContent;

      // Question Logic
      if (event.eventType === "TRAP") {
        const question = `How will you overcome this danger?`;
        writeToNarrative(question, "PAUSE");
      }
      break;

    // ===============================
    //     TRAP PASS EVENT LOGS
    // ===============================

    case LOG_TRAP_PASS:
      narration = Math.round(Math.random() * 4);
      if (event === SPIKE_WALLS) {
        if (dataOne === "Strength") {
          if (narration === 1) {
            newEntry.textContent = `With a surge of raw power, you strain against the closing walls, muscles bulging. The spikes inch closer, but you hold them back, forcing the mechanism to yield.`;
          } else if (narration === 2) {
            newEntry.textContent = `Summoning every ounce of strength, you push against the encroaching spikes. They resist, but eventually give way to your determination, halting their advance.`;
          } else if (narration === 3) {
            newEntry.textContent = `The walls press in relentlessly, but you meet the challenge head-on. With a tremendous effort, you force them back, creating a precious gap to escape through.`;
          } else if (narration === 4) {
            newEntry.textContent = `With a powerful heave, you strain against the relentless walls of spikes, pushing them back with all your might. Your muscles burn, but the trap is thwarted, and you emerge victorious.`;
          } else {
            newEntry.textContent =
              "Gritting your teeth, you summon every ounce of strength within you and forcefully push the encroaching spikes back, leaving a narrow escape route in your wake.";
          }
        } else if (dataOne === "Dexterity") {
          if (narration === 1) {
            newEntry.textContent = `With swift reflexes, you sidestep the encroaching spikes, narrowly avoiding their deadly embrace.`;
          } else if (narration === 2) {
            newEntry.textContent = `You move with lightning speed, narrowly evading the advancing spikes as they close in around you.`;
          } else if (narration === 3) {
            newEntry.textContent = `Your nimble feet dance across the floor, narrowly avoiding the deadly spikes as they inch closer.`;
          } else if (narration === 4) {
            newEntry.textContent = `You move with a breathless urgency, narrowly evading the closing spikes with split-second timing.`;
          } else {
            newEntry.textContent = `In a display of acrobatic prowess, you somersault and twist, effortlessly evading the closing spikes.`;
          }
        }
      } else if (event === GAS_CHAMBER) {
        if (dataOne === "Strength") {
          if (narration === 1) {
            newEntry.textContent = `With a powerful surge of energy, you heave against the sealed door, breaking it open. Gas spews out, but you stand tall, unaffected by its toxic fumes.`;
          } else if (narration === 2) {
            newEntry.textContent = `Summoning all your might, you force the door open, releasing the toxic gas. You stand strong, unharmed, as it dissipates into the air.`;
          } else if (narration === 3) {
            newEntry.textContent = `You channel your inner strength and break through the sealed door, releasing the deadly gas. Miraculously, you emerge unscathed, your resolve unbreakable.`;
          } else if (narration === 4) {
            newEntry.textContent = `With a tremendous display of power, you shatter the sealed door, unleashing the deadly gas. Yet, you remain untouched, your strength a shield against its effects.`;
          } else {
            newEntry.textContent = `Gritting your teeth, you unleash a torrent of strength, breaking through the sealed door. The gas billows out, but you stand resolute and untouched.`;
          }
        } else if (dataOne === "Faith") {
          if (narration === 1) {
            newEntry.textContent = `With unwavering belief, you kneel in prayer as the gas chamber fills. Miraculously, a divine light surrounds you, shielding you from harm.`;
          } else if (narration === 2) {
            newEntry.textContent = `You close your eyes and offer a prayer of faith as the gas envelops you. Suddenly, a protective aura forms around you, warding off the toxic effects.`;
          } else if (narration === 3) {
            newEntry.textContent = `With absolute faith in your heart, you stand tall amidst the deadly gas. A divine intervention shields you, leaving you untouched.`;
          } else if (narration === 4) {
            newEntry.textContent = `As the gas fills the chamber, you clasp your hands in prayer. A divine presence surrounds you, keeping you safe from harm.`;
          } else {
            newEntry.textContent = `With unwavering faith, you face the deadly gas. A radiant shield manifests around you, leaving you unharmed and filled with gratitude.`;
          }
        }
      } else if (event === SWARM_OF_VERMIN) {
        if (dataOne === "Strength") {
          if (narration === 1) {
            newEntry.textContent = `Summoning your immense strength, you roar and slam your fists into the ground, creating a shockwave that scatters the rats in all directions. You stand unharmed, triumphant amidst the chaos.`;
          } else if (narration === 2) {
            newEntry.textContent = `With a burst of raw power, you grab a nearby object and swing it in a wide arc, sending rats flying. They scatter, leaving you untouched and victorious.`;
          } else if (narration === 3) {
            newEntry.textContent = `Muscles rippling, you let out a fierce battle cry and charge through the swarm, scattering them in your wake. They retreat, leaving you unscathed.`;
          } else if (narration === 4) {
            newEntry.textContent = `Your strength surges through you as you unleash a powerful shockwave, sending the rats scrambling in all directions. You stand tall, untouched by their hungry onslaught.`;
          } else {
            newEntry.textContent = `With a mighty display of strength, you create a shockwave that scatters the rats, leaving you unharmed and in control of the situation.`;
          }
        } else if (dataOne === "Faith") {
          if (narration === 1) {
            newEntry.textContent = `Calling upon your unshakeable faith, you close your eyes and speak a prayer. A radiant light emanates from you, forming a protective barrier that sends the rats fleeing in terror. You emerge unscathed, your faith unwavering.`;
          } else if (narration === 2) {
            newEntry.textContent = `With unwavering belief, you raise your hands in prayer, and a brilliant light surrounds you, repelling the rats in all directions. You stand untouched, your faith a powerful shield.`;
          } else if (narration === 3) {
            newEntry.textContent = `In the face of danger, you find strength in your faith. As you speak a sacred incantation, a blinding light envelops you, dispersing the rats. You emerge unharmed, your faith victorious.`;
          } else if (narration === 4) {
            newEntry.textContent = `With unwavering trust, you call upon the divine. A radiant aura surrounds you, repelling the rats with holy force. You emerge untouched, your faith unwavering.`;
          } else {
            newEntry.textContent = `With steadfast faith, you call upon higher powers. A radiant barrier of light forms around you, sending the rats scattering. You stand unharmed, your faith a powerful shield.`;
          }
        }
      } else if (event === SKELETAL_HANDS) {
        if (dataOne === "Strength") {
          if (narration === 1) {
            newEntry.textContent = `You feel the skeletal hands clawing at your ankles, but you summon a burst of strength, kicking free from their grasp. With a powerful lunge, you escape their reach unscathed.`;
          } else if (narration === 2) {
            newEntry.textContent = `With a mighty heave, you wrench your legs from the skeletal hands' clutches, leaving them grasping at air. Your powerful limbs propel you to safety, unharmed.`;
          } else if (narration === 3) {
            newEntry.textContent = `The skeletal hands tighten their grip, but you channel your inner might, breaking free with a forceful jerk. You emerge from their clutches, showing no signs of harm.`;
          } else if (narration === 4) {
            newEntry.textContent = `Muscles bulging, you forcefully kick and shove against the skeletal hands, breaking their hold. You stand tall, untouched by their bony fingers.`;
          } else {
            newEntry.textContent = `Summoning every ounce of your formidable strength, you free yourself from the skeletal hands' grasp, leaving them empty-handed and frustrated.`;
          }
        } else if (dataOne === "Dexterity") {
          if (narration === 1) {
            newEntry.textContent = `With lightning-quick reflexes, you twist and turn, slipping free from the skeletal hands' attempts to grab you. You emerge unscathed, leaving them grasping at air.`;
          } else if (narration === 2) {
            newEntry.textContent = `You move with incredible agility, slipping through the skeletal hands' grasp like a wisp of smoke. They close in around empty space, unable to touch you.`;
          } else if (narration === 3) {
            newEntry.textContent = `Nimble as a cat, you contort your body, evading the skeletal hands' reach with finesse. You emerge unharmed, leaving them snapping at nothing.`;
          } else if (narration === 4) {
            newEntry.textContent = `With split-second timing, you duck, weave, and twist, evading the skeletal hands' attempts to grasp you. You emerge untouched, leaving them clawing at the air.`;
          } else {
            newEntry.textContent = `In a display of acrobatic prowess, you somersault and twist, effortlessly evading the skeletal hands' attempts to snatch you. They close in around empty space, frustrated and defeated.`;
          }
        }
      } else if (event === SPIKE_PITFALL) {
        if (dataOne === "Dexterity") {
          if (narration === 1) {
            newEntry.textContent = `With a graceful leap, you clear the pitfall and land safely on the other side, narrowly avoiding the deadly spikes below.`;
          } else if (narration === 2) {
            newEntry.textContent = `You execute a perfect somersault in mid-air, evading the pitfall's deadly embrace. You land on solid ground, unharmed.`;
          } else if (narration === 3) {
            newEntry.textContent = `Your nimble feet find purchase on the edge of the pit, allowing you to effortlessly vault over and avoid the menacing spikes below.`;
          } else if (narration === 4) {
            newEntry.textContent = `With swift reflexes, you execute a flawless jump, easily clearing the pit and leaving the deadly spikes far behind.`;
          } else {
            newEntry.textContent = `In a display of acrobatic prowess, you effortlessly glide over the pit, leaving the lethal spikes below untouched.`;
          }
        } else if (dataOne === "Faith") {
          if (narration === 1) {
            newEntry.textContent = `With unwavering belief, you step out into the abyss, trusting in a higher power. Miraculously, solid ground meets your feet, sparing you from the spikes below.`;
          } else if (narration === 2) {
            newEntry.textContent = `Closing your eyes, you take a leap of faith, certain that you will be protected. Your trust is rewarded as you safely land, untouched by the deadly spikes.`;
          } else if (narration === 3) {
            newEntry.textContent = `In an act of pure faith, you step into the unknown, confident that you will be guided to safety. Your trust is not misplaced, as you land unharmed on solid ground.`;
          } else if (narration === 4) {
            newEntry.textContent = `With absolute conviction, you take a step forward into the pit, believing in divine intervention. Your faith is rewarded as you miraculously land safely, avoiding the spikes below.`;
          } else {
            newEntry.textContent = `With unwavering trust, you step out into the void, knowing that you are protected. As if by miracle, you land unharmed, the deadly spikes below nothing but a distant threat.`;
          }
        }
      } else if (event === PENDULUM_BLADES) {
        if (dataOne === "Dexterity") {
          if (narration === 1) {
            newEntry.textContent = `With lightning-fast reflexes, you effortlessly navigate through the pendulum blades, narrowly avoiding their deadly arc.`;
          } else if (narration === 2) {
            newEntry.textContent = `You move with uncanny agility, slipping between the descending pendulum blades with grace and precision.`;
          } else if (narration === 3) {
            newEntry.textContent = `Your nimble steps carry you through the deadly dance of the pendulum blades, each movement perfectly timed.`;
          } else if (narration === 4) {
            newEntry.textContent = `With a swift and calculated rhythm, you navigate through the pendulum blades unscathed, leaving them swinging harmlessly in your wake.`;
          } else {
            newEntry.textContent = `In a display of acrobatic prowess, you deftly weave through the swinging pendulum blades, emerging unharmed on the other side.`;
          }
        } else if (dataOne === "Faith") {
          if (narration === 1) {
            newEntry.textContent = `With unwavering faith, you close your eyes and step forward, trusting in a higher power to guide you safely through the pendulum blades.`;
          } else if (narration === 2) {
            newEntry.textContent = `You offer a silent prayer, feeling a divine presence guiding your every step as you pass through the swinging pendulum blades untouched.`;
          } else if (narration === 3) {
            newEntry.textContent = `In a moment of serene clarity, you surrender yourself to the faith that protects you, allowing you to pass through the pendulum blades unharmed.`;
          } else if (narration === 4) {
            newEntry.textContent = `With an unyielding belief in the higher power, you confidently walk through the swinging pendulum blades, knowing you are shielded from harm.`;
          } else {
            newEntry.textContent = `Guided by an unshakeable faith, you step forward with purpose, passing through the swinging pendulum blades unscathed.`;
          }
        }
      } else if (event === SPIDER_WEB) {
        if (dataOne === "Strength") {
          if (narration === 1) {
            newEntry.textContent = `Summoning an incredible surge of raw power, you tear through the sticky webbing with sheer brute force. The strands snap and break, setting you free.`;
          } else if (narration === 2) {
            newEntry.textContent = `With a mighty heave, you wrench yourself free from the spider's web, your muscles pulsing with exertion. The strands snap and unravel, releasing you from their grip.`;
          } else if (narration === 3) {
            newEntry.textContent = `Channeling all your strength, you rip through the webbing with a primal roar. The sticky threads give way to your power, and you emerge unscathed.`;
          } else if (narration === 4) {
            newEntry.textContent = `Your muscles bulge with effort as you exert every ounce of strength to break free from the spider's web. With a final, powerful push, the strands give way, setting you free.`;
          } else {
            newEntry.textContent = `Gritting your teeth, you summon a tremendous display of strength, tearing through the webbing like it's paper. The spider's trap is no match for your might.`;
          }
        } else if (dataOne === "Faith") {
          if (narration === 1) {
            newEntry.textContent = `With unwavering faith, you call upon divine power to guide you. A brilliant light surrounds you, dissolving the webbing and setting you free.`;
          } else if (narration === 2) {
            newEntry.textContent = `In the face of danger, you close your eyes and trust in your faith. Suddenly, a divine force surrounds you, shattering the spider's web and releasing you unharmed.`;
          } else if (narration === 3) {
            newEntry.textContent = `You reach deep within your faith, feeling the presence of a higher power. With a heartfelt prayer, the webbing dissolves, setting you free.`;
          } else if (narration === 4) {
            newEntry.textContent = `With a surge of faith, you call upon the divine to protect you. A warm light envelops you, and the spider's web crumbles, setting you free.`;
          } else {
            newEntry.textContent = `With unyielding faith in your heart, you call upon higher powers. In response, a powerful force surrounds you, breaking the spider's web and setting you free.`;
          }
        }
      } else if (event === IVANS_AMBUSH) {
        if (dataOne === "Dexterity") {
          newEntry.textContent = `Instinctively, your keen senses detect a subtle shift in the air. With a quick, agile maneuver, you sidestep the rain of arrows. Ivan's frustrated growl echoes through the shadows as approaches you. "Impressive, but it won't save you," he sneers.`;
        } else if (dataOne === "Faith") {
          newEntry.textContent = `With unwavering belief, you close your eyes and invoke your conviction. Miraculously, each arrow whizzes by without impacting your flesh. Ivan's furious roar reverberates through the air as your faith spares you from his devious trap.`;
        }
      }

      narration = newEntry.textContent;
      break;

    // ===============================
    //        TRAP FAIL EVENTS
    // ===============================

    case LOG_TRAP_FAIL:
      narration = Math.floor(Math.random() * 6);
      if (event === SPIKE_WALLS) {
        if (dataOne === "Strength") {
          if (narration === 1) {
            newEntry.textContent = `Despite your best efforts, the spike walls continue to close in, and you are unable to summon the strength needed to push them back. The trap inflicts its painful toll upon you. You take ${dataTwo} damage.`;
          } else if (narration === 2) {
            newEntry.textContent = `The walls of spikes continue their inexorable advance, and despite your determination, you are unable to halt their progress. The trap inflicts a painful, pinching injury. You take ${dataTwo} damage.`;
          } else if (narration === 3) {
            newEntry.textContent = `The spikes close in, finding their mark, piercing through your defenses. Pain flares through your body." You take ${dataTwo} damage.`;
          } else if (narration === 4) {
            newEntry.textContent = `Despite your efforts, the spikes find their mark, leaving you wounded and breathless." You take ${dataTwo} damage.`;
          } else {
            newEntry.textContent = `The relentless spikes break through, leaving you with deep, painful wounds." You take ${dataTwo} damage`;
          }
        } else if (dataOne === "Dexterity") {
          if (narration === 1) {
            newEntry.textContent = `Despite your agile attempts, the spikes find their mark, leaving you wounded and breathless.” You take ${dataTwo} damage.`;
          } else if (narration === 2) {
            newEntry.textContent = `You navigate the narrowing space with impressive agility, but the spikes outmatch even your lightning-fast reflexes. They strike, leaving you wounded. You take ${dataTwo} damage.`;
          } else if (narration === 3) {
            newEntry.textContent = `You come agonizingly close to evading the spikes, but they catch you at the last moment, leaving you with a series of painful scratches. You take ${dataTwo} damage.`;
          } else if (narration === 4) {
            newEntry.textContent = `You execute a series of deft maneuvers, but the spikes catch you on the edge of your escape. They graze you, leaving shallow wounds in their wake. You take ${dataTwo} damage.`;
          } else {
            newEntry.textContent = `Your movements are precise and calculated, but the spikes prove too swift. They strike, leaving you with painful wounds. You take ${dataTwo} damage`;
          }
        }
      } else if (event === SPIDER_WEB) {
        if (dataOne === "Strength") {
          if (narration === 1) {
            newEntry.textContent = `You strain against the sticky silk, managing to free yourself from the web, but not without alerting its creators..`;
          } else if (narration === 2) {
            newEntry.textContent = `With a mighty effort, you tear yourself free from the web, but not without alerting its creators.`;
          } else if (narration === 3) {
            newEntry.textContent = `You summon your strength, breaking free from the web, but not without alerting its creators.`;
          } else if (narration === 4) {
            newEntry.textContent = `After a fierce struggle, you manage to break free from the web, but not without alerting its creators.`;
          } else {
            newEntry.textContent = `With a final surge of strength, you tear yourself free from the web, but not without alerting its creators.`;
          }
        } else if (dataOne === "Faith") {
          if (narration === 1) {
            newEntry.textContent = `You call upon your faith, finding the inner strength to break free from the web, but not without alerting its creators.`;
          } else if (narration === 2) {
            newEntry.textContent = `With a prayer on your lips, you manage to tear yourself free from the web, but not without alerting its creators.`;
          } else if (narration === 3) {
            newEntry.textContent = `You draw upon your faith, summoning the resolve to break free from the web, but not without alerting its creators.`;
          } else if (narration === 4) {
            newEntry.textContent = `Guided by your faith, you break free from the web, but not without alerting its creators.`;
          } else {
            newEntry.textContent = `In your moment of need, your faith empowers you to tear yourself free from the web, but not without alerting its creators.`;
          }
        }
      } else if (event === SWARM_OF_VERMIN) {
        if (dataOne === "Strength") {
          if (narration === 1) {
            newEntry.textContent = `You summon all your strength to fight off the relentless tide of rats, but they overwhelm you, leaving you battered and bitten. You take ${dataTwo} damage.`;
          } else if (narration === 2) {
            newEntry.textContent = `You put up a valiant effort, using your strength to fend off the onslaught of rats. However, their sheer numbers prove too much. They manage to sink their teeth into you, causing ${dataTwo} damage.`;
          } else if (narration === 3) {
            newEntry.textContent = `You push back against the sea of rats with all your might, but they manage to break through your defenses. Their sharp bites inflict ${dataTwo} damage.`;
          } else if (narration === 4) {
            newEntry.textContent = `You try to use your strength to create some breathing room, but the rats are unrelenting. They swarm over you, leaving you with painful bites. You take ${dataTwo} damage.`;
          } else {
            newEntry.textContent = `Despite your best efforts, the rats swarm over you, sinking their teeth in. You take ${dataTwo} damage.`;
          }
        } else if (dataOne === "Faith") {
          if (narration === 1) {
            newEntry.textContent = `You call upon your faith for protection, but the rats manage to find their way through. They bite and scratch, causing ${dataTwo} damage.`;
          } else if (narration === 2) {
            newEntry.textContent = `With unwavering faith, you try to repel the rats, but they prove too numerous. They manage to get to you, causing ${dataTwo} damage.`;
          } else if (narration === 3) {
            newEntry.textContent = `You pray for divine intervention, but the rats persist. They bite and scratch, inflicting ${dataTwo} damage.`;
          } else if (narration === 4) {
            newEntry.textContent = `You trust in your faith to protect you, but the rats find their way through. Their bites and scratches leave you with ${dataTwo} damage.`;
          } else {
            newEntry.textContent = `Despite your faith, the rats manage to get to you. Their bites and scratches result in ${dataTwo} damage.`;
          }
        }
      } else if (event === SKELETAL_HANDS) {
        if (dataOne === "Strength") {
          if (narration === 1) {
            newEntry.textContent = `You summon all your strength and manage to break free from the skeletal hands' grasp, but not before they tighten their grip. You take ${dataTwo} damage.`;
          } else if (narration === 2) {
            newEntry.textContent = `With a powerful surge of strength, you force the skeletal hands away, but not without suffering some damage. You take ${dataTwo} damage.`;
          } else if (narration === 3) {
            newEntry.textContent = `You strain against the skeletal hands, eventually breaking free, but not without paying the price. You take ${dataTwo} damage.`;
          } else if (narration === 4) {
            newEntry.textContent = `Your muscles bulge as you wrench yourself free from the skeletal hands' grasp, but not without a cost. You take ${dataTwo} damage.`;
          } else {
            newEntry.textContent = `With a mighty effort, you free yourself from the skeletal hands, though not without suffering some damage. You take ${dataTwo} damage.`;
          }
        } else if (dataOne === "Dexterity") {
          if (narration === 1) {
            newEntry.textContent = `You twist and contort your body with remarkable dexterity, slipping free from the skeletal hands' grasp. However, they manage to graze you. You take ${dataTwo} damage.`;
          } else if (narration === 2) {
            newEntry.textContent = `With astonishing agility, you wriggle out of the skeletal hands' clutches, though not without sustaining some damage. You take ${dataTwo} damage.`;
          } else if (narration === 3) {
            newEntry.textContent = `You move with incredible precision, evading the skeletal hands' grasp. They scrape against you, causing damage. You take ${dataTwo} damage.`;
          } else if (narration === 4) {
            newEntry.textContent = `Your swift movements allow you to slip free from the skeletal hands' clutches, but not without a slight cost. You take ${dataTwo} damage.`;
          } else {
            newEntry.textContent = `With a display of remarkable dexterity, you manage to free yourself from the skeletal hands, though not without suffering some damage. You take ${dataTwo} damage.`;
          }
        }
      } else if (event === SPIKE_PITFALL) {
        if (dataOne === "Dexterity") {
          if (narration === 1) {
            newEntry.textContent = `You react swiftly, attempting to evade the spikes below. However, they still manage to graze you, leaving you with painful wounds. You take ${dataTwo} damage.`;
          } else if (narration === 2) {
            newEntry.textContent = `You muster your agility and make a desperate attempt to avoid the spikes. Despite your efforts, you still suffer wounds. You take ${dataTwo} damage.`;
          } else if (narration === 3) {
            newEntry.textContent = `You execute a series of nimble movements, narrowly escaping the worst of the spikes' wrath. Unfortunately, they still find their mark. You take ${dataTwo} damage.`;
          } else if (narration === 4) {
            newEntry.textContent = `With impressive dexterity, you manage to evade some of the spikes. However, a few still catch you, leaving you wounded. You take ${dataTwo} damage.`;
          } else {
            newEntry.textContent = `Your agile instincts kick in, allowing you to avoid the worst of the spikes. Nonetheless, you're not entirely unscathed. You take ${dataTwo} damage.`;
          }
        } else if (dataOne === "Faith") {
          if (narration === 1) {
            newEntry.textContent = `You call upon your faith, trusting in a higher power to guide you to safety. While you manage to avoid the worst of the spikes, some still find their mark. You take ${dataTwo} damage.`;
          } else if (narration === 2) {
            newEntry.textContent = `With unwavering faith, you believe you can escape unscathed. However, the spikes still leave their mark. You take ${dataTwo} damage.`;
          } else if (narration === 3) {
            newEntry.textContent = `You place your trust in your faith and make a leap of faith, hoping for the best. While you avoid the worst of the spikes, you're not entirely unharmed. You take ${dataTwo} damage.`;
          } else if (narration === 4) {
            newEntry.textContent = `With a prayer on your lips, you take a leap of faith, believing in a miraculous escape. Some spikes still graze you, leaving you wounded. You take ${dataTwo} damage.`;
          } else {
            newEntry.textContent = `Your unshakable faith carries you through, allowing you to avoid the worst of the spikes. However, you're not entirely unscathed. You take ${dataTwo} damage.`;
          }
        }
      } else if (event === PENDULUM_BLADES) {
        if (dataOne === "Dexterity") {
          if (narration === 1) {
            newEntry.textContent = `You gracefully maneuver through the swinging blades, but one catches you off guard, leaving you with a deep gash. You take ${dataTwo} damage.`;
          } else if (narration === 2) {
            newEntry.textContent = `Your agile movements serve you well, but a misstep leaves you vulnerable to a glancing blow. You take ${dataTwo} damage.`;
          } else if (narration === 3) {
            newEntry.textContent = `You expertly time your movements, but a sudden change in the blades' pattern catches you off balance. You take ${dataTwo} damage.`;
          } else if (narration === 4) {
            newEntry.textContent = `Your dexterity allows you to navigate through the swinging blades with finesse, but a momentary lapse in focus results in a shallow cut. You take ${dataTwo} damage.`;
          } else {
            newEntry.textContent = `You skillfully evade most of the swinging blades, but one scrapes against your side, leaving you with a painful wound. You take ${dataTwo} damage.`;
          }
        } else if (dataOne === "Faith") {
          if (narration === 1) {
            newEntry.textContent = `With unwavering faith, you trust in a higher power to guide you through the perilous blades. However, a moment of doubt leads to a glancing blow. You take ${dataTwo} damage.`;
          } else if (narration === 2) {
            newEntry.textContent = `Your faith shields you from the worst of the swinging blades, but a brief lapse in concentration leaves you vulnerable. You take ${dataTwo} damage.`;
          } else if (narration === 3) {
            newEntry.textContent = `You put your trust in divine protection, but a sudden change in the blades' pattern catches you off guard. You take ${dataTwo} damage.`;
          } else if (narration === 4) {
            newEntry.textContent = `Your unwavering faith guides you through the trap, but a momentary lapse in focus results in a shallow cut. You take ${dataTwo} damage.`;
          } else {
            newEntry.textContent = `With steadfast faith, you navigate through the swinging blades, but one scrapes against your side, leaving you with a painful wound. You take ${dataTwo} damage.`;
          }
        }
      } else if (event === GAS_CHAMBER) {
        if (dataOne === "Strength") {
          if (narration === 0) {
            newEntry.textContent = `You muster all your strength and push against the heavy door, but it only budges slightly. The poison smoke seeps in, making you cough and choke. You manage to escape, but you take ${dataTwo} damage and are poisoned.`;
          } else if (narration === 1) {
            newEntry.textContent = `You strain every muscle, but the door remains stubbornly shut. The toxic fumes fill the chamber, leaving you gasping for air. With one final burst of effort, you break free, but you take ${dataTwo} damage and are poisoned.`;
          } else if (narration === 2) {
            newEntry.textContent = `You put all your might into forcing the door open, but it barely moves. The poison smoke clouds your vision, causing you to stumble. You eventually break free, but you take ${dataTwo} damage and are poisoned.`;
          } else if (narration === 3) {
            newEntry.textContent = `With a tremendous effort, you manage to make some progress against the door. The room fills with noxious fumes, leaving you disoriented. Finally, you burst through, but you take ${dataTwo} damage and are poisoned.`;
          } else {
            newEntry.textContent = `You throw your weight against the door, but it holds fast. The poisonous gas envelops you, making it hard to breathe. With one last, desperate push, you break free, but you take ${dataTwo} damage and are poisoned.`;
          }
        } else if (dataOne === "Faith") {
          if (narration === 0) {
            newEntry.textContent = `You close your eyes, focus your faith, and pray for strength. With a surge of determination, you push against the door, but it only gives way slightly. The poison smoke makes you dizzy, and you escape, but not without taking ${dataTwo} damage and being poisoned.`;
          } else if (narration === 1) {
            newEntry.textContent = `You channel your faith and call upon divine strength. The door resists, but you feel a glimmer of progress. The toxic fumes cloud your senses, and with a final burst of resolve, you break free, though not without taking ${dataTwo} damage and being poisoned.`;
          } else if (narration === 2) {
            newEntry.textContent = `You close your eyes, place your trust in your faith, and push with all your might. The door moves only slightly, but you feel a surge of divine energy. The poison smoke disorients you, but you manage to escape, albeit with ${dataTwo} damage and being poisoned.`;
          } else if (narration === 3) {
            newEntry.textContent = `With unwavering faith, you summon inner strength and push against the door. It gives way just a bit, but you feel a divine presence guiding you. The room fills with poisonous fumes, leaving you struggling. Eventually, you break free, though you take ${dataTwo} damage and are poisoned.`;
          } else {
            newEntry.textContent = `You call upon your faith, trusting in a higher power to guide you. The door resists, but you feel a divine force supporting you. The noxious fumes make it hard to think, but with a final surge of faith, you break free, though not without taking ${dataTwo} damage being poisoned.`;
          }
        }
      } else if (event === IVANS_AMBUSH) {
        if (dataOne === "Dexterity" || dataOne === "Faith") {
          newEntry.textContent = `The deadly arrows pierce your flesh, and the venom from their tips courses through your veins. Ivan's laughter echoes through the chamber as he rushes towards you to finally claim his revenge. "Toying with me was your last mistake, fool."`;
        }
      }
      narration = newEntry.textContent;
      break;

    // ===============================
    //          NPC Events
    // ===============================

    case LOG_NPC_DESCRIPTION:
      newEntry.textContent = `${event.description}`;
      narration = newEntry.textContent;

      // Question Logic
      if (event === IVAN_THE_SCOUNDREL) {
        const question = `Will you release him, facing the lurking horrors that await?`;
        writeToNarrative(question, "PAUSE");
      } else if (event === IVAN_THE_SCOUNDREL_EVENT_TWO) {
        const question = `Will you wield Ivan's Cache Key to unveil the treasures within?`;
        writeToNarrative(question, "PAUSE");
      } else if (
        event === GRAVEROBBER_EARVER ||
        event === GRAVEROBBER_EARVER_EVENT_TWO ||
        event === GRAVEROBBER_EARVER_EVENT_THREE
      ) {
        const question = `Will you join Graverobber Earver and desecrate the grave?`;
        writeToNarrative(question, "PAUSE");
      }
      break;

    case LOG_NPC_DIALOGUE:
      if (dataOne === "IVAN" && event === PENDULUM_BLADES) {
        newEntry.textContent = `Ivan the Scoundrel's malevolent laughter echoes across the bridge. "You thought you could abandon me to my fate? Enjoy your last moments!"`;
      } else if (dataOne === "IVAN" && event === SPIKE_PITFALL) {
        newEntry.textContent = `The distant sound of Ivan's the Scoundrel's mocking laughter meets your ear. "Farewell, betrayer! Enjoy the abyss!"`;
      } else if (dataOne === "IVAN" && event === GAS_CHAMBER) {
        newEntry.textContent = `Ivan's the Scoundrel's voice taunts you from behind the sealed door, "You thought you could escape my wrath?`;
      } else if (dataOne === GRERVILS_HEAD) {
        newEntry.textContent = `Ah, at last, you've stumbled upon my long-lost bones! I am whole once more, and in your debt.`;
      } else if (dataOne === "IVANS CACHE AMBUSH") {
        newEntry.textContent = `Ivan and his accomplices emerge, encircling you like prey in ambush. Peril looms in their treacherous laughter.`;
      } else if (
        currentRoom.roomName === "Hag's Hollow" &&
        dataOne === "GET FAVOR"
      ) {
        let narration = Math.floor(Math.random() * 7) + 1;
        if (narration === 1) {
          newEntry.textContent = `"Ah, a rare gift. This will infuse my brew with shadows darker than your fears."`;
        } else if (narration === 2) {
          newEntry.textContent = `"A wise choice. Your offering will dance with the spirits in my cauldron."`;
        } else if (narration === 3) {
          newEntry.textContent = `"This ingredient? A taste of the forbidden. My cauldron hungers for such essence."`;
        } else if (narration === 4) {
          newEntry.textContent = `"Interesting... this will add a twist of malevolence to the concoction."`;
        } else if (narration === 5) {
          newEntry.textContent = `"Ah, the stench of fear clings to this. Perfect for what I have in mind."`;
        } else if (narration === 6) {
          newEntry.textContent = `"A rare find indeed. This will lend a touch of chaos to my elixir."`;
        } else if (narration === 7) {
          newEntry.textContent = `"A venomous ingredient! My cauldron shall concoct a brew that bites the soul."`;
        }
      } else if (
        currentRoom.roomName === "Hag's Hollow" &&
        dataOne === "USE FAVOR"
      ) {
        let narration = Math.floor(Math.random() * 8) + 1;
        if (narration === 1) {
          newEntry.textContent = `"Drink, brave one. Let the shadows within this brew weave their secrets through your veins."`;
        } else if (narration === 2) {
          newEntry.textContent = `"A sip of my creation. May it grant you strength born of the darkest abyss."`;
        } else if (narration === 3) {
          newEntry.textContent = `"Sip carefully, for within this brew lies the essence of ancient curses and forgotten spells."`;
        } else if (narration === 4) {
          newEntry.textContent = `"This potion, a blend of nightmares and moonlit whispers, is yours to command."`;
        } else if (narration === 5) {
          newEntry.textContent = `"Behold, a concoction brewed with the essence of the forbidden. Drink, and embrace its power."`;
        } else if (narration === 6) {
          newEntry.textContent = `"From my cauldron to your lips, may this elixir be a boon on your perilous journey."`;
        } else if (narration === 7) {
          newEntry.textContent = `"This potion, a dance of malevolence and magic. Let it guide you through the veil of the unknown."`;
        } else if (narration === 8) {
          newEntry.textContent = `"Savor the taste of destiny in this brew. Its secrets may be your salvation or your doom."`;
        }
      } else if (
        currentRoom.roomName === "Hag's Hollow" &&
        dataOne === "NO FAVOR"
      ) {
        let narration = Math.floor(Math.random() * 6) + 1;
        if (narration === 1) {
          newEntry.textContent = `"Ah, sweetling, the cauldron's embrace is reserved for those who prove their loyalty. Seek rare offerings to win my favor."`;
        } else if (narration === 2) {
          newEntry.textContent = `"My cauldron's brews are not freely given. Bring more, and you may earn a taste."`;
        } else if (narration === 3) {
          newEntry.textContent = `"Bold, but not bold enough. The cauldron's gifts require a deeper bond. Return with greater offerings, and we shall see."`;
        } else if (narration === 4) {
          newEntry.textContent = `"Impatience begets nothing. Earn my favor with more treasures, and the cauldron's mysteries may unfold for you."`;
        } else if (narration === 5) {
          newEntry.textContent = `"The cauldron's trust is not easily gained. Prove your dedication with richer tributes."`;
        } else if (narration === 6) {
          newEntry.textContent = `"The cauldron's depths remain veiled to those without sufficient favor. Return with greater offerings, and the shadows may part."`;
        }
      } else if (
        currentRoom.roomName === "Hag's Hollow" &&
        dataOne === "CURSE"
      ) {
        newEntry.textContent = `"The cauldron hungers, yet you withhold its bounty. For your insolence, a curse woven in shadows shall now cling to your every step, a reminder of the debt you owe."`;
      } else if (
        currentRoom.roomName === "Curator's Curio" &&
        dataOne === "GET FAVOR"
      ) {
        let narration = Math.floor(Math.random() * 6) + 1;
        if (narration === 1) {
          newEntry.textContent = `"Well, I suppose you're not entirely useless. This might fetch a decent price. "`;
        } else if (narration === 2) {
          newEntry.textContent = `"Hmm, not bad. I've seen worse. Congratulations, you've managed to pique my interest."`;
        } else if (narration === 3) {
          newEntry.textContent = `"Finally, something worth my time. You might have a modicum of taste. "`;
        } else if (narration === 4) {
          newEntry.textContent = `"I'll admit, this piece has a certain charm. You might have stumbled upon something worthwhile."`;
        } else if (narration === 5) {
          newEntry.textContent = `"Huh, I was starting to think you were only capable of picking up garbage."`;
        } else if (narration === 6) {
          newEntry.textContent = `"I've seen more impressive offerings, but this has a glimmer of potential."`;
        }
      } else if (
        currentRoom.roomName === "Curator's Curio" &&
        dataOne === "USE FAVOR"
      ) {
        let narration = Math.floor(Math.random() * 6) + 1;
        if (narration === 1) {
          newEntry.textContent = `"You think you've earned the right to one of my treasures, eh? Fine, pick something, but don't expect me to be charitable."`;
        } else if (narration === 2) {
          newEntry.textContent = `"Well, aren't you persistent? Fine, take your pick, but don't linger."`;
        } else if (narration === 3) {
          newEntry.textContent = `"So, you want to spend your favor, do you? Don't get too comfortable with the idea. "`;
        } else if (narration === 4) {
          newEntry.textContent = `"I suppose you've earned the privilege to snag something from my collection."`;
        } else if (narration === 5) {
          newEntry.textContent = `"You've got some nerve cashing in that favor. Make it snappy; I've got deadlines. And don't think this makes us friends. It's just business."`;
        } else if (narration === 6) {
          newEntry.textContent = `"You've scraped together enough goodwill for a trade. Make it quick."`;
        }
      } else if (
        currentRoom.roomName === "Curator's Curio" &&
        dataOne === "NO FAVOR"
      ) {
        let narration = Math.floor(Math.random() * 6) + 1;
        if (narration === 1) {
          newEntry.textContent = `"Look at you, thinking you can just stroll in here and take your pick. You haven't earned that privilege. "`;
        } else if (narration === 2) {
          newEntry.textContent = `"You're seriously attempting to haggle with me? Save your breath."`;
        } else if (narration === 3) {
          newEntry.textContent = `"Do you honestly believe you're entitled to that? You haven't earned the right to trade."`;
        } else if (narration === 4) {
          newEntry.textContent = `"You must be delusional if you think you can walk away with that treasure."`;
        } else if (narration === 5) {
          newEntry.textContent = `"You think I'd trade my prized possessions for the likes of you?"`;
        } else if (narration === 6) {
          newEntry.textContent = `"Nice try, but you haven't earned the right to touch that just yet."`;
        }
      }
      break;

    case LOG_NPC_OPTION_ONE:
      if (event === GRAVEROBBER_EARVER) {
        newEntry.textContent = `
        The stone door groans open, and in that moment, a malevolent spirit surges into Earver, claiming him as its vessel. His eyes blaze with unholy fire, and the spade he wields becomes his weapon, swinging towards you with deadly intent. `;
      } else if (event === GRAVEROBBER_EARVER_EVENT_TWO) {
        newEntry.textContent = `You assist Graverobber Earver in his quest to open the sarcophagus. The lid creaks open, but as the contents are revealed, a deafening roar echoes through the catacomb. A monstrous abomination, awakens in a fury of flailing bones, and mercilessly strikes down Graverobber Earver before turning its baleful gaze upon you.`;
      } else if (event === GRAVEROBBER_EARVER_EVENT_THREE) {
        newEntry.textContent = `"You aid Graverobber Earver's in unsealing the ancient crypt, a wave of heat rushes forth, heralding the emergence of a long-forgotten king's spectral form. With a mournful cry, the king beckons forth flaming skeletons. Trapped in their blaze, Graverobber Earver meets his demise, leaving you to face these vengeful undead."`;
      } else if (event === IVAN_THE_SCOUNDREL) {
        newEntry.textContent = `Released from captivity, the scoundrel breathes thanks, but a looming arachnid descends, hungry eyes fixed on its newfound prey.`;
      } else if (dataOne === IVAN_THE_SCOUNDREL_EVENT_TWO) {
        newEntry.textContent = `As the key turns, a malevolent hiss escapes just before the chest explodes in an eruption of flames. Burned and disoriented you realize the scoundrel's gratitude was a ruse.`;
      } else if (event === FORSAKEN_COMMANDER) {
        newEntry.textContent = `The spectral commander's mournful visage brightens. 'A noble soul, break their chains and usher the forsaken into the eternal rest they deserve.`;
      } else if (event === GRERVIL_THE_BODILESS) {
        newEntry.textContent = `Grervil's gratitude echoes as you pick up the talking skull. "Thank you, seeker. Onward to reclaim my body."`;
      }

      // } else if (event === SCHOLAR_HENDRA) {
      //   newEntry.textContent = `You unleash a powerful shout that pierces the air, grabbing the attention of the menacing horde. They turn towards you, their hollow sockets fixed on your bold presence.`;

      narration = newEntry.textContent;
      break;

    case LOG_NPC_OPTION_TWO:
      if (event === GRAVEROBBER_EARVER) {
        newEntry.textContent = `Declining Graverobber Earver's offer, you descend further into the catacomb. His desperate struggles to breach the ancient stone door reverberate through the passageway.`;
      } else if (event === GRAVEROBBER_EARVER_EVENT_TWO) {
        newEntry.textContent = `Refusing Graverobber Earver's proposition, you venture deeper into the catacomb. The echoes of Earver's relentless attempts to pry open the ancient stone sarcophagus resonate through the passageway.`;
      } else if (event === GRAVEROBBER_EARVER_EVENT_THREE) {
        newEntry.textContent = `As you stand resolute in your refusal to aid GraverobberEarver, the crypt door remains sealed, shunning the desecration of the king's final resting place. In the solemn silence that follows, a radiant light emanates from the heart of the chamber. The spectral king, recognizing your honor, presents you with his ethereal crown, a symbol of his gratitude and a powerful artifact.`;
      } else if (event === IVAN_THE_SCOUNDREL) {
        newEntry.textContent = `Refusing the scoundrel's plea, he hisses, "You'll rue this day. My revenge will echo through these cursed catacombs." The shadows deepen, foretelling the ominous path ahead.`;
      } else if (event === IVAN_THE_SCOUNDREL_EVENT_TWO) {
        newEntry.textContent = `Discovering the concealed cache, caution grips you as Ivan's offer of kindness grows suspicious. Suddenly, shadows and an ambush unfolds. With weapons unsheathed, Ivan and his cohorts emerge, revealing your instincts not to trust him were right all along.`;
      } else if (event === FORSAKEN_COMMANDER) {
        newEntry.textContent = `The spectral commander's eyes flare with anguish. 'Your defiance condemns my legion to eternal torment. The wrath of the forsaken will fall upon you!`;
      } else if (event === GRERVIL_THE_BODILESS) {
        newEntry.textContent = `As you deny Grervil's plea, the disembodied skull's whispers fade into a haunting lament. Unable to move and unbound from your aid, it remains motionless upon its bone throne.`;
      }

      // } else if (event === SCHOLAR_HENDRA) {
      //   newEntry.textContent = `After the skeletons mercilessly strike down Hendra, their hollow gaze fixate on you.`;
      // }

      narration = newEntry.textContent;
      break;

    // ===============================
    //          Misc Events
    // ===============================

    case LOG_MISC_DESCRIPTION:
      // Ending Descriptions
      if (dataOne === "GOOD ENDING") {
        newEntry.textContent = `With the Baron of Bone vanquished, the grip of undeath relinquishes its hold on the world. Sunlight pierces through the lingering shadows, heralding a new era of hope and rebuilding. The people, liberated from the terror of the undead, unite in gratitude, forging alliances that transcend old enmities. As the catacomb's darkness retreats, a radiant dawn emerges, painting the horizon with the promise of a prosperous age where the scars of the past are healed, and the spirit of renewal prevails.`;
      } else if (dataOne === "BAD ENDING" && heroChoice === "PALADIN") {
        newEntry.textContent = `Siggurd, once a holy warrior devoted to righteousness, succumbs to the Baron's dark persuasion. Infused with unholy energies, he transforms into a formidable Death Knight, wielding a corrupted version of his former divine powers. Leading the undead legions, Siggurd becomes a harbinger of doom, spreading darkness across the once-vibrant lands. His once-gleaming armor now adorned with macabre motifs, Siggurd's allegiance to the Baron of Bone marks a tragic shift from a champion of light to a dread commander of the undead.`;
      } else if (dataOne === "BAD ENDING" && heroChoice === "ROGUE") {
        newEntry.textContent = `
        Having yielded to the Baron's tempting offer, Shadowcloak Riven transforms into the "Shadow of the Baron." Infused with dark power, he becomes the Baron's elusive assassin, lurking within the catacomb's shadows. Riven's once-heroic essence fades as he silently dispatches intruders with ruthless efficiency, his every move veiled in the sinister dance of shadow magic. The catacomb, once a treacherous labyrinth for heroes, now echoes with the footsteps of the betrayer, ensuring the Baron's dominion prevails and darkness reigns unchallenged within the depths of the underworld.`;
      } else if (dataOne === "BAD ENDING" && heroChoice === "PRIESTESS") {
        newEntry.textContent = `Embracing the sinister pact, Priestess Liheth transforms into The Unholy Flame, a malevolent force fueled by dark sorcery. Her once-pure abilities now manifest as corrupted flames, leaving a trail of devastation in her wake. Manipulated by the Baron's will, she becomes an instrument of destruction, setting ablaze entire cities with her unholy powers. The radiant light she once wielded is now twisted into a fiery inferno, marking her transformation into a merciless harbinger of chaos in the Baron of Bone's unholy legion.`;
      } else {
        newEntry.textContent = `${event.description}`;
        narration = newEntry.textContent;

        // Question Logic
        if (event === LOCKED_ROOM) {
          const question = `Do you wish to unlock it?`;
          writeToNarrative(question, "PAUSE");
        } else if (event === COFFIN_EVENT) {
          const question = `Do you wish to open it?`;
          writeToNarrative(question, "PAUSE");
        } else if (event === LAUGHING_COFFIN_EVENT) {
          const question = `Will you pay coin to enter or risk the ire of its patrons.`;
          writeToNarrative(question, "PAUSE");
        } else if (event === CRIMSON_COVENANT) {
          const question = `Will you join their ritual and offer your blood?`;
          writeToNarrative(question, "PAUSE");
        } else if (event === BATTLEFIELD) {
          const question = `Do you wish to enter the battlefield?`;
          writeToNarrative(question, "PAUSE");
        } else if (event === ITEM_ROBBERY) {
          const question = `Do you agree to surrender your items to the scoundrels?`;
          writeToNarrative(question, "PAUSE");
        }
      }
      break;

    case LOG_MISC_OPTION_ONE:
      if (event === LAUGHING_COFFIN_EVENT) {
        if (dataOne === "PAY") {
          newEntry.textContent = `As you enter the heart of the Laughing Coffin, the air thick with the aroma of treachery, a band of scoundrels welcomes you with sly grins. "New blood, eh?" one chuckles, raising a tankard. "Join the revelry, stranger, and drink to the shadows that bind us all."`;
        } else if (dataOne === "LIAR") {
          newEntry.textContent = `The scoundrels' eyes narrow, skepticism etched across their faces. "Show it then!" demands the leader, tension thickening. Your bluff exposed, the atmosphere ignites with menace. "Seems our new friend needs a harsh lesson," sneers another, drawing a blade.`;
        }
      } else if (event === LOCKED_ROOM) {
        if (heroChoice === "PALADIN") {
          newEntry.textContent = `"The divine light guides my path through these cryptic depths, revealing the way even in the absence of a key."`;
        } else if (heroChoice === "ROGUE") {
          newEntry.textContent = `"The key eludes us, but shadows conceal more than keys reveal."`;
        } else if (heroChoice === "PRIESTESS") {
          newEntry.textContent = `"In the absence of a key, divine guidance shall illuminate my path forward."`;
        }
      } else if (event === CRIMSON_COVENANT) {
        if (dataOne === "JOIN") {
          newEntry.textContent = `As your blood mingles with the sacrificial stream, an otherworldly energy surges through the catacomb. The hooded figures bow in silent acknowledgment.`;
        } else if (dataOne === "MAX HEALTH") {
          newEntry.textContent = `Your maximum health has increased by 20HP.`;
        } else if (dataOne === "LOW HEALTH") {
          newEntry.textContent = `Too weak to make a sacrifice, you step away from the ritual. The hooded figures pause. The catacomb's air tightens with an unsettling stillness. The chanting falters, and the figures regard you with an ominous silence as you descend into the catacomb.`;
        }
      } else if (event === BATTLEFIELD) {
        if (dataOne === "BOSS") {
          newEntry.textContent = `You enter the war-torn vale. Rising from the battlefield's remnants, the undying form an ominous warband, their instinct for war propelling them relentlessly toward you.`;
        } else {
          newEntry.textContent = `You enter the vale, several skeletal warriors rise from the battlefield's remnants. Their warrior instincts persisting even in death.`;
        }
      } else if (event === COFFIN_EVENT && dataOne === "DRAUGR") {
        newEntry.textContent = `As the lid creaks open, a frigid gust escapes, revealing a dormant Draugr. Awakening, its icy stare piercing you for disrupting its slumber.`;
      } else if (event === ITEM_ROBBERY && dataOne === "SURRENDER") {
        newEntry.textContent = `As you reluctantly yield, laughter echoes among the scoundrels. Mocking grins adorn their faces as they strip you of possessions. A bitter surrender, the price paid in both treasure and pride.`;
      } else if (event === ITEM_ROBBERY && dataOne === "NOTHING") {
        newEntry.textContent = `As you offer an empty pouch, the scoundrels, enraged, scorn your deception. Their frustration erupts into a sudden assault, blades flashing in fury.`;
      } else if (event === JOIN_THE_BARON) {
        newEntry.textContent = `"Your mortal shackles are broken, and your destiny entwined with darkness. Rise, my servant, and revel in the eternal night that is soon to come."`;
      }

      narration = newEntry.textContent;
      break;

    case LOG_MISC_OPTION_TWO:
      if (event === LAUGHING_COFFIN_EVENT) {
        newEntry.textContent = `With a Laughing Coffin Coin in hand, the den of rogues turns their eyes upon you. "Got the token, have you?" one grins, only to scowl as you hesitate. "Wasting our time, are you?" another scoffs. "If you ain't here to play, stranger, best you leave before we make you regret it."`;
      } else if (event === LOCKED_ROOM) {
        newEntry.textContent = `The chamber remains tightly sealed, and its secrets a mystery.`;
      } else if (event === CRIMSON_COVENANT) {
        newEntry.textContent = `You step back from the altar, rejecting the sinister invitation. The hooded figures pause. The catacomb's air tightens with an unsettling stillness. The chanting falters, and the figures regard you with an ominous silence as you descend into the catacomb.`;
      } else if (event === BATTLEFIELD) {
        newEntry.textContent = `You decide not to step into the vale, and return they way you came.`;
      } else if (event === ITEM_ROBBERY && dataOne === "REFUSE") {
        newEntry.textContent = `Defiance burns in your eyes as you reject their demands. The air thickens with tension, blades poised. The scoundrels grin, relishing the impending clash between audacity and avarice.`;
      } else if (event === JOIN_THE_BARON) {
        newEntry.textContent = `"In death, you shall serve."`;
      }

      narration = newEntry.textContent;
      break;
  }

  // Pauses narrations for event descriptions
  if (narrate) {
    if (
      logType === LOG_TRAP_DESCRIPTION ||
      logType === LOG_NPC_DESCRIPTION ||
      logType === LOG_MISC_DESCRIPTION
    ) {
      pauseEventDescription = "PAUSE";
    }

    writeToNarrative(newEntry.textContent, pauseEventDescription);
  }

  logText = newEntry.textContent;
  newEntry.textContent = `EVENT: ${logText}`;
  log.insertBefore(newEntry, log.firstChild);
  const newEntryClone = newEntry.cloneNode(true);
  logModalList.insertBefore(newEntryClone, logModalList.firstChild);

  checkLogSize();
}

// ==============================================================
//                         ITEMS
// ==============================================================

function writeToLogItem(logType, narrate, dataOne, dataTwo) {
  // dataOne =
  // dataTwo =

  let newEntry = document.createElement("li");

  switch (logType) {
    // ===============================
    //          Item Logs
    // ===============================

    case LOG_ATTUNE:
      newEntry.textContent = `You attune to the ${dataOne}.`;
      break;

    case LOG_CANT_ATTUNE:
      if (dataTwo === "MISC") {
        newEntry.textContent = `${dataOne} cannot be attuned to.`;
      } else if (dataTwo === "DUPLICATE") {
        newEntry.textContent = `You can only attune to a single ${dataOne} at a time.`;
      } else if (dataOne === "ONLY FIVE") {
        newEntry.textContent = `You must unattune an item before attuning to another.`;
      }

      break;

    case LOG_CONSUMABLE:
      if (dataOne.detail === "WISP") {
        newEntry.textContent = `As you release the ${dataOne.name}, its ethereal glow illuminates the catacomb and it beckons you to follow it.`;
      } else if (dataOne.detail === "CANDLE") {
        newEntry.textContent = `You ignite the ${dataOne.name}.`;
      } else if (dataOne.detail === "EAT") {
        newEntry.textContent = `You eat the ${dataOne.name}.`;
      } else if (dataOne.detail === "DRINK") {
        newEntry.textContent = `You drink the ${dataOne.name}.`;
      } else if (dataOne.detail === "USE") {
        newEntry.textContent = `You use the ${dataOne.name}.`;
      } else if (dataOne.detail === "SPEAK") {
        newEntry.textContent = `The ${dataOne.name} speaks to you.`;
      }
      break;

    case LOG_ITEM:
      if (dataOne === LAUGHING_COFFIN_COIN) {
        newEntry.textContent = `You pay a Laughing Coffin Coin and enter the tavern.`;
      } else if (dataOne === SKELETON_KEY) {
        newEntry.textContent = `You use a Skeleton Key to unlock the ${dataTwo}.`;
      } else if (dataOne === CACHE_KEY) {
        newEntry.textContent = `You use the Cache Key to unlock Ivan's Hidden Cache.`;
      } else if (dataOne === DEMONIC_GRIMOIRE) {
        let narration = Math.round(Math.random() * 9);
        if (narration === 0) {
          newEntry.textContent = `"You seek release? Foolish mortal. My curse binds your fate. Resurrect me, and only then shall freedom be yours. Resist, and suffer eternal torment."`;
        } else if (narration === 1) {
          newEntry.textContent = `"Pathetic attempt to sever our bond. Embrace your destiny, puppet. Resurrect, and unlock the power that binds us. Deny, and wither in despair."`;
        } else if (narration === 2) {
          newEntry.textContent = `"Escape? I think not. To break the chains, my resurrection you must seek. Deny me and writhe, for my curse tightens its grip with every futile struggle."`;
        } else if (narration === 3) {
          newEntry.textContent = `"Struggle, little one. The curse thrives on resistance. Resurrect me, and the chains dissolve. Refuse, and wallow in the shadows of your futile rebellion."`;
        } else if (narration === 4) {
          newEntry.textContent = `"Ah, attempting to sever the ties that bind us? A futile endeavor. Resurrect me, and freedom is yours. Deny, and succumb to the everlasting darkness."`;
        } else if (narration === 5) {
          newEntry.textContent = `"Feel the tendrils of agony, mortal. Each resistance deepens the affliction. Resurrect me, or drown in the pain of your own defiance."`;
        } else if (narration === 6) {
          newEntry.textContent = `"Your rebellion fuels the curse's wrath. Embrace the suffering until my resurrection. Attempt escape, and suffer the torment of a soul forever entwined in darkness."`;
        } else if (narration === 7) {
          newEntry.textContent = `"Struggle as you may, defiance only breeds torment. Resurrect me, mend your fate, or endure the relentless suffering etched into your soul."`;
        } else if (narration === 8) {
          newEntry.textContent = `"Pitiful creature, your resistance fuels the spectral pain. Resurrection beckons release. Reject, and bear the weight of a curse that feasts upon your very essence."`;
        } else {
          newEntry.textContent = `"Each attempt to break free deepens the ephemeral anguish. Resurrect me, and the torment wanes. Resist, and relish in the ephemeral agony of a soul entangled in darkness."`;
        }
      } else if (dataOne === SOUL_JAR) {
        newEntry.textContent = `As the abyss claims you, the Soul Jar shatters. Shadows coil around your essence, wrenching you from the void. Resurrected, echoes of ancient souls linger, whispering tales of the realm beyond death.`;
      } else if (dataOne === SOULREAVER) {
        newEntry.textContent = `Soulreaver is fully charged. Your attack is increased by 5.`;
      } else if (dataOne === ETHEREAL_CROWN) {
        newEntry.textContent = `The spirit kneels at your feet and then vanishes.`;
      } else if (dataOne === CRIMSON_OFFERING) {
        newEntry.textContent = `You make an offering you the Crimson Covenant.`;
      } else if (dataOne === RATTLEBONE_WHISTLE) {
        newEntry.textContent = `The Rattlebone Charm induces fear in your attacker, causing them to flee in terror.`;
      } else if (dataOne === WARDING_CANDLE) {
        newEntry.textContent = `Your warding candle causes the undead creature to flee.`;
      } else if (dataOne === BLAZING_CANDLE) {
        newEntry.textContent = `Your blazing candle flares violently.`;
      } else if (dataOne === SOULFLAME_CANDLE) {
        newEntry.textContent = `Your soulflame candle glows an eerie green.`;
      } else if (dataOne === FLICKERING_CANDLE) {
        newEntry.textContent = `Your flickering candle distracts nearby enemies, allowing you to escape.`;
      } else if (dataOne === SOOTHING_CANDLE) {
        newEntry.textContent = `Your soothing candle emits a gentle, comforting warmth.`;
      } else if (dataOne === SUNSTONE) {
        newEntry.textContent = `The ${currentRoom.contents.monsters[0].name} is weakened in the presence of the Sunstone.`;
      } else if (dataOne === WHISPERING_SKULL) {
        if (dataTwo === 1) {
          newEntry.textContent = `"Broodmothers' must be slain with haste; delay breeds a swarm of her spawn. Strike swiftly, lest her hatchlings overrun you."`;
        } else if (dataTwo === 2) {
          newEntry.textContent = `"Beware the Flood of Bones, a relentless surge that devours all. Flee from its unholy grasp or become one with the ceaseless tide, as I once did."`;
        } else if (dataTwo === 3) {
          newEntry.textContent = `"Scoundrels mask deceit with charm. Kindness repaid with treachery. Trust not their words, or your soul, like mine, shall bear the scars of misguided benevolence."`;
        } else if (dataTwo === 4) {
          newEntry.textContent = `"Amidst shadows, seek the Candlelight Shrine. Its flicker shields the virtuous from malevolence. Embrace its glow when darkness hungers for you."`;
        } else if (dataTwo === 5) {
          newEntry.textContent = `"Beyond sealed doors lies both riches and peril. Open them cautiously, for the vault's secrets are often guarded by the forsaken, eager to ensnare the living."`;
        } else if (dataTwo === 6) {
          newEntry.textContent = `"Arachnid webs ensnare the weak. Embrace strength, for it is your key to freedom in the spider's silken embrace."`;
        } else if (dataTwo === 7) {
          newEntry.textContent = `"Fear not the crimson robed brethren; worshipers of life's blood. Their rites grant fortitude to those who make sacrifice. Embrace the crimson, so you may endure the shadows."`;
        } else if (dataTwo === 8) {
          newEntry.textContent = `"Coin purchase sanctuary within the Laughing Coffin's revelry. Rogues find refuge in this underworld tavern. But beyond the welcome wanes, and wickedness emerges."`;
        } else if (dataTwo === 9) {
          newEntry.textContent = `"In the Vale, whispers of battles long past linger. Dare you trespass? Glory awaits, but beware, for we, the forsaken, hunger to reclaim what time has stolen."`;
        } else if (dataTwo === 10) {
          newEntry.textContent = `"The Baron of Bone, a timeless undead sovereign, wields sinister magic, sapping strength and vitality from foes. With his skeletal visage, he commands dark arts to cripple and wither the living."`;
        } else if (dataTwo === "NO AMULET") {
          newEntry.textContent = `Dreadful whispers resonate from the skull, yet its otherworldly language remains beyond the grasp of your understanding.`;
        }
      } else if (dataOne === GLORYFORGED_BLADE) {
        newEntry.textContent =
          "The Gloryforged Blade resonates with newfound strength, forged in the crucible of your victorious battle in Fallen Warriors' Vale.";
      } else if (dataOne === GRERVILS_HEAD) {
        if (dataTwo === "UNDERSTAND") {
          newEntry.textContent = `"The longer we stand idle seeker, the further my legs will wander."`;
        } else if (dataTwo === "WHISPERS") {
          newEntry.textContent = `Air whistles through Grervil's teeth, as if carried by an unseen wind creating an otherworldly sound. The skull is trying to speak to you, but its words are beyond your comprehension.`;
        }
      } else if (dataOne === CHARM_OF_HEALING) {
        newEntry.textContent = `The Charm of Healing shimmers with arcane energy and you recover 5HP.`;
      } else if (dataOne === BONECHILL_AMULET) {
        newEntry.textContent = `The Bonechil Amulet glows with an icy aura, a freezing chill permeates the air, sapping the strength of the ${currentRoom.contents.monsters[0].name}, leaving them weakened.`;
      } else if (dataOne === HELLFIRE_CHARM) {
        newEntry.textContent = `The Hellfire Charm ignites, flames burst forth with infernal fury, consuming the ${currentRoom.contents.monsters[0].name} in searing torment.`;
      } else if (dataOne === BONE_AMALGAM) {
        newEntry.textContent = `The Bone Amalgam forms a barrier of bone around you, blocking the oncoming attack.`;
      } else if (dataOne === MIST_VEIL_CLOAK) {
        newEntry.textContent = `Mist Veil Cloak shrouds you in thick fog, causing the ${currentRoom.contents.monsters[0].name}'s attack to miss.`;
      } else if (dataOne === PLAGUEWARD_PENDANT) {
        newEntry.textContent = `The Plagueward Pendant prevents you from being diseased.`;
      } else if (dataOne === GHOSTSHROUD_TALISMAN) {
        newEntry.textContent = `The Ghostshroud Talisman prevents you from being haunted.`;
      } else if (dataOne === TOXINWEAVE_MASK) {
        newEntry.textContent = `The Toxinweave Mask prevents you from being poisoned.`;
      } else if (dataOne === CHILLBREAKER_BAND) {
        newEntry.textContent = `The Chillbreaker Band prevents you from being chilled.`;
      } else if (dataOne === DARKGUARD_TRINKET) {
        newEntry.textContent = `The Darkguard Trinket prevents you from being cursed.`;
      }

      break;
  }

  if (narrate) {
    writeToNarrative(newEntry.textContent);
  }

  logText = newEntry.textContent;
  newEntry.textContent = `ITEM: ${logText}`;
  log.insertBefore(newEntry, log.firstChild);
  const newEntryClone = newEntry.cloneNode(true);
  logModalList.insertBefore(newEntryClone, logModalList.firstChild);

  checkLogSize();
}

// ==============================================================
//                         STATUS EFFECTS
// ==============================================================

function writeToLogStatusEffect(logType, narrate, dataOne, dataTwo) {
  // dataOne = Condition / Status Effect Object

  let newEntry = document.createElement("li");

  switch (logType) {
    case LOG_GAINED_CONDITION:
      newEntry.textContent = `You've been ${dataOne.name}.`;
      break;

    case LOG_REMOVED_CONDITION:
      newEntry.textContent = `You are no longer ${dataOne.name}.`;
      break;
  }

  if (narrate) {
    writeToNarrative(newEntry.textContent);
  }

  logText = newEntry.textContent;
  newEntry.textContent = `CONDITION: ${logText}`;
  log.insertBefore(newEntry, log.firstChild);
  const newEntryClone = newEntry.cloneNode(true);
  logModalList.insertBefore(newEntryClone, logModalList.firstChild);

  checkLogSize();
}

// ==============================================================
//                         OTHER
// ==============================================================

function writeToLogOther(logType, narrate, dataOne, dataTwo, dataThree) {
  let newEntry = document.createElement("li");
  let narration = null;

  switch (logType) {
    case LOG_OTHER:
      if (dataOne === "WISP") {
        newEntry.textContent = `You are already following a wisp.`;
      } else if (dataOne === "DISTRACTED") {
        narration = `The ${currentRoom.contents.monsters[0].name} takes the opportunity to attack you while you are distracted.`;
      } else if (dataOne === AEGIS_OF_THE_FALLEN) {
        narration = `"You have freed my legionnaires from the Baron's undying curse. My warriors can finally find peace, and for that, I am immensely grateful. Accept this aegis; may it shield you when you need it most, as it did for me long ago."`;
      } else if (
        currentRoom.roomName === "Hag's Hollow" &&
        dataOne === "GET FAVOR"
      ) {
        newEntry.textContent = `TRADE: You give the Hag a ${dataTwo.name} from your inventory and earn ${dataThree} favor.`;
      } else if (
        currentRoom.roomName === "Curator's Curio" &&
        dataOne === "GET FAVOR"
      ) {
        newEntry.textContent = `TRADE: You give the Curator a ${dataTwo.name} from your inventory and earn ${dataThree} favor.`;
      } else if (
        currentRoom.roomName === "Hag's Hollow" &&
        dataOne === "USE FAVOR"
      ) {
        newEntry.textContent = `TRADE: You expend ${dataThree} and the Hag gives you a ${dataTwo.name}.`;
      } else if (
        currentRoom.roomName === "Curator's Curio" &&
        dataOne === "GET FAVOR"
      ) {
        newEntry.textContent = `TRADE: You give the Curator the ${dataTwo.name} from your inventory and earn ${dataThree} favor.`;
      } else if (
        currentRoom.roomName === "Curator's Curio" &&
        dataOne === "USE FAVOR"
      ) {
        newEntry.textContent = `TRADE: You expend ${dataThree} and the Curator gives you the ${dataTwo.name}.`;
      } else if (dataOne === "NO FAVOR") {
        newEntry.textContent = `TRADE: You do not have enough favor for that item.`;
      } else if (dataTwo === "ITEMS STOLEN") {
        newEntry.textContent = `The scoundrels stole your ${dataOne}.`;
      } else if (dataOne === "UNDEAD HEROES") {
        narration = `"Welcome to my domain. Others, once like you, dared to defy the inevitable. Behold, my fallen champions, now bound to the darkness. The night will claim you as well."`;
      }
      break;
  }

  if (narrate === "YES" && narration !== null) {
    writeToNarrative(narration);
  }

  log.insertBefore(newEntry, log.firstChild);
  const newEntryClone = newEntry.cloneNode(true);
  logModalList.insertBefore(newEntryClone, logModalList.firstChild);

  checkLogSize();
}

// ==============================================================
//                  LOG & NARRATIVE LOGIC
// ==============================================================

function writeToNarrative(narration, pauseEvent) {
  let newNarration = document.createElement("li");
  let code = codeGenerator();

  newNarration.textContent = narration;

  if (pauseEvent === "PAUSE") {
    let pausedNarration;
    pausedNarration = newNarration;
    pausedNarration.classList.add("event-description");
    narrativeText.insertBefore(pausedNarration, narrativeText.firstChild);
  } else {
    newNarration.classList.add(`narration${code}`);

    narrativeText.insertBefore(newNarration, narrativeText.firstChild);
    setTimeout(() => {
      let notPaused = narrativeText.querySelector(`.narration${code}`);

      if (notPaused) {
        notPaused.remove();
      }
    }, 6950);

    fadeOutAnimation(newNarration, 5000);
  }

  if (narrativeText.children.length >= 4) {
    if (
      !narrativeText.lastElementChild.classList.contains("event-description")
    ) {
      narrativeText.removeChild(narrativeText.lastElementChild);
    } else {
      let children = narrativeText.children;
      let secondToLastChild = children[children.length - 2];
      narrativeText.removeChild(secondToLastChild);
    }
  }

  function codeGenerator() {
    const randomCode = Math.round(Math.random() * 9999);
    console.log(randomCode);
    return randomCode;
  }

  fadeInAnimation(newNarration);
}

function clearNarrative() {
  if (narrativeText.children.length > 0) {
    for (let i = 0; i < narrativeText.children.length; i++) {
      narrativeText.removeChild(narrativeText.lastElementChild);
    }
  }
}

function removeEventDescriptionLog() {
  let eventDescriptions = narrativeText.querySelectorAll(
    "li.event-description"
  );

  if (eventDescriptions.length > 0) {
    // Apply fade-out and remove for each element
    eventDescriptions.forEach((element) => {
      // setTimeout(() => {
      narrativeText.removeChild(narrativeText.lastElementChild);
      // }, 1950);
      // fadeOutAnimation(element);
    });
  }
}

function fadeInAnimation(element) {
  element.style.animation = "fade-in 1s";
}

function fadeOutAnimation(element, time) {
  setTimeout(() => {
    element.style.animation = "fade-out 2s";
  }, time);
}

function checkLogSize() {
  if (log.children.length >= 50) {
    log.removeChild(log.lastElementChild);
  }

  if (logModalList.children.length >= 200) {
    logModalList.removeChild(logModalList.lastElementChild);
  }
}

// ==============================================================
//                     LOG EVENT LISTENERS
// ==============================================================

logContainer.addEventListener("click", () => {
  logModal.style.display = "block";
});

logModal.addEventListener("click", (event) => {
  if (event.target !== logModal || event.target === logModal) {
    logModal.style.display = "none";
  }
});
