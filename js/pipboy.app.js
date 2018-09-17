
$(document).ready(function(){
    var inventory = [
        {   
            "name": "44_pistol",
            "damage": 48,
            "ammo": 50,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99
        },
        {   
            "name": "10mm_pistol",
            "damage": 18,
            "ammo": 70,
            "fire_rate": 46,
            "range": 119,
            "accuracy": 61,
            "weight": 4.2,
            "value": 53
        },
        {   
            "name": "assault_rifle",
            "damage": 30,
            "ammo": 300,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144
        },
        {   
            "name": "missile_launcher",
            "damage": 150,
            "ammo": 8,
            "fire_rate": 2,
            "range": 203,
            "accuracy": 65,
            "weight": 21,
            "value": 314
        },
        {   
            "name": "final_judgement",
            "damage": 14,
            "ammo": 1212,
            "fire_rate": 340,
            "range": 203,
            "accuracy": 48,
            "weight": 19.3,
            "value": 3804
        },
        {   
            "name": "raider_chest_piece",
            "damage_resist": 4,
            "weight": 7,
            "value": 18
        },
        {   
            "name": "leather_chest_piece",
            "damage_resist": 3,
            "weight": 5,
            "value": 25
        },
        {   
            "name": "metal_helmet",
            "damage_resist": 9,
            "weight": 3,
            "value": 15
        },
        {   
            "name": "robot_leg",
            "damage_resist": 8,
            "weight": 3,
            "value": 16 
        },
        {   
            "name": "trapper_arm",
            "damage_resist": 10,
            "weight": 7,
            "value": 11
        },
        {   
            "name": "deathclaw_steak",
            "addiction": 'No',
            "recipe": 'Yes',
            "plantable": 'No',
            "weight": 1,
            "value": 130
        },
        {   
            "name": "radstag_stew",
            "addiction": 'No',
            "recipe": 'Yes',
            "plantable": 'No',
            "weight": 1,
            "value": 60
        },
        {   
            "name": "bloodbug_meat",
            "addiction": 'No',
            "recipe": 'Comp.',
            "plantable": 'No',
            "weight": 0.5,
            "value": 18
        },
        {   
            "name": "noodle_cup",
            "addiction": 'No',
            "recipe": 'Yes',
            "plantable": 'No',
            "weight": 0.5,
            "value": 20
        },
        {   
            "name": "strength",
            "description": 'A measure of your raw physical power. It affects how much you can carry and the damage of all melee attacks.',
        },
        {   
            "name": "perception",
            "description": 'Perception is a measurement of your environmental and situational awareness. It directly affects weapon accuracy in V.A.T.S. (Vault-Tec Assisted Targeting System), lock-picking skills, and successful attempts at stealing items.',
        },
        {   
            "name": "endurance",
            "description": 'A measure of your overall physical fitness. It affects your total Health and the Action Point drain from sprinting.',
        },
        {   
            "name": "charisma",
            "description": 'Your ability to charm and convince others. It affects your success to persuade in dialogue, prices when you barter, and the maximum number of settlers in settlements.',
        },
        {   
            "name": "intelligence",
            "description": 'A measure of your overall mental acuity. It affects the number of Experience Points earned and reduces the number of dud words when hacking terminals.',
        },
        {   
            "name": "agility",
            "description": 'A measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak.	',
        },
        {   
            "name": "luck",
            "description": 'A measure of your general good fortune and affects the recharge rate of critical hits.',
        },
        {   
            "name": "better_criticals",
            "description": 'Advanced training for enhanced combat effectiveness! Criticals do 50% more extra damage.	',
        },
        {   
            "name": "big_leagues",
            "description": 'Swing for the fences! Do 20% more melee weapon damage.',
        },
        {   
            "name": "commando",
            "description": 'Rigorous combat training means automatic weapons do 20% more damage.',
        },
        {   
            "name": "gun_nut",
            "description": 'You gain access to base level and Rank 1 gun mods.',
        },
        {   
            "name": "rifleman",
            "description": 'Keep your distance long and your kill-count high. Attacks with non-automatic rifles do 20% more damage.',
        },
        {   
            "name": "science",
            "description": 'Take full advantage of advanced technology with access to base level and Rank 1 high-tech mods.',
        },
        {   
            "name": "toughness",
            "description": 'If nothing else, you can take a beating! Instantly gain +10 Damage Resistance.',
        },
        ];

    $('.item-list a').on('click', function(e){
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $('.item-list a').on('mouseenter', function(e){
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item);

        for(item in inventory){
            if(inventory[item].name == current_item){
                console.log(inventory[item]);

                var container = $('.item-stats');
                container.find('.damage').html(inventory[item].damage);
                container.find('.ammo').html(inventory[item].ammo);
                container.find('.fire_rate').html(inventory[item].fire_rate);
                container.find('.range').html(inventory[item].range);
                container.find('.accuracy').html(inventory[item].accuracy);
                container.find('.weight').html(inventory[item].weight);
                container.find('.value').html(inventory[item].value);
                container.find('.damage_resist').html(inventory[item].damage_resist);
                container.find('.addiction').html(inventory[item].addiction);
                container.find('.recipe').html(inventory[item].recipe);
                container.find('.plantable').html(inventory[item].plantable);
                container.find('.description').html(inventory[item].description);
            }
        }
    });
});