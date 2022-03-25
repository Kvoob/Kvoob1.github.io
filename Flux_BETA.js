ui.add_checkbox("Enable ConFilter", "filter")
var not_spam = { confilter: 0 };
const consolefilter = function(){
   if(vars.get_bool("js.filter")) {
       if(not_spam.confilter != 1) {
           convars.set_float("con_filter_enable", 1)
           convars.set_string("con_filter_text", "IrWL5106TZZKNFPz4P4Gl3pSN?J370f5hi373ZjPg%VOVh6lN")
         not_spam.confilter = 1;
   }
   }else {
        if (not_spam.confilter != 0){
        convars.set_float("con_filter_enable", 0)
           convars.set_string("con_filter_text", " ")
             not_spam.confilter = 0;
        }
   }
}
register_callback("render", consolefilter)


ui.add_checkbox('trashtalk', 'trashtalk')

const flux = {
    trashtalk: function() {
        var trashtalk = vars.get_int("js.trashtalk"); // CHECKBOX значение


        const normal_killsays = ["а вы че клины?", "ты че там отлетел то",
    "нищий улетел", "хуй со рта выплюнь и вытри слезы", "сразу видно хуесос лежит",
    "у мамки что кфг иссуе была шо тебя родила", "а ты и в жизни ньюкамыч????", "сука не позорься и ливни лол",
    "юид полиция подьехала открывай дверь уебыч", "усадил на бутылку хуесоса",
    "але ты там из хрущевки выйди а потом вырыгивай блять", "как там с мамкой комнату разделять АХАХАХХАХА как ты на акк накопил блять",
    "на мыло и веревку то деньги есть нищ????", "а ну получается ты уже гей","Упал пидорас", "Ты че умер", "Ебать тапок", "ну ты легкий",
         "Твоюж мать, я случайно",  "Flux❥ best js",
        "Клоп упал", "Особи которые дошли до твоего принципа, уже мертвы, ты последния", "Запомни, что в тело что в голову, ты будешь мертв", "На этот раз я тебя переиграл", "Если человек разговаривает на английском, не значит что он не знает русского", "На удивление, свиньи живут дольше тебя, учитывая того что ты играешь", "Если я тебя убил, не значит что я плохой человек", "Твоя смерть не изменит этот мир", "Ты как там?", "Вижу у тебя проблемы, могу позвать доктора", "Что тебе не нравится в себе? почему не увернулся то?", "Я бы мог не стрелять, но судьба решила иначе", "Прости если было больно", "Знаешь, когда напарник говорит, что ты плохо играешь, видимо это тот случай", "Надейся что я не записывал все это на видео", "Люди умнее тебя, давно не играют в игры"
        ]; // ФРАЗЫ ПРИ УБИЙСТВЕ В ТЕЛО

        const hs_killsays = ["ого ахуеть там кишки наматало нахуй", "1", "давай заглатывай", "у твоей матери моя сперма вместо слёз",
    "я метадон ШВШ кинг",
    "я твоей матери в очко кончал, уёбище",
    "ну что ты плачешь",
    "freeqn.net/refund.php", 
    "тебе права голоса не давали",
    "на завод иди",
    "ебать тебя унесло", "рефунди пожалуйста",
    "на бутылку русак",
    "a вы (you) сэр собственно кто (who)?",
    "бля пиздос может рефнешь???",
    "как там жизнь с рупастой??????",
    "АЛЕ НАХУЙ ТЫ КТО Я МИТАДОН ???",
    "бля я рядом только прошел а ты уже упал АУУ НИЩ С ТОБОЙ ВСЕ ХОРОШО??????????))))))",
    "девачка, ты упала",
    "ну я вижу что я тебя выебал", "КИШКИ ТВОИ НАХУЙ НАМАТАЛ ПРОВЕРЯЙ",
    "ЕБАТЬ ТАМ ПИДОРАСА ПО ДОРОГЕ РАСПОТРАШИЛО АХАХАХАХХАА", "H$",  "На этот раз снаряд попал тебе прям в бошку", "Я тебе ничего не гарантирую", "Flux❥", "Живем один раз, и умираем один раз", "Ты не мог сыграть получше?"
        ]; // ФРАЗЫ ПРИ УБИЙСТВЕ В ГОЛОВУ

        if(trashtalk){
            var attacker = current_event.get_int("attacker");
            var enemy = current_event.get_int("userid");
            var attacker_index = entity.get_player_for_user_id(attacker);
            var enemy_index = entity.get_player_for_user_id(enemy);
            var me = entity.get_local_player();
            var enemies = entity.get_enemies();


            var attacker_name = entity.get_player_info(attacker_index)['name']; // ТВОЙ НИК НЕЙМ (ЕСЛИ НАДО)
            var enemy_name = entity.get_player_info(enemy_index)['name']; // ЕГО НИКНЕЙМ ЕСЛИ НАДО ЕГО ПОПУСТИТЬ

            if (attacker_index == me) {
                for(i in enemies){
                    if(current_event.get_int("headshot") == 1) {
                        killsay = hs_killsays[math.random_int(0, hs_killsays.length)] // ЕСЛИ В ГОЛОВУ
                    } else {
                        killsay = normal_killsays[math.random_int(0, normal_killsays.length)] // ЕСЛИ В ТЕЛО
                    }
                    cheat.execute_command("say " + enemy_name + ", " + killsay) // ОТПРАВКА СООБЩЕНИЯ
                }
            }
        }
    }
}

register_callback("player_death", flux.trashtalk);

ui.add_checkbox('watermarknew', 'watermarknew')

function HSVtoRGB(h, s, v)  //made onetap script will know this function
    {
        var r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6)
        {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
    }

const fluxe = {
    watermark: function() {
        var screen_size = render.get_screen_size();
        var watermark1 = vars.get_int("js.watermarknew")
        if(watermark1){
            var x = 1680;
            var y = 30;
           var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }

            var time = (new Date()).toTimeString().substring(0, 8);
            var username = "Kvoob";
            var tick = global_vars.tick_count();
            var maxClients = global_vars.max_clients();

    
            render.rect([x - 9,y - 23], [225, 20], watermark_color, 4);
            //render.rect([x - 9,y - 23], [2, 19], [0, 255, 0, 255], 4);
            //render.rect([x + 216,y - 23], [2, 19], [0, 255, 0, 255], 4);       
            render.filled_rect([x - 9,y - 23], [225, 19], [17, 17, 17, 50], 4);
            render.text([x + 100.5, y - 20.5], [255, 255, 255, 255], 2 << 0, 5, "Flux Beta | " + username + " | " + time + " | "+ "tick: " + maxClients ); 
        }
    }
}
register_callback("render", fluxe.watermark);

ui.add_checkbox('watermark', 'watermark');
ui.add_checkbox('indicators', 'indicators')
ui.add_checkbox('Clantag', 'Clantag');

const fluxy = {
    watermark: function() {
        var watermark1 = vars.get_int("js.watermark")
        if(watermark1){
            var screen_size = render.get_screen_size();
            var y = 30;
    var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }
            var time = (new Date()).toTimeString().substring(0, 8);
            var username = "Kvoob";
            var tick = global_vars.tick_count();
            var maxClients = global_vars.max_clients();

    
            render.filled_rect([x - 9,y - 23], [225, 2], watermark_color, 0);
            render.filled_rect([x - 9,y - 23], [2, 19], watermark_color, 0);
            render.filled_rect([x + 216,y - 23], [2, 19], watermark_color, 0);       
            render.filled_rect([x - 9,y - 23], [225, 19], [17, 17, 17, 50], 0);
            render.text([x + 100.5, y - 20.5], [255, 255, 255, 255], 2 << 0, 5, " Flux Beta | " + username + " | " + time + " | "+ "tick: " + maxClients ); 
        }
    },
    indicators: function() {
        var ind = vars.get_int("js.indicators")
        if(ind){
              var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }
            var on = watermark_color;
            var off = [128, 128, 128, 255];

            var size = render.get_screen_size();
           
var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }


            var inv = [(size[0] / 2) - 10, (size[1] / 2) + 25]
            var inv2 = [(size[0] / 2) - 1, (size[1] / 2) + 25]
            var baim = [(size[0] / 2) - 10, (size[1] / 2) + 30]
            var dt = [(size[0] / 2) - 5, (size[1] / 2) + 40]
            var fs = [(size[0] / 2) - 5, (size[1] / 2) + 50]
            var od = [(size[0] / 2) + 10, (size[1] / 2) + 40]
            var hs = [(size[0] / 2) - 20, (size[1] / 2) + 40]
            var color = [0, 0, 0, 255];
            var coordinates = [938, 580];
            var size = [55, 12];
           render.filled_rect(coordinates, size, color, 4);
           var color = watermark_color;
           var coordinates = [937, 580];
           var size = [57.5, 13];
           render.rect(coordinates, size, color, 4);

   if (vars.is_bind_active('inverter')) {
                render.text(inv2, off, 1, 2, "ux" );
                render.text(inv, on, 1, 2, "Fl" );
            } else {
                render.text(inv2, on, 1, 2, "ux" );
                render.text(inv, off, 1, 2, "Fl" );
            }
            if (vars.is_bind_active('doubletap')) {
                render.text(dt, on, 1, 1, "DT");
            } else {
                render.text(dt, off, 1, 1, "DT");
            }

            if (vars.is_bind_active('override_damage')) {
                render.text(od, on, 1, 1, "DMG");
            } else {
                render.text(od, off, 1, 1, "DMG");
            }
            if (vars.is_bind_active('hide_shots')) {
                render.text(hs, on, 1, 1, "HS");
            } else {
                render.text(hs, off, 1, 1, "HS");
            }
        }
    }
}

register_callback("render", fluxy.watermark);
register_callback("render", fluxy.indicators);


var screen_size = [1920, 1080];
ui.add_checkbox("KeyBinds", "KeyBinds", 0, screen_size[0]);
ui.add_checkbox("KeyBindsnew", "KeyBindsnew", 0, screen_size[0]);
ui.add_slider("KeyBinds X", "keybindx", 0, screen_size[0]);
ui.add_slider("KeyBinds Y", "keybindy", 0, screen_size[1]);
vars.set_int("js.keybindx", 135);
vars.set_int("js.keybindy", 500);
var keybinds_list = [
    ["doubletap", "Double Tap"],
    ["override_damage", "Min. Damage"],
    ["hide_shots", "Hide Shots"],
    ["force_safepoints", "Safe Points"],
    ["body_aim", "Body Aim"],
    ["inverter", "Inverter"],
    ["fake_duck", "Fake Duck"],
    ["slow_walk", "Slow Walk"],
    ["peek_assist", "Auto Peek"],
    ["manual_left", "Manual Left"],
    ["manual_right", "Manual Right"],
    ["manual_back", "Manual Back"],
    ["manual_forward", "Manual Forward"],
]
function keybinskvoob() {
    if (vars.get_bool("js.KeyBinds")) {
    var binds = [];

    var x = vars.get_int("js.keybindx");
    var y = vars.get_int("js.keybindy");
    for (var n in keybinds_list) {
        if (vars.is_bind_active(keybinds_list[n][0])) binds.push(n);
    }
}
var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }
    render.filled_rect([x - 9,y - 23], [148, 2], watermark_color, 0);
    render.filled_rect([x - 9,y - 23], [2, 19], watermark_color, 0);

    render.filled_rect([x + 139.5,y - 23], [2, 19], watermark_color, 0);       
    render.filled_rect([x - 9,y - 23], [148, 19], [17, 17, 17, 50], 0);
    render.text([x + 46, y - 13], [255, 255, 255, 255], 12, 0, "keybinds");
    for (var i in binds) {
        render.text([x - 3, y + 10 + 15 * i - 4], [255, 255, 255, 255], 12, 0, keybinds_list[binds[i]][1]);
        render.text([x + 115, y + 10 + 15 * i - 4], [255, 255, 255, 255], 12, 0, "[on]");
    }
}
register_callback('render', keybinskvoob);
var screen_size = [1920, 1080];
//ui.add_slider("KeyBinds X", "keybindx", 0, screen_size[0]);
//ui.add_slider("KeyBinds Y", "keybindy", 0, screen_size[1]);
vars.set_int("js.keybindx", 135);
vars.set_int("js.keybindy", 500);
var keybinds_list = [
    ["doubletap", "Double Tap"],
    ["override_damage", "Min. Damage"],
    ["hide_shots", "Hide Shots"],
    ["force_safepoints", "Safe Points"],
    ["body_aim", "Body Aim"],
    ["inverter", "Inverter"],
    ["fake_duck", "Fake Duck"],
    ["slow_walk", "Slow Walk"],
    ["peek_assist", "Auto Peek"],
    ["manual_left", "Manual Left"],
    ["manual_right", "Manual Right"],
    ["manual_back", "Manual Back"],
    ["manual_forward", "Manual Forward"],
]
function keybinsnew() {
    if (vars.get_bool("js.KeyBindsnew")) {
    var binds = [];
    var x = vars.get_int("js.keybindx");
    var y = vars.get_int("js.keybindy");


    for (var n in keybinds_list) {
        if (vars.is_bind_active(keybinds_list[n][0])) binds.push(n);
    }
}
var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }
    render.rect([x - 9,y - 23], [148, 20], watermark_color, 4);
    //render.rect([x - 9,y - 23], [2, 19], [0, 255, 0, 255], 0);

    //render.rect([x + 139.5,y - 23], [2, 19], [0, 255, 0, 255], 4);       
    render.filled_rect([x - 9,y - 23], [148, 19], [17, 17, 17, 50], 4);
    render.text([x + 46, y - 13], [255, 255, 255, 255], 12, 0, "keybinds");
    for (var i in binds) {
        render.text([x - 3, y + 10 + 15 * i - 4], [255, 255, 255, 255], 12, 0, keybinds_list[binds[i]][1]);
        render.text([x + 115, y + 10 + 15 * i - 4], [255, 255, 255, 255], 12, 0, "[on]");
    }
}
register_callback('render', keybinsnew);

                                                        
var lasttime = 0;

function tag() {
   var clantag = vars.get_int("js.Clantag")
   if(clantag){
   var time = parseInt((global_vars.curtime() * 3))

   if (time != lasttime) {

   switch ((time) % 16)
   {
    case 1: { cheat.set_clantag("  "); break; }
    case 2: { cheat.set_clantag(" - "); break; }
    case 3: { cheat.set_clantag(" F- "); break; }
    case 4: { cheat.set_clantag(" Fl- "); break; }
    case 5: { cheat.set_clantag(" Flu- "); break; }
    case 6: { cheat.set_clantag(" Flux- "); break; }
    case 7: { cheat.set_clantag(" Flux❥ "); break; }
    case 8: { cheat.set_clantag(" Flux❥ "); break; }
    case 9: { cheat.set_clantag(" Flux❥ "); break; }
    case 10: { cheat.set_clantag(" Flux❥ "); break; }
    case 11: { cheat.set_clantag(" Flux- "); break; }
    case 12: { cheat.set_clantag(" Flu- "); break; }
    case 13: { cheat.set_clantag(" Fl- "); break; }
    case 14: { cheat.set_clantag(" F- "); break; }
    case 15: { cheat.set_clantag(" - "); break; }
    case 16: { cheat.set_clantag("    "); break; }
   
   }
   lasttime = time;
}

}
}
register_callback("createmove", tag)

// function indicator222()
// {
//     var color = [255, 255, 255, 255];
//     var DesyncDegry = cheat.get_desync_amount()/1.5; //Делю на 1.7 чтобы просто была поменьше
//     var size = render.get_screen_size();
//     var sceen_x = size[0];
//     var sceen_y = size[1];
//     var senterScreenX = sceen_x/2;
//     var senterScreenY = sceen_y/2 + 7; // 7 это чтобы было под прицелом
  
    

//         render.line([senterScreenX, senterScreenY], [senterScreenX+DesyncDegry, senterScreenY], color, 1); //main
//         render.line([senterScreenX-0.5, senterScreenY+0.5], [senterScreenX+DesyncDegry, senterScreenY], color, 1);
//         render.line([senterScreenX-0.5, senterScreenY-0.5], [senterScreenX+DesyncDegry, senterScreenY], color, 1);

//         render.line([senterScreenX, senterScreenY], [senterScreenX-DesyncDegry, senterScreenY], color, 1); //main
//         render.line([senterScreenX-0.5, senterScreenY-0.5], [senterScreenX-DesyncDegry, senterScreenY], color, 1);
//         render.line([senterScreenX-0.5, senterScreenY+0.5], [senterScreenX-DesyncDegry, senterScreenY], color, 1);

// }

// register_callback('render', indicator222);

cheat.execute_command("clear");
cheat.log( "███████╗██╗     ██╗   ██╗██╗  ██╗",[102, 140, 255, 255]);
cheat.log( "██╔════╝██║     ██║   ██║╚██╗██╔╝",[102, 140, 255, 255]);
cheat.log( "█████╗  ██║     ██║   ██║ ╚███╔╝ ",[102, 140, 255, 255]);
cheat.log( "██╔══╝  ██║     ██║   ██║ ██╔██╗ ",[102, 140, 255, 255]);
cheat.log( "██║     ███████╗╚██████╔╝██╔╝ ██╗",[102, 140, 255, 255]);
cheat.log( "╚═╝     ╚══════╝ ╚═════╝ ╚═╝  ╚═╝",[102, 140, 255, 255]);
cheat.log("Flux loaded!");
cheat.log("Flux (Version: Beta)");
cheat.log("PeJlmeIIIka");



var logs = [];
var logs_time = [];
var logs_alpha = [];


function removeLog() {
    if (logs.length > 6) {
        logs.shift();
        logs_time.shift();
    }

    if (logs_time[0] + 6.5 < global_vars.curtime()) {
        logs_alpha[0] -= global_vars.frametime() * 600;
        if (logs_alpha[0] < 0) {
            logs.shift();
            logs_time.shift();
            logs_alpha.shift();
        }
    }
}

function logsAdd(text) {
    cheat.print_to_console("[Flux] ", [158, 176, 236]);
    cheat.print_to_console(text + "\n", [255, 255, 255]);




    logs.push(text);
    logs_time.push(global_vars.curtime());
    logs_alpha.push(255);
}

function renderLog() {
    if (!entity.get_local_player()) return;

    for (i = 0; i < logs.length; i++) {
        render.text([900, 940 + 13 * i], [230, 230, 230, logs_alpha[i]], 12, 0, logs[i]);
    }
}

register_callback('player_hurt', function() {

    var userid = entity.get_player_for_user_id(current_event.get_int("userid"))
    var attacker = entity.get_player_for_user_id(current_event.get_int("attacker"))

    var userid_info = entity.get_player_info(userid);
    var attacker_info = entity.get_player_info(attacker);

    var hitgroup = current_event.get_int("hitgroup");

    switch (hitgroup)
    {
    case 1:
        hitgroup = "head";
        break;
    case 2:
        hitgroup = "chest";
        break;
    case 3:
        hitgroup = "stomach";
        break;
    case 4:
        hitgroup = "left arm";
        break;
    case 5:
        hitgroup = "right arm";
        break;
    case 6:
        hitgroup = "right leg";
        break;
    case 7:
        hitgroup = "left leg";
        break;
    default:
        hitgroup = "generic";
    }

    if (attacker == entity.get_local_player() && userid != entity.get_local_player())
        logsAdd("Hit entity: " + userid_info.name + ", hitgroup: " + hitgroup + ", damage: " + current_event.get_int("dmg_health"));

    else if (userid == entity.get_local_player() && attacker != entity.get_local_player())
        logsAdd("Hurt from entity: " + attacker_info.name + ", hitgroup: " + hitgroup + ", damage: " + current_event.get_int("dmg_health"));
});

register_callback('ragebot_miss', function() {
    var userid = entity.get_player_for_user_id(current_event.get_int('player_index'));
    var userid_info = entity.get_player_info(userid);

    var hitgroup = current_event.get_int('hitbox');

    switch (hitgroup)
    {
    case 1:
        hitgroup = "head";
        break;
    case 2:
        hitgroup = "chest";
        break;
    case 3:
        hitgroup = "stomach";
        break;
    case 4:
        hitgroup = "left arm";
        break;
    case 5:
        hitgroup = "right arm";
        break;
    case 6:
        hitgroup = "right leg";
        break;
    case 7:
        hitgroup = "left leg";
        break;
    default:
        hitgroup = "generic";
    }

    if (userid != entity.get_local_player())
        logsAdd("Miss to: " + userid_info.name + ", hitbox: " + hitgroup + ", to: " + ((current_event.get_string('resolver_mode') == "") ? "spread" : "resolver"));
});

register_callback("render", function() {
    removeLog();
    renderLog();
});

function indicatora(){
var watermark1 = vars.get_int("js.watermarknew")
        if(watermark1){

var frametime = 1/global_vars.frametime();
var fps = Math.floor(frametime).toString();

var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }

var color = [255, 255, 255, 255];
var color2 = watermark_color;
var color1 = [0, 0, 0, 30];
var coordinates = [1810, 35];
var coordinates1 = [1839, 45.5]
var coordinates2 = [1818, 45.5]
var size = [83, 20];




render.filled_rect(coordinates, size, color1, 4);
render.rect(coordinates, size, color2, 4);
render.text(coordinates1, color, 12, 0, "/ 400 Fps");
render.text(coordinates2, color, 12, 0, fps);

}
}
register_callback('render', indicatora);

function indicatorr(){
var watermark1 = vars.get_int("js.watermarknew")
        if(watermark1){

var on = [255, 255, 255, 255];
var off = [255, 255, 255, 0];
var offf = [255, 255, 255, 255];
var size = render.get_screen_size();
var inv = [(size[0] / 2) - 10, (size[1] / 2) + 25]
var inv2 = [(size[0] / 2) - 1, (size[1] / 2) + 25]
var dt = [(size[0] / 2) + 770, (size[1] / 2) - 500.5]
var hs = [(size[0] / 2) + 770, (size[1] / 2) - 500.5]
var frametime = 1/global_vars.frametime();
var fps = Math.floor(frametime).toString();

var tickInterval = global_vars.interval_per_tick();;

var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }

var color = [255, 255, 255, 255];
var color2 = watermark_color;
var color1 = [0, 0, 0, 30];
var coordinates = [1700, 35];
var coordinates1 = [1710, 45.5]
var coordinates2 = [1800, 59.5]
var size = [100, 20];




render.filled_rect(coordinates, size, color1, 4);
render.rect(coordinates, size, color2, 4);
render.text(coordinates1, color, 12, 0, "FL:");
 if (vars.is_bind_active('doubletap')) {
  render.text(dt, on, 1, 1, "1   |  SHIFTING");
   } else {
                render.text(dt, offf, 1, 1, "14  ");
            }

if (vars.is_bind_active('hide_shots')) {
                render.text(hs, on, 1, 1, "      | ONSHOT");
            } else {
                render.text(hs, offf, 1, 1, "");
            }



  }
}

register_callback('render', indicatorr);

function indicatoraa(){
var watermark1 = vars.get_int("js.watermark")
        if(watermark1){

var frametime = 1/global_vars.frametime();
var fps = Math.floor(frametime).toString();

var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }

var color = [255, 255, 255, 255];
var color2 = watermark_color;
var color1 = [0, 0, 0, 15];
var coordinates = [1809, 35];
var coordinates1 = [1839, 45.5]
var coordinates3 = [1890, 35]
var coordinates2 = [1817, 45.5]
var size1 = [83, 2];
var size = [83, 20];
var size2 = [2, 20];


render.filled_rect(coordinates, size, color1, 1);
render.filled_rect(coordinates, size2, color2, 1);
render.filled_rect(coordinates3, size2, color2, 1);
render.filled_rect(coordinates, size1, color2, 4);
render.filled_rect(coordinates, size, color1, 1);
render.text(coordinates1, color, 12, 0, "/ 400 Fps");
render.text(coordinates2, color, 12, 0, fps);


}
}
register_callback('render', indicatoraa);

function indicatorrr(){
var watermark1 = vars.get_int("js.watermark")
        if(watermark1){

var on = [255, 255, 255, 255];
var off = [255, 255, 255, 0];
var offf = [255, 255, 255, 255];
var size = render.get_screen_size();
var inv = [(size[0] / 2) - 10, (size[1] / 2) + 25]
var inv2 = [(size[0] / 2) - 1, (size[1] / 2) + 25]
var dt = [(size[0] / 2) + 770, (size[1] / 2) - 500.5]
var hs = [(size[0] / 2) + 770, (size[1] / 2) - 500.5]
var frametime = 1/global_vars.frametime();
var fps = Math.floor(frametime).toString();

var tickInterval = global_vars.interval_per_tick();;
var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }

var color = [255, 255, 255, 255];
var color2 = watermark_color;
var color1 = [0, 0, 0, 15];
var coordinates = [1700, 35];
var coordinates1 = [1710, 45.5]
var coordinates3 = [1795, 35]
var coordinates2 = [1818, 35]
var size1 = [95, 2];
var size = [95, 20];
var size2 = [2, 20];


render.filled_rect(coordinates, size, color1, 1);
render.filled_rect(coordinates, size2, color2, 1);
render.filled_rect(coordinates3, size2, color2, 1);
render.filled_rect(coordinates, size1, color2, 4);
render.filled_rect(coordinates, size, color1, 1);
render.text(coordinates1, color, 12, 0, "FL:");
 if (vars.is_bind_active('doubletap')) {
  render.text(dt, on, 1, 1, "1   |  SHIFTING");
   } else {
                render.text(dt, offf, 1, 1, "14  ");
            }

if (vars.is_bind_active('hide_shots')) {
                render.text(hs, on, 1, 1, "      | ONSHOT");
            } else {
                render.text(hs, offf, 1, 1, "");
            }



  }
}

register_callback('render', indicatorrr);



function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

ui.add_checkbox('Custom watermark color', 'c_color')
ui.add_slider ("Red", "red", 0,255)       //If it weren't for the lack of support for getting colors, I wouldn't be doing these redundant sliders like a retard here.
ui.add_slider ("Green", "green", 0,255)
ui.add_slider ("Blue", "blue", 0,255)
ui.add_checkbox('Rainbow color', 'rainbow')

// var ground_tick = 0;
// var state = false;

// register_callback('enemy_hurt', function () {
//     utils.play_sound('D:\\never.wav');
// });


// register_callback('createmove', function () {
//     state = !state;
   
//     if (global_vars.tick_count() % 5 === 0) {
//         vars.set_bool('misc.slidewalk', state);
//     }
// });

// function attarget_in_air() {
//     var in_air = entity.get_flags(entity.get_local_player()) & 1;
//     if (in_air)
//         ground_tick = 0;
//     else
//         ground_tick++;
//     vars.set_bool("antiaim.attarget", !in_air && ground_tick > 0);
// }

// cheat.log("welcome and stay weave");

// register_callback("createmove", attarget_in_air);

// function draw(){
//     var origin = entity.get_origin(entity.get_local_player())
//     var wts = render.world_to_screen(origin)
   
//     render.picture("C:/Users/anton/AppData/Roaming/weave/scripts/pet2.png", [(wts[0] - 150), wts[1] - 50], [90, 90], 255)
// }

// register_callback('render', draw);


function fake(){
    var watermark1 = vars.get_int("js.watermarknew")
        if(watermark1){
    var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }
var desync_amount = Math.floor(cheat.get_desync_amount()) < 0 ? Math.floor(-cheat.get_desync_amount()) : cheat.get_desync_amount()

var color = [255, 255, 255, 255];
var color2 = watermark_color;
var color1 = [0, 0, 0, 30];
var coordinates = [1625, 35];
var coordinates1 = [1630, 45.5]
var coordinates2 = [1665, 45.5]
var size = [65, 20];




render.filled_rect(coordinates, size, color1, 4);
render.rect(coordinates, size, color2, 4);
render.text(coordinates1, color, 12, 0,  "Fake:");

render.text(coordinates2, color, 12, 0, "" + Math.floor(desync_amount) );



}
}
register_callback('render', fake);

function fake1(){
    var watermark1 = vars.get_int("js.watermark")
        if(watermark1){
    var check_color = vars.get_bool("js.c_color") //It took me ten minutes to find how to get the js var
    if(check_color == true){
        var c_r = vars.get_int("js.red")
        var c_g = vars.get_int("js.green")
        var c_b = vars.get_int("js.blue")
        var watermark_color = [c_b,c_g,c_r,255]
    }else{
        var watermark_color = [255,255,0,255]
    }

    var check_rgb = vars.get_bool("js.rainbow")
    if(check_rgb == true){
    var colors_rbg = HSVtoRGB(global_vars.realtime() * 0.3,1,1);  //yep. it's working
    var watermark_color = [colors_rbg.b,colors_rbg.g,colors_rbg.r,255]
    }
var desync_amount = Math.floor(cheat.get_desync_amount()) < 0 ? Math.floor(-cheat.get_desync_amount()) : cheat.get_desync_amount()

var color = [255, 255, 255, 255];
var color2 = watermark_color;
var color1 = [0, 0, 0, 30];
var coordinates = [1625, 35];
var coordinates1 = [1630, 45.5]
var coordinates3 = [1690, 35]
var coordinates2 = [1665, 45.5]
var size1 = [65, 2];
var size = [65, 20];;
var size2 = [2, 20];


render.filled_rect(coordinates, size, color1, 1);
render.filled_rect(coordinates, size2, color2, 1);
render.filled_rect(coordinates3, size2, color2, 1);
render.filled_rect(coordinates, size1, color2, 4);
render.filled_rect(coordinates, size, color1, 1);
render.text(coordinates1, color, 12, 0,  "Fake:");

render.text(coordinates2, color, 12, 0, "" + Math.floor(desync_amount) );



}
}
register_callback('render', fake1);

// function draw(){
//     var origin = entity.get_origin(entity.get_local_player())
//     var wts = render.world_to_screen(origin)
   
//     render.picture("C:/Users/anton/AppData/Roaming/weave/scripts/god.jpg", [(wts[0] - 150), wts[1] - 50], [90, 90], 255)
// }

// register_callback('render', draw);