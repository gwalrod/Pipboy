
$(document).ready(function(){
    var inventory = [
        {   
            "name": "44_pistol",
            "item_image": 'img/weapons/44_pistol.png',
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
            "item_image": 'img/weapons/10mm_pistol.png',
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
            "item_image": 'img/weapons/Assaultrifle.png',
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
            "item_image": 'img/weapons/Missile_launcher.png',
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
            "item_image": 'img/weapons/final_judgement.png',
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
            "item_image": 'img/armor/Raider_chest_piece.png',
            "damage_resist": 4,
            "weight": 7,
            "value": 18
        },
        {   
            "name": "leather_chest_piece",
            "item_image": 'img/armor/Leather_chest_piece.png',
            "damage_resist": 3,
            "weight": 5,
            "value": 25
        },
        {   
            "name": "metal_helmet",
            "item_image": 'img/armor/metal_helmet.png',
            "damage_resist": 9,
            "weight": 3,
            "value": 15
        },
        {   
            "name": "robot_leg",
            "item_image": 'img/armor/robot_leg.png',
            "damage_resist": 8,
            "weight": 3,
            "value": 16 
        },
        {   
            "name": "trapper_arm",
            "item_image": 'img/armor/Trapper_arm.png',
            "damage_resist": 10,
            "weight": 7,
            "value": 11
        },
        {   
            "name": "deathclaw_steak",
            "item_image": 'img/consumables/deathclaw_steak.png',
            "addiction": 'No',
            "recipe": 'Yes',
            "plantable": 'No',
            "weight": 1,
            "value": 130
        },
        {   
            "name": "radstag_stew",
            "item_image": 'img/consumables/Radstag_stew.png',
            "addiction": 'No',
            "recipe": 'Yes',
            "plantable": 'No',
            "weight": 1,
            "value": 60
        },
        {   
            "name": "bloodbug_meat",
            "item_image": 'img/consumables/Bloodbug_meat.png',
            "addiction": 'No',
            "recipe": 'Comp.',
            "plantable": 'No',
            "weight": 0.5,
            "value": 18
        },
        {   
            "name": "noodle_cup",
            "item_image": 'img/consumables/Noodle_cup.png',
            "addiction": 'No',
            "recipe": 'Yes',
            "plantable": 'No',
            "weight": 0.5,
            "value": 20
        },
        {   
            "name": "strength",
            "item_image": 'img/specials/Strength.png',
            "description": 'A measure of your raw physical power. It affects how much you can carry and the damage of all melee attacks.',
        },
        {   
            "name": "perception",
            "item_image": 'img/specials/Perception.png',
            "description": 'Perception is a measurement of your environmental and situational awareness.',
        },
        {   
            "name": "endurance",
            "item_image": 'img/specials/Endurance.png',
            "description": 'A measure of your overall physical fitness. It affects your total Health and the Action Point drain from sprinting.',
        },
        {   
            "name": "charisma",
            "item_image": 'img/specials/Charisma.png',
            "description": 'Your ability to charm and convince others. It affects your success to persuade in dialogue, prices when you barter, and the maximum number of settlers in settlements.',
        },
        {   
            "name": "intelligence",
            "item_image": 'img/specials/Intelligence.png',
            "description": 'A measure of your overall mental acuity. It affects the number of Experience Points earned and reduces the number of dud words when hacking terminals.',
        },
        {   
            "name": "agility",
            "item_image": 'img/specials/Agility.png',
            "description": 'A measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak.	',
        },
        {   
            "name": "luck",
            "item_image": 'img/specials/Luck.png',
            "description": 'A measure of your general good fortune and affects the recharge rate of critical hits.',
        },
        {   
            "name": "better_criticals",
            "item_image": 'img/perks/Better_Criticals.png',
            "description": 'Advanced training for enhanced combat effectiveness! Criticals do 50% more extra damage.	',
        },
        {   
            "name": "big_leagues",
            "item_image": 'img/perks/Big_Leagues.png',
            "description": 'Swing for the fences! Do 20% more melee weapon damage.',
        },
        {   
            "name": "commando",
            "item_image": 'img/perks/Commando.png',
            "description": 'Rigorous combat training means automatic weapons do 20% more damage.',
        },
        {   
            "name": "gun_nut",
            "item_image": 'img/perks/Gun_Nut.png',
            "description": 'You gain access to base level and Rank 1 gun mods.',
        },
        {   
            "name": "rifleman",
            "item_image": 'img/perks/Rifleman.png',
            "description": 'Keep your distance long and your kill-count high. Attacks with non-automatic rifles do 20% more damage.',
        },
        {   
            "name": "science",
            "item_image": 'img/perks/Science!.png',
            "description": 'Take full advantage of advanced technology with access to base level and Rank 1 high-tech mods.',
        },
        {   
            "name": "toughness",
            "item_image": 'img/perks/Toughness.png',
            "description": 'If nothing else, you can take a beating! Instantly gain +10 Damage Resistance.',
        },
        ];

    $('.item-list a').on('click', function(e){
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $('.item-list a').on('mouseenter', function(e){
        var current_item = $(e.currentTarget).data("name");
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
                container.find('.item-image').html(`<img src="${inventory[item].item_image}" />`);
            }
        }
    });

    $('.item-list a').on('mouseleave', function(e){
        var current_item = $('.item-list a.active').data("name");
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
                container.find('.item-image').html(`<img src="${inventory[item].item_image}" />`);
            }
        }
    });
});

function showDate(){
    var date = new Date();
    var month = date.getMonth();
    var number = date.getDate();
    var day = date.getDay();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    document.getElementById("month").innerText = months[month];
    document.getElementById("day_number").innerText = number;
    document.getElementById("day_text").innerText = days[day];
    
}

if(document.getElementById("month")){

    showDate();
};

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("live-clock").innerText = time;
    document.getElementById("live-clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

if(document.getElementById("live-clock")){

    showTime();
};

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('google'), {
        center: {lat: 41.85, lng: -87.65},
        zoom: 10
    });
}
